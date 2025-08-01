import React, { ComponentProps } from 'react';
import styled, { ExecutionProps } from 'styled-components';
import { whitespace } from 'vienna.ui-theme';
import { WithWhitespace, WithWhitespaceStyled, getWhitespaceStyledProps, withWhitespace } from './utils';

const Box = styled.div<WithWhitespaceStyled>`
    ${withWhitespace(whitespace, 'whitespace')}
`;

export type WhitespaceProps = ExecutionProps &
    Omit<ComponentProps<typeof Box>, keyof WithWhitespaceStyled> &
    WithWhitespace;

export const Whitespace = React.forwardRef<HTMLDivElement, WhitespaceProps>(({ children, ...rest }, ref) => {
    const { attrs, propsStyled } = getWhitespaceStyledProps(rest);

    return (
        <Box {...attrs} {...propsStyled} ref={ref}>
            {children}
        </Box>
    );
});

Whitespace.displayName = 'Whitespace';
