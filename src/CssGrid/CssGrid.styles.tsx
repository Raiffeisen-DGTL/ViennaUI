import styled, { css } from 'styled-components';
import { Size, WithWhitespaceStyled, size, withWhitespace } from '../Whitespace/utils';

export interface PropsBox extends WithWhitespaceStyled {
    $inline?: boolean;

    $templateRows?: string;
    $templateColumns?: string;
    $templateAreas?: string[];
    $gridTemplate?: string;

    $justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    $alignItems?: 'start' | 'end' | 'center' | 'stretch';
    $placeItems?: string;

    $justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
    $alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
    $placeContent?: string;

    $autoColumns?: string;
    $autoRows?: string;
    $autoFlow?: 'row' | 'column' | 'row dense' | 'column dense';

    $grid?: string;

    $height?: string;
    $width?: string;
    $maxHeight?: string;
    $maxWidth?: string;

    $columnGap?: Size;
    $rowGap?: Size;
    $gap?: Size;
}
export const Box = styled.div<PropsBox>`
    display: ${({ $inline }) => ($inline ? 'inline-grid' : 'grid')};

    ${({ $templateRows }) =>
        $templateRows &&
        css`
            grid-template-rows: ${$templateRows};
        `}
    ${({ $templateColumns }) =>
        $templateColumns &&
        css`
            grid-template-columns: ${$templateColumns};
        `}
    ${({ $templateAreas }) =>
        $templateAreas &&
        css`
            grid-template-areas: '${$templateAreas.join("''")}';
        `}
    ${({ $gridTemplate }) =>
        $gridTemplate &&
        css`
            grid-template: ${$gridTemplate};
        `}

    ${({ $justifyItems }) =>
        $justifyItems &&
        css`
            justify-items: ${$justifyItems};
        `}
    ${({ $alignItems }) =>
        $alignItems &&
        css`
            align-items: ${$alignItems};
        `}
    ${({ $placeItems }) =>
        $placeItems &&
        css`
            place-items: ${$placeItems};
        `}

    ${({ $justifyContent }) =>
        $justifyContent &&
        css`
            justify-content: ${$justifyContent};
        `}
    ${({ $alignContent }) =>
        $alignContent &&
        css`
            align-content: ${$alignContent};
        `}
    ${({ $placeContent }) =>
        $placeContent &&
        css`
            place-content: ${$placeContent};
        `}

    ${({ $autoColumns }) =>
        $autoColumns &&
        css`
            grid-auto-columns: ${$autoColumns};
        `}
    ${({ $autoRows }) =>
        $autoRows &&
        css`
            grid-auto-rows: ${$autoRows};
        `}
    ${({ $autoFlow }) =>
        $autoFlow &&
        css`
            grid-auto-flow: ${$autoFlow};
        `}

    ${({ $grid }) =>
        $grid &&
        css`
            grid: ${$grid};
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

    ${({ $gap }) =>
        $gap &&
        css`
            gap: ${size($gap)};
        `}
    ${({ $columnGap }) =>
        $columnGap &&
        css`
            column-gap: ${size($columnGap)};
        `}
    ${({ $rowGap }) =>
        $rowGap &&
        css`
            row-gap: ${size($rowGap)};
        `}

    ${withWhitespace('cssGrid')}
`;

interface PropsCssGridDemo {
    $color?: string;
}
export const CssGridDemo = styled.div<PropsCssGridDemo>`
    padding: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $color }) =>
        $color &&
        css`
            background-color: ${$color};
        `}
`;
