import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('link', {
    base: null,
    size: 'size',
    gap: 'size',
    design: 'design',
    hover: 'design',
    disabled: null,
    loading: null,
    custom: null,
});

const wrapper = getPresets('link.wrapper', {
    base: null,
    design: 'design',
    hover: 'design',
    disabled: 'design',
    loading: null,
    custom: null,
});

export const Wrapper = styled.span<any>`
    ${wrapper.base}
    ${wrapper.design}
    // this should overwrite vertical-align on Box
    vertical-align: baseline !important;

    ${({ disabled }) =>
        disabled &&
        css`
            ${wrapper.disabled}
        `}

    ${({ isLoading }) =>
        isLoading &&
        css`
            ${wrapper.loading}
        `}
`;

export const Box = styled.a<any>`
    position: relative;
    cursor: pointer;
    outline: 0;
    text-decoration: none;

    ${presets.base}
    ${presets.size}
    ${presets.design}

    &:hover {
        ${presets.hover}

        ${Wrapper} {
            ${wrapper.hover}
        }
    }

    ${({ disabled }) =>
        disabled &&
        css`
            pointer-events: none;
            ${presets.disabled}
        `}

    ${({ isLoading }) =>
        isLoading &&
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
