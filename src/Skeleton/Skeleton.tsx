import React from 'react';
import { Block, Circle, Line, SkeletonWrapper, SkeletonWrapperProps, Square } from './Skeleton.styles';
import { SizeType } from '@/Utils';
import { BoxStyled } from '@/Utils/styled';

export type SkeletonMode = 'light' | 'dark';
export type SkeletonSize = SizeType<'s' | 'm' | 'l' | 'xl'>;
export interface SkeletonProps extends BoxStyled<typeof SkeletonWrapper, SkeletonWrapperProps> {
    design: 'line' | 'block' | 'square' | 'circle';
    size?: SkeletonSize;
    height?: string;
    width?: string;
    disableAnimation?: boolean;
    mode?: SkeletonMode;
}
export type LineProps = Omit<SkeletonProps, 'height' | 'design'> & { design: 'line' };
export type SquareCircleProps = Pick<SkeletonProps, 'size' | 'disableAnimation' | 'mode'> & {
    design: 'square' | 'circle';
};
export type BlockProps = Omit<SkeletonProps, 'size' | 'design'> &
    Required<Pick<SkeletonProps, 'height'>> & { design: 'block' };

export function Skeleton(props: LineProps | SquareCircleProps | BlockProps): React.JSX.Element;
export function Skeleton({
    design,
    size = 'm',
    width,
    height,
    disableAnimation,
    mode = 'light',
    ...attrs
}: SkeletonProps) {
    switch (design) {
        case 'line':
            return (
                <Line {...attrs} $size={size} $width={width} $disableAnimation={disableAnimation} $mode={mode}></Line>
            );
        case 'block':
            return (
                <Block
                    {...attrs}
                    $height={height}
                    $width={width}
                    $disableAnimation={disableAnimation}
                    $mode={mode}></Block>
            );
        case 'square':
            return <Square {...attrs} $size={size} $disableAnimation={disableAnimation} $mode={mode}></Square>;
        case 'circle':
            return <Circle {...attrs} $size={size} $disableAnimation={disableAnimation} $mode={mode}></Circle>;
        default:
            return null;
    }
}

Skeleton.displayName = 'Skeleton';
