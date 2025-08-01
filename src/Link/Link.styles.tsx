import styled, { css } from 'styled-components';
import { link, typography } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';
import { ColorType } from '../Typography/Text/Text.styles';

const presets = getPresets(
    link,
    'link'
)({
    base: null,
    size: ['$size', 'm'],
    gap: ['$size', 'm'],
    design: '$design',
    hover: '$design',
    disabled: null,
    loading: null,
    custom: null,
});

const typographyPresets = getPresets(
    typography,
    'typography'
)({
    color: '$color',
});

const wrapper = getPresets(
    link.wrapper,
    'link.wrapper'
)({
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
    ${typographyPresets.color}
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
    ${typographyPresets.color}

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
