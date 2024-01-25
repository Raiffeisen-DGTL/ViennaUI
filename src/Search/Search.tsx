/* eslint-disable react-hooks/rules-of-hooks */
import React, {
    useCallback,
    useState,
    useRef,
    RefAttributes,
    ForwardRefExoticComponent,
    createRef,
    ReactNode,
    FormEvent,
    Ref,
    forwardRef,
    RefObject,
} from 'react';
import { FactoryOpts } from 'imask';
import { Box } from './Search.styles';
import { Input, InputEvent } from '../Input';
import { DropList } from '../DropList';
import { Item } from '../DropList/Item';
import { InputMask, InputMaskProps } from '../InputMask';

interface Data {
    props: any;
    suggest: string;
    value: any;
}
export type ChildrenFunc = (data: Data) => ReactNode;

export type SearchEvent<T = FormEvent<HTMLInputElement>> = (
    event: T,
    data?: { name?: string; value?: string; index: number }
) => void;

export type SearchSelectEvent = (event: FormEvent<HTMLInputElement>, data?: { name?: string; value: any }) => void;

export interface SearchProps extends Partial<Omit<InputMaskProps, 'onChange' | 'onKeyDown' | 'children'>> {
    /** Сcылка на нативный элемент input, доступна после отрисовки */
    ref?: Ref<HTMLInputElement>;

    /** Размеры */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl';

    /** Дизайн */
    design?: 'outline' | 'material';

    /** Значанеие отображаемое перед компонентом  */
    prefix?: ReactNode;

    /** Значение отображаемое после компонента  */
    postfix?: ReactNode;

    /** ID компонента */
    id?: string;
    /** Имя компонента */
    name?: string;

    /** Список элементов в выпадающем списке: массив */
    suggests?: any[];

    /** Выбранный элемент (должен совпадать по интерфейсу с объектами массива) */
    value?: any;

    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;
    /** Максимальная ширина выпадающего списка в пикселях */
    maxListWidth?: number;

    /** Компонент неактивен если true */
    disabled?: boolean;

    /** Компонент отображается как ошибочный если true */
    invalid?: boolean;

    /** Элементы выпадающего списка в случае если не используется свойство suggests  */
    children?: ChildrenFunc;

    /** Обработчик события при выборе элемента списка  */
    onSelect?: SearchSelectEvent;

    /** Обработчик события при наборе текста в поле ввода  */
    onChange?: SearchEvent;

    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: InputEvent<React.FocusEvent<HTMLInputElement>>;

    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: InputEvent<React.FocusEvent<HTMLInputElement>>;

    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: SearchEvent<React.KeyboardEvent<HTMLInputElement>>;

    /** Обработчик события при отпускании кнопки клавиатуры, когда компонент в фокусе  */
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;

    /** Обработчик события при нажатии и удержании кнопки клавиатуры с печатемым символом, когда компонент в фокусе  */
    onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;

    /** Обработчик события при прокрутке списка  */
    onScroll?: React.UIEventHandler<HTMLDivElement>;

    /** Показывать строчное дополнение (по умолчанию true)  */
    showInlineSuggest?: boolean;

    /** Текст плейсхолдера */
    placeholder?: string;
    /** Если установлено то выравнивает содержимое списка по ширине компонента (по умолчанию true)  */
    fitOptions?: boolean;

    /** Разрешить перенос подсказки на следующую строку */
    wrapSuggestions?: boolean;

    /** Определяем значение которое надо вывести в компонент как текст выбранного значения */
    valueToString?: (item?: any) => string;
    fixed?: boolean;
    mask?: FactoryOpts['mask'];
}

const handleMouseDownItem = (event) => event.preventDefault();

