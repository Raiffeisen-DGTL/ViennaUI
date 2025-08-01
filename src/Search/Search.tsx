/* eslint-disable react-hooks/rules-of-hooks */
import React, {
    useCallback,
    useState,
    useRef,
    RefAttributes,
    createRef,
    ReactNode,
    Ref,
    forwardRef,
    RefObject,
    useEffect,
    ForwardedRef,
} from 'react';
import { FactoryOpts } from 'imask';
import { CloseCancelXIcon } from 'vienna.icons';
import { Box, ClearIconWrapper } from './Search.styles';
import { Input, InputEvent } from '../Input';
import { DropList } from '../DropList';
import { Item } from '../DropList/Item';
import { InputMask, InputMaskProps } from '../InputMask';
import { AnyObject, OnChangeHandler, Pretty, SelectValueType, SizeType } from '../Utils';
import { StyledOption } from '../Select/Option/Option.styles';
import { InputMaskEventType } from '../InputMask/InputMask';

export interface SearchData {
    name?: string;
    value: string;
}

export interface Data<Value = SelectValueType> {
    props: SearchProps<Value>;
    suggest: Value;
    value: Value | undefined;
}
export type ChildrenFunc<Value = SelectValueType> = (data: Data<Value>) => ReactNode;

export type SearchChangeEventType =
    | React.MouseEvent<HTMLDivElement>
    | React.KeyboardEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLInputElement>
    | InputMaskEventType;
export interface SearchChangeDataType {
    name?: string;
    index: number;
}

export type SearchEvent<
    Value = SelectValueType,
    T = React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>,
> = (value: Value | undefined, event: T, data: SearchChangeDataType) => void;

export type SearchSelectEvent<Value = SelectValueType> = (
    value: Value | undefined,
    event:
        | React.MouseEvent<HTMLDivElement>
        | React.KeyboardEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLInputElement>,
    data: { name?: string }
) => void;

export interface SearchProps<Value = SelectValueType>
    extends Partial<Omit<InputMaskProps, 'onChange' | 'onSelect' | 'onKeyDown' | 'children' | 'value' | 'align'>> {
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
    suggests?: Value[];

    /** Выбранный элемент (должен совпадать по интерфейсу с объектами массива) */
    value?: Value;

    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;
    /** Максимальная ширина выпадающего списка в пикселях */
    maxListWidth?: number;

    /** Компонент неактивен если true */
    disabled?: boolean;

    /** Компонент отображается как ошибочный если true */
    invalid?: boolean;

    /** Включает внутренний поиск */
    enableInnerSearch?: boolean;

    /** Отображать/ Не отображать иконку очистки поля */
    allowClear?: boolean;

    /** Функция поиска */
    search?: (item: string, value: string) => boolean;

    /** Элементы выпадающего списка в случае если не используется свойство suggests  */
    children?: ChildrenFunc<Value>;

    /** Обработчик события при выборе элемента списка  */
    onSelect?: OnChangeHandler<Value, SearchChangeEventType, SearchChangeDataType>;

    /** Обработчик события при наборе текста в поле ввода  */
    onChange?: OnChangeHandler<string, SearchChangeEventType, SearchChangeDataType>;

    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: InputEvent<React.FocusEvent<HTMLInputElement>>;

    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: InputEvent<React.FocusEvent<HTMLInputElement>>;

    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: SearchEvent<Value, React.KeyboardEvent<HTMLInputElement>>;

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
    valueToString?: (item?: Value) => string;
    fixed?: boolean;
    mask?: FactoryOpts['mask'];

    /** Выравнивание по правому/левому краю инпута */
    align?: 'start' | 'end';
    /** Закрываем дропдаун при выборе опции */
    closeAfterSelection?: boolean;
}

const handleMouseDownItem = (event: React.MouseEvent<HTMLDivElement>) => event.preventDefault();

