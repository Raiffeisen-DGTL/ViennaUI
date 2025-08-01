import styled, { css, keyframes } from 'styled-components';
import { progressbar } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { ProgressColor, ProgressSize } from './Progressbar';

const line = getPresets(
    progressbar.line,
    'progressbar.line'
)({
    size: '$size',
    back: null,
});

const lineProgress = getPresets(
    progressbar.line.progress,
    'progressbar.line.progress'
)({
    base: null,
    color: '$color',
});

const circle = getPresets(
    progressbar.circle,
    'progressbar.circle'
)({
    size: '$size',
    back: null,
});

const circleBox = getPresets(
    progressbar.circle.box,
    'progressbar.circle.box'
)({
    size: '$size',
});

const circleProgress = getPresets(
    progressbar.circle.progress,
    'progressbar.circle.progress'
)({
    base: null,
    color: '$color',
});

const circleContent = getPresets(
    progressbar.circle.content,
    'progressbar.circle.content'
)({
    size: '$size',
});

const indeterminateLineAnimation = keyframes`
    0% {
        left: 0;
        width: 1%;
    }
    25% {
        left: 25%;
        width: 50%;
    }
    50% {
        left: 99%;
        width: 1%;
    }
    75% {
        left: 25%;
        width: 50%;
    }
    100% {
        left: 0;
        width: 1%;
    }
`;

const indeterminateCircleAnimation = keyframes`
    0% {
        stroke-dasharray: 10% 280%;
        transform: rotate(-90deg);
    }
    25% {
        stroke-dasharray: 100% 280%;
        transform: rotate(45deg);
    }
    50% {
        stroke-dasharray: 10% 280%;
        transform: rotate(270deg);
    }
    75% {
        stroke-dasharray: 100% 280%;
        transform: rotate(45deg);
    }
    100% {
        stroke-dasharray: 10% 280%;
        transform: rotate(-90deg);
    }
`;

export interface PropsBox {
    $size?: ProgressSize;
}
export const Box = styled.div<PropsBox>`
    position: relative;
    width: 100%;

    ${line.size}
`;

export const Line = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ${line.back}
`;

interface PropsProgress {
    $indeterminate?: boolean;
    $width?: number;
    $color?: ProgressColor;
}
export const Progress = styled.div<PropsProgress>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ${({ $width }) =>
        $width !== undefined &&
        css`
            width: ${$width}%;
        `}

    ${({ $indeterminate }) =>
        $indeterminate &&
        css`
            animation: ${indeterminateLineAnimation} linear 1.2s infinite;
        `}

    ${lineProgress.base}
    ${lineProgress.color}
`;

interface PropsCircleSVG {
    $size?: ProgressSize;
}
export const CircleSVG = styled.svg<PropsCircleSVG>`
    fill: none;

    ${circleBox.size}
`;

const RADIUS = {
    s: 32,
    m: 44,
    l: 64,
};

const calculateCircleLength = (r: number) => Math.PI * 2 * r;

const calculateProgressLength = (r: number, value: number) => {
    const circleLength = calculateCircleLength(r);
    return (circleLength * (100 - value)) / 100;
};

interface PropsCircleBack {
    $size?: ProgressSize;
}
export const CircleBack = styled.circle<PropsCircleBack>`
    ${circle.size}
    ${circle.back}
`;

interface PropsCircleProgress {
    $size?: ProgressSize;
    $color: ProgressColor;
    $value?: number;
    $indeterminate?: boolean;
}
export const CircleProgress = styled.circle<PropsCircleProgress>`
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50%;

    ${circle.size}
    ${circleProgress.base}
    ${circleProgress.color}

    ${({ $size, $value }) => css`
        stroke-dasharray: ${$size && $value && (calculateCircleLength(RADIUS[$size]) * $value) / 100}
            ${$size && $value && calculateProgressLength(RADIUS[$size], $value)};
    `}

    ${({ $indeterminate }) =>
        $indeterminate &&
        css`
            animation: ${indeterminateCircleAnimation} linear 1.2s infinite;
        `}
`;

export const CircleBox = styled.div`
    position: relative;
    display: inline-flex;
`;

interface PropsCircleContent {
    $size?: ProgressSize;
}
export const CircleContent = styled.div<PropsCircleContent>`
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${circleContent.size}
`;
