import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';

const presets = getPresets('chips', {
    box: null,
    base: null,
    size: '$size',
    focus: null,
    design: '$design',
    disabled: '$design',
    hover: null,
    custom: null,
    boxCustom: null,
});

const active = getPresets('chips.active', {
    design: '$design',
    hover: '$design',
    disabled: '$design',
    custom: null,
});

export interface PropsBox {
    $size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    $design?: 'accent' | 'primary' | 'ghost';
    $align?: string;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    box-sizing: border-box;
    position: relative;
    align-items: center;
    justify-content: ${({ $align }) => ($align === 'right' ? 'flex-end' : 'flex-start')};

    ${presets.box}
    ${presets.boxCustom}
`;

export interface PropsBoxItem extends Pick<PropsBox, '$size' | '$design'> {
    $active?: boolean;
    $disabled?: boolean;
    $isFocusStateVisible?: boolean;
}
export const BoxItem = styled.span<PropsBoxItem>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    &:first-child {
        margin-left: 0;
    }

    ${presets.base}
    ${presets.design}
    ${presets.size}

    &:hover {
        ${presets.hover}
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            pointer-events: none;
            ${presets.disabled};
        `}

    ${({ $active, $disabled }) =>
        $active &&
        css`
            ${active.design}

            &:hover {
                ${active.hover}
            }

            ${$disabled &&
            css`
                ${active.disabled};
            `}

            ${active.custom}
        `}

    ${({ $isFocusStateVisible }) =>
        $isFocusStateVisible &&
        css`
            &:focus {
                ${presets.focus}
            }
        `}

    ${presets.custom}
`;
