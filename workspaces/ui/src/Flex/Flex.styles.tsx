import styled, { css } from 'styled-components';
import { FlexProps } from './Flex';

export const Box = styled.div<FlexProps>`
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
`;
