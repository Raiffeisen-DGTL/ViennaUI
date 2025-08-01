import React, { forwardRef, Ref } from 'react';
import styled, { css } from 'styled-components';
import { WithWhitespace, WithWhitespaceStyled, getWhitespaceStyledProps, withWhitespace } from '../Whitespace/utils';
import { BoxStyled } from '../Utils/styled';

export interface PropsItemStyled extends WithWhitespaceStyled {
    $columnStart?: string;
    $columnEnd?: string;
    $rowStart?: string;
    $rowEnd?: string;

    $column?: string;
    $row?: string;
    $area?: string;

    $justifySelf?: 'start' | 'end' | 'center' | 'stretch';
    $alignSelf?: 'start' | 'end' | 'center' | 'stretch';
    $placeSelf?: string;

    $height?: string;
    $width?: string;
    $maxHeight?: string;
    $maxWidth?: string;
}

const ItemStyled = styled.div<PropsItemStyled>`
    ${({ $columnStart }) =>
        $columnStart &&
        css`
            grid-column-start: ${$columnStart};
        `}
    ${({ $columnEnd }) =>
        $columnEnd &&
        css`
            grid-column-end: ${$columnEnd};
        `}
    ${({ $rowStart }) =>
        $rowStart &&
        css`
            grid-row-start: ${$rowStart};
        `}
    ${({ $rowEnd }) =>
        $rowEnd &&
        css`
            grid-row-end: ${$rowEnd};
        `}

    ${({ $column }) =>
        $column &&
        css`
            grid-column: ${$column};
        `}
    ${({ $row }) =>
        $row &&
        css`
            grid-row: ${$row};
        `}
    ${({ $area }) =>
        $area &&
        css`
            grid-area: ${$area};
        `}

    ${({ $justifySelf }) =>
        $justifySelf &&
        css`
            justify-self: ${$justifySelf};
        `}
    ${({ $alignSelf }) =>
        $alignSelf &&
        css`
            align-self: ${$alignSelf};
        `}
    ${({ $placeSelf }) =>
        $placeSelf &&
        css`
            place-self: ${$placeSelf};
        `}

    ${({ $height }) =>
        $height &&
        css`
            height: ${$height};
        `}
    ${({ $width }) =>
        $width &&
        css`
            width: ${$width};
        `}
    ${({ $maxHeight }) =>
        $maxHeight &&
        css`
            max-height: ${$maxHeight};
        `}
    ${({ $maxWidth }) =>
        $maxWidth &&
        css`
            max-width: ${$maxWidth};
        `}

    ${withWhitespace({}, 'cssgridItem')}
`;

export interface ItemProps extends BoxStyled<typeof ItemStyled, PropsItemStyled>, WithWhitespace {
    columnStart?: PropsItemStyled['$columnStart'];
    columnEnd?: PropsItemStyled['$columnEnd'];
    rowStart?: PropsItemStyled['$rowStart'];
    rowEnd?: PropsItemStyled['$rowEnd'];

    column?: PropsItemStyled['$column'];
    row?: PropsItemStyled['$row'];
    area?: PropsItemStyled['$area'];

    justifySelf?: PropsItemStyled['$justifySelf'];
    alignSelf?: PropsItemStyled['$alignSelf'];
    placeSelf?: PropsItemStyled['$placeSelf'];

    height?: PropsItemStyled['$height'];
    width?: PropsItemStyled['$width'];
    maxHeight?: PropsItemStyled['$maxHeight'];
    maxWidth?: PropsItemStyled['$maxWidth'];
}

export const Item = forwardRef(
    (
        {
            children,
            columnStart,
            columnEnd,
            rowStart,
            rowEnd,
            column,
            row,
            area,
            justifySelf,
            alignSelf,
            placeSelf,
            height,
            width,
            maxHeight,
            maxWidth,
            ...rest
        }: ItemProps,
        ref: Ref<HTMLDivElement>
    ) => {
        const { attrs, propsStyled } = getWhitespaceStyledProps(rest);

        return (
            <ItemStyled
                {...attrs}
                {...propsStyled}
                ref={ref}
                $columnStart={columnStart}
                $columnEnd={columnEnd}
                $rowStart={rowStart}
                $rowEnd={rowEnd}
                $column={column}
                $row={row}
                $area={area}
                $justifySelf={justifySelf}
                $alignSelf={alignSelf}
                $placeSelf={placeSelf}
                $height={height}
                $width={width}
                $maxHeight={maxHeight}
                $maxWidth={maxWidth}>
                {children}
            </ItemStyled>
        );
    }
);

Item.displayName = 'Item';
