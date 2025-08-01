/* eslint-disable react-hooks/rules-of-hooks */
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    RefAttributes,
    ReactNode,
    FormEvent,
    UIEvent,
    Ref,
    FC,
    RefObject,
    ReactElement,
    ChangeEventHandler,
    isValidElement,
} from 'react';
import { SelectOpenDownIcon, SelectHideIcon, CloseCancelXIcon } from 'vienna.icons';
import { useMask, IMaskProps } from 'vienna.react-use';
import { Box, ClearButton, Current, DropdownBottomSlot, Part, Placeholder, StyledInputWrapper } from './Select.styles';
import { Option, OptionProps } from './Option';
import { SelectLocalizationProps, defaultSelectLocalization } from './localization';
import { NativeInput } from '../Input';
import { DropList } from '../DropList';
import { useLocalization } from '../Localization';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';
import {
    useSelect,
    PropsType as UseSelectPropsType,
    DefaultValueToString,
    DefaultCompare,
    reactNodeIsComponent,
    type SizeType,
    type DesignType,
    type SelectValueType,
    type ValueToStringType,
    type CompareType,
    reactNodeHasNowrap,
    omitNoWrapProp,
    getDropListSizeBySelectSize,
    getIcon,
    Postfix,
    OnChangeHandler,
    SelectServiceType,
    AnyObject,
    Pretty,
} from '../Utils';
import { PropsType as UseDropdownProps, useDropdown } from '../Utils/useDropdown';
import { ViewOnly, WithViewOnly } from '@/ViewOnly';
import { getViewOnlySize } from '@/ViewOnly/utils';
import { AddButton } from '@/shared/AddButton';
import { isFalsy } from '@/Utils/isFalsy/isFalsy';

export const defaultSelectTestId: SelectTestId = {
    container: 'select_container',
    input: 'select_input',
    droplist: 'select_droplist',
    current: 'select_current',
    placeholder: 'select_placeholder',
    prefix: 'select_prefix',
    postfix: 'select_postfix', // 'part'
    option: (val: string | React.ReactNode) => `select_option-${val?.toString() ?? ''}`,
};

export interface Data<T> {
    props: SelectProps<T>;
    currentIndex: number;
    Option: FC<OptionProps<T>>;
}

export type ChildrenFunc = <T = SelectValueType>(data: Data<T>) => ReactNode;

export type SelectChangeEvent<T = FormEvent<HTMLInputElement>> = (
    event: T,
    data?: { name?: string; value?: string; originalValue?: string }
) => void;

export type SelectScrollEvent<T = UIEvent<HTMLInputElement>> = (
    event: T,
    data: {
        target: HTMLDivElement;
        height: number;
        scrollTop: number;
        scrollHeight: number;
    }
) => void;

export interface SelectTestId {
    container?: string;
    input?: string;
    droplist?: string;
    current?: string;
    placeholder?: string;
    prefix?: string;
    postfix?: string;
    option?: (val: string | React.ReactNode) => string;
}

