import React, { ReactNode, RefAttributes, useEffect, useRef } from 'react';
import { CheckmarkIcon } from 'vienna.icons';
import { Box, Icon, PropsBox, ItemWrapper, DescriptionWrapper } from './Item.styles';
import { Breakpoints } from '../../Utils/responsiveness';
import { BoxStyled } from '../../Utils/styled';
import { SelectValueType } from '../../Utils';

export interface ItemProps<Value = SelectValueType, B = Breakpoints>
    extends Omit<BoxStyled<typeof Box, PropsBox>, 'onClick'> {
    /** Размеры */
    size?: PropsBox<B>['$size'];
    /** Состояние hover строки */
    hover?: PropsBox<B>['$hover'];
    /** Состояние selected строки */
    selected?: PropsBox<B>['$selected'];
    /** Компонент неактивен если true */
    disabled?: PropsBox<B>['$disabled'];
    /** Состояние, когда строка не обрезается, а переносится */
    wrapLine?: PropsBox<B>['$wrapLine'];
    /** Следует ли проскролить к этому компоненту */
    scrollWhenHovered?: boolean;
    value?: Value;
    icon?: ReactNode;
    description?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const ItemInternal = <Value,>(props: ItemProps<Value>, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
        children,
        hover,
        size = 'm',
        scrollWhenHovered = false,
        disabled,
        selected,
        wrapLine,
        icon,
        description,
        onClick,
        ...attrs
    } = props;

    const boxRef = useRef<HTMLDivElement>(null);

    // Перенаправляем ref наружу в зависимости от его вида (функция или useRef для react > 16)
    useEffect(() => {
        if (typeof ref === 'function') {
            ref(boxRef.current);
        } else if (ref && 'current' in ref) {
            ref.current = boxRef.current;
        }
    });

    useEffect(() => {
        selected &&
            boxRef?.current?.scrollIntoView?.({
                behavior: 'smooth',
                block: 'nearest',
            });
    }, [selected]);
    useEffect(() => {
        if (boxRef.current && boxRef.current.parentNode && hover && scrollWhenHovered) {
            (boxRef.current.parentNode as HTMLDivElement).scrollTop = boxRef.current.offsetTop;
        }
    }, [hover, scrollWhenHovered]);

    const iconSize = size === 's' ? 's' : 'm';

    return (
        <Box
            {...attrs}
            ref={boxRef}
            $hover={hover}
            $size={size}
            $disabled={disabled}
            $selected={selected}
            $wrapLine={wrapLine}
            role='option'
            aria-disabled={!!disabled}
            aria-selected={!!selected}
            onClick={disabled ? undefined : onClick}>
            <ItemWrapper>
                {children}
                {selected && <Icon>{icon ?? <CheckmarkIcon size={iconSize} />}</Icon>}
            </ItemWrapper>
            {description && <DescriptionWrapper $size={size}>{description}</DescriptionWrapper>}
        </Box>
    );
};

export const Item = React.forwardRef(ItemInternal) as (<Value>(
    props: ItemProps<Value> & RefAttributes<HTMLDivElement>
) => ReturnType<typeof ItemInternal>) & {
    displayName?: string;
};

Item.displayName = 'Item';
