import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';
import { Breakpoints, ResponsiveProp, responsivePreset } from '../../Utils/responsiveness';

const presets = getPresets('typography.text', {
    base: null,
    size: responsivePreset('$size', 'm'),
    margin: responsivePreset('$margin', 'none'),
    custom: null,
});

const typography = getPresets('typography', {
    weight: '$weight',
    color: '$color',
});

export interface PropsBox<B = Breakpoints> {
    $size?: ResponsiveProp<'s' | 'm' | 'l' | 'xl' | 'xxl', B>;
    $weight?: 'thin' | 'extra-light' | 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold' | 'extra-bold' | 'black';
    $color?:
        | 'brand-accent'
        | 'brand-white'
        | 'brand-primary'
        | 'geneva100'
        | 'moscow100'
        | 'osaka100'
        | 'seattle01'
        | 'seattle05'
        | 'seattle10'
        | 'seattle30'
        | 'seattle60'
        | 'seattle100'
        | 'seattle120'
        | 'seattle140'
        | 'currentColor';
    $margin?: ResponsiveProp<'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', B>;
    $uppercase?: boolean;
    $monospace?: boolean;
}
export const Box = styled.span<PropsBox>`
    font-feature-settings: ${({ $monospace }) => ($monospace ? `'tnum' on, 'lnum' on` : 'normal')};
    vertical-align: baseline;
    padding: 0;
    ${presets.base}
    ${presets.size}
    ${presets.margin}
    ${typography.weight}
    ${typography.color}

    ${({ $uppercase }) =>
        $uppercase &&
        css`
            text-transform: uppercase;
        `};

    ${presets.custom}
`;
