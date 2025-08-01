/* eslint-disable react-hooks/rules-of-hooks */
import React, {
    useCallback,
    RefAttributes,
    useEffect,
    ReactNode,
    useState,
    useRef,
    isValidElement,
    ReactElement,
    Ref,
} from 'react';
import { useCramList } from 'vienna.react-use';
import { SelectOpenDownIcon, SelectHideIcon } from 'vienna.icons';
import {
    Placeholder,
    Box,
    Current,
    Part,
    StyledInputWrapper,
    SelectAllStyled,
    ResetButtonWrapperStyled,
    StyledTooltip,
    DropdownBottomSlot,
} from './MultiselectWithSearch.styles';
import { Option, OptionProps } from './Option';
import { EmptyState } from './EmptyState';
import { Tooltip } from '../Tooltip';
import { Tag, TagProps } from '../Tag';
import { Button } from '../Button';
import { HighlightProps } from '../Highlight';
import { MultiselectWithSearchLocalizationProps, defaultMultiselectWithSearchLocalization } from './localization';
import { DropListInner } from '../DropListInner';
import { Search } from './Search';
import { AddButton, AddButtonProps } from '@/shared/AddButton';
import { useLocalization } from '../Localization';
import {
    DefaultValueToString,
    DefaultCompare,
    DefaultSearch,
    reactNodeIsComponent,
    type SizeType,
    type DesignType,
    type SelectValueType,
    type ValueToStringType,
    type DataKeyType,
    type CompareType,
    type SearchType,
    type Postfix,
    generateSizeBySize,
    composeRef,
    reactNodeHasNowrap,
    omitNoWrapProp,
    getDropListSizeBySelectSize,
    getIcon,
    OnChangeHandler,
    EmptyArrayType,
    Pretty,
} from '../Utils';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';
import { PropsType as UseSelectPropsType, useMultiselect } from '../Utils/useMultiselect';
import { ViewOnly, WithViewOnly } from '@/ViewOnly';
import { getViewOnlySize } from '@/ViewOnly/utils';
import { Popover } from '@/Popover';

export const defaultMultiselectWithSearchTestId: MultiselectWithSearchProps['testId'] = {
    tag: (val: string) => `multiselect-with-search_tag-${val}`,
    option: (val: string | React.ReactNode) => `multiselect-with-search_option-${val?.toString() ?? ''}`,
    search: 'multiselect-with-search_search',
    arrow: 'multiselect-with-search_arrow', // 'part'
};

export type MultiselectWithSearchScrollEvent<T = React.FormEvent<HTMLInputElement>> = (
    event: T,
    data?: {
        target: HTMLDivElement;
        height: number;
        scrollTop: number;
        scrollHeight: number;
    }
) => void;

