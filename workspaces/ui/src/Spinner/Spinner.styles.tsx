import styled, { css, keyframes } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const { size } = getPresets('spinner', {
    size: 'size',
});

const rotate360 = keyframes`
    100% {
        transform: rotate(360deg);
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
    fill: currentColor !important;
    animation: ${rotate360} 1s infinite linear;

    & > use {
        fill: currentColor !important;
    }
`;
