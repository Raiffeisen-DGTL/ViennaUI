/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback, useRef, RefAttributes, ForwardRefExoticComponent, useEffect } from 'react';
import { useCramList } from 'vienna.react-use';
import { Down, Up, Close } from 'vienna.icons';
import { Box, Current, Part, Chip, Extra, Placeholder, StyledInputWrapper } from './Multiselect.styles';
import Option, { OptionProps } from './Option/Option';
import { DropList } from '../DropList';

interface Data {
    props: any;
    currentIndex: number;
    Option: React.FC<OptionProps>;
}

interface Postfix {
    up: React.ReactNode;
    down?: React.ReactNode;
}

type ChildrenFunc = (data: Data) => React.ReactNode;
type CallbackFunc = (options: any[]) => any[] | Promise<any[]>;

export type MultiselectEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data?: { name?: string; value?: string; index?: number }
) => void;

export type MultiselectScrollEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data?: {
        target: HTMLDivElement;
        height: number;
        scrollTop: number;
        scrollHeight: number;
    }
) => void;

export interface MultiselectProps {
    /** Имя компонента */
    name?: string;

    /** ID компонента */
    id?: string;

    /** Значанеие отображаемое перед компонентом  */
    prefix?: React.ReactNode;

    /** Значение отображаемое после компонента (объект)  */
    postfix?: Postfix;

    /** Значение отображаемое, в случае если ничего не выбрано */
    placeholder?: string;

    /** Название стиля для компонента (опционально) */
    className?: string;

    /** Компонент неактивен если true */
    disabled?: boolean;

    /** Порядок получения фокуса (-1 = компонент не учавствует в фокусировке по нажатию TAB)  */
    tabIndex?: number;

    /** Компонент отображается как ошибочный если true */
    invalid?: boolean;

    /** Список элементов в выпадающем списке: массив, callback функция или promise */
    options?: any[] | CallbackFunc;

    /** Массив выбраных элементов (интерфейсы объектов options и values должны совпадать) */
    values?: any[];

    /** Размеры */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

    /** Дизайн */
    design?: 'outline' | 'material';

    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;

    /** Разворачивать список при получениее фокуса */
    openWhenFocus?: boolean;

    /** Обработчик события при прокрутке списка  */
    onScroll?: MultiselectScrollEvent;

    /** Обработчик события при выборе элемента списка  */
    onSelect?: MultiselectEvent<React.FormEvent<HTMLInputElement>>;

    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: MultiselectEvent<React.KeyboardEventHandler<HTMLInputElement>>;

    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: MultiselectEvent<React.FormEvent<HTMLInputElement>>;

    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: MultiselectEvent<React.FormEvent<HTMLInputElement>>;

    /** Элементы выпадающего списка в случае если не используется свойство options  */
    children?: React.ReactNode | ChildrenFunc;

    /** Если установлено то выравнивает содержимое списка по ширине компонента (по умолчанию true)  */
    fitOptions?: boolean;

    /** Определяем значение которое надо вывести в селекте как текст выбранного значения */
    valueToString?: (item: any) => string;

    /** Определяем как сравнивать переданый в value объект и содержимое списка для подсветки выбраного элемента */
    compare?: (item: any) => any;
}

const defaultPostfix = { down: <Down />, up: <Up /> };

const getIcon = (flag, icons, size) => {
    size = size === 'xs' ? 's' : 'm';
    if (!icons) {
        icons = defaultPostfix;
    }
    const icon = flag ? icons?.up : icons?.down ?? icons?.up;
    return React.cloneElement(icon, { size });
};

