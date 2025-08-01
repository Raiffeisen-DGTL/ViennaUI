import React, { FC } from 'react';
import {
    Box,
    PropsBox,
    CircleSVG,
    CircleProgress,
    Line,
    Progress,
    CircleBack,
    CircleBox,
    CircleContent,
} from './Progressbar.styles';
import { Loading } from './Loading';
import { BoxStyled } from '../Utils/styled';

export type ProgressSize = 's' | 'm' | 'l';
export type ProgressColor =
    | 'moscow100'
    | 'osaka100'
    | 'accent'
    | 'geneva100'
    | 'oslo120'
    | 'seattle140'
    | 'oslo100'
    | 'miami100'
    | 'sochi100'
    | 'paris100'
    | 'tokyo100'
    | 'dubai100'
    | 'nice100';

export interface ProgressbarProps extends BoxStyled<typeof Box, PropsBox> {
    view?: 'line' | 'circle';
    size?: ProgressSize;
    color?: ProgressColor;
    value?: number;
    /** Shows loading state, if view is 'line' */
    loading?: boolean;
    indeterminate?: boolean;
    width?: number;
}

export const Progressbar: FC<ProgressbarProps> = ({
    size = 'm',
    view = 'line',
    color = 'oslo120',
    value,
    children,
    indeterminate,
    loading,
    ...attrs
}) => {
    switch (view) {
        case 'circle': {
            return (
                <CircleBox {...attrs}>
                    <CircleSVG $size={size}>
                        <CircleBack $size={size} />
                        <CircleProgress $size={size} $color={color} $indeterminate={indeterminate} $value={value} />
                    </CircleSVG>
                    {children && <CircleContent $size={size}>{children}</CircleContent>}
                </CircleBox>
            );
        }
        case 'line':
        default: {
            return (
                <Box {...attrs} $size={size}>
                    <Line />
                    <Progress $indeterminate={indeterminate} $width={value && value > 100 ? 100 : value} $color={color}>
                        {!indeterminate && loading && <Loading />}
                    </Progress>
                </Box>
            );
        }
    }
};

Progressbar.displayName = 'Progressbar';
