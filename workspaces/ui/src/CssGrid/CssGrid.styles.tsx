import styled from 'styled-components';
import { size, useWhitespace } from '../Whitespace/utils';

const buildTemplateAreas = (templateAreas) => {
    const areas = templateAreas.join('""');
    return `grid-template-areas: "${areas}";`;
};

export const Box = styled.div<any>`
    display: ${({ inline }) => (inline ? 'inline-grid' : 'grid')};

    ${({ templateRows }) => templateRows && `grid-template-rows: ${templateRows};`}
    ${({ templateColumns }) => templateColumns && `grid-template-columns: ${templateColumns};`}
    ${({ templateAreas }) => templateAreas && buildTemplateAreas(templateAreas)}
    ${({ gridTemplate }) => gridTemplate && `grid-template: ${gridTemplate};`}

    ${({ justifyItems }) => justifyItems && `justify-items: ${justifyItems};`}
    ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
    ${({ placeItems }) => placeItems && `place-items: ${placeItems};`}

    ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
    ${({ alignContent }) => alignContent && `align-content: ${alignContent};`}
    ${({ placeContent }) => placeContent && `place-content: ${placeContent};`}

    ${({ autoColumns }) => autoColumns && `grid-auto-columns: ${autoColumns};`}
    ${({ autoRows }) => autoRows && `grid-auto-rows: ${autoRows};`}
    ${({ autoFlow }) => autoFlow && `grid-auto-flow: ${autoFlow};`}

    ${({ grid }) => grid && `grid: ${grid};`}

    ${({ height }) => height && `height: ${height};`}
    ${({ width }) => width && `width: ${width};`}
    ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}

    ${({ gap }) => gap && `gap: ${size(gap)};`}
    ${({ columnGap }) => columnGap && `column-gap: ${size(columnGap)};`}
    ${({ rowGap }) => rowGap && `row-gap: ${size(rowGap)};`}

    ${useWhitespace}
`;
