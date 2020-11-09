/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback, useEffect, useRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { Down, Up } from 'vienna.icons';
import { useMask, IMaskProps } from 'vienna.react-use';
import { Box, Current, Part, Placeholder, StyledInputWrapper } from './Select.styles';
import Option, { OptionProps } from './Option/Option';
import { NativeInput } from '../Input';
import { DropList } from '../DropList';

interface Data {
    props: any;
    currentIndex: number;
    Option: React.FC<OptionProps>;
}

type ChildrenFunc = (data: Data) => React.ReactNode;
type CallbackFunc = (options: any[]) => any[] | Promise<any[]>;

export type SelectEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data?: { name?: string; value?: any; index?: number }
) => void;

export type SelectChangeEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data?: { name?: string; value?: string; originalValue?: string }
) => void;

export type SelectScrollEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data?: {
        target: HTMLDivElement;
        height: number;
        scrollTop: number;
        scrollHeight: number;
    }
) => void;

interface Postfix {
    up: React.ReactNode;
    down?: React.ReactNode;
}

export interface SelectProps extends IMaskProps {
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

    /** Выбранный элемент (интерфейсы объектов options и value должны совпадать) */
    value?: any;

    /** Выбранный элемент (интерфейсы объектов options и value должны совпадать) */
    inputValue?: any; // TODO - временное свойство! следует убрать при первом же рефакторинге

    /** Шаблон отображения выбранного элемента при закрытом списке */
    templateValue?: React.ReactNode;

    smartPlaceholder?: React.ReactNode;

    /** Размеры */
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

    /** Дизайн */
    design?: 'outline' | 'material';

    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;

    /** Разворачивать список при получениее фокуса */
    openWhenFocus?: boolean;

    /** Обработчик события при прокрутке списка  */
    onScroll?: SelectScrollEvent;

    /** Обработчик события при выборе элемента списка  */
    onSelect?: SelectEvent<React.FormEvent<HTMLInputElement>>;

    /** Обработчик события при наборе текста с активным флагомeditable */
    onChange?: SelectChangeEvent<React.FormEvent<HTMLInputElement>>;

    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: SelectEvent<React.KeyboardEventHandler<HTMLInputElement>>;

    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: SelectEvent<React.FormEvent<HTMLInputElement>>;

    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: SelectEvent<React.FormEvent<HTMLInputElement>>;

    /** Элементы выпадающего списка в случае если не используется свойство options  */
    children?: React.ReactNode | ChildrenFunc;

    /** Отображает input при фокусе, позволяетнабирать текст  */
    editable?: React.ReactNode | ChildrenFunc;

    /** Если установлено то выравнивает содержимое списка по ширине компонента (по умолчанию true)  */
    fitOptions?: boolean;

    /** Определяем значение которое надо вывести в селекте как текст выбранного значения */
    valueToString?: (item: any) => string;

    /** Определяем как сравнивать переданый в value объект и содержимое списка для подсветки выбраного элемента */
    compare?: (item: any) => any;
}

const preventDefault = (event) => event.preventDefault();

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

