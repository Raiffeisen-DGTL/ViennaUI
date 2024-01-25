/* eslint-disable react-hooks/rules-of-hooks */
import React, {
    useState,
    useCallback,
    RefAttributes,
    ForwardRefExoticComponent,
    useEffect,
    ReactNode,
    useMemo
} from 'react';
import { usePopper } from 'react-popper';
import { useCramList } from 'vienna.react-use';
import { SelectOpenDown, SelectHide, CloseCancelX } from 'vienna.icons';
import { Box, PropsBox, Current, Part, Chip, Extra, Placeholder, StyledInputWrapper } from './Multiselect.styles';
import { Option, OptionProps } from './Option/Option';
import {
    MultiselectLocalizationProps,
    MultiselectLocalizationMap,
    MultiselectLocalizationContext,
    defaultMultiselectLocalization,
} from './localization';
import { DropListInner } from '../DropListInner';
import { useLocalization } from '../Localization';
import { BoxStyled } from '../Utils/styled';
import { defer } from '../Utils/defer';

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
export type Design = 'outline' | 'material';

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
type ActionType = 'increment' | 'decrement';

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

export interface MultiselectProps
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'prefix' | 'children' | 'onKeyDown' | 'onScroll'>,
        MultiselectLocalizationProps {
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
    size?: Size;

    /** Дизайн */
    design?: Design;

    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;
    /** Максимальная ширина выпадающего списка в пикселях */
    maxListWidth?: number;

    /** Разворачивать список при получениее фокуса */
    openWhenFocus?: boolean;

    /** Обработчик события при прокрутке списка  */
    onScroll?: MultiselectScrollEvent;

    /** Обработчик события при выборе элемента списка  */
    onSelect?: MultiselectEvent<React.FormEvent<HTMLInputElement>>;

    /** Обработчик события при нажатии кнопки клавиатуры, когда компонент в фокусе  */
    onKeyDown?: MultiselectEvent<React.KeyboardEventHandler<HTMLInputElement>>;

    /** Обработчик события при потере фокуса компонентом  */
    onBlur?: MultiselectEvent<React.FocusEvent<HTMLInputElement>>;

    /** Обработчик события при получении фокуса компонентом  */
    onFocus?: MultiselectEvent<React.FocusEvent<HTMLInputElement>>;

    /** Элементы выпадающего списка в случае если не используется свойство options  */
    children?: React.ReactNode | ChildrenFunc;

    /** Если установлено то выравнивает содержимое списка по ширине компонента (по умолчанию true)  */
    fitOptions?: boolean;

    /** Определяем значение которое надо вывести в селекте как текст выбранного значения */
    valueToString?: (item: any) => string;

    /** Определяем как сравнивать переданый в value объект и содержимое списка для подсветки выбраного элемента */
    compare?: (item: any) => any;

    /** Число элементов которые не прячутся */
    minViewItems?: number;
    groupItems?: boolean;
    fixed?: boolean;
    align?: 'top' | 'bottom' | 'auto';
    ref?: React.Ref<HTMLDivElement>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const omitNoWrapProp = ({ __nowrap__, ...props }) => props;

const defaultPostfix = { down: <SelectOpenDown />, up: <SelectHide /> };

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

export const Multiselect = React.forwardRef<HTMLDivElement, MultiselectProps>((props, ref) => {
    const {
        prefix,
        postfix = defaultPostfix,
        placeholder,
        disabled,
        invalid,
        tabIndex = 1,
        options,
        groupItems,
        values = [],
        size = 'l',
        design = 'outline',
        openWhenFocus = true,
        maxListHeight = 300,
        maxListWidth,
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
        fixed,
        minViewItems = 0,
        localization,
        ...attrs
    } = props;

    const l10n = useLocalization<MultiselectLocalizationMap, MultiselectLocalizationContext>(
        localization,
        defaultMultiselectLocalization
    );

    // Проверяем, что нам переданы только options или только children
    // и работаем с чем-то одним
    if (options && children) {
        console.error('Нельзя передавать одновременно options и children'); // eslint-disable-line
        return <></>;
    }

    const [containerRef, extraComponentRef, count] = useCramList(values as any, minViewItems);

    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(referenceElement, null, {
        placement: 'bottom-start',
        modifiers: [{ name: 'offset', options: { offset: [0, 4] } }],
    });

    useEffect(() => {
        if (typeof ref === 'function') {
            ref(referenceElement);
        } else if (ref && 'current' in ref) {
            (ref as any).current = referenceElement;
        }
    });
    const [showList, setShowList] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [active, setActive] = useState(false);

    const [localOptions, setLocalOptions] = useState<ReactNode[]>([]);

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
            }
            if (children) {
                // Если опции были через children как React.ReactNode
                setLocalOptions(React.Children.toArray(children as ReactNode[]));
            }
        }
    }, [showList, options, children, props]);

    const reactNodeIsComponent = (elem: ReactNode, component: React.FC): boolean => {
        return React.isValidElement(elem) ? elem?.type?.toString() === component.toString() : false;
    };

    const reactNodeHasNowrap = (elem: ReactNode): boolean => {
        return React.isValidElement(elem) ? Boolean(elem.props?.__nowrap__) : false;
    };

    const getNextIndex = (current: number, last: number, type: ActionType): number => {
        if (type === 'increment') {
            return current < last ? current + 1 : 0;
        }
        return current > 0 ? current - 1 : last;
    };

    const showDropdown = () => {
        if (disabled) return;
        setShowList(true);
    };

    const hideDropdown = () => {
        setShowList(false);
    };

    const setFocusOnField = (event: any) => {
        if (disabled) return;
        const isNotActive = !active;
        setActive(true);
        if (openWhenFocus) {
            showDropdown();
        }
        if (isNotActive && typeof onFocus === 'function') {
            onFocus(event);
        }
    };

    const setBlurOnFiled = (event: any) => {
        const isActive = active;
        setActive(false);
        hideDropdown();
        if (isActive && typeof onBlur === 'function') {
            onBlur(event);
        }
    };

    const changeCurrentIndex = (type: ActionType) => {
        const lastIndex = localOptions.length - 1;
        let index = currentIndex;
        const nextIndex = getNextIndex(currentIndex, lastIndex, type);

        index = reactNodeHasNowrap(localOptions[nextIndex]) ? getNextIndex(nextIndex, lastIndex, type) : nextIndex;
        setCurrentIndex(index);
    };

    const handleOptionMouseOver = useCallback(
        (e, option) => {
            setCurrentIndex(localOptions.findIndex((v) => v === option)); // Запоминаем позицию при наведении
        },
        [localOptions]
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
            switch (event.key) {
                case 'Escape': {
                    hideDropdown();
                    break;
                }
                case 'ArrowDown': {
                    event.preventDefault();

                    if (showList) {
                        changeCurrentIndex('increment');
                    }
                    break;
                }
                case 'ArrowUp': {
                    event.preventDefault();
                    if (showList) {
                        changeCurrentIndex('decrement');
                    } else {
                        showDropdown();
                    }
                    break;
                }
                case 'Enter': {
                    event.preventDefault();
                    if (showList && currentIndex >= 0) {
                        handleSelect(event, localOptions[currentIndex]);
                    } else {
                        showDropdown();
                    }
                    break;
                }
                case 'Tab': {
                    setBlurOnFiled(event);
                    break;
                }
            }

            if (typeof onKeyDown === 'function') {
                onKeyDown(event, { name, index: currentIndex });
            }
        },
        [onKeyDown, currentIndex, handleSelect, localOptions, showList, name]
    );

    const handleScroll = useCallback(
        (event) => {
            const target: HTMLDivElement = event.target;
            if (target.offsetHeight + target.scrollTop > target.scrollHeight - 10 && typeof options === 'function') {
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
        [onScroll, localOptions, options, currentIndex]
    );

    // Подготавливаем для отрисовки элементы списка
    const constructOptions = useCallback(() => {
        // Перебераем переданные опции
        const mapper = (child: any, index: number) => {
            // Если переданный объект унаследован от Option
            if (reactNodeIsComponent(child, Option)) {
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

            if (reactNodeHasNowrap(child)) {
                return React.cloneElement(child, omitNoWrapProp(child.props));
            }

            // Если переданный объект не унаследован от Option
            return (
                <Option
                    {...(child.props as {})}
                    key={index}
                    selected={values?.some((value) => compare(child) === compare(value))}
                    valueToString={valueToString}
                    value={child}
                    hover={index === currentIndex}
                    onMouseOver={(e) => handleOptionMouseOver(e, child)}
                    size={getdropListSizeBySelectSize(size)}
                    onClick={handleSelect}
                />
            );
        };

        // Ессли передан promise то ожидаем
        const prepared = localOptions instanceof Promise ? [] : localOptions.map(mapper);

        return prepared?.length ? prepared : <Option disabled>{l10n('ds.multiselect.empty')}</Option>;
    }, [localOptions, currentIndex, handleSelect, values, valueToString, compare, size, handleOptionMouseOver, l10n]);
    const constructChips = useCallback(() => {
        const chipClickHandler = (value) => (event) => {
            event.preventDefault();
            event.stopPropagation();
            const optionValue = localOptions.find((item: any) => item?.props?.children === value);

            handleSelect(event, optionValue ?? value);
        };
        if (values?.length) {
            return (
                <>
                    {values.map((value, index) => {
                        return (
                            value && (
                                <Chip key={index} $size={size}>
                                    <span>{valueToString(value)}</span>
                                    <CloseCancelX
                                        // eslint-disable-next-line react/forbid-component-props
                                        style={{ minWidth: 'auto' }} // Исправляет некорректное поведение крестика в Safari
                                        size='s'
                                        onMouseDown={chipClickHandler(value)}
                                        onTouchStart={chipClickHandler(value)}
                                    />
                                </Chip>
                            )
                        );
                    })}
                    <Extra ref={extraComponentRef}>{l10n('ds.multiselect.extra', { count: count ?? '' })}</Extra>
                </>
            );
        }

        return null;
    }, [valueToString, values, size, handleSelect, extraComponentRef, count, l10n]);

    const handleClick = useCallback(
        (event) => {
            if (showList) {
                hideDropdown();
            } else {
                setFocusOnField(event);
            }
        },
        [disabled, showList]
    );

    const handleFocus = (event: React.FocusEvent) => {
        if (!active) {
            // Задержка нужна для программного проставления фокуса, потому что handleClickOutside отрабатывает позже фокуса
            defer(setFocusOnField, [event]);
        }
    };

    const concretePostfix = getIcon(showList, postfix, size);

    const align = useMemo(() => props.align !== 'auto' ? props.align : 'vertical', [props.align]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const $popper = (popperElement as React.RefObject<HTMLDivElement> | null)?.current;
            const $target = event.target as HTMLDivElement;

            // Делаем иммитацию blur если клик произошел вне Box и DropListInner
            if ((referenceElement || $popper) && !referenceElement?.contains($target) && !$popper?.contains($target)) {
                setBlurOnFiled(event);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [referenceElement, popperElement]);

    return (
        <Box
            {...(attrs as {})}
            ref={setReferenceElement}
            tabIndex={tabIndex}
            role='listbox'
            aria-invalid={!!invalid}
            aria-disabled={!!disabled}
            aria-autocomplete='list'
            $design={design}
            onFocus={handleFocus}
            onMouseDown={handleClick}
            onKeyDown={handleKeyDown}>
            <StyledInputWrapper
                target={Current}
                design={design}
                active={active}
                invalid={invalid}
                size={size}
                $size={size}
                disabled={disabled}>
                {prefix && <Part>{prefix}</Part>}
                <Current $size={size} ref={containerRef}>
                    {constructChips() ?? (
                        <Placeholder $disabled={disabled} $size={size}>
                            {placeholder}
                        </Placeholder>
                    )}
                </Current>
                <Part $active={active} $right>
                    {concretePostfix}
                </Part>
            </StyledInputWrapper>
            {showList && (
                <DropListInner
                    ref={setPopperElement as any}
                    // eslint-disable-next-line react/forbid-component-props
                    style={styles.popper}
                    size={getdropListSizeBySelectSize(size)}
                    fitItems={fitOptions}
                    groupItems={groupItems}
                    maxHeight={maxListHeight}
                    width={maxListWidth}
                    aria-multiselectable
                    fixed={fixed}
                    align={align}
                    followParentWhenScroll={fixed}
                    onHide={hideDropdown}
                    onScroll={handleScroll}
                    {...attributes.popper}>
                    {constructOptions()}
                </DropListInner>
            )}
        </Box>
    );
}) as ForwardRefExoticComponent<MultiselectProps & RefAttributes<HTMLDivElement>> & { Option: typeof Option };

Multiselect.displayName = 'Multiselect';

Multiselect.Option = Option;
