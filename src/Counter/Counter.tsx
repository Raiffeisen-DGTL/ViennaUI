import React, { FC } from 'react';
import { Box, PropsBox } from './Counter.styles';
import { BoxStyled } from '../Utils/styled';

export type CounterDesign = 'critical' | 'warning' | 'success' | 'accent' | 'neutral' | 'disabled';

export interface CounterProps extends BoxStyled<typeof Box, PropsBox> {
    design?: CounterDesign;
    position?: 'relative' | 'absolute';
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}

export const Counter: FC<CounterProps> = ({
    design = 'neutral',
    position = 'relative',
    top,
    bottom,
    left,
    right,
    ...attrs
}) => {
    return (
        <Box {...attrs} $design={design} $position={position} $top={top} $bottom={bottom} $left={left} $right={right} />
    );
};

Counter.displayName = 'Counter';