export interface MultiselectWithSearchProps<T = SelectValueType, B = Breakpoints>
    extends UseSelectPropsType<T>,
        WithViewOnly,
        MultiselectWithSearchLocalizationProps {
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

    /** Порядок получения фокуса (-1 = компонент не учавствует в фокусировке по нажатию TAB)  */
    tabIndex?: number;

    /** Компонент отображается как ошибочный если true */
    invalid?: boolean;

    /** Массив выбраных элементов (интерфейсы объектов options и values должны совпадать) */
    values?: T[];

    /** Размеры */
    size?: ResponsiveProp<SizeType, B>;

    /** Свойство отвечает за показ/скрытие иконки в empty state */
    hideEmptyStateIcon?: boolean;

    randomEmptyStateIcon?: boolean;

    /** Дизайн */
    design?: DesignType;

    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;
    /** Максимальная ширина выпадающего списка в пикселях */
    maxListWidth?: number;

    /** Обработчик события при выборе элемента списка  */
    onSelect?: OnChangeHandler<T[], React.MouseEvent | React.KeyboardEvent, { name?: string; isShown: boolean }>;
    /** Обработчик события при вводе в input  */
    onSearch?: (value: string, name?: string) => void;

    /** Элементы выпадающего списка в случае если не используется свойство options  */
    children?: React.ReactNode;

    /** Если установлено то выравнивает содержимое списка по ширине компонента (по умолчанию true)  */
    fitOptions?: boolean;

    /** Определяем значение которое надо вывести в селекте как текст выбранного значения */
    valueToString?: ValueToStringType<T>;

    /** Определяем как сравнивать переданый в value объект и содержимое списка для подсветки выбраного элемента */
    compare?: CompareType<T>;

    /** Определяем как вычислять key */
    dataKey?: DataKeyType<T>;

    highlightCompare?: NonNullable<HighlightProps['compare']>;
    highlightStyle?: NonNullable<HighlightProps['style']>;

    search?: SearchType;
    disableSearch?: boolean;
    disableSelectAll?: boolean;
    disableReset?: boolean;
    disableClearSearch?: boolean;

    tagsWrap?: boolean;

    hideCheckboxes?: NonNullable<OptionProps['hideCheckbox']>;

    /** Число элементов которые не прячутся */
    minViewItems?: number;

    fixed?: boolean;
    dropdownPortal?: HTMLElement | React.MutableRefObject<HTMLElement | null> | null;
    ref?: React.Ref<HTMLDivElement>;

    /** Элементы, которым следует указать data-test-id */
    testId?: {
        tag?: (val: string) => string;
        option?: (val: string | React.ReactNode) => string;
        search?: string;
        arrow?: string;
    };
    hideOptionsList?: boolean;
    inputRef?: React.RefObject<HTMLInputElement>;
    onAddValue?: (newValue: T) => void;
    /** Возможность показать чекбокс справа */
    showCheckboxOnRight?: boolean;
    /** Показать кнопку «Добавить» */
    showAddButton?: boolean;
    /** Включить дублирование поисковой строки в кнопку «Добавить» */
    addButtonDuplication?: AddButtonProps['duplication'];
    /** Обработчик события клика по кнопке «Добавить» */
    addButtonOnClick?: AddButtonProps['onClick'];
}

const defaultPostfix = { down: <SelectOpenDownIcon />, up: <SelectHideIcon /> };
const defaultValues: EmptyArrayType = [];

