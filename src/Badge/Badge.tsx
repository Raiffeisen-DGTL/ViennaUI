import React, { Children, FC, ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import { Box, Item, PropsBox } from './Badge.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export type BadgeColor =
    | 'paris10'
    | 'paris30'
    | 'paris100'
    | 'miami10'
    | 'miami30'
    | 'miami100'
    | 'dubai10'
    | 'dubai30'
    | 'dubai100'
    | 'nice10'
    | 'nice30'
    | 'nice100'
    | 'seattle05'
    | 'seattle10'
    | 'seattle30'
    | 'seattle100'
    | 'sochi10'
    | 'sochi30'
    | 'sochi100'
    | 'tokyo10'
    | 'tokyo30'
    | 'tokyo100'
    | 'dublin100'
    | 'bern100'
    | 'manila100'
    | 'tallin100'
    | 'seoul100'
    | 'havana100'
    | 'madrid100'
    | 'porto100'
    | 'oslo10'
    | 'oslo30'
    | 'oslo100'
    | 'osaka10'
    | 'osaka30'
    | 'osaka100';

export interface BadgeProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    color?: PropsBox<B>['$color'];
    size?: PropsBox<B>['$size'];
    grid?: PropsBox<B>['$grid'];
    href?: string;
}

function BadgeInternal<B = void>(
    { children, color = 'paris10', size = 'm', grid, ...attrs }: BadgeProps<B extends void ? Breakpoints : B>,
    ref: Ref<HTMLSpanElement>
) {
    const as = attrs.href ? 'a' : 'span';

    return (
        <Box {...attrs} ref={ref} as={as} $size={size} $color={color} $grid={grid}>
            {Children.map(children, (child: ReactNode) => (child ? <Item>{child}</Item> : null))}
        </Box>
    );
}

export const Badge = forwardRef(BadgeInternal) as <B = Breakpoints>(
    props: BadgeProps<B> & { ref?: ForwardedRef<HTMLSpanElement> }
) => ReturnType<typeof BadgeInternal>;

(Badge as FC).displayName = 'Badge';