export const Search = forwardRef<HTMLInputElement, SearchProps>((props, ref) => {
    const {
        id,
        name,
        mask,
        disabled,
        invalid,
        value,
        suggests = [],
        onSelect,
        onChange,
        children,
        design = 'outline',
        onBlur,
        onFocus,
        onKeyDown,
        size = 'l',
        onScroll,
        valueToString = (val): string => val?.toString() || '',
        maxListHeight = 300,
        maxListWidth,
        showInlineSuggest = true,
        wrapSuggestions,
        fitOptions = true,
        fixed,
        ...attrs
    } = props;

    const dropListRef = useRef<HTMLDivElement>(null);
    const optionsRefs = useRef<RefObject<HTMLDivElement>[]>([]);

    if (optionsRefs.current.length !== suggests.length && Array.isArray(suggests)) {
        optionsRefs.current = suggests.map((_, index) => optionsRefs.current[index] || createRef());
    }

    if (children && typeof children !== 'function') {
        console.error('В качестве children может быть только функция'); // eslint-disable-line
        return <></>;
    }

    const inputRef = useCallback((input) => {
        if (input) {
            if (typeof ref === 'function') {
                (ref as any)(input);
            }
            if (ref && typeof ref === 'object') {
                (ref as any).current = input;
            }
            input.style.background = 'transparent';
            input.style.position = 'relative';
        }
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [active, setActive] = useState(false);

    const searchElementRef = useRef<HTMLDivElement>(null);

    const handleBlur = useCallback(
        (e, data): void => {
            setActive(false);
            if (onBlur) {
                onBlur(e, data);
            }
        },
        [onBlur]
    );

    const handleFocus = useCallback(
        (e, data): void => {
            e.stopPropagation();
            setActive(true);
            if (onFocus) {
                onFocus(e, data);
            }
        },
        [onFocus]
    );

    const handleChange = useCallback(
        (e, data): void => {
            if (!disabled && onChange) {
                setActive(true);
                onChange(e, { ...data, index: currentIndex });
            }
        },
        [onChange, disabled, currentIndex]
    );

    const handleSelect = useCallback(
        (e, value): void => {
            if (!disabled && onSelect) {
                if (onChange) {
                    onChange(e, { name, value: valueToString(value) || '', index: currentIndex });
                }

                onSelect(e, { name, value });
                setActive(false);
            }
        },
        [onSelect, name, disabled, currentIndex, value]
    );

    const handleHide = useCallback(() => {
        setActive(false);
    }, []);

    const navigate = useCallback((listEl, index, spin: 'up' | 'down') => {
        const optionEl = optionsRefs.current[index] && optionsRefs.current[index].current;
        if (!listEl || !optionEl) {
            return;
        }

        const { bottom: listElBottom, top: listElTop } = listEl.getBoundingClientRect();
        const { height: optionHeight, top: optionElTop, bottom: optionElBottom } = optionEl.getBoundingClientRect();

        if (optionElBottom > listElBottom || optionElTop < listElTop) {
            if (spin === 'down') {
                if (index === 0) {
                    listEl.scrollTop = 0;
                    return;
                }
                listEl.scrollTop += optionHeight;
            } else if (spin === 'up') {
                if (index + 1 === optionsRefs.current.length) {
                    listEl.scrollTop = optionElTop + optionHeight;
                    return;
                }
                listEl.scrollTop -= optionHeight;
            }
        }
    }, []);

    const handleKeyDown = useCallback(
        (e): void => {
            const lastIndex = suggests.length - 1;

            switch (e.key) {
                case 'ArrowDown': {
                    e.preventDefault();
                    const computed = currentIndex < lastIndex ? currentIndex + 1 : 0;
                    setCurrentIndex(computed);
                    navigate(dropListRef.current, computed, 'down');
                    if (onKeyDown) {
                        onKeyDown(e, { name, value, index: computed });
                    }
                    break;
                }
                case 'ArrowUp': {
                    e.preventDefault();
                    const computed = currentIndex > 0 ? currentIndex - 1 : lastIndex;
                    setCurrentIndex(computed);
                    navigate(dropListRef?.current, computed, 'up');
                    if (onKeyDown) {
                        onKeyDown(e, { name, value, index: computed });
                    }
                    break;
                }
                case 'Enter':
                    e.preventDefault();
                    if (suggests[currentIndex]) {
                        handleSelect(e, suggests[currentIndex]);
                    }
                    if (onKeyDown) {
                        onKeyDown(e, { name, value, index: currentIndex });
                    }
                    break;
                default:
                    if (onKeyDown) {
                        onKeyDown(e, { name, value, index: currentIndex });
                    }
                    break;
            }
        },
        [onKeyDown, name, currentIndex, value, suggests, handleSelect]
    );

    const showList = active && !disabled && Boolean(suggests.length);

    const constructItems = useCallback(() => {
        return suggests.map((suggest, index) => {
            const handleSelectItem = (e) => handleSelect(e, suggest);

            return (
                <Item
                    key={index}
                    ref={optionsRefs.current[index]}
                    value={suggest}
                    selected={index === currentIndex}
                    wrapLine={wrapSuggestions}
                    onMouseDown={handleMouseDownItem}
                    onClick={handleSelectItem}>
                    {children ? children({ props, suggest, value }) : valueToString(suggest) || ''}
                </Item>
            );
        });
    }, [handleSelect, children, currentIndex, props, suggests, value, valueToString, wrapSuggestions]);

    const constructSuggest = useCallback((): string => {
        if (active && showInlineSuggest) {
            let suggest = valueToString(suggests[currentIndex] || '');
            let adaptedValue = valueToString(value) || '';
            if (suggest && adaptedValue && suggest.toLowerCase().includes(adaptedValue.toLowerCase())) {
                    suggest = suggest.replace(new RegExp(`^.{0,${adaptedValue.length}}`, 'gmi'), adaptedValue);
                }
            else {
                suggest = '';
            }
            return suggest;
        }
        return '';
    }, [showInlineSuggest, suggests, active, currentIndex, valueToString, value]);

    const params = {
        id: id && `ds-${id}-input`,
        name,
        size,
        design,
        ref: inputRef,
        value: valueToString(value) || '',
        disabled,
        invalid,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        onFocus: handleFocus,
        ...(showInlineSuggest && { smartPlaceholder: constructSuggest() }),
    };

    const renderInput = () =>
        mask ? (
            <InputMask
                {...params}
                {...attrs}
                // @ts-ignore
                maskOptions={{ mask }}
                onChange={(value) => handleChange(null, { value })}
            />
        ) : (
            <Input {...params} {...attrs} />
        );

    return (
        <Box
            id={id}
            ref={searchElementRef}
            role='combobox'
            aria-invalid={!!invalid}
            aria-disabled={!!disabled}
            aria-autocomplete='list'>
            {renderInput()}
            {showList && (
                <DropList
                    ref={dropListRef}
                    maxHeight={maxListHeight}
                    width={maxListWidth}
                    fitItems={fitOptions}
                    fixed={fixed}
                    followParentWhenScroll={fixed}
                    onHide={handleHide}
                    onScroll={onScroll}>
                    {constructItems()}
                </DropList>
            )}
        </Box>
    );
}) as ForwardRefExoticComponent<SearchProps & RefAttributes<HTMLInputElement>> & { Item: typeof Item };

Search.displayName = 'Search';
Search.Item = Item;
