import styled, { css, keyframes } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const { size, color } = getPresets('spinner', {
    size: 'size',
    color: 'color',
});

const rotateIE360 = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotate360 = keyframes`
    0% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: 0;
      }
      10% {
        stroke-dasharray: 100 180;
        stroke-dashoffset: -60;
      }
      30% {
        stroke-dasharray: 260 20;
        stroke-dashoffset: -290;
      }
      50% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -580;
      }
      60% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -615;
      }
      63% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -620;
      }
      70% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -635;
      }
      80% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -560;
      }
      84% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -545;
      }
      98% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -530;
      }
      100% {
        stroke-dasharray: 85 195;
        stroke-dashoffset: -530;
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

export const Svg = styled.svg<{ size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'; isIE: boolean }>`
    ${size}
    ${({ isIE }) =>
        isIE &&
        css`
            animation: ${rotateIE360} ease 1s infinite;
        `}
    display: block;
`;

export const Circle = styled.circle<{ color: 'primary' | 'accent' | 'london120' | 'white'; isIE: boolean }>`
    stroke-width: 12px;
    stroke-miterlimit: 10;
    fill: none;
    stroke-dasharray: ${({ isIE }) => (isIE ? `195 85` : `85 195`)};
    stroke-dashoffset: 0;
    stroke-linecap: round;
    transform-origin: 50%;
    ${({ isIE }) =>
        !isIE &&
        css`
            animation: ${rotate360} linear 2s infinite;
        `}

    ${color}
`;
