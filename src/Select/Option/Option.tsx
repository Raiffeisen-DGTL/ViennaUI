import React, { useCallback, useRef, ReactNode, PropsWithChildren } from 'react';
import { useIsomorphicLayoutEffect } from 'vienna.react-use';
import { StyledOption, PropsStyledOption, Value } from './Option.styles';
import { ResponsiveProp, Breakpoints } from '../../Utils/responsiveness';
import { BoxStyled } from '../../Utils/styled';
import { DefaultValueToString, SelectValueType, SizeType, ValueToStringType } from '../../Utils';

export interface OptionProps<T = SelectValueType, B = Breakpoints>
    extends Omit<BoxStyled<typeof StyledOption, PropsStyledOption>, 'onClick'> {
    /** ID компонента */
    id?: string;

    /** Название стиля для компонента (опционально) */
    className?: string;

    /** True - если надо подсветить как активный */
    hover?: boolean;

    /** True - если надо подсветить как выбранный */
    selected?: boolean;

    /** True - если надо подсветить как не активный */
    disabled?: boolean;

    /** Иконка когда selected = true */
    icon?: ReactNode;

    /** Значение элемента (должно совпадать по интерфейсу с элементом переданым в value Multiselect) */
    value?: T;

    /** Размеры (наследуются от родителя если не указано иначе) */
    size?: ResponsiveProp<SizeType<'s' | 'm' | 'l'>, B>;

    /** Переносить содержимое (по умолчанию троеточие) */
    wrapLine?: boolean;

    /** Наследуется от родителя если не указано иначе */
    valueToString?: ValueToStringType<T>;

    /** Транслируется в onSelect метод родителя может быть перехвачено */
    onClick?: (value: T, e: React.MouseEvent) => void;

    children?: ReactNode;

    /** Кастомизируется возможность выбора одной иконки */
    selectedIcon?: ReactNode;

    testId?: (val: string | React.ReactNode) => string;
}

export const Option = <T,>(props: PropsWithChildren<OptionProps<T>>): React.JSX.Element => {
    const {
        hover,
        selected,
        icon,
        children,
        value,
        onClick,
        wrapLine,
        disabled,
        size,
        valueToString = DefaultValueToString<T>,
        selectedIcon,
        testId,
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

            if (disabled || !onClick) return;

            const newValue = value === null ? value : (value ?? (typeof children === 'string' ? children : ''));

            onClick(newValue as T, e);
        },
        [onClick, value, children, disabled]
    );

    useIsomorphicLayoutEffect(() => {
        if (ref.current?.parentNode && selected) {
            const parent = ref.current.parentNode as HTMLDivElement;
            const optionHeight = ref.current.clientHeight;
            const optionBottom = ref.current.offsetTop + optionHeight;
            const parentHeight = parent.clientHeight;

            if (optionBottom > parent.scrollTop + parentHeight) {
                parent.scrollTop = optionBottom - parentHeight;
            } else {
                parent.scrollTop = ref.current.offsetTop;
            }
        }
    }, [selected]);

    useIsomorphicLayoutEffect(() => {
        if (ref.current?.parentNode && hover && !localHover.current) {
            const parent = ref.current.parentNode as HTMLDivElement;
            const optionHeight = ref.current.clientHeight;
            const optionBottom = ref.current.offsetTop + optionHeight;
            const parentHeight = parent.clientHeight;

            if (optionBottom > parent.scrollTop + parentHeight) {
                parent.scrollTop = optionBottom - parentHeight;
            } else {
                parent.scrollTop = ref.current.offsetTop;
            }
        }
    }, [hover]);

    if (value === undefined && children === undefined) {
        console.error('Элемент должен содержать свойство value или children'); // eslint-disable-line
        return <></>;
    }

    return (
        <StyledOption
            data-testid={testId?.(children ?? (value !== undefined ? valueToString(value) : ''))}
            {...attrs}
            ref={ref}
            hover={hover}
            selected={selected}
            disabled={disabled}
            wrapLine={wrapLine}
            icon={selectedIcon ?? icon}
            size={size}
            $hover={hover}
            $selected={selected}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}>
            <Value $wrapLine={wrapLine}>{children ?? (value !== undefined ? valueToString(value) : '')}</Value>
        </StyledOption>
    );
};

Option.displayName = 'Option';
