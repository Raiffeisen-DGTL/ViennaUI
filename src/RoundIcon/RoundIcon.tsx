import React, { FC, ForwardedRef, forwardRef, Ref } from 'react';
import { Box, PropsBox } from './RoundIcon.styles';
import { Breakpoints } from '../Utils/responsiveness';
import { BoxStyled } from '../Utils/styled';

export interface RoundIconProps<B = Breakpoints> extends BoxStyled<typeof Box, PropsBox> {
    size?: PropsBox<B>['$size'];
    color?: PropsBox<B>['$color'];
    clickable?: PropsBox<B>['$clickable'];
}

function RoundIconInternal<B = void>(
    props: RoundIconProps<B extends void ? Breakpoints : B>,
    ref: Ref<HTMLDivElement>
) {
    const { children, size = 'm', color = 'seattle10', ...attrs } = props;
    const clickable = Boolean(props.onClick) ?? props.clickable;

    return (
        <Box {...attrs} ref={ref} $color={color} $size={size} $clickable={clickable}>
            {children}
        </Box>
    );
}

export const RoundIcon = forwardRef(RoundIconInternal) as <B = Breakpoints>(
    props: RoundIconProps<B> & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof RoundIconInternal>;

(RoundIcon as FC).displayName = 'RoundIcon';
