import styled, { css, keyframes } from 'styled-components';
import { spinner } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';

const presets = getPresets(
    spinner,
    'spinner'
)({
    size: ['$size', 'm'],
    color: '$color',
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

interface Size<B = Breakpoints> {
    $size: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', B>;
}

export interface PropsBox<B = Breakpoints> extends Size<B> {
    $position: 'relative' | 'absolute';
}
export const Box = styled.div<PropsBox>`
    background-size: cover;
    background-repeat: no-repeat;
    vertical-align: top;
    position: relative;
    display: inline-flex;
    ${presets.size};

    ${({ $position }) =>
        $position === 'absolute' &&
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

interface PropsSvg<B = Breakpoints> extends Size<B> {
    $isIE: boolean;
}
export const Svg = styled.svg<PropsSvg>`
    ${presets.size}
    ${({ $isIE }) =>
        $isIE &&
        css`
            animation: ${rotateIE360} ease 1s infinite;
        `}
    display: block;
`;

export interface CircleProps {
    $color: 'primary' | 'accent' | 'london120' | 'white' | 'seattle60';
    $isIE: boolean;
}
export const Circle = styled.circle<CircleProps>`
    stroke-width: 12px;
    stroke-miterlimit: 10;
    fill: none;
    stroke-dasharray: ${({ $isIE }) => ($isIE ? `195 85` : `85 195`)};
    stroke-dashoffset: 0;
    stroke-linecap: round;
    transform-origin: 50%;
    ${({ $isIE }) =>
        !$isIE &&
        css`
            animation: ${rotate360} linear 2s infinite;
        `}

    ${presets.color}
`;
