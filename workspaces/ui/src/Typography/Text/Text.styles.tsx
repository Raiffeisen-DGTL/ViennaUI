import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { TextProps } from './Text';

const presets = getPresets('typography.text', {
    base: null,
    size: 'size',
    margin: 'margin',
    custom: null,
});

const typography = getPresets('typography', {
    weight: 'weight',
    color: 'color',
});

export const Box = styled.span<TextProps>`
    font-feature-settings: normal;
    vertical-align: baseline;
    padding: 0;
    ${presets.base}
    ${presets.size}
    ${presets.margin}
    ${typography.weight}
    ${typography.color}

    ${(props) =>
        props.uppercase &&
        css`
            text-transform: uppercase;
        `};

    ${presets.custom}
`;
