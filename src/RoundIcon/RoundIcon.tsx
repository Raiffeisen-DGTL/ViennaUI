import React from 'react';
import { Box, PropsBox } from './RoundIcon.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export interface RoundIconProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    size?: PropsBox<B>['$size'];
    color?: PropsBox<B>['$color'];
    clickable?: PropsBox<B>['$clickable'];
}

export function RoundIcon<B = void>(props: RoundIconProps<B extends void ? Breakpoints : B>) {
    const { children, size = 'm', color = 'seattle10', ...attrs } = props;
    const clickable = Boolean(props.onClick) ?? props.clickable;

    return (
        <Box {...(attrs as {})} $color={color} $size={size} $clickable={clickable}>
            {children}
        </Box>
    );
}

RoundIcon.displayName = 'RoundIcon';
