import styled, { css } from 'styled-components';
import { Size, WithWhitespaceStyled, size, withWhitespace } from '../Whitespace/utils';
import { ResponsiveProp, WithMediaStyled } from '../Utils/responsiveness';
import { getPresetsCustom } from '../Utils/styling';

export interface PropsBox extends WithWhitespaceStyled, WithMediaStyled {
    $inline?: ResponsiveProp<boolean>;
    $direction?: ResponsiveProp<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    $center?: ResponsiveProp<boolean>;
    $justifyContent?: ResponsiveProp<
        | 'normal'
        | 'inherit'
        | 'initial'
        | 'unset'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'stretch'
    >;
    $alignItems?: ResponsiveProp<
        | 'normal'
        | 'inherit'
        | 'initial'
        | 'unset'
        | 'stretch'
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'self-start'
        | 'self-end'
        | 'baseline'
    >;
    $alignContent?: ResponsiveProp<
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'baseline'
        | 'stretch'
    >;
    $wrap?: ResponsiveProp<'nowrap' | 'wrap' | 'wrap-reverse'>;
    $flow?: ResponsiveProp<string>;
    $gap?: ResponsiveProp<Size>;
    $rowGap?: ResponsiveProp<Size>;
    $columnGap?: ResponsiveProp<Size>;
    $flex?: ResponsiveProp<
        'auto' | 'content' | 'fit-content' | 'max-content' | 'min-content' | 'none' | string | number
    >;
    $minHeight?: ResponsiveProp<'auto' | 'fit-content' | 'intrinsic' | 'max-content' | 'min-content' | string>;
    $minWidth?: ResponsiveProp<
        'auto' | 'fit-content' | 'intrinsic' | 'max-content' | 'min-content' | 'min-intrinsic' | string
    >;
}

const flex = getPresetsCustom('flex')({
    inline: ['$inline'],
    direction: ['$direction'],
    center: ['$center'],
    justifyContent: ['$justifyContent'],
    alignItems: ['$alignItems'],
    alignContent: ['$alignContent'],
    wrap: ['$wrap'],
    flow: ['$flow'],
    gap: ['$gap'],
    rowGap: ['$rowGap'],
    columnGap: ['$columnGap'],
    flex: ['$flex'],
    minHeight: ['$minHeight'],
    minWidth: ['$minWidth'],
});

export const Box = styled.div<PropsBox>`
    ${flex.inline.responsive(
        (inline) => css`
            display: ${inline ? 'inline-flex' : 'flex'};
        `
    )};

    ${flex.direction.responsive('flex-direction')};

    ${flex.center.responsive(
        (center) =>
            center &&
            css`
                justify-content: center;
                align-items: center;
            `
    )};

    ${flex.justifyContent.responsive('justify-content')};

    ${flex.justifyContent.responsive(
        (justifyContent) =>
            justifyContent === 'stretch' &&
            css`
                & > * {
                    flex-grow: 1;
                }
            `
    )};

    ${flex.alignItems.responsive('align-items')};
    ${flex.alignContent.responsive('align-content')};
    ${flex.wrap.responsive('flex-wrap')};
    ${flex.flow.responsive('flex-flow')};

    ${flex.gap.responsive(
        (gap) => css`
            gap: ${size(gap)};
        `
    )}
    ${flex.rowGap.responsive(
        (rowGap) => css`
            row-gap: ${size(rowGap)};
        `
    )}
    ${flex.columnGap.responsive(
        (columnGap) => css`
            column-gap: ${size(columnGap)};
        `
    )}

    
    ${flex.flex.responsive('flex')};
    ${flex.minHeight.responsive('minHeight')};
    ${flex.minWidth.responsive('minWidth')};

    ${withWhitespace({}, 'flex')}
`;
export const FlexDemo = styled.div`
    line-height: 2rem;
    text-align: center;
    background: #018ffe;
    border: 1px solid #fff;
    border-radius: 2px;
    color: #fff;
    font-size: 14px;
    height: 100%;
    box-sizing: border-box;
`;
