import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { HeadingProps } from './Heading';

const presets = getPresets('typography.heading', {
    base: null,
    size: 'size',
    margin: 'margin',
});

const typography = getPresets('typography', {
    color: 'color',
});

export const Box = styled.h1<HeadingProps>`
    font-feature-settings: normal;
    vertical-align: baseline;
    padding: 0;
    ${presets.base}
    ${presets.size}
    ${presets.margin}
    ${typography.color}

    ${(props) =>
        props.uppercase &&
        css`
            text-transform: uppercase;
        `};
`;
