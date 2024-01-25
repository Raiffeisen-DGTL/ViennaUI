/* eslint-disable react-hooks/rules-of-hooks */
import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode,
    FormEvent,
    UIEvent,
    KeyboardEventHandler,
    FocusEvent,
    Ref,
    FC,
    MutableRefObject, useMemo,
} from 'react';
import { SelectOpenDown, SelectHide } from 'vienna.icons';
import { useMask, IMaskProps } from 'vienna.react-use';
import { Box, Current, Part, Placeholder, StyledInputWrapper } from './Select.styles';
import { Option, OptionProps } from './Option/Option';
import { SelectLocalizationProps, defaultSelectLocalization } from './localization';
import { NativeInput } from '../Input';
import { DropList } from '../DropList';
import { useLocalization } from '../Localization';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

interface Data {
    props: SelectProps;
    currentIndex: number;
    Option: FC<OptionProps>;
}

type ChildrenFunc = (data: Data) => ReactNode;
type CallbackFunc = (options: any[]) => any[] | Promise<any[]>;

export type SelectEvent<T = FormEvent<HTMLInputElement>> = (
    event: T,
    data?: { name?: string; value?: any; index?: number }
) => void;

export type SelectChangeEvent<T = FormEvent<HTMLInputElement>> = (
    event: T,
    data?: { name?: string; value?: string; originalValue?: string }
) => void;

export type SelectScrollEvent<T = UIEvent<HTMLInputElement>> = (
    event: T,
    data?: {
        target: HTMLDivElement;
        height: number;
        scrollTop: number;
        scrollHeight: number;
    }
) => void;

interface Postfix {
    up: ReactNode;
    down?: ReactNode;
}

