/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useState, useRef, RefAttributes, ForwardRefExoticComponent } from 'react';
import { Box } from './Search.styles';
import { Input, InputEvent } from '../Input';
import { DropList } from '../DropList';
import { Item, Props as ItemProps } from '../DropList/Item';

interface Data {
    props: any;
    suggest: string;
    value: any;
}
export type ChildrenFunc = (data: Data) => React.ReactNode;

export type SearchEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data?: { name?: string; value?: string; index: number }
) => void;

export type SearchSelectEvent = (
    event: React.FormEvent<HTMLInputElement>,
    data?: { name?: string; value: any }
) => void;

export interface SearchProps {
    [key: string]: any;
    /** Сcылка на нативный элемент input, доступна после отрисовки */
    ref?: React.Ref<HTMLInputElement>;

    /** Размеры */
    size?: 'xs' | 's' | 'l' | 'xl';

    /** Дизайн */
    design?: 'outline' | 'material';

    /** Значанеие отображаемое перед компонентом  */
    prefix?: React.ReactNode;

    /** Значение отображаемое после компонента  */
    postfix?: React.ReactNode;

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
    onFocus?: InputEvent<React.FormEvent<HTMLInputElement>>;

    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: InputEvent<React.FormEvent<HTMLInputElement>>;

    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: SearchEvent<React.KeyboardEventHandler<HTMLInputElement>>;

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
}

const handleMouseDownItem = (event) => event.preventDefault();

export const Search: React.FC<SearchProps> & { Item: React.FC<ItemProps> } = React.forwardRef(
    (props: SearchProps, ref: React.Ref<HTMLInputElement>) => {
        const {
            id,
            name,
            disabled,
            value,
            suggests = [],
            onSelect,
            onChange,
            children,
            design,
            onBlur,
            onFocus,
            onKeyDown,
            size,
            onScroll,
            valueToString = (val): string => val?.toString() || '',
            maxListHeight,
            maxListWidth,
            showInlineSuggest,
            wrapSuggestions,
            fitOptions = true,
            fixed,
            ...attrs
        } = props;

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

        const hadleKeyDown = useCallback(
            (e): void => {
                const lastIndex = suggests.length - 1;

                switch (e.key) {
                    case 'ArrowDown': {
                        e.preventDefault();
                        const computed = currentIndex < lastIndex ? currentIndex + 1 : 0;
                        setCurrentIndex(computed);
                        if (onKeyDown) {
                            onKeyDown(e, { name, value, index: computed });
                        }
                        break;
                    }
                    case 'ArrowUp': {
                        e.preventDefault();
                        const computed = currentIndex > 0 ? currentIndex - 1 : lastIndex;
                        setCurrentIndex(computed);
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
            let suggest = valueToString(suggests[currentIndex] || '');
            if (suggest && value) {
                suggest = suggest.replace(new RegExp(`^.{0,${value.length}}`, 'gmi'), value);
            } // подменяем начало suggest введеным value что бы избежать проблемм с регистром

            return (active && showInlineSuggest && suggest) || ''; // показываем suggest только если поле активно
        }, [showInlineSuggest, suggests, active, currentIndex, valueToString, value]);

        return (
            <Box id={id} ref={searchElementRef}>
                <Input
                    id={id && `ds-${id}-input`}
                    name={name}
                    size={size}
                    design={design}
                    ref={inputRef}
                    value={valueToString(value) || ''}
                    disabled={disabled}
                    smartPlaceholder={constructSuggest()}
                    onChange={handleChange}
                    onKeyDown={hadleKeyDown}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    {...attrs}
                />
                {showList && (
                    <DropList
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
    }
) as ForwardRefExoticComponent<SearchProps & RefAttributes<HTMLInputElement>> & { Item: React.FC<ItemProps> };

Search.displayName = 'Search';
Search.Item = Item;
Search.defaultProps = {
    design: 'outline',
    size: 'l',
    suggests: [],
    maxListHeight: 300,
    showInlineSuggest: true,
};

export default Search;
