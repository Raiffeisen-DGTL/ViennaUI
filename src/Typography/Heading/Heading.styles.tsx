import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';
import { Breakpoints, ResponsiveProp, responsivePreset } from '../../Utils/responsiveness';
import { ColorType } from '../Text/Text.styles';

const presets = getPresets('typography.heading', {
    base: null,
    size: responsivePreset('$size', 'm'),
    margin: responsivePreset('$margin', 'none'),
});

const typography = getPresets('typography', {
    color: '$color',
});

export interface PropsBox<B = Breakpoints> {
    $size?: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl', B>;
    $color?: ColorType;
    $align?: 'left' | 'center' | 'right' | 'justify';
    $margin?: ResponsiveProp<'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', B>;
    $uppercase?: boolean;
    $monospace?: boolean;
}
export const Box = styled.h1<PropsBox>`
    font-feature-settings: ${({ $monospace }) => ($monospace ? `'tnum' on, 'lnum' on` : 'normal')};
    vertical-align: baseline;
    padding: 0;
    ${presets.base}
    ${presets.size}
    ${presets.margin}
    ${typography.color}

    ${({ $align }) =>
        $align &&
        css`
            text-align: ${$align};
        `};

    ${({ $uppercase }) =>
        $uppercase &&
        css`
            text-transform: uppercase;
        `};
`;