export interface SelectProps<B = Breakpoints>
    extends Omit<BoxStyled<typeof Box, {}>, 'prefix' | 'children' | 'onKeyDown'>,
        Omit<IMaskProps, 'value'>,
        SelectLocalizationProps {
    /** Имя компонента */
    name?: string;

    /** ID компонента */
    id?: string;

    /** Значение отображаемое перед компонентом  */
    prefix?: ReactNode;

    /** Значение отображаемое после компонента (объект)  */
    postfix?: Postfix;

    /** Значение отображаемое, в случае если ничего не выбрано */
    placeholder?: string;

    /** Название стиля для компонента (опционально) */
    className?: string;

    /** Компонент неактивен если true */
    disabled?: boolean;

    /** Порядок получения фокуса (-1 = компонент не участвует в фокусировке по нажатию TAB)  */
    tabIndex?: number;

    /** Компонент отображается как ошибочный если true */
    invalid?: boolean;

    /** Список элементов в выпадающем списке: массив, callback функция или promise */
    options?: ReactNode[] | CallbackFunc;

    /** Выбранный элемент (интерфейсы объектов options и value должны совпадать) */
    value?: any;

    /** Выбранный элемент (интерфейсы объектов options и value должны совпадать) */
    inputValue?: string; // TODO - временное свойство! следует убрать при первом же рефакторинге

    /** Шаблон отображения выбранного элемента при закрытом списке */
    templateValue?: ReactNode;

    smartPlaceholder?: ReactNode;

    /** Размеры */
    size?: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', B>;

    /** Дизайн */
    design?: 'outline' | 'material';

    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;
    /** Максимальная ширина выпадающего списка в пикселях */
    maxListWidth?: number;

    /** Разворачивать список при получение фокуса */
    openWhenFocus?: boolean;

    /** Обработчик события при прокрутке списка  */
    onScroll?: SelectScrollEvent;

    /** Обработчик события при выборе элемента списка  */
    onSelect?: SelectEvent<FormEvent<HTMLInputElement>>;

    /** Обработчик события при наборе текста с активным флагом editable */
    onChange?: SelectChangeEvent<FormEvent<HTMLInputElement>>;

    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: SelectEvent<KeyboardEventHandler<HTMLInputElement>>;

    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: SelectEvent<FocusEvent<HTMLInputElement>>;

    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: SelectEvent<FocusEvent<HTMLInputElement>>;

    /** Обработчик события при клике на компонент  */
    onClick?: SelectEvent<React.MouseEvent<HTMLInputElement>>;

    /** Элементы выпадающего списка в случае если не используется свойство options  */
    children?: ReactNode | ChildrenFunc;

    /** Отображает input при фокусе, позволяетнабирать текст  */
    editable?: ReactNode | ChildrenFunc;

    /** Если установлено то выравнивает содержимое списка по ширине компонента (по умолчанию true)  */
    fitOptions?: boolean;

    /** Определяем значение которое надо вывести в селекте как текст выбранного значения */
    valueToString?: (item: any) => ReactNode;

    /** Определяем как сравнивать переданый в value объект и содержимое списка для подсветки выбраного элемента */
    compare?: (item: any) => string | { name: string; value: string } | any;
    fixed?: boolean;
    align?: 'top' | 'bottom' | 'auto';
    ref?: Ref<HTMLDivElement>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const omitNoWrapProp = ({ __nowrap__, ...props }) => props;

// const preventDefault = (event) => event.preventDefault();

const defaultPostfix = { down: <SelectOpenDown />, up: <SelectHide /> };

const getIcon = (flag, icons, size) => {
    size = size === 'xs' ? 's' : 'm';
    if (!icons) {
        icons = defaultPostfix;
    }
    const icon = flag ? icons?.up : icons?.down ?? icons?.up;
    return React.cloneElement(icon, { size });
};

const getdropListSizeBySelectSize = (size: SelectProps['size'] = 'l') => {
    const getSize = (size) => {
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

    if (typeof size === 'string') {
        return getSize(size);
    }

    const mediaSize = {};
    Object.keys(size).forEach((key) => {
        mediaSize[key] = getSize(size[key]);
    });
    return mediaSize;
};

export const Select = React.forwardRef(
    <B,>(props: SelectProps<B extends void ? Breakpoints : B>, ref: Ref<HTMLDivElement>) => {
        const {
            prefix,
            postfix = defaultPostfix,
            placeholder,
            disabled,
            invalid,
            tabIndex = 0,
            options,
            value,
            inputValue, // TODO - временное свойство! следует убрать при первом же рефакторинге
            size = 'l',
            templateValue,
            design = 'outline',
            openWhenFocus = true,
            maxListHeight = 300,
            maxListWidth,
            valueToString = (item) =>
                typeof item !== 'object' || item === null ? item : (item as { value: string })?.value ?? '',
            compare = (item) => item?.value ?? item,
            onScroll,
            onSelect,
            onChange,
            onKeyDown,
            onBlur,
            children,
            onFocus,
            onClick,
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
            fixed,
            localization,
            ...attrs
        } = props;

        const l10n = useLocalization(localization, defaultSelectLocalization);

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
        const inputRef = useRef<HTMLInputElement>(null); // указатель на input

        // Перенаправляем ref наружу в зависимости от его вида (функция или useRef для react > 16)
        useEffect(() => {
            if (typeof ref === 'function') {
                ref(selectRef.current);
            } else if (ref && 'current' in ref) {
                (ref as MutableRefObject<HTMLElement | null>).current = selectRef.current;
            }
        });

        const [showList, setShowList] = useState(false); // флаг для отображения выпадающего списка
        const [currentIndex, setCurrentIndex] = useState(-1); // переменная хранящая текущую позицию маркера в списке
        const [active, setActive] = useState(false); // переменная для подсветки рамки поля, при фактическом отсутствии фокуса, например когда фокус на инпуте
        const [localOptions, setLocalOptions] = useState<ReactNode[]>([]); // Задаем список для отображения

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
                    setLocalOptions(children({ props, currentIndex: 0, Option }) as ReactNode[]);
                    return;
                }
                if (children) {
                    // Если опции были через children как ReactNode
                    setLocalOptions(React.Children.toArray(children));
                }
            }
        }, [showList, options, children, props]);

        // Если список показан и select:editable - ставим курсор на инпут
        useEffect(() => {
            if (showList && inputRef.current) {
                requestAnimationFrame(() => {
                    inputRef?.current?.focus();
                });
            }
        }, [showList]);

        const handleHide = useCallback(() => {
            setShowList(false);
        }, []);

        const handleOptionMouseOver = useCallback(
            (e, option) => {
                setCurrentIndex(localOptions.findIndex((v) => v === option)); // Запоминаем позицию при наведении
            },
            [localOptions]
        );

        // Обработка события фокуса
        const handleFocus = useCallback(
            (event) => {
                if (inputRef.current) {
                    // Если select:editable и мы показываем input, то не вызываем событие
                    return;
                }
                if (!disabled) {
                    setActive(true); // Устанавливаем обводку
                    if (openWhenFocus && !active) {
                        setShowList(true); // Показываем список если надо
                    }
                    if (typeof onFocus === 'function') {
                        onFocus(event); // Вызываем событие onFocus'e
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
                setActive(false); // Убираем рамку

                if (typeof window !== 'undefined' && document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                }

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
                        if (selectedValue.props.value || selectedValue.props.value === null) {
                            // Если у элемента списка есть свойство value либо оно null
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
        const handleClick = useCallback(
            (event) => {
                event.stopPropagation();
                // Если компонент активен и пользователь не пытается провести операции с текстом внутри инпута
                if (!disabled && !inputRef.current) {
                    setShowList(!showList); // Переключаем состояние списка
                }
                if (onClick) {
                    onClick(event);
                }
            },
            [disabled, showList, onClick]
        );

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
            // Перебираем переданные опции
            const mapper = (child: any, index: number) => {
                // Если переданный объект унаследован от Option
                if (child?.type?.toString() === Option.toString()) {
                    const optionValue = child.props.value;
                    const option = child.props.children;

                    // Сравниваем значение по результату функции приведения
                    const selected = optionValue
                        ? compare(optionValue) === compare(value)
                        : valueToString(option) === valueToString(value);

                    return React.cloneElement(child, {
                        role: 'option',
                        'aria-selected': selected,
                        selected,
                        valueToString,
                        hover: index === currentIndex,
                        size,
                        onMouseOver: (e) => handleOptionMouseOver(e, child),
                        onClick: handleSelect,
                        ...child.props, // Перезаписываем свойства если они переданы пользователем
                    });
                }

                if (child?.props?.__nowrap__) {
                    return React.cloneElement(child, omitNoWrapProp(child.props));
                }

                // Если переданный объект не унаследован от Option
                return (
                    <Option
                        role='option'
                        aria-selected={
                            compare(child) === compare(value) || valueToString(child) === valueToString(value)
                        }
                        key={index}
                        selected={compare(child) === compare(value) || valueToString(child) === valueToString(value)}
                        valueToString={valueToString}
                        value={child}
                        hover={index === currentIndex}
                        onMouseOver={(e) => handleOptionMouseOver(e, child)}
                        size={size}
                        onClick={handleSelect}
                        {...child.props}
                    />
                );
            };

            // Ессли передан promise то ожидаем
            const prepared = localOptions instanceof Promise ? [] : localOptions.map(mapper);

            return prepared?.length ? prepared : <Option disabled>{l10n('ds.select.empty')}</Option>;
        }, [
            localOptions,
            currentIndex,
            handleSelect,
            value,
            valueToString,
            compare,
            size,
            handleOptionMouseOver,
            l10n,
        ]);

        const constructCurrent = useCallback((): ReactNode => {
            const blurred = useRef(false); // флаг проверки увели ли мы фокус с инпута

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
                blurred.current = false;
                if (!active && typeof onFocus === 'function') {
                    onFocus(event, { name, value });
                }
                setActive(true); // Подсвечиваем селект
            };

            // Обработка потери фокуса
            const blurHandler = (event) => {
                blurred.current = true;
                setShowList(false); // Скрываем список и вызываем событие onBlur
                if (typeof onBlur === 'function') {
                    onBlur(event);
                }
            };

            // Если input исчез из DOM
            const desposeHandler = useCallback(() => {
                setActive(false); // убираем подсветку Select
                if (selectRef.current && !blurred.current) {
                    // Если инпут не терял фокус то возвращаем его в Select
                    selectRef.current.focus();
                }
            }, []);

            // Добавляем маску если надо
            const formattedValue = inputValue && mask ? valueToMask(inputValue) : inputValue;

            // Формируем Input, используем NativeInput так как он лишен отступов и обводок
            const result =
                (editable && showList ? (
                    <NativeInput
                        ref={inputRef}
                        size={size}
                        design={design}
                        smartPlaceholder={(inputValue && smartPlaceholder) ?? toPlaceholder(inputValue)}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        // onMouseDown: preventDefault,
                        onDespose={desposeHandler}
                        onBlur={blurHandler}
                        // делаем компонент неуправляемым при отсутствии props inputValue !!! TODO убрать при первом же рефакторинге
                        // проверяем что inputValue - существует и если это так то формируем объект с value и добавляем его к пропсам
                        {...(inputValue !== undefined ? { value: formattedValue } : {})}
                    />
                ) : null) ??
                templateValue ?? // выводим значение шаблона
                (valueToString(value) || <Placeholder $disabled={disabled}>{placeholder}</Placeholder>); // выводим объект приведенный к строке

            return result;
        }, [
            active,
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
            onFocus,
            design,
            maskToValue,
            valueToMask,
            mask,
            toPlaceholder,
            smartPlaceholder,
            disabled,
        ]);

        const align = useMemo(() => props.align !== 'auto' ? props.align : 'vertical', [props.align]);

        // Создаем иконку для закрытия/открытия списка по правилам гайдов
        const concretePostfix = getIcon(showList, postfix, size);

        // const

        return (
            <Box
                {...(attrs as {})}
                ref={selectRef}
                tabIndex={tabIndex}
                role='listbox'
                aria-invalid={!!invalid}
                aria-disabled={!!disabled}
                aria-autocomplete='list'
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseDown={handleClick}
                onKeyDown={handleKeyDown}>
                <StyledInputWrapper
                    target={Current}
                    design={design}
                    active={active}
                    invalid={invalid}
                    size={size}
                    disabled={disabled}>
                    {prefix && <Part>{prefix}</Part>}
                    <Current $size={size}>{constructCurrent()}</Current>
                    <Part $active={active} onMouseDown={MouseDownHandler}>
                        {concretePostfix}
                    </Part>
                </StyledInputWrapper>
                {showList && (
                    <DropList
                        size={getdropListSizeBySelectSize(size)}
                        fitItems={fitOptions}
                        maxHeight={maxListHeight}
                        fixed={fixed}
                        width={maxListWidth}
                        followParentWhenScroll={fixed}
                        align={align}
                        onHide={handleHide}
                        onScroll={handleScroll}>
                        {constructOptions()}
                    </DropList>
                )}
            </Box>
        );
    }
) as ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLDivElement>> & { Option: typeof Option };

Select.displayName = 'Select';

Select.Option = Option;
