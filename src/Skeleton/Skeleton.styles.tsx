import styled, { css } from 'styled-components';
import { skeleton } from 'vienna.ui-theme';
import { getPresets } from '@/Utils/styling';
import { SkeletonMode, SkeletonSize } from './Skeleton';

const presets = getPresets(
    skeleton,
    'skeleton'
)({
    base: null,
    line: null,
    block: null,
    square: null,
    circle: null,
    mode: null,
});

const linePreset = getPresets(
    skeleton.line,
    'skeleton.line'
)({
    size: '$size',
});

const squarePreset = getPresets(
    skeleton.square,
    'skeleton.square'
)({
    size: '$size',
});

const circlePreset = getPresets(
    skeleton.circle,
    'skeleton.circle'
)({
    size: '$size',
});

const modePreset = getPresets(
    skeleton.base,
    'skeleton.base'
)({
    mode: '$mode',
});

export interface SkeletonWrapperProps {
    $disableAnimation?: boolean;
    $mode?: SkeletonMode;
}

export interface LineProps {
    $size?: SkeletonSize;
    $width?: string;
}

export interface BlockProps {
    $width?: string;
    $height?: string;
}

export interface SquareProps {
    $size?: SkeletonSize;
}

export const SkeletonWrapper = styled.div<SkeletonWrapperProps>`
    ${presets.base}
    ${modePreset.mode}

    ${({ $disableAnimation, $mode }) =>
        !$disableAnimation &&
        $mode === 'light' &&
        css`
            background-image: linear-gradient(90deg, #f0ecec -0.74%, #d7d2d2 49.63%, #f0ecec 100%);
            background-size: 90% 100%;
            background-repeat: no-repeat;
            animation-name: gradient;
            animation-duration: 1.7s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;

            @keyframes gradient {
                0% {
                    background-position: -1800% 0;
                }

                100% {
                    background-position: 1500% 0;
                }
            }
        `}

        ${({ $disableAnimation, $mode }) =>
        !$disableAnimation &&
        $mode === 'dark' &&
        css`
            background-image: linear-gradient(90deg, #434242 -0.74%, #5a5757 49.63%, #434242 100%);
            background-size: 90% 100%;
            background-repeat: no-repeat;
            animation-name: gradient;
            animation-duration: 1.7s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;

            @keyframes gradient {
                0% {
                    background-position: -1800% 0;
                }

                100% {
                    background-position: 1500% 0;
                }
            }
        `}
`;

export const Line = styled(SkeletonWrapper)<LineProps>`
    width: ${(props) => (props.$width ? `${props.$width}` : '100%')};
    ${linePreset.size}
`;

export const Block = styled(SkeletonWrapper)<BlockProps>`
    width: ${(props) => (props.$width ? `${props.$width}` : '100%')};
    height: ${(props) => (props.$height ? `${props.$height}` : '100%')};
    ${presets.block}
`;

export const Square = styled(SkeletonWrapper)<SquareProps>`
    ${squarePreset.size}
`;

export const Circle = styled(SkeletonWrapper)<SquareProps>`
    ${presets.circle}
    ${circlePreset.size}
`;
