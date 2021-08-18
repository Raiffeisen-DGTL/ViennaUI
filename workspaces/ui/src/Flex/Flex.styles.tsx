import styled, { css } from 'styled-components';
import { size, useWhitespace } from '../Whitespace/utils';

export const Box = styled.div<any>`
    display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};

    ${({ direction }) => direction && `flex-direction: ${direction};`}

    ${({ center }) =>
        center &&
        css`
            justify-content: center;
            align-items: center;
        `}

    ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}

    ${({ justifyContent }) =>
        justifyContent === 'stretch' &&
        css`
            & > * {
                flex-grow: 1;
            }
        `}

    ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
    ${({ alignContent }) => alignContent && `align-content: ${alignContent};`}
    ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
    ${({ flow }) => flow && `flex-flow: ${flow};`}

    ${({ gap }) => gap && `gap: ${size(gap)};`}

    ${useWhitespace}
`;
