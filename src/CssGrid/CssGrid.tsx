import React, { forwardRef, ForwardRefExoticComponent, Ref, RefAttributes } from 'react';
import { WithWhitespace, getWhitespaceStyledProps } from '../Whitespace/utils';
import { Box, PropsBox } from './CssGrid.styles';
import { Item } from './Item';
import { BoxStyled } from '../Utils/styled';

export interface CssGridProps extends BoxStyled<typeof Box, PropsBox>, WithWhitespace {
    /** This sets display to inline-grid */
    inline?: PropsBox['$inline'];

    templateRows?: PropsBox['$templateRows'];
    templateColumns?: PropsBox['$templateColumns'];
    templateAreas?: PropsBox['$templateAreas'];
    gridTemplate?: PropsBox['$gridTemplate'];

    justifyItems?: PropsBox['$justifyItems'];
    alignItems?: PropsBox['$alignItems'];
    placeItems?: PropsBox['$placeItems'];

    justifyContent?: PropsBox['$justifyContent'];
    alignContent?: PropsBox['$alignContent'];
    placeContent?: PropsBox['$placeContent'];

    autoColumns?: PropsBox['$autoColumns'];
    autoRows?: PropsBox['$autoRows'];
    autoFlow?: PropsBox['$autoFlow'];

    grid?: PropsBox['$grid'];

    height?: PropsBox['$height'];
    width?: PropsBox['$width'];
    maxHeight?: PropsBox['$maxHeight'];
    maxWidth?: PropsBox['$maxWidth'];

    columnGap?: PropsBox['$columnGap'];
    rowGap?: PropsBox['$rowGap'];
    gap?: PropsBox['$gap'];
}

const CssGridInternal = (
    {
        children,
        inline,
        templateRows,
        templateColumns,
        templateAreas,
        gridTemplate,
        justifyItems,
        alignItems,
        placeItems,
        justifyContent,
        alignContent,
        placeContent,
        autoColumns,
        autoRows,
        autoFlow,
        grid,
        height,
        width,
        maxHeight,
        maxWidth,
        columnGap,
        rowGap,
        gap,
        ...rest
    }: CssGridProps,
    ref: Ref<HTMLDivElement>
) => {
    const { attrs, propsStyled } = getWhitespaceStyledProps(rest);

    return (
        <Box
            {...attrs}
            {...propsStyled}
            ref={ref}
            $inline={inline}
            $templateRows={templateRows}
            $templateColumns={templateColumns}
            $templateAreas={templateAreas}
            $gridTemplate={gridTemplate}
            $justifyItems={justifyItems}
            $alignItems={alignItems}
            $placeItems={placeItems}
            $justifyContent={justifyContent}
            $alignContent={alignContent}
            $placeContent={placeContent}
            $autoColumns={autoColumns}
            $autoRows={autoRows}
            $autoFlow={autoFlow}
            $grid={grid}
            $height={height}
            $width={width}
            $maxHeight={maxHeight}
            $maxWidth={maxWidth}
            $columnGap={columnGap}
            $rowGap={rowGap}
            $gap={gap}>
            {children}
        </Box>
    );
};

export const CssGrid = forwardRef(CssGridInternal) as ForwardRefExoticComponent<
    CssGridProps & RefAttributes<HTMLDivElement>
> & {
    Item: typeof Item;
};

CssGrid.displayName = 'CssGrid';
CssGrid.Item = Item;
