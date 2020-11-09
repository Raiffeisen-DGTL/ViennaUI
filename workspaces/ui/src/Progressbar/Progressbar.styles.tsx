import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const line = getPresets('progressbar.line', {
    size: 'size',
    back: null,
});

const lineProgress = getPresets('progressbar.line.progress', {
    base: null,
    color: 'color',
});

const circle = getPresets('progressbar.circle', {
    size: 'size',
    back: null,
});

const circleBox = getPresets('progressbar.circle.box', {
    size: 'size',
});

const circleProgress = getPresets('progressbar.circle.progress', {
    base: null,
    color: 'color',
});

const circleContent = getPresets('progressbar.circle.content', {
    size: 'size',
});

export const Box = styled.div<any>`
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

export const Progress = styled.div<any>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ${({ width }) =>
        width !== undefined &&
        css`
            width: ${width}%;
        `}

    ${lineProgress.base}
    ${lineProgress.color}
`;

export const CircleSVG = styled.svg<any>`
    fill: none;

    ${circleBox.size}
`;

const RADIUS = {
    s: 32,
    m: 44,
    l: 64,
};

const calculateCircleLength = (r) => Math.PI * 2 * r;

const calculateProgressLength = (r, value) => {
    const circleLength = calculateCircleLength(r);
    return (circleLength * (100 - value)) / 100;
};

export const CircleBack = styled.circle<any>`
    ${circle.size}
    ${circle.back}
`;

export const CircleProgress = styled.circle<any>`
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50%;

    ${circle.size}
    ${circleProgress.base}
    ${circleProgress.color}

    ${({ size, value }) => css`
        stroke-dasharray: ${(calculateCircleLength(RADIUS[size]) * value) / 100}
            ${calculateProgressLength(RADIUS[size], value)};
    `}
`;

export const CircleBox = styled.div`
    position: relative;
    display: inline-flex;
`;

export const CircleContent = styled.div<any>`
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${circleContent.size}
`;
