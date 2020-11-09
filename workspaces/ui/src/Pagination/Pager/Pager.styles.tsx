import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('pagination.pager', {
    size: 'size',
    base: null,
    hover: null,
    active: null,
    disabled: null,
    gap: 'size',
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
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;

    & > svg {
        display: block;
    }

    ${presets.base}
    ${presets.size}

    &:not(:last-of-type) {
        ${presets.gap}
    }

    ${({ active }) =>
        active &&
        css`
            ${presets.active}
        `}

    ${({ disabled }) =>
        !disabled &&
        css`
            &:hover {
                ${presets.hover}
            }
        `}


    ${({ disabled }) =>
        disabled &&
        css`
            ${presets.disabled}
        `}
`;
