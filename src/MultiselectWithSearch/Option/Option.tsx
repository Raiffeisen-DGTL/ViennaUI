import React, { useCallback, useRef, MouseEventHandler, PropsWithChildren, useMemo } from 'react';
import { useIsomorphicLayoutEffect } from 'vienna.react-use';
import { StyledOption, StyledCheckbox, Value } from './Option.styles';
import { Highlight, HighlightProps } from '../../Highlight';
import { DefaultValueToString, type SizeType, type SelectValueType, type ValueToStringType, omit } from '../../Utils';
import { Breakpoints, ResponsiveProp } from '../../Utils/responsiveness';
import { PopoverProps } from '@/Popover';

export interface OptionProps<T = SelectValueType, B = Breakpoints> {
    /** ID компонента */
    id?: string;

    /** Название стиля для компонента (опционально) */
    className?: string;

    /** True - если надо подсветить как активный */
    active?: boolean;

    /** True - если надо подсветить как выбранный */
    selected?: boolean;

    /** True - если надо подсветить как не активный */
    disabled?: boolean;

    /** Значение элемента (должно совпадать по интерфейсу с элементом переданым в value Multiselect) */
    value?: T;

    /** Размеры (наследуются от родителя если не указано иначе) */
    size?: ResponsiveProp<SizeType<'s' | 'm' | 'l'>, B>;

    /** Наследуется от родителя если не указано иначе */
    valueToString?: ValueToStringType<T>;

    highlightCompare?: NonNullable<HighlightProps['compare']>;
    highlightStyle?: NonNullable<HighlightProps['style']>;

    searchString?: string;

    hideCheckbox?: boolean;

    /** Переносить содержимое (по умолчанию троеточие) */
    wrapLine?: boolean;

    /** Транслируется в onSelect метод родителя может быть перехвачено */
    onClick?: (value: T, event: React.MouseEvent) => void;
    onMouseOver?: MouseEventHandler;

    /** Устанавливает data-test-id аттрибут */
    testId?: (val: string | React.ReactNode) => string;

    popoverProps?: Omit<PopoverProps<HTMLDivElement>, 'children'>;
    tagMouseOver?: React.MouseEventHandler<HTMLSpanElement>;
    tagMouseLeave?: React.MouseEventHandler<HTMLSpanElement>;
    disableTagTitle?: boolean;
    /** Возможность показать чекбокс справа */
    showCheckboxOnRight?: boolean;
}

export const Option = <T,>(props: PropsWithChildren<OptionProps<T>>): React.JSX.Element => {
    const {
        active,
        selected,
        children,
        value,
        onClick,
        disabled,
        className,
        valueToString = DefaultValueToString<T>,
        highlightCompare,
        highlightStyle,
        searchString,
        hideCheckbox,
        wrapLine,
        testId,
        showCheckboxOnRight,
        size,
        ...attrs
    } = props;

    const ref = useRef<HTMLDivElement>(null);
    const localHover = useRef<boolean>(false);

    const handleMouseEnter = useCallback(() => {
        localHover.current = true;
    }, []);

    const handleMouseOut = useCallback(() => {
        localHover.current = false;
    }, []);

    const handleMouseDown = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();

            if (disabled || !onClick) return;

            const newValue = value ?? children?.toString() ?? '';
            onClick(newValue as T, e);
        },
        [onClick, value, children, disabled]
    );

    const handleChangeCheckbox = useCallback((e: React.ChangeEvent) => {
        e.stopPropagation();
    }, []);

    useIsomorphicLayoutEffect(() => {
        if (ref.current?.parentNode && active && !localHover.current) {
            ref.current.scrollIntoView({ block: 'center' });
        }
    }, [active]);

    const valueToStringMemo = useMemo(() => {
        return children ?? (value ? valueToString(value) : '');
    }, [valueToString, value, children]);

    if (!value && !children) {
        console.error('Элемент должен содержать свойство value или children'); // eslint-disable-line
        return <></>;
    }

    return (
        <StyledOption
            {...omit(attrs, 'popoverProps', 'tagMouseOver', 'tagMouseLeave', 'disableTagTitle')}
            className={className}
            ref={ref}
            hover={active}
            disabled={disabled}
            wrapLine={wrapLine}
            $active={active}
            $selected={selected}
            size={size}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}
            data-test-id={testId?.(valueToStringMemo)}
            data-testid={testId?.(valueToStringMemo)}>
            {!hideCheckbox && !showCheckboxOnRight && (
                <StyledCheckbox
                    size={props.size}
                    checked={selected}
                    disabled={disabled}
                    onChange={handleChangeCheckbox}
                />
            )}
            <Value $wrapLine={wrapLine}>
                <Highlight query={searchString ?? ''} compare={highlightCompare} style={highlightStyle}>
                    {valueToStringMemo}
                </Highlight>
            </Value>
            {!hideCheckbox && showCheckboxOnRight && (
                <StyledCheckbox
                    size={props.size}
                    checked={selected}
                    disabled={disabled}
                    $showCheckboxOnRight={showCheckboxOnRight}
                    onChange={handleChangeCheckbox}
                />
            )}
        </StyledOption>
    );
};

Option.displayName = 'Option';