export interface SelectProps<T = SelectValueType, B = Breakpoints>
    extends Omit<
            BoxStyled<typeof Box, object>,
            | 'prefix'
            | 'children'
            | 'onClick'
            | 'onKeyDown'
            | 'onScroll'
            | 'onFocus'
            | 'onBlur'
            | 'onSelect'
            | 'onChange'
        >,
        Omit<IMaskProps, 'value'>,
        Pick<UseSelectPropsType, 'onKeyDown' | 'onFocus' | 'onBlur' | 'name' | 'openWhenFocus'>,
        UseDropdownProps<T>,
        WithViewOnly,
        SelectLocalizationProps {
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

    /** Порядок получения фокуса (-1 = компонент не участвует в фокусировке по нажатию TAB)  */
    tabIndex?: number;

    /** Компонент отображается как ошибочный если true */
    invalid?: boolean;

    /** Выбранный элемент (интерфейсы объектов options и value должны совпадать) */
    value?: T;

    /** Выбранный элемент (интерфейсы объектов options и value должны совпадать) */
    inputValue?: string; // TODO - временное свойство! следует убрать при первом же рефакторинге

    /** Шаблон отображения выбранного элемента при закрытом списке */
    templateValue?: ReactNode;

    smartPlaceholder?: ReactNode;

    /** Размеры */
    size?: ResponsiveProp<SizeType, B>;

    /** Дизайн */
    design?: DesignType;

    /** Максимальная высота выпадающего списка в пикселях */
    maxListHeight?: number;
    /** Максимальная ширина выпадающего списка в пикселях */
    maxListWidth?: number;

    /** Обработчик события при выборе элемента списка  */
    onSelect?: OnChangeHandler<T | undefined, React.MouseEvent | React.KeyboardEvent>;

    /** Обработчик события при наборе текста с активным флагом editable */
    onChange?: OnChangeHandler<string, React.ChangeEvent<HTMLInputElement>, { originalValue: string; name?: string }>;

    /** Обработчик события при клике на компонент  */
    onClick?: React.MouseEventHandler<HTMLInputElement>;

    /** Элементы выпадающего списка в случае если не используется свойство options  */
    children?: ReactNode | ChildrenFunc;

    /** Отображает input при фокусе, позволяет набирать текст  */
    editable?: ReactNode | ChildrenFunc;

    /** Если установлено то выравнивает содержимое списка по ширине компонента (по умолчанию true)  */
    fitOptions?: boolean;

    /** Определяем значение которое надо вывести в селекте как текст выбранного значения */
    valueToString?: ValueToStringType<T>;

    assertWithVTS?: boolean;

    /** Определяем как сравнивать переданый в value объект и содержимое списка для подсветки выбраного элемента */
    compare?: CompareType<T>;
    fixed?: boolean;
    ref?: Ref<HTMLDivElement>;
    inputRef?: RefObject<HTMLInputElement>;
    dropdownPortal?: HTMLElement | React.MutableRefObject<HTMLElement | null> | null;

    /** Показываем или нет кнопку очистки выбранного поля */
    clearButton?: boolean;

    /** Если установлено, то onSelect будет вызываться с первым элементом из списка по нажатию на Enter,
     *  если ничего не выбрано (по умолчанию false)
     * */
    selectFirstOnEnter?: boolean;

    /** Ref, принимающий функции для программного focus/blur  */
    controlsRef?: React.MutableRefObject<SelectServiceType | null>;

    /** Возможность передавать коллбэк для кнопки очистки значения в селекте */
    onClear?: () => void;
    tabIndexClearButton?: number;
    /** Показать кнопку «Добавить» */
    showAddButton?: boolean;
    /** Обработчик события клика по кнопке «Добавить» */
    addButtonOnClick?: () => void;

    testId?: SelectTestId;
}

const defaultPostfix = { down: <SelectOpenDownIcon />, up: <SelectHideIcon /> };

