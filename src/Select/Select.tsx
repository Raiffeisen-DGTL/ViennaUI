/* eslint-disable react-hooks/rules-of-hooks */
import React, {
    useCallback,
    useEffect,
    useRef,
    ForwardRefExoticComponent,
    RefAttributes,
    ReactNode,
    FormEvent,
    UIEvent,
    Ref,
    FC,
    RefObject,
} from 'react';
import { SelectOpenDown, SelectHide } from 'vienna.icons';
import { useMask, IMaskProps } from 'vienna.react-use';
import { Box, Current, Part, Placeholder, StyledInputWrapper } from './Select.styles';
import { Option, OptionProps } from './Option';
import { SelectLocalizationProps, defaultSelectLocalization } from './localization';
import { NativeInput } from '../Input';
import { DropList } from '../DropList';
import { useLocalization } from '../Localization';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';
import { useSelect, PropsType as UseSelectPropsType } from '../Utils/useSelect';

interface Data {
    props: SelectProps;
    currentIndex: number;
    Option: FC<OptionProps>;
}

type ChildrenFunc = (data: Data) => ReactNode;

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
    extends Omit<BoxStyled<typeof Box, {}>, 'prefix' | 'children' | 'onKeyDown' | 'onScroll' | 'onFocus' | 'onBlur'>,
        Omit<IMaskProps, 'value'>,
        UseSelectPropsType,
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

    /** Обработчик события при выборе элемента списка  */
    onSelect?: SelectEvent<FormEvent<HTMLInputElement>>;

    /** Обработчик события при наборе текста с активным флагом editable */
    onChange?: SelectChangeEvent<FormEvent<HTMLInputElement>>;

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
    ref?: Ref<HTMLDivElement>;
    inputRef?: RefObject<HTMLInputElement>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const omitNoWrapProp = ({ __nowrap__, ...props }) => props;

const reactNodeIsComponent = (elem: ReactNode, component: React.FC): boolean => {
    return React.isValidElement(elem) ? elem?.type?.toString() === component.toString() : false;
};

const reactNodeHasNowrap = (elem: ReactNode): boolean => {
    return React.isValidElement(elem) ? Boolean(elem.props?.__nowrap__) : false;
};

const defaultPostfix = { down: <SelectOpenDown />, up: <SelectHide /> };

const getIcon = (flag, icons, size) => {
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
            maxListHeight = 300,
            maxListWidth,
            valueToString = (item) =>
                typeof item !== 'object' || item === null ? item : (item as { value: string })?.value ?? '',
            compare = (item) => item?.value ?? item,
            onSelect,
            onChange,
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
            fixed,
            localization,
            inputRef: outerInputRef,
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
        const inputRef = outerInputRef ?? innerRef; // указатель на input

        // Универсальный обработчик выбора
        const handleSelect = useCallback(
            (event, selectedValue) => {
                if (selectedValue) {
                    /* eslint-disable @typescript-eslint/no-use-before-define */
                    hideDropdown();
                }
                if (typeof onSelect === 'function') {
                    onSelect(event, { name, value: selectedValue });
                }
            },
            [onSelect, name]
        );

        const {
            active,
            setPopperElement,
            showList,
            hideDropdown,
            currentIndex,
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
        } = useSelect(props, { handleSelect, forwardedRef: ref });

        // Обрабатываем щелчок по элементу - что бы предотвратить уход фокуса с селекта
        const MouseDownHandler = useCallback(
            (event) => {
                event.preventDefault();
                if (refSelect.current) {
                    refSelect.current.focus();
                }
            },
            [refSelect]
        );

        // Подготавливаем для отрисовки элементы списка
        const constructOptions = useCallback(() => {
            // Перебераем переданные опции
            const mapper = (child: any, index: number) => {
                // Если переданный объект унаследован от Option
                if (reactNodeIsComponent(child, Option)) {
                    const optionValue = child.props.value ?? child.props.children;

                    // Сравниваем значение по результату функции приведения
                    const selected = optionValue
                        ? compare(optionValue) === compare(value)
                        : valueToString(Option) === valueToString(value);

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
                        selected={compare(child) === compare(value)}
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

            // Добавляем маску если надо
            const formattedValue = inputValue && mask ? valueToMask(inputValue) : inputValue;

            // Формируем Input, используем NativeInput так как он лишен отступов и обводок
            const result =
                (editable && showList ? (
                    <NativeInput
                        ref={inputRef}
                        size={size}
                        design={design}
                        smartPlaceholder={(inputValue && smartPlaceholder) ?? toPlaceholder(inputValue as string)}
                        onChange={changeHandler}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onMouseDown={(e) => e.preventDefault()}
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

        // Создаем иконку для закрытия/открытия списка по правилам гайдов
        const concretePostfix = getIcon(showList, postfix, size);
        return (
            <Box
                {...(attrs as {})}
                ref={refSelect}
                tabIndex={tabIndex}
                role='listbox'
                aria-invalid={!!invalid}
                aria-disabled={!!disabled}
                aria-autocomplete='list'
                onFocus={handleFocus}
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
                        ref={setPopperElement as any}
                        size={getdropListSizeBySelectSize(size)}
                        fitItems={fitOptions}
                        maxHeight={maxListHeight}
                        fixed={fixed}
                        width={maxListWidth}
                        followParentWhenScroll={fixed}
                        align={align}
                        onHide={hideDropdown}
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
