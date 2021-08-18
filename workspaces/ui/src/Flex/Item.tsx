import React from 'react';
import styled from 'styled-components';
import { WithWhitespace, useWhitespace } from '../Whitespace/utils';

interface Props {
    order?: string;
    grow?: string;
    shrink?: string;
    basis?: string;
    flex?: string;
    alignSelf?:
        | 'auto'
        | 'start'
        | 'flex-start'
        | 'end'
        | 'flex-end'
        | 'center'
        | 'baseline'
        | 'first baseline'
        | 'last baseline'
        | 'stretch';
}

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    title?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type ItemProps = HTMLAttributeProps & Props & WithWhitespace;

export const Item: React.FC<ItemProps> = styled.div<ItemProps>`
    ${({ order }) => order && `order: ${order};`}
    ${({ grow }) => grow && `flex-grow: ${grow};`}
    ${({ shrink }) => shrink && `flex-shrink: ${shrink};`}
    ${({ basis }) => basis && `flex-basis: ${basis};`}
    ${({ flex }) => flex && `flex: ${flex};`}
    ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}

    ${useWhitespace}
`;

export default Item;