const SelectInternal = <T,>(props: SelectProps<T>, ref: Ref<HTMLDivElement>): React.JSX.Element => {
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
        maxListHeight = 300,
        maxListWidth,
        valueToString = DefaultValueToString<T>,
        assertWithVTS,
        compare = DefaultCompare<T>,
        onSelect,
        onChange,
        onKeyDown,
        children,
        onFocus,
        onBlur,
        onToggle,
        onScroll,
        readonly,
        readOnly,
        align: alignExternal,
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
        inputRef: outerInputRef,
        dropdownPortal,
        clearButton = false,
        selectFirstOnEnter,
        openWhenFocus,
        controlsRef,
        viewOnly,
        viewOnlyText,
        onClear,
        tabIndexClearButton = 0,
        showAddButton,
        addButtonOnClick,
        testId = defaultSelectTestId,
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

    const innerRef = useRef<HTMLInputElement>(null);
    const labelRef = useRef<HTMLLabelElement>(null);
    const inputRef = outerInputRef ?? innerRef; // указатель на input
    const inputDirtyRef = useRef(false);

    const {
        popperElement,
        setPopperElement,
        showList,
        currentIndex,
        setCurrentIndex,
        changeCurrentIndex,
        localOptions,
        setLocalOptions,
        align,
        showDropdown,
        hideDropdown,
        handleOptionMouseOver,
        handleScroll,
    } = useDropdown<T>({
        disabled,
        align: alignExternal,
        options,
        onToggle,
        onScroll,
        readonly,
        readOnly,
    });

    const { refSelect, handleSelect, handleClick, handleFocus, handleBlur, handleKeyDown } = useSelect<T>({
        name,
        selectFirstOnEnter,
        openWhenFocus,
        onSelect,
        onBlur,
        onFocus,
        onKeyDown,
        value,
        valueToString,
        forwardedRef: ref,
        inputRef,
        controlsRef,
        inputDirtyRef,
        localOptions,
        showDropdown,
        popperElement,
        hideDropdown,
        showList,
        currentIndex,
        changeCurrentIndex,
    });

    // Подготавливаем для отрисовки элементы списка
    const constructOptions = useCallback(() => {
        // Перебераем переданные опции
        const mapper = (child: ReactNode | T, index: number) => {
            // Если переданный объект унаследован от Option
            if (isValidElement(child) && reactNodeIsComponent(child, Option<T>)) {
                const optionValue =
                    child.props.value ??
                    ((typeof child.props.children === 'string' ? child.props.children : undefined) as T);

                // Сравниваем значение по результату функции приведения
                const selected =
                    optionValue && value
                        ? compare(optionValue) === compare(value)
                        : value
                          ? valueToString(optionValue) === valueToString(value)
                          : false;

                return React.cloneElement<OptionProps<T>>(child, {
                    selected,
                    valueToString,
                    hover: index === currentIndex,
                    size: getDropListSizeBySelectSize(size),
                    onMouseOver: () => handleOptionMouseOver(child),
                    onClick: handleSelect,
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
                    {...childProps}
                    key={index}
                    selected={value && child ? compare(child as T) === compare(value) : false}
                    valueToString={valueToString}
                    value={child as T}
                    hover={index === currentIndex}
                    size={getDropListSizeBySelectSize(size)}
                    onMouseOver={() => handleOptionMouseOver(child as ReactNode)}
                    onClick={handleSelect}
                />
            );
        };

        // Ессли передан promise то ожидаем
        const prepared = localOptions instanceof Promise ? [] : localOptions.map(mapper);

        return prepared?.length || showAddButton ? prepared : <Option disabled>{l10n('ds.select.empty')}</Option>;
    }, [localOptions, currentIndex, handleSelect, value, valueToString, compare, size, handleOptionMouseOver, l10n]);

    // Обработка набора текста
    const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (!inputRef.current) return;

        inputDirtyRef.current = true;
        const value = event.target.value;
        onChange?.({
            value: mask ? valueToMask(value) : value,
            event,
            options: {
                name,
                originalValue: mask ? maskToValue(value) : value,
            },
        });
    };

    const innerContent = useMemo((): ReactNode => {
        // Добавляем маску если надо
        const formattedValue = inputValue && mask ? (valueToMask(inputValue) as string) : inputValue;
        // Формируем Input, используем NativeInput так как он лишен отступов и обводок
        const input = editable ? (
            <NativeInput
                id='editable-input'
                data-testid={testId?.input}
                ref={inputRef}
                size={size}
                design={design}
                smartPlaceholder={(inputValue && smartPlaceholder) ?? toPlaceholder(inputValue as string)}
                autoComplete='off'
                onChange={changeHandler}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={templateValue && !showList ? undefined : placeholder}
                // делаем компонент неуправляемым при отсутствии props inputValue !!! TODO убрать при первом же рефакторинге
                // проверяем что inputValue - существует и если это так то формируем объект с value и добавляем его к пропсам
                {...(inputValue !== undefined ? { value: formattedValue } : {})}
                style={{ opacity: templateValue && !showList ? '0' : '1', transition: 'none' }}
            />
        ) : null;

        const actualTemplate = input ? (
            <div style={{ position: 'absolute', width: '100%' }}>{templateValue}</div>
        ) : (
            templateValue
        );

        const template = templateValue && (!input || !showList) ? actualTemplate : null;

        const valueString =
            input || template ? null : isFalsy(value) ? (
                <Placeholder $disabled={disabled} data-testid={testId?.placeholder}>
                    {placeholder}
                </Placeholder>
            ) : (
                !isFalsy(value) && valueToString(value)
            );

        return (
            <>
                {input}
                {template}
                {valueString}
            </>
        );
    }, [
        placeholder,
        value,
        inputValue,
        templateValue,
        size,
        valueToString,
        changeHandler,
        showList,
        editable,
        design,
        valueToMask,
        mask,
        toPlaceholder,
        smartPlaceholder,
        disabled,
    ]);

    // Создаем иконку для закрытия/открытия списка по правилам гайдов
    const concretePostfix = getIcon(showList, postfix, size);

    const clearButtonClickHandler = useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            e.preventDefault();
            handleSelect(undefined, e);
            onClear?.();
        },
        [handleSelect, onClear]
    );

    const clearButtonKeyDownHandler = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') {
                e.stopPropagation();
                handleSelect(undefined, e);
            }
        },
        [handleSelect]
    );

    // Получаем элементы для отображения в списке когда он открыт
    useEffect(() => {
        if (showList) {
            if (Array.isArray(options)) {
                // Если initialOptions после всех вычеслений оказались массивом
                setLocalOptions(options);
            }
            if (typeof options === 'function') {
                // Если опции были переданы как функция
                const result = options([]);
                if (result instanceof Promise) {
                    // Если initialOptions оказались promise - ждем его выполнения
                    result.then(setLocalOptions).catch(() => null);
                } else {
                    setLocalOptions(result);
                }
            }
            if (typeof children === 'function') {
                // Если опции были через children ввиде функции
                setLocalOptions(children<T>({ props, currentIndex: 0, Option: Option<T> }) as ReactNode[]);
                return;
            }
            if (children) {
                // Если опции были через children как ReactNode
                setLocalOptions(React.Children.toArray(children));
            }
        }
    }, [showList, options, children, props]);

    // Синхронизация currentIndex с изменениями value и localOptions
    useEffect(() => {
        const newIndex = localOptions.findIndex((v) => {
            const isValid = React.isValidElement(v);
            const optionVal = isValid ? extractValue(v.props.value || v.props.children) : v;
            const assertedVal = assertWithVTS && isValid ? valueToString(v.props.value) : optionVal;

            if (assertedVal === null) return false;

            return assertedVal === (value ? valueToString(value) : '');
        });

        setCurrentIndex(newIndex);
    }, [localOptions, value, valueToString]);

    if (viewOnly) {
        return <ViewOnly size={getViewOnlySize(size)}>{viewOnlyText ?? (value ? valueToString(value) : '')}</ViewOnly>;
    }
    return (
        <Box
            data-testid={testId?.container}
            {...attrs}
            ref={refSelect}
            tabIndex={editable ? undefined : tabIndex}
            role='listbox'
            aria-invalid={!!invalid}
            aria-disabled={!!disabled}
            aria-autocomplete='list'
            $disabled={disabled}
            onFocus={editable ? undefined : handleFocus}
            onBlur={editable ? undefined : handleBlur}
            onMouseDown={handleClick}
            onKeyDown={handleKeyDown}>
            <StyledInputWrapper
                ref={labelRef}
                target={Current}
                design={design}
                active={showList}
                invalid={invalid}
                size={size}
                disabled={disabled}>
                {prefix && (
                    <Part onMouseDown={(e) => e.preventDefault()} data-testid={testId?.prefix}>
                        {prefix}
                    </Part>
                )}
                <Current $size={size} $hasTemplate={!!(editable && templateValue)} data-testid={testId?.current}>
                    {innerContent}
                </Current>
                {clearButton && value && (
                    <ClearButton
                        $size={size}
                        tabIndex={tabIndexClearButton}
                        role='button'
                        id='clear-button'
                        onClick={clearButtonClickHandler}
                        onKeyDown={clearButtonKeyDownHandler}
                        onMouseDown={(e: React.MouseEvent) => {
                            e.stopPropagation();
                        }}
                        onFocus={(e: React.FocusEvent) => {
                            e.stopPropagation();
                        }}>
                        <CloseCancelXIcon size={getDropListSizeBySelectSize(size)} />
                    </ClearButton>
                )}
                <Part data-testid={testId?.postfix} $active={showList}>
                    {concretePostfix}
                </Part>
            </StyledInputWrapper>
            {showList && (
                <DropList
                    ref={setPopperElement}
                    size={getDropListSizeBySelectSize(size)}
                    fitItems={fitOptions}
                    maxHeight={maxListHeight}
                    fixed={fixed}
                    width={maxListWidth}
                    followParentWhenScroll={fixed}
                    align={align}
                    containerRef={labelRef}
                    dropdownPortal={dropdownPortal}
                    onScroll={handleScroll}
                    data-testid={testId?.droplist}>
                    {constructOptions()}
                    {showAddButton && (
                        <DropdownBottomSlot>
                            <AddButton onMouseOver={() => setCurrentIndex(-1)} onClick={() => addButtonOnClick?.()}>
                                {l10n('ds.select.addButton')}
                            </AddButton>
                        </DropdownBottomSlot>
                    )}
                </DropList>
            )}
        </Box>
    );
};

export namespace Select {
    export type OnSelect<T = string | AnyObject> = Pretty.Func<
        OnChangeHandler<T | undefined, React.MouseEvent | React.KeyboardEvent>
    >;
    export type OnChange = Pretty.Func<
        OnChangeHandler<string, React.ChangeEvent<HTMLInputElement>, { originalValue: string; name?: string }>
    >;
}

export const Select = React.forwardRef(SelectInternal) as unknown as (<T, B>(
    props: SelectProps<T, B> & RefAttributes<HTMLDivElement>
) => React.ReactElement) & {
    displayName?: string;
    Option: typeof Option;
};

Select.displayName = 'Select';
Select.Option = Option;

function extractValue(data: unknown): string | number | null {
    if (Array.isArray(data)) return extractValue(data[0]);
    if (typeof data === 'string' || typeof data == 'number') return data;
    if (typeof data !== 'object' || data === null || !('value' in data)) return null;

    return extractValue((data as { value: unknown }).value);
}
