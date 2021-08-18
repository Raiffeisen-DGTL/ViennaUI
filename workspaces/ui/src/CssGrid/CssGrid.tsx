import React, { FC } from 'react';
import { Size, WithWhitespace } from '../Whitespace/utils';
import { Box } from './CssGrid.styles';
import { Item, ItemProps } from './Item';

interface Props {
    /** This sets display to inline-grid */
    inline?: boolean;

    templateRows?: string;
    templateColumns?: string;
    templateAreas?: string[];
    gridTemplate?: string;

    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    placeItems?: string;

    justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
    alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
    placeContent?: string;

    autoColumns?: string;
    autoRows?: string;
    autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';

    grid?: string;

    height?: string;
    width?: string;
    maxHeight?: string;
    maxWidth?: string;

    columnGap?: Size;
    rowGap?: Size;
    gap?: Size;
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

export type CssGridProps = HTMLAttributeProps & Props & WithWhitespace;

export const CssGrid: FC<CssGridProps> & { Item: FC<ItemProps> } = (props) => {
    return <Box {...props} />;
};

CssGrid.Item = Item;

export default CssGrid;
