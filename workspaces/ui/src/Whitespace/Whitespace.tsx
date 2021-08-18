import React from 'react';
import styled from 'styled-components';
import { WithWhitespace, useWhitespace } from './utils';

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type WhitespaceProps = HTMLAttributeProps & WithWhitespace;

export const Whitespace: React.FC<WhitespaceProps> = (props) => {
    const { children, ...attrs } = props;

    return <Box {...attrs}>{children}</Box>;
};

const Box = styled.div`
    ${useWhitespace}
`;
