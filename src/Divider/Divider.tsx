import React from 'react';
import { color } from 'vienna.tokens';
import { Hr } from './Divider.styles';

export enum DividerSize {
    's' = '1px',
    'm' = '2px',
}

export interface DividerProps {
    size?: 's' | 'm';
    color?: string;
    orientation?: 'horizontal' | 'vertical';
}

export const Divider = (props: DividerProps) => {
    const { color: colorProps, size = 's', orientation = 'horizontal' } = props;

    return <Hr $orientation={orientation} $color={colorProps ?? color.primary.seattle.c10} $size={DividerSize[size]} />;
};

Divider.displayName = 'Divider';
