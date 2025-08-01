import styled, { css } from 'styled-components';
import { pagination } from 'vienna.ui-theme';
import { getPresets } from '../../Utils/styling';

const presets = getPresets(
    pagination.pager,
    'pagination.pager'
)({
    size: '$size',
    base: null,
    hover: null,
    focus: null,
    active: null,
    disabled: null,
    gap: '$size',
});

export interface PropsBox {
    $size?: 's' | 'm' | 'l';
    $active?: boolean;
    $disabled?: boolean;
}
export const Box = styled.button<PropsBox>`
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
    font-family: inherit;

    & > svg {
        display: block;
    }

    ${presets.base}
    ${presets.size}

    &:not(:last-of-type) {
        ${presets.gap}
    }

    ${({ $active }) =>
        $active &&
        css`
            ${presets.active}
        `}

    ${({ $disabled }) =>
        !$disabled &&
        css`
            &:hover {
                ${presets.hover}
            }

            &:focus {
                ${presets.focus}
            }
        `}

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${presets.disabled}
        `}
`;
