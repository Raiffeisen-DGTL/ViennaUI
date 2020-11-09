import React, { HTMLAttributes } from 'react';
import { Box } from './Counter.styles';

export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    design?: 'critical' | 'warning' | 'success' | 'accent' | 'neutral' | 'disabled';
    position?: 'relative' | 'absolute';
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}

export const Counter: React.FC<CounterProps> = (props): JSX.Element => {
    const { children, ...attrs } = props;
    return <Box {...attrs}>{children}</Box>;
};

Counter.defaultProps = {
    design: 'neutral',
    position: 'relative',
};

Counter.displayName = 'Counter';
export default Counter;
