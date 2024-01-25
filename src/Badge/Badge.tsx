import React, { Children, FC, ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import { Box, Item, PropsBox } from './Badge.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export type BadgeColor =
    | 'paris10'
    | 'paris30'
    | 'miami10'
    | 'miami30'
    | 'dubai10'
    | 'dubai30'
    | 'nice10'
    | 'nice30'
    | 'seattle05'
    | 'seattle10';

export interface BadgeProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    color?: PropsBox<B>['$color'];
    size?: PropsBox<B>['$size'];
    grid?: PropsBox<B>['$grid'];
    clickable?: PropsBox<B>['$clickable'];
    href?: string;
}

function BadgeInternal<B = void>(
    { children, color = 'paris10', size = 'm', grid, ...attrs }: BadgeProps<B extends void ? Breakpoints : B>,
    ref: Ref<HTMLSpanElement>
) {
    const as = attrs.href ? 'a' : 'span';
    const clickable = (attrs.onClick && attrs.href && attrs.clickable) || false;

    return (
        <Box {...(attrs as {})} ref={ref} as={as} $size={size} $color={color} $clickable={clickable} $grid={grid}>
            {Children.map(children, (child: ReactNode) => (child ? <Item>{child}</Item> : null))}
        </Box>
    );
}

export const Badge = forwardRef(BadgeInternal) as <B = Breakpoints>(
    props: BadgeProps<B> & { ref?: ForwardedRef<HTMLSpanElement> }
) => ReturnType<typeof BadgeInternal>;

(Badge as FC).displayName = 'Badge';
