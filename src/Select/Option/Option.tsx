import React, { useCallback, useRef, FC, ReactNode } from 'react';
import { useIsomorphicLayoutEffect } from '@fcc/react-use';
import { Checkmark } from '@fcc/icons';
import { StyledOption, PropsStyledOption, Value, Icon } from './Option.styles';
import { ResponsiveProp, Breakpoints } from '../../Utils/responsiveness';
import { BoxStyled } from '../../Utils/styled';

export interface OptionProps<B = Breakpoints>
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
    value?: any;

    /** Размеры (наследуются от родителя если не указано иначе) */
    size?: ResponsiveProp<'s' | 'm' | 'l', B>;

    /** Переносить содержимое (по умолчанию троеточие) */
    wrapLine?: boolean;

    /** Наследуется от родителя если не указано иначе */
    valueToString?: (item: any) => string;

    /** Транслируется в onSelect метод родителя может быть перехвачено */
    onClick?: (e, value) => void;

    children?: ReactNode;
}

export const Option: FC<OptionProps> = (props) => {
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
        valueToString = (item) => (typeof item === 'string' ? item : item?.value),
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
        (e) => {
            e.preventDefault();
            if (!disabled && typeof onClick === 'function') {
                if (value === null) {
                    onClick(e, value);
                } else {
                    onClick(e, value ?? children);
                }
            }
        },
        [onClick, value, children, disabled]
    );

    useIsomorphicLayoutEffect(() => {
        if (ref.current && ref.current.parentNode && selected) {
            (ref.current.parentNode as HTMLDivElement).scrollTop = ref.current.offsetTop;
        }
    }, [selected]);

    useIsomorphicLayoutEffect(() => {
        if (ref.current && ref.current.parentNode && hover && !localHover.current) {
            (ref.current.parentNode as HTMLDivElement).scrollTop = ref.current.offsetTop;
        }
    }, [hover]);

    if (value === undefined && children === undefined) {
        console.error('Элемент должен содержать свойство value или children'); // eslint-disable-line
        return <></>;
    }

    const iconSize = size === 's' ? 's' : 'm';

    return (
        <StyledOption
            {...(attrs as {})}
            ref={ref}
            hover={hover}
            selected={selected}
            disabled={disabled}
            wrapLine={wrapLine}
            size={size}
            $hover={hover}
            $selected={selected}
            onMouseEnter={handleMouseEnter}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}>
            <Value $wrapLine={wrapLine}>{children ?? valueToString(value)}</Value>
            {selected && <Icon>{icon ?? <Checkmark size={iconSize} />}</Icon>}
        </StyledOption>
    );
};
