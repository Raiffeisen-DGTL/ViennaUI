import styled, { css, keyframes } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const { size, color } = getPresets('spinner', {
    size: 'size',
    color: 'color',
});

const rotate360 = keyframes`
    0% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: 0;
    }
    30% {
        stroke-dasharray: 260 20;
        stroke-dashoffset: -290;
    }
    70% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -580;
    }
    80% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -615;
    }
    100% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -560;
    }
`;

export const Box = styled.div<{
    [key: string]: any;
    size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    position: 'relative' | 'absolute';
}>`
    background-size: cover;
    background-repeat: no-repeat;
    vertical-align: top;
    position: relative;
    display: inline-flex;
    ${size};

    ${(props): any =>
        props.position === 'absolute' &&
        css`
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 5;
            margin: auto;
        `};
`;

export const Svg = styled.svg<{ size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' }>`
    ${size};
    display: block;
`;

export const Circle = styled.circle<{ color: 'primary' | 'accent' | 'london120' | 'white' }>`
    stroke-width: 12px;
    r: 44;
    cx: 50;
    cy: 50;
    stroke-miterlimit: 10;
    fill: none;
    stroke-dasharray: 85 195;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    transform-origin: 50%;
    animation: ${rotate360} linear 2s infinite;

    ${color}
`;
