import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { ButtonProps } from './Button';

const presets = getPresets('button', {
    base: null,
    loading: null,
    focus: 'design',
    size: 'size',
    design: 'design',
    hover: 'design',
    disabled: 'design',
    gap: 'size',
    custom: null,
    customWrapper: null,
});

export const Box = styled.button<any>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    white-space: nowrap;
    user-select: none;
    appearance: none;
    cursor: pointer;
    outline: 0;
    position: relative;

    ${presets.base}

    /** order is important here!
        design: ghost is overwrting padding from presets.size
        so presets.design must go after the presets.size
    */
    ${presets.size}
    ${presets.design}

    &:active {
        top: 1px;
    }

    &:hover {
        ${presets.hover}
    }

    ${({ pressed }) =>
        pressed &&
        css`
            ${presets.hover}
        `}


    ${({ grid }) =>
        grid &&
        css`
            width: ${grid ? `${(100 / 12) * grid}%` : 'auto'};
        `}

    ${({ disabled }) =>
        disabled &&
        css`
            ${presets.disabled}
        `}

    ${({ isLoading }) =>
        isLoading &&
        css`
            ${presets.loading}
        `}

    ${({ isFocusStateVisible }: any) =>
        isFocusStateVisible &&
        css`
            &:focus {
                ${presets.focus}
            }
        `}

    ${({ square }) =>
        square &&
        css`
            padding: 0;
        `}

    ${presets.custom}
`;

export const ContentWrapper = styled.span<{ size: ButtonProps['size'] }>`
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:last-of-type) {
        ${presets.gap}
    }

    & > svg {
        display: block;
    }

    ${presets.customWrapper}
`;
