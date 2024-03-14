import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp, responsivePreset } from '../Utils/responsiveness';
import { ColorType } from '../Typography/Text/Text.styles';

const presets = getPresets('link', {
    base: null,
    size: responsivePreset('$size', 'm'),
    gap: responsivePreset('$size', 'm'),
    design: '$design',
    hover: '$design',
    disabled: null,
    loading: null,
    custom: null,
});

const typography = getPresets('typography', {
    color: '$color',
});

const wrapper = getPresets('link.wrapper', {
    base: null,
    design: '$design',
    hover: '$design',
    disabled: '$design',
    loading: null,
});

export interface PropsBox<B = Breakpoints> {
    $design?: 'accent' | 'accent-underline' | 'primary' | 'secondary';
    $color?: ColorType;
    $size?: ResponsiveProp<'s' | 'm' | 'l' | 'xl' | 'xxl', B>;
    $loading?: boolean;
    $disabled?: boolean;
}

export const Wrapper = styled.span<PropsBox>`
    ${wrapper.base}
    ${wrapper.design}
    ${typography.color}
    // this should overwrite vertical-align on Box
    vertical-align: baseline !important;

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${wrapper.disabled}
        `}

    ${({ $loading }) =>
        $loading &&
        css`
            ${wrapper.loading}
        `}
`;

export const Box = styled.a<PropsBox>`
    position: relative;
    cursor: pointer;
    outline: 0;
    text-decoration: none;

    ${presets.base}
    ${presets.size}
    ${presets.design}
    ${typography.color}

    &:hover,
    &:focus {
        ${presets.hover}

        ${Wrapper} {
            ${wrapper.hover}
        }
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            pointer-events: none;
            ${presets.disabled}
        `}

    ${({ $loading }) =>
        $loading &&
        css`
            ${presets.loading}
        `}

    & > * {
        vertical-align: middle;
    }

    & > *:not(:last-child) {
        ${presets.gap}
    }

    ${presets.custom}
`;