export const Select: React.FC<SelectProps> & { Option: React.FC<OptionProps> } = React.forwardRef(
    (props: SelectProps, ref: React.Ref<HTMLDivElement>) => {
        const {
            prefix,
            postfix,
            placeholder,
            disabled,
            invalid,
            tabIndex,
            options,
            value,
            inputValue, // TODO - временное свойство! следует убрать при первом же рефакторинге
            size,
            templateValue,
            design,
            openWhenFocus,
            maxListHeight,
            valueToString = (item) => (typeof item === 'string' ? item : item?.value ?? ''),
            compare = (item) => item?.value ?? item,
            onScroll,
            onSelect,
            onChange,
            onKeyDown,
            onBlur,
            children,
            onFocus,
            name,
            editable,
            fitOptions = true,
            // mask props
            mask,
            placeholderChar = '_',
            lazy,
            definitions,
            mapToRadix,
            scale,
            min,
            max,
            smartPlaceholder,
            ...attrs
        } = props;

        // Опции необходимые для маски
        const maskProps = {
            mask,
            placeholderChar,
            lazy,
            definitions,
            mapToRadix,
            scale,
            min,
            max,
        };

        const [valueToMask, maskToValue, toPlaceholder] = useMask(maskProps);

        // Проверяем, что нам переданы только options или только children
        // и работаем с чем-то одним
        if (options && children) {
            console.error('Нельзя передавать одновременно options и children'); // eslint-disable-line
            return <></>;
        }

        const selectRef = useRef<HTMLDivElement>(null); // указатель на select
        const inputRef = useRef<any>(null); // указатель на input

        // Перенаправляем ref наружу в зависимости от его вида (функция или useRef для react > 16)
        useEffect(() => {
            if (typeof ref === 'function') {
                ref(selectRef.current);
            } else if (ref && 'current' in ref) {
                (ref as any).current = selectRef.current;
            }
        });

        const [showList, setShowList] = useState(false); // флаг для отображения выпадающего списка
        const [currentIndex, setCurrentIndex] = useState(-1); // переменная хранящая текущую позицию маркера в списке
        const [active, setActive] = useState(false); // переменная для подсветки рамки поля, при фактическом отсутствии фокуса, например когда фокус на инпуте
        const [localOptions, setLocalOptions] = useState<any[]>([]); // Задаем список для отображения

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
        }, [showList, options, children, props]);

        // Если список показан и select:editable - ставим курсор на инпут
        useEffect(() => {
            if (showList && inputRef.current) {
                inputRef.current.focus();
            }
        }, [showList]);

        const handleOptionMouseOver = useCallback(
            (e, option) => {
                setCurrentIndex(localOptions.findIndex((v) => v === option)); // Запоминаем позицию при наведении
            },
            [localOptions]
        );

        // Обработка события фокуса
        const handleFocus = useCallback(
            (event) => {
                if (!disabled) {
                    setActive(true); // Устанавливаем обводку
                    if (openWhenFocus && !active) {
                        setShowList(true); // Показываем список если надо
                    }
                    if (typeof onFocus === 'function') {
                        onFocus(event); // Вызываем событие onFocuse
                    }
                } else {
                    event.target.blur(); // TODO: - убрать ?
                }
            },
            [onFocus, disabled, openWhenFocus, active]
        );

        // Обработка потери фокуса
        const handleBlur = useCallback(
            (event) => {
                if (inputRef.current) {
                    // Если select:editable и мы показываем input, то не вызываем событие
                    return;
                }
                setShowList(false); // Скрываем список
                setActive(false); // Убераем рамку
                if (typeof onBlur === 'function') {
                    onBlur(event);
                }
            },
            [onBlur, inputRef]
        );

        // Универсальный обработчик выбора
        const handleSelect = useCallback(
            (event, selectedValue) => {
                if (typeof onSelect === 'function') {
                    if (typeof selectedValue !== 'string' && selectedValue?.props) {
                        if (selectedValue.props.disabled) {
                            // Если элемент списка нельзя выбрать
                            return;
                        }
                        // Пытаемся найти и вернуть значение в зависимости от того как были переданы опции
                        if (selectedValue.props.value) {
                            // Если у элементв списка есть свойство value
                            selectedValue = selectedValue.props.value;
                        } else if (typeof selectedValue?.props?.children === 'string') {
                            // В противном случае возвращаем дочерний элемент <Option>children</Option>
                            selectedValue = selectedValue.props.children;
                        }
                    }
                    onSelect(event, { name, value: selectedValue });
                }
                setShowList(false);
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
                        if (showList) {
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

        // Лбрабатываем прокручивание списка
        const handleScroll = useCallback(
            (event) => {
                const target: HTMLDivElement = event.target;
                if (
                    target.offsetHeight + target.scrollTop > target.scrollHeight - 10 &&
                    typeof options === 'function'
                ) {
                    // Если опции заданы функцией - вызываем ее каждый раз для добавления элементов в список
                    const result = options([...localOptions]);
                    if (result instanceof Promise) {
                        result.then(setLocalOptions).catch(() => null);
                    } else {
                        setLocalOptions(result);
                    }
                }
                // Вызываем событие onScroll, что бы пользователь мог сам организовать дозагрузку
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

        // Обрабатываем клик по компоненту
        const handleClick = useCallback(() => {
            // Если компонент активен и пользователь не пытается провести операции с текстом внутри инпута
            if (!disabled && !inputRef.current) {
                setShowList(!showList); // Переключаем состояние списка
            }
        }, [disabled, showList]);

        // Обрабатываем щелчок по элементу - что бы предотвратить уход фокуса с селекта
        const MouseDownHandler = useCallback(
            (event) => {
                event.preventDefault();
                if (selectRef.current) {
                    selectRef.current.focus();
                }
            },
            [selectRef]
        );

        // Подготавливаем для отрисовки элементы списка
        const constructOptions = useCallback(() => {
            // Перебераем переданные опции
            const mapper = (child: any, index: number) => {
                // Если переданный объект унаследован от Option
                if (child?.type?.toString() === Option.toString()) {
                    const optionValue = child.props.value;
                    const option = child.props.children;

                    // Сравниваем значение по результату функции преведения
                    const selected = optionValue
                        ? compare(optionValue) === compare(value)
                        : valueToString(option) === valueToString(value);

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
                    selected: compare(child) === compare(value) || valueToString(child) === valueToString(value),
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
        }, [localOptions, currentIndex, handleSelect, value, valueToString, compare, size, handleOptionMouseOver]);

        const constructCurrent = useCallback(() => {
            const blured = useRef(false); // флаг проверки увели ли мы фокус с инпута

            // Обработка набора текста
            const changeHandler = (event) => {
                if (typeof onChange === 'function' && inputRef.current) {
                    onChange(event, {
                        name,
                        value: mask ? valueToMask(event.target.value) : event.target.value,
                        originalValue: mask ? maskToValue(event.target.value) : event.target.value,
                    });
                }
            };

            // Обработка фокуса
            const focusHandler = (event) => {
                event.stopPropagation();
                blured.current = false;
                setActive(true); // Подсвечиваем селект
            };

            // Обработка потери фокуса
            const blurHandler = (event) => {
                blured.current = true;
                setShowList(false); // Скрываем список и вызываем событие onBlur
                if (typeof onBlur === 'function') {
                    onBlur(event);
                }
            };

            // Если input исчез из DOM
            const desposeHandler = useCallback(() => {
                setActive(false); // убираем подсветку Select
                if (selectRef.current && !blured.current) {
                    // Если инпут не терял фокус то возвращаем его в Select
                    selectRef.current.focus();
                }
            }, []);

            // Добавляем маску если надо
            const formatedValue = inputValue && mask ? valueToMask(inputValue) : inputValue;

            // Формируем Input, используем NativeInput так как он лишен отступов и обводок
            const result = ((editable && showList
                ? React.createElement(NativeInput, {
                      ref: inputRef,
                      size,
                      design,
                      smartPlaceholder: (inputValue && smartPlaceholder) ?? toPlaceholder(inputValue),
                      onChange: changeHandler,
                      onFocus: focusHandler,
                      onMouseDown: preventDefault,
                      onDespose: desposeHandler,
                      onBlur: blurHandler,
                      // делаем компонент неуправляемым при отсутствии props inputValue !!! TODO убрать при первом же рефакторинге
                      // проверяем что inputValue - существует и если это так то формируем объект с value и добовляем его к пропсам
                      ...(inputValue !== undefined ? { value: formatedValue } : {}),
                  })
                : null) ??
            templateValue ?? // выводим значение шаблона
                valueToString(value)) || <Placeholder disabled={disabled}>{placeholder}</Placeholder>; // выводим объект приведеный к строке

            return result;
        }, [
            placeholder,
            value,
            inputValue,
            templateValue,
            size,
            valueToString,
            showList,
            editable,
            name,
            onChange,
            onBlur,
            design,
            maskToValue,
            valueToMask,
            mask,
            toPlaceholder,
            smartPlaceholder,
            disabled,
        ]);

        // Создаем иконку для закрытия/открытия списка по правилам гайдов
        const concretePostfix = getIcon(showList, postfix, size);

        return (
            <Box
                ref={selectRef}
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
                    <Current size={size}>{constructCurrent()}</Current>
                    <Part active={active} onMouseDown={MouseDownHandler}>
                        {concretePostfix}
                    </Part>
                </StyledInputWrapper>
                {showList && (
                    <DropList
                        size={getdropListSizeBySelectSize(size)}
                        fitItems={fitOptions}
                        maxHeight={maxListHeight}
                        onScroll={handleScroll}>
                        {constructOptions()}
                    </DropList>
                )}
            </Box>
        );
    }
) as ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLDivElement>> & { Option: React.FC<OptionProps> };

Select.displayName = 'Select';
Select.defaultProps = {
    size: 'l',
    design: 'outline',
    maxListHeight: 300,
    openWhenFocus: true,
    tabIndex: 0,
    postfix: defaultPostfix,
};
Select.Option = Option;

export default Select;
