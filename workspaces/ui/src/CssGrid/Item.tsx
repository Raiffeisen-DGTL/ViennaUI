import React from 'react';
import styled from 'styled-components';
import { WithWhitespace, useWhitespace } from '../Whitespace/utils';

interface Props {
    columnStart?: string;
    columnEnd?: string;
    rowStart?: string;
    rowEnd?: string;

    column?: string;
    row?: string;
    area?: string;

    justifySelf?: 'start' | 'end' | 'center' | 'stretch';
    alignSelf?: 'start' | 'end' | 'center' | 'stretch';
    placeSelf?: string;

    height?: string;
    width?: string;
    maxHeight?: string;
    maxWidth?: string;
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
    ${({ columnStart }) => columnStart && `grid-column-start: ${columnStart};`}
    ${({ columnEnd }) => columnEnd && `grid-column-end: ${columnEnd};`}
    ${({ rowStart }) => rowStart && `grid-row-start: ${rowStart};`}
    ${({ rowEnd }) => rowEnd && `grid-row-end: ${rowEnd};`}

    ${({ column }) => column && `grid-column: ${column};`}
    ${({ row }) => row && `grid-row: ${row};`}
    ${({ area }) => area && `grid-area: ${area};`}

    ${({ justifySelf }) => justifySelf && `justify-self: ${justifySelf};`}
    ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
    ${({ placeSelf }) => placeSelf && `place-self: ${placeSelf};`}

    ${({ height }) => height && `height: ${height};`}
    ${({ width }) => width && `width: ${width};`}
    ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}

    ${useWhitespace}
`;

export default Item;