const getdropListSizeBySelectSize = (size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl') => {
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

export const Multiselect: React.FC<MultiselectProps> & { Option: React.FC<OptionProps> } = React.forwardRef(
    (props: MultiselectProps, ref: React.Ref<HTMLDivElement>) => {
        const {
            prefix,
            postfix,
            placeholder,
            disabled,
            invalid,
            tabIndex,
            options,
            values = [],
            size,
            design,
            openWhenFocus,
            maxListHeight,
            valueToString = (item) => (typeof item === 'string' ? item : item?.value),
            compare = (item) => (typeof item === 'string' ? item : item?.value),
            onScroll,
            onSelect,
            onKeyDown,
            onBlur,
            children,
            fitOptions = true,
            onFocus,
            name,
            ...attrs
        } = props;

        // Проверяем, что нам переданы только options или только children
        // и работаем с чем-то одним
        if (options && children) {
            console.error('Нельзя передавать одновременно options и children'); // eslint-disable-line
            return <></>;
        }

        const multiselectRef = useRef<HTMLDivElement>(null);
        const [containerRef, extraComponentRef, count] = useCramList(values as any);

        // Перенаправляем ref наружу в зависимости от его вида (функция или useRef для react > 16)
        useEffect(() => {
            if (typeof ref === 'function') {
                ref(multiselectRef.current);
            } else if (ref && 'current' in ref) {
                (ref as any).current = multiselectRef.current;
            }
        });

        const [showList, setShowList] = useState(false);
        const [currentIndex, setCurrentIndex] = useState(-1);
        const [active, setActive] = useState(false);

        const [localOptions, setLocalOptions] = useState<any[]>([]);

        // Получаем элементы для отображения в списке когда он открыт
        useEffect(() => {
            if (showList) {
                if (Array.isArray(options)) {
                    // Если initialOptions после всех вычеслений оказались массивом
                    setLocalOptions(options);
                }
                if (typeof options === 'function') {
                    // Если опции были переданы как функция
                    const result = options([]) as any;
                    if (result instanceof Promise) {
                        // Если initialOptions оказались promise - ждем его выполнения
                        result.then(setLocalOptions).catch(() => null);
                    }
                    setLocalOptions(result);
                }
                if (typeof children === 'function') {
                    // Если опции были через children ввиде функции
                    setLocalOptions(children({ props, currentIndex: 0, Option }));
                }
                if (children) {
                    // Если опции были через children как React.ReactNode
                    setLocalOptions(React.Children.toArray(children));
                }
            }
        }, [showList]);

        const handleOptionMouseOver = useCallback(
            (e, option) => {
                setCurrentIndex(localOptions.findIndex((v) => v === option)); // Запоминаем позицию при наведении
            },
            [localOptions]
        );

        const handleFocus = useCallback(
            (event) => {
                if (!disabled) {
                    setActive(true);
                    if (openWhenFocus) {
                        setShowList(true);
                    }
                    if (typeof onFocus === 'function') {
                        onFocus(event);
                    }
                } else {
                    // event.preventDefault() - не работает с div + tabIndex
                    event.target.blur();
                }
            },
            [onFocus, disabled, openWhenFocus]
        );

        const handleBlur = useCallback(
            (event) => {
                setShowList(false);
                setActive(false);
                if (typeof onBlur === 'function') {
                    onBlur(event);
                }
            },
            [onBlur]
        );

        const handleSelect = useCallback(
            (event, value) => {
                if (typeof onSelect === 'function') {
                    if (value && typeof value !== 'string' && value.props) {
                        if (value.props.disabled) {
                            return;
                        }
                        if (value.props.value) {
                            value = value.props.value;
                        } else if (value.props.children && typeof value.props.children === 'string') {
                            value = value.props.children;
                        }
                    }
                    // Пытаемся найти и вернуть значение в зависимости от того как были переданы опции
                    onSelect(event, { name, value });
                }
            },
            [onSelect, name]
        );

        const handleKeyDown = useCallback(
            (event) => {
                const lastIndex = localOptions.length - 1;
                let index = currentIndex;

                switch (event.key) {
                    case 'Escape': {
                        setShowList(false);
                        break;
                    }
                    case 'ArrowDown': {
                        event.preventDefault();
                        if (showList) {
                            index = currentIndex < lastIndex ? currentIndex + 1 : 0;
                            setCurrentIndex(index);
                        }
                        break;
                    }
                    case 'ArrowUp': {
                        event.preventDefault();
                        if (showList) {
                            index = currentIndex > 0 ? currentIndex - 1 : lastIndex;
                            setCurrentIndex(index);
                        } else {
                            setShowList(true);
                        }
                        break;
                    }
                    case 'Enter': {
                        event.preventDefault();
                        if (showList && currentIndex >= 0) {
                            handleSelect(event, localOptions[currentIndex]);
                        } else {
                            setShowList(true);
                        }
                        break;
                    }
                }

                if (typeof onKeyDown === 'function') {
                    onKeyDown(event, { name, index });
                }
            },
            [onKeyDown, currentIndex, handleSelect, localOptions, showList, name]
        );

        const handleScroll = useCallback(
            (event) => {
                const target: HTMLDivElement = event.target;
                if (
                    target.offsetHeight + target.scrollTop > target.scrollHeight - 10 &&
                    typeof options === 'function'
                ) {
                    const result = options(localOptions);
                    if (result instanceof Promise) {
                        result.then(setLocalOptions).catch(() => null);
                    } else {
                        setLocalOptions(result);
                    }
                }
                if (onScroll) {
                    onScroll(event, {
                        target,
                        height: target.offsetHeight,
                        scrollTop: target.scrollTop,
                        scrollHeight: target.scrollHeight,
                    });
                }
            },
            [onScroll, localOptions, options]
        );

        // Подготавливаем для отрисовки элементы списка
        const constructOptions = useCallback(() => {
            // Перебераем переданные опции
            const mapper = (child: any, index: number) => {
                // Если переданный объект унаследован от Option
                if (child?.type?.toString() === Option.toString()) {
                    const optionValue = child.props.value ?? child.props.children;

                    // Сравниваем значение по результату функции преведения
                    // по умолчанию сравниваем по ссылке, иначе по переданной функции
                    // если не указана или сравнение не удалось то пытаемся по функции возврата значения
                    // по умолчанию строка или переданое пользователем.
                    // Универсализация для варианта со статическим пременением,
                    // когда объекты пересоздаются и невозможно сравнение по ссылке.
                    const selected = values?.some((value) => optionValue && compare(optionValue) === compare(value));

                    return React.cloneElement(child, {
                        selected,
                        valueToString,
                        hover: index === currentIndex,
                        size,
                        onMouseOver: (e) => handleOptionMouseOver(e, child),
                        onClick: handleSelect,
                        ...child.props, // Перезаписываем свойства если они переданы пользователем
                    });
                }

                // Если переданный объект не унаследован от Option
                return React.createElement(Option, {
                    key: index,
                    selected: values?.some((value) => compare(child) === compare(value)),
                    valueToString,
                    value: child,
                    hover: index === currentIndex,
                    onMouseOver: (e) => handleOptionMouseOver(e, child),
                    size,
                    onClick: handleSelect,
                    ...child.props,
                });
            };

            // Ессли передан promise то ожидаем
            const prepared = localOptions instanceof Promise ? [] : localOptions.map(mapper);

            return prepared?.length ? prepared : <Option disabled>Нет элементов для отображения</Option>;
        }, [localOptions, currentIndex, handleSelect, values, valueToString, compare, size, handleOptionMouseOver]);

        const constructChips = useCallback(() => {
            const chipClickHandler = (value) => (event) => {
                event.preventDefault();
                event.stopPropagation();
                handleSelect(event, value);
            };
            if (values?.length) {
                return (
                    <>
                        {values.map((value, index) => (
                            <Chip key={index} size={size}>
                                <span>{valueToString(value)}</span>
                                <Close
                                    size='s'
                                    onMouseDown={chipClickHandler(value)}
                                    onTouchStart={chipClickHandler(value)}
                                />
                            </Chip>
                        ))}
                        <Extra ref={extraComponentRef}>{`Еще ${count ?? ''}`}</Extra>
                    </>
                );
            }

            return null;
        }, [valueToString, values, size, handleSelect, extraComponentRef, count]);

        const handleClick = useCallback(() => {
            if (!disabled) {
                setShowList(!showList);
            }
        }, [disabled, showList]);

        const concretePostfix = getIcon(showList, postfix, size);

        const handleMouseDown = useCallback(
            (event) => {
                event.preventDefault();
                if (multiselectRef.current) {
                    multiselectRef.current.focus();
                }
            },
            [multiselectRef]
        );

        return (
            <Box
                ref={multiselectRef}
                tabIndex={tabIndex}
                role='combobox'
                aria-invalid={!!invalid}
                aria-disabled={!!disabled}
                aria-autocomplete='list'
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseDown={handleClick}
                onKeyDown={handleKeyDown}
                {...attrs}>
                <StyledInputWrapper
                    target={Current}
                    design={design}
                    active={active}
                    invalid={invalid}
                    size={size}
                    disabled={disabled}>
                    {prefix && <Part>{prefix}</Part>}
                    <Current size={size} ref={containerRef}>
                        {constructChips() ?? <Placeholder disabled={disabled}>{placeholder}</Placeholder>}
                    </Current>
                    <Part active={active} right onMouseDown={handleMouseDown}>
                        {concretePostfix}
                    </Part>
                </StyledInputWrapper>
                {showList && (
                    <DropList
                        size={getdropListSizeBySelectSize(size)}
                        fitItems={fitOptions}
                        maxHeight={maxListHeight}
                        aria-multiselectable
                        onScroll={handleScroll}>
                        {constructOptions()}
                    </DropList>
                )}
            </Box>
        );
    }
) as ForwardRefExoticComponent<MultiselectProps & RefAttributes<HTMLDivElement>> & { Option: React.FC<OptionProps> };

Multiselect.displayName = 'Multiselect';
Multiselect.defaultProps = {
    size: 'l',
    design: 'outline',
    maxListHeight: 300,
    openWhenFocus: true,
    tabIndex: 1,
    postfix: defaultPostfix,
};
Multiselect.Option = Option;

export default Multiselect;