const SearchInternal = <Value,>(props: SearchProps<Value>, ref: ForwardedRef<HTMLInputElement>) => {
    const {
        id,
        name,
        mask,
        maskOptions,
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
        enableInnerSearch = false,
        allowClear = false,
        align = 'start',
        closeAfterSelection = true,
        search = (item, value) => item.toLowerCase().startsWith(value.toLowerCase()),
        ...attrs
    } = props;

    const [showClearIcon, setShowClearIcon] = useState(false);
    const dropListRef = useRef<HTMLDivElement>(null);
    const optionsRefs = useRef<RefObject<HTMLDivElement>[]>([]);
    const adaptedValue = valueToString(value) || '';
    const adaptedSuggest = enableInnerSearch
        ? suggests.filter((item) => search(valueToString(item), adaptedValue))
        : suggests;

    if (optionsRefs.current.length !== adaptedSuggest.length && Array.isArray(adaptedSuggest)) {
        optionsRefs.current = adaptedSuggest.map((_, index) => optionsRefs.current[index] || createRef());
    }

    if (children && typeof children !== 'function') {
        console.error('В качестве children может быть только функция'); // eslint-disable-line
        return <></>;
    }

    useEffect(() => {
        if (value === '') {
            setShowClearIcon(false);
        }
    }, [value]);

    const inputRef = (input: HTMLInputElement | null) => {
        if (input) {
            if (typeof ref === 'function') {
                (ref as (instance: HTMLInputElement | null) => void)(input);
            }
            if (ref && typeof ref === 'object') {
                ref.current = input;
            }

            innerInputRef.current = input;

            input.style.background = 'transparent';
            input.style.position = 'relative';
        }
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [active, setActive] = useState(false);

    const innerInputRef = useRef<HTMLInputElement | null>(null);
    const searchElementRef = useRef<HTMLDivElement>(null);

    const handleBlur = useCallback(
        (e: React.FocusEvent<HTMLInputElement>, data: SearchData): void => {
            setActive(false);
            if (onBlur) {
                onBlur(e, data);
            }
        },
        [onBlur]
    );

    const handleFocus = useCallback(
        (e: React.FocusEvent<HTMLInputElement>, data: SearchData): void => {
            e.stopPropagation();
            setActive(true);
            if (onFocus) {
                onFocus(e, data);
            }
        },
        [onFocus]
    );

    const handleChange = useCallback(
        ({
            value,
            event,
            options,
        }: {
            value: string;
            event: SearchChangeEventType;
            options: { name?: string };
        }): void => {
            if (disabled || !onChange || event === null) return;

            setActive(true);
            onChange({ value, event, options: { ...options, index: currentIndex } });
            if (value) {
                setShowClearIcon(true);
            } else {
                setShowClearIcon(false);
            }
        },
        [onChange, disabled, currentIndex]
    );

    const handleSelect = useCallback(
        (event: SearchChangeEventType, value: Value): void => {
            if (disabled || !onSelect) return;

            const shouldCallOnChange = innerInputRef.current?.value !== valueToString(value);

            shouldCallOnChange &&
                onChange?.({ value: valueToString(value) ?? '', event, options: { name, index: currentIndex } });
            onSelect({ value, event, options: { name, index: currentIndex } });
            setShowClearIcon(true);
            closeAfterSelection && setActive(false);
        },
        [onSelect, name, disabled, currentIndex, value, valueToString, adaptedValue, closeAfterSelection]
    );

    const handleHide = useCallback(() => {
        setActive(false);
    }, []);

    const navigate = useCallback((listEl: HTMLDivElement | null, index: number, spin: 'up' | 'down') => {
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
        (e: React.KeyboardEvent<HTMLInputElement>): void => {
            const lastIndex = adaptedSuggest.length - 1;

            switch (e.key) {
                case 'ArrowDown': {
                    e.preventDefault();
                    const computed = currentIndex < lastIndex ? currentIndex + 1 : 0;
                    setCurrentIndex(computed);
                    navigate(dropListRef.current, computed, 'down');
                    if (onKeyDown) {
                        onKeyDown(value, e, { name, index: computed });
                    }
                    break;
                }
                case 'ArrowUp': {
                    e.preventDefault();
                    const computed = currentIndex > 0 ? currentIndex - 1 : lastIndex;
                    setCurrentIndex(computed);
                    navigate(dropListRef?.current, computed, 'up');
                    if (onKeyDown) {
                        onKeyDown(value, e, { name, index: computed });
                    }
                    break;
                }
                case 'Enter':
                    e.preventDefault();
                    if (adaptedSuggest[currentIndex]) {
                        handleSelect(e, adaptedSuggest[currentIndex]);
                    }
                    if (onKeyDown) {
                        onKeyDown(value, e, { name, index: currentIndex });
                    }
                    break;
                default:
                    if (onKeyDown) {
                        onKeyDown(value, e, { name, index: currentIndex });
                    }
                    break;
            }
        },
        [onKeyDown, name, currentIndex, value, adaptedSuggest, handleSelect]
    );

    const handleClear = useCallback(
        (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLInputElement>): void => {
            if (onChange) {
                onChange({ value: '', event, options: { name, index: currentIndex } });
            }
            setShowClearIcon(false);
        },
        [name, value, onChange, currentIndex]
    );

    const showList = active && !disabled && Boolean(adaptedSuggest.length);

    const constructSuggest = useCallback((): string => {
        if (active && showInlineSuggest) {
            let suggest = valueToString(adaptedSuggest[currentIndex]) || '';
            if (suggest && adaptedValue && suggest.toLowerCase().includes(adaptedValue.toLowerCase())) {
                suggest = suggest.replace(new RegExp(`^.{0,${adaptedValue.length}}`, 'gmi'), adaptedValue);
            } else {
                suggest = '';
            }

            return suggest;
        }

        return '';
    }, [showInlineSuggest, adaptedSuggest, active, currentIndex, valueToString, adaptedValue]);

    const constructItems = useCallback(() => {
        return adaptedSuggest.map((suggest, index) => {
            const handleSelectItem = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLInputElement>) => {
                handleSelect(e, suggest);
            };

            return (
                <StyledOption
                    key={index}
                    ref={optionsRefs.current[index]}
                    value={suggest}
                    hover={index === currentIndex}
                    $hover={index === currentIndex}
                    wrapLine={wrapSuggestions}
                    icon={''}
                    onMouseDown={handleMouseDownItem}
                    onMouseOver={() => setCurrentIndex(index)}
                    onClick={handleSelectItem}>
                    {children ? children({ props, suggest, value }) : valueToString(suggest) || ''}
                </StyledOption>
            );
        });
    }, [handleSelect, children, currentIndex, props, adaptedSuggest, value, valueToString, wrapSuggestions]);

    const params = {
        id: id,
        name,
        size,
        design,
        ref: inputRef,
        value: adaptedValue,
        disabled,
        invalid,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        onBlur: handleBlur,
        onFocus: handleFocus,
        ...(showInlineSuggest && { smartPlaceholder: constructSuggest() }),
    };

    const getSize = (size: SizeType) => {
        switch (size) {
            case 'xs':
                return 's';
            case 'xl':
            case 'xxl':
                return 'l';
            default:
                return 'm';
        }
    };

    const clearIcon = allowClear && showClearIcon && !disabled && (
        <ClearIconWrapper
            tabIndex={0}
            onClick={(e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLInputElement>) => handleClear(e)}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') handleClear(e);
            }}>
            <CloseCancelXIcon size={getSize(size)} />
        </ClearIconWrapper>
    );

    const handleOutsideClick = () => {
        !closeAfterSelection && setActive(false);
    };

    const renderInput = () => {
        const maskOpts = maskOptions || (mask ? { mask } : undefined);

        return maskOpts ? (
            <InputMask
                {...params}
                {...attrs}
                maskOptions={maskOpts as FactoryOpts}
                additionalPostfix={clearIcon}
                onChange={({ value, event, options }) => handleChange({ value: value as string, event, options })}
            />
        ) : (
            <Input additionalPostfix={clearIcon} {...params} {...attrs} />
        );
    };

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
                    float={align}
                    fixed={fixed}
                    followParentWhenScroll={fixed}
                    onOutsideClick={handleOutsideClick}
                    onHide={handleHide}
                    onScroll={onScroll}>
                    {constructItems()}
                </DropList>
            )}
        </Box>
    );
};

export namespace Search {
    export type OnSelect<T = string | AnyObject> = Pretty.Func<Handler<T>>;
    export type OnChange = Pretty.Func<Handler<string>>;
    export type OnFocus = Pretty.Func<InputEvent<React.FocusEvent<HTMLInputElement>>>;
    export type OnBlur = Pretty.Func<InputEvent<React.FocusEvent<HTMLInputElement>>>;
    export type OnKeyDown<T = string | AnyObject> = Pretty.Func<SearchEvent<T, React.KeyboardEvent<HTMLInputElement>>>;

    type Handler<T> = OnChangeHandler<
        T,
        | React.MouseEvent<HTMLDivElement>
        | React.KeyboardEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLInputElement>
        | InputMaskEventType,
        SearchChangeDataType
    >;
}

export const Search = forwardRef(SearchInternal) as unknown as (<Value>(
    props: SearchProps<Value> & RefAttributes<HTMLInputElement>
) => ReturnType<typeof SearchInternal>) & {
    displayName?: string;
    Item: typeof Item;
};

Search.displayName = 'Search';
Search.Item = Item;