const MultiselectWithSearchInternal = <T,>(
    props: MultiselectWithSearchProps<T>,
    ref: Ref<HTMLDivElement>
): React.JSX.Element => {
    const {
        prefix,
        postfix = defaultPostfix,
        placeholder,
        disabled,
        invalid,
        tabIndex,
        options,
        values = defaultValues as T[],
        size = 'm',
        hideEmptyStateIcon,
        randomEmptyStateIcon = true,
        design = 'outline',
        maxListHeight = 300,
        maxListWidth,
        valueToString = DefaultValueToString<T>,
        compare = DefaultCompare<T>,
        dataKey = compare,
        highlightCompare,
        highlightStyle = 'accentColor',
        search = DefaultSearch,
        disableSearch,
        disableSelectAll,
        disableReset,
        disableClearSearch,
        onSelect,
        onSearch,
        children,
        fitOptions = true,
        name,
        tagsWrap,
        minViewItems = 0,
        hideCheckboxes,
        fixed,
        localization,
        readonly,
        readOnly,
        dropdownPortal,
        testId = defaultMultiselectWithSearchTestId,
        viewOnly,
        viewOnlyText,
        hideOptionsList,
        inputRef,
        onAddValue,
        showCheckboxOnRight,
        showAddButton,
        addButtonDuplication,
        addButtonOnClick,
        ...attrs
    } = props;

    const l10n = useLocalization(localization, defaultMultiselectWithSearchLocalization);

    // Проверяем, что нам переданы только options или только children
    // и работаем с чем-то одним
    if (options && children) {
        console.error('Нельзя передавать одновременно options и children'); // eslint-disable-line
        return <></>;
    }

    const [containerRef, extraComponentRef, count, ignoreComponentRef, calcByResize] = useCramList(
        values,
        tagsWrap ? 99999 : minViewItems
    );
    const labelRef = useRef<HTMLLabelElement>(null);
    const selectRef = useRef<HTMLDivElement>(null);
    const ignoreFocus = useRef<boolean>(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const [searchString, setSearchString] = useState('');

    const updateSearchString = (val: string) => {
        setSearchString(val);
        if (onSearch) {
            onSearch(val, name);
        }
    };

    const handleSelect = (value: T[], event: React.MouseEvent | React.KeyboardEvent) => {
        if (!disableClearSearch) {
            setSearchString('');
        }
        if (typeof onSelect === 'function') {
            onSelect({ value, event, options: { name, isShown: showList } });
        }
    };
    const getNewValue = (value: T[]) => {
        return value.reduce<T[]>((acc, item) => {
            const index = acc.findIndex((val) => JSON.stringify(val) === JSON.stringify(item));
            if (index >= 0) {
                return [...acc.filter((val, idx) => idx !== index)];
            }

            return [...acc, item];
        }, values || []);
    };
    const updateValue = (value: T | T[], event: React.MouseEvent | React.KeyboardEvent) => {
        handleSelect(getNewValue(Array.isArray(value) ? value : [value]), event);
    };

    const {
        active,
        setActive,
        setPopperElement,
        showList,
        showDropdown,
        hideDropdown,
        currentIndex,
        setCurrentIndex,
        localOptions,
        setLocalOptions,
        align,
        refSelect,
        handleClick,
        handleFocus,
        handleBlur,
        handleKeyDown,
        handleOptionMouseOver,
        handleScroll,
    } = useMultiselect<T>(props, { handleMultiselect: updateValue, forwardedRef: selectRef, ignoreFocus });

    const searchChangeHandler = (str: string) => {
        updateSearchString(str);
        showDropdown();
    };

    const searchBlurHandler = () => {
        if (!showList) {
            setSearchString('');
        }
    };
    const searchChangeWidthHandler = () => {
        calcByResize();
    };

    const handleDeleteLast = (event: React.KeyboardEvent) => {
        if (values?.length) {
            updateValue(values[values.length - 1], event);
        }
    };
    const resetAll = (event: React.MouseEvent) => handleSelect([], event);
    const selectAll = (event: React.MouseEvent) => {
        const arr = [
            ...values,
            ...localOptions.map((child: ReactNode | T) => {
                if (React.isValidElement(child) && reactNodeIsComponent(child, Option)) {
                    return (child.props.value ?? child.props.children) as T;
                }

                return child as T;
            }),
        ];

        handleSelect(
            arr.filter((obj, index, arr) => {
                return (
                    arr.findIndex((o) =>
                        typeof o !== 'string' && typeof obj !== 'string'
                            ? valueToString(o) === valueToString(obj)
                            : o === obj
                    ) === index
                );
            }),
            event
        );
    };

    const addButtonClickHandler: AddButtonProps['onClick'] = (search) => {
        hideDropdown();
        setActive(false);
        setSearchString('');
        addButtonOnClick?.(search);
    };

    // Получаем элементы для отображения в списке когда он открыт
    useEffect(() => {
        if (!options && !children && showList) {
            setLocalOptions([]);
            return;
        }
        const formationLocalOptions = (opt: T[]) => {
            setLocalOptions(
                opt.filter((item) => {
                    const name = typeof item === 'string' ? item : valueToString(item);
                    if (hideCheckboxes && values.includes(name as T)) {
                        return false;
                    }

                    return search(name, searchString);
                })
            );
        };

        if (showList) {
            if (Array.isArray(options) && options.length > 0) {
                // Если initialOptions после всех вычеслений оказались массивом
                formationLocalOptions(options);
            }
            if (typeof options === 'function') {
                // Если опции были переданы как функция
                const result = options([]);
                if (result instanceof Promise) {
                    // Если initialOptions оказались promise - ждем его выполнения
                    result.then(formationLocalOptions).catch(() => null);
                } else {
                    formationLocalOptions(result);
                }
            }
            if (children) {
                // Если опции были через children как React.ReactNode
                setLocalOptions(
                    React.Children.toArray(children as ReactNode[]).filter((item) => {
                        if (reactNodeIsComponent(item, Option<T>)) {
                            const name =
                                item.props.children ?? (item.props.value ? valueToString(item.props.value) : '');
                            const hidden =
                                item.props.hideCheckbox === undefined ? hideCheckboxes : item.props.hideCheckbox;
                            if (hidden && values.includes(name as T)) {
                                return false;
                            }

                            return search(name, searchString);
                        }

                        return true;
                    })
                );
            }
        }
    }, [showList, options, values, searchString, children, props]);

    useEffect(() => {
        if (options && Array.isArray(options)) {
            setLocalOptions(options);
        }
        if (children) {
            setLocalOptions(React.Children.toArray(children));
        }
    }, [options, children]);

    // Подготавливаем для отрисовки элементы списка
    const constructOptions = useCallback(() => {
        // Перебераем переданные опции
        const mapper = (child: ReactNode | T, index: number) => {
            // Если переданный объект унаследован от Option
            if (isValidElement(child) && reactNodeIsComponent(child, Option<T>)) {
                const optionValue = child.props.value ?? child.props.children;

                // Сравниваем значение по результату функции преведения
                // по умолчанию сравниваем по ссылке, иначе по переданной функции
                // если не указана или сравнение не удалось то пытаемся по функции возврата значения
                // по умолчанию строка или переданое пользователем.
                // Универсализация для варианта со статическим пременением,
                // когда объекты пересоздаются и невозможно сравнение по ссылке.
                const selected = values?.some((value) => optionValue && compare(optionValue as T) === compare(value));

                return React.cloneElement(child, {
                    selected,
                    valueToString,
                    active: index === currentIndex,
                    size: getDropListSizeBySelectSize(size),
                    searchString,
                    hideCheckbox: hideCheckboxes,
                    highlightCompare,
                    highlightStyle,
                    onMouseOver: () => handleOptionMouseOver(child),
                    onClick: updateValue,
                    testId: testId?.option,
                    showCheckboxOnRight: showCheckboxOnRight,
                    ...child.props, // Перезаписываем свойства если они переданы пользователем
                });
            }

            if (reactNodeHasNowrap<T>(child)) {
                return React.cloneElement(child, omitNoWrapProp(child.props));
            }

            const childProps = React.isValidElement(child) ? (child as ReactElement<object>).props : {};

            // Если переданный объект не унаследован от Option
            return (
                <Option
                    highlightCompare={highlightCompare}
                    highlightStyle={highlightStyle}
                    {...childProps}
                    key={index}
                    selected={values?.some((value) => compare(child as T) === compare(value))}
                    valueToString={valueToString}
                    value={child as T}
                    active={index === currentIndex}
                    size={getDropListSizeBySelectSize(size)}
                    searchString={searchString}
                    hideCheckbox={hideCheckboxes}
                    showCheckboxOnRight={showCheckboxOnRight}
                    onMouseOver={() => handleOptionMouseOver(child as ReactNode)}
                    onClick={updateValue}
                    testId={testId?.option}
                />
            );
        };

        // Если передан promise то ожидаем
        const prepared = localOptions instanceof Promise ? [] : localOptions.map(mapper);

        return prepared?.length || showAddButton ? (
            prepared
        ) : (
            <EmptyState
                size={getDropListSizeBySelectSize(size)}
                randomIcon={randomEmptyStateIcon}
                hideIcon={hideEmptyStateIcon}>
                {l10n('ds.multiselect.empty')}
            </EmptyState>
        );
    }, [
        localOptions,
        currentIndex,
        handleSelect,
        values,
        valueToString,
        searchString,
        compare,
        size,
        handleOptionMouseOver,
        l10n,
    ]);

    const constructTags = useCallback(() => {
        const tagDeleteHandler = (value: T, event: React.MouseEvent) => {
            const optionValue = localOptions.find(
                (item) =>
                    React.isValidElement(item) &&
                    (item as ReactElement<{ children?: string }>).props?.children === value
            );
            const newValue =
                React.isValidElement(optionValue) && reactNodeIsComponent(optionValue, Option)
                    ? optionValue.props.value || optionValue.props.children
                    : (optionValue ?? value);

            updateValue(newValue as T, event);
        };
        const moreDeleteHandler: TagProps['onDelete'] = (event) => {
            updateValue(values.slice(-count), event);
        };
        const tagSize: TagProps['size'] = generateSizeBySize<SizeType, SizeType<'xs' | 's' | 'm' | 'l'>>(
            size,
            (size) => {
                switch (size) {
                    case 'xs':
                        return 'xs';
                    case 's':
                    case 'm':
                        return 's';
                    case 'l':
                        return 'm';
                    case 'xl':
                    case 'xxl':
                        return 'l';
                    default:
                        return 'm';
                }
            }
        );

        if (values?.length) {
            const extraLabel = (count ? values.slice(-count) : []).map(valueToString).join(', ');
            const handleCrossMouseDown = () => {
                ignoreFocus.current = true;
                setTimeout(() => {
                    ignoreFocus.current = false;
                }, 0);
            };
            return (
                <>
                    {values.map((value, index) => {
                        const option = localOptions.find((option) => {
                            if (React.isValidElement(option) && reactNodeIsComponent(option, Option)) {
                                const optionValue = option.props.children ?? option.props.value;
                                return optionValue === valueToString(value);
                            }
                            return false;
                        }) as ReactElement<OptionProps> | null;
                        const optionProps = option?.props;
                        return (
                            value && (
                                <Popover
                                    key={dataKey(value)}
                                    disabled={!option?.props?.popoverProps}
                                    {...option?.props?.popoverProps}>
                                    <Tag
                                        size={tagSize}
                                        disabled={readonly || readOnly || disabled}
                                        disableTitle={
                                            optionProps?.disableTagTitle === undefined
                                                ? !!optionProps?.popoverProps
                                                : optionProps?.disableTagTitle
                                        }
                                        maxWidth={tagsWrap ? '100%' : undefined}
                                        disabledTabIndex
                                        onCrossMouseDown={handleCrossMouseDown}
                                        data-test-id={testId?.tag?.(valueToString(value))}
                                        data-testid={testId?.tag?.(valueToString(value))}
                                        onDelete={(event) => tagDeleteHandler(value, event)}
                                        onMouseOver={optionProps?.tagMouseOver}
                                        onMouseLeave={optionProps?.tagMouseLeave}>
                                        {valueToString(value)}
                                    </Tag>
                                </Popover>
                            )
                        );
                    })}
                    <Tooltip
                        visible={count ? undefined : false}
                        offset={size === 'xs' ? [2, 0] : [5, 0]}
                        action={'hover'}
                        design={'dark'}
                        content={extraLabel && <StyledTooltip>{extraLabel}</StyledTooltip>}>
                        <Tag
                            ref={extraComponentRef}
                            size={tagSize}
                            disabled={readonly || readOnly || disabled}
                            disabledTabIndex
                            data-test-id={testId?.tag?.('extra')}
                            data-testid={testId?.tag?.('extra')}
                            onCrossMouseDown={handleCrossMouseDown}
                            onDelete={moreDeleteHandler}>
                            {l10n('ds.multiselect.extra', { count: count ?? '' })}
                        </Tag>
                    </Tooltip>
                </>
            );
        }

        return null;
    }, [valueToString, values, size, handleSelect, extraComponentRef, tagsWrap, count, l10n]);

    const concretePostfix = getIcon(showList, postfix, getDropListSizeBySelectSize(size));

    useEffect(calcByResize, [size, tagsWrap]);

    if (viewOnly) {
        return (
            <ViewOnly size={getViewOnlySize(size)}>{viewOnlyText ?? values?.map(valueToString).join(', ')}</ViewOnly>
        );
    }

    const customHandleKeyDown = (event: React.KeyboardEvent) => {
        if (onAddValue && event.key === 'Enter') {
            const inputValue = (inputRef?.current ?? searchInputRef.current)?.value?.trim();

            const exists = localOptions.some((opt) => {
                const val = React.isValidElement(opt) ? (opt.props.value ?? opt.props.children) : opt;
                return valueToString(val).toLowerCase() === inputValue?.toLowerCase();
            });

            if (!exists && inputValue) {
                event.preventDefault();
                const newValue = inputValue as unknown as T;
                props.onAddValue?.(newValue);
                setSearchString('');
                return;
            }
        }

        handleKeyDown(event);
    };

    return (
        <Box
            // eslint-disable-next-line @typescript-eslint/ban-types
            {...(attrs as {})}
            ref={disableSearch ? composeRef(refSelect, ref) : refSelect}
            tabIndex={tabIndex ?? (disableSearch ? 0 : undefined)}
            role='listbox'
            aria-invalid={!!invalid}
            aria-disabled={!!disabled}
            aria-autocomplete='list'
            $design={design}
            $disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseDown={disableSearch ? handleClick : undefined}
            onKeyDown={customHandleKeyDown}>
            <StyledInputWrapper
                ref={labelRef}
                target={Current}
                design={design}
                active={active}
                invalid={invalid}
                wrap={tagsWrap}
                size={size}
                $size={size}
                $tagsWrap={tagsWrap}
                $hasTags={values.length > 0}
                $prefix={!!prefix}
                disabled={disabled}>
                {prefix && <Part>{prefix}</Part>}
                <Current $size={size} $hasTags={values.length > 0} $isMaterial={design === 'material'}>
                    {!values?.length && !searchString.length && (
                        <Placeholder $positionStatic={disableSearch} $disabled={disabled} $size={size}>
                            {placeholder}
                        </Placeholder>
                    )}
                    <Tag.Group ref={containerRef} offset={4} nowrap={!tagsWrap} fitContent={!tagsWrap}>
                        {constructTags()}
                        {!disableSearch && (
                            <Search
                                ref={ignoreComponentRef}
                                inputRef={inputRef ?? (searchInputRef as Ref<HTMLInputElement>)}
                                value={searchString}
                                disabled={disabled ?? (readonly || readOnly)}
                                testId={testId?.search}
                                onChange={searchChangeHandler}
                                onDelete={handleDeleteLast}
                                onBlur={searchBlurHandler}
                                onChangeWidth={searchChangeWidthHandler}
                            />
                        )}
                    </Tag.Group>
                </Current>
                {!hideOptionsList && (
                    <Part
                        data-test='arrow'
                        data-testid={testId?.arrow}
                        $active={active}
                        $right
                        $disableEvents={disableSearch}
                        onClick={handleClick}>
                        {concretePostfix}
                    </Part>
                )}
            </StyledInputWrapper>
            {showList && !hideOptionsList && (
                <DropListInner
                    ref={setPopperElement}
                    size={getDropListSizeBySelectSize(size)}
                    fitItems={fitOptions}
                    maxHeight={maxListHeight}
                    width={maxListWidth}
                    aria-multiselectable
                    fixed={fixed}
                    align={align}
                    followParentWhenScroll={fixed}
                    dropdownPortal={dropdownPortal}
                    containerRef={labelRef}
                    tabIndex={-1}
                    onScroll={handleScroll}>
                    {!disableSelectAll && localOptions.length && (
                        <SelectAllStyled $size={getDropListSizeBySelectSize(size)} onClick={selectAll}>
                            {l10n('ds.multiselect.selectAll')}
                        </SelectAllStyled>
                    )}
                    {constructOptions()}
                    {(showAddButton || (!disableReset && !!values?.length)) && (
                        <DropdownBottomSlot>
                            {showAddButton && (
                                <AddButton
                                    search={searchString}
                                    duplication={addButtonDuplication}
                                    onMouseOver={() => setCurrentIndex(-1)}
                                    onClick={addButtonClickHandler}>
                                    {l10n('ds.multiselect.addButton')}
                                </AddButton>
                            )}
                            {!disableReset && !!values?.length && (
                                <ResetButtonWrapperStyled>
                                    <Button
                                        grid={12}
                                        design={'outline'}
                                        size={getDropListSizeBySelectSize(size)}
                                        onClick={resetAll}>
                                        {l10n('ds.multiselect.reset')}
                                    </Button>
                                </ResetButtonWrapperStyled>
                            )}
                        </DropdownBottomSlot>
                    )}
                </DropListInner>
            )}
        </Box>
    );
};

export namespace MultiselectWithSearch {
    export type OnSelect<T = SelectValueType> = Pretty.Func<
        OnChangeHandler<T[], React.MouseEvent | React.KeyboardEvent>
    >;
}

export const MultiselectWithSearch = React.forwardRef<HTMLDivElement, MultiselectWithSearchProps>(
    MultiselectWithSearchInternal
) as unknown as (<T, B>(
    props: MultiselectWithSearchProps<T, B> & RefAttributes<HTMLDivElement>
) => React.ReactElement) & {
    displayName?: string;
    Option: typeof Option;
};

MultiselectWithSearch.displayName = 'MultiselectWithSearch';
MultiselectWithSearch.Option = Option;
