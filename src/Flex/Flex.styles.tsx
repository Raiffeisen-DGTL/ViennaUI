import styled, { css } from 'styled-components';
import { Size, WithWhitespaceStyled, size, withWhitespace } from '../Whitespace/utils';
import { ResponsiveProp, WithMediaStyled, responsiveProp } from '../Utils/responsiveness';

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
}

export const Box = styled.div<PropsBox>`
    ${responsiveProp(
        'flex',
        '$inline',
        (inline) =>
            css`
                display: ${inline ? 'inline-flex' : 'flex'};
            `
    )};

    ${responsiveProp('flex', '$direction', 'flex-direction')};

    ${responsiveProp(
        'flex',
        '$center',
        (center) =>
            center &&
            css`
                justify-content: center;
                align-items: center;
            `
    )};

    ${responsiveProp('flex', '$justifyContent', 'justify-content')};

    ${responsiveProp(
        'flex',
        '$justifyContent',
        (justifyContent) =>
            justifyContent === 'stretch' &&
            css`
                & > * {
                    flex-grow: 1;
                }
            `
    )};

    ${responsiveProp('flex', '$alignItems', 'align-items')};
    ${responsiveProp('flex', '$alignContent', 'align-content')};
    ${responsiveProp('flex', '$wrap', 'flex-wrap')};
    ${responsiveProp('flex', '$flow', 'flex-flow')};
    ${responsiveProp(
        'flex',
        '$gap',
        (gap) =>
            css`
                gap: ${size(gap)};
            `
    )};

    ${withWhitespace('flex')}
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
