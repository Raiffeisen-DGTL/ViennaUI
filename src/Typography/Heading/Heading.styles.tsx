import styled, { css } from 'styled-components';
import { typography } from 'vienna.ui-theme';
import { getPresets } from '../../Utils/styling';
import { Breakpoints, ResponsiveProp } from '../../Utils/responsiveness';
import { ColorType } from '../Text/Text.styles';

const presets = getPresets(
    typography,
    'typography'
)({
    color: '$color',
});

const heading = getPresets(
    typography.heading,
    'typography.heading'
)({
    base: null,
    size: ['$size', 'm'],
    margin: ['$margin', null],
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
    ${heading.base}
    ${heading.size}
    ${heading.margin}
    ${presets.color}

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
