import styled, { keyframes } from 'styled-components';
import { getPresets } from '../../Utils/styling';

const pattern = getPresets('progressbar.pattern', {
    rect: null,
    svg: null,
});

export const PatternRect = styled.rect`
    ${pattern.rect}
`;

const load = keyframes`
  from {
    transform: translateX(-40px);
  }
  to {
    transform: translateX(0%);
  }
`;

export const Box = styled.svg`
    ${pattern.svg}
    animation: 2s linear 0s infinite ${load};
`;
