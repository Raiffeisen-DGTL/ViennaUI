import styled, { css } from 'styled-components';
import { chips } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { SizeType } from '@/Utils';

const presets = getPresets(
    chips,
    'chips'
)({
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

const active = getPresets(
    chips.active,
    'chips.active'
)({
    design: '$design',
    hover: '$design',
    disabled: '$design',
    custom: null,
});

const viewOnlyPresets = getPresets(
    chips.viewOnlyText,
    'chips.viewOnlyText'
)({
    base: null,
    size: '$size',
});

export interface PropsBox {
    $size?: SizeType<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'>;
    $design?: 'accent' | 'primary' | 'ghost';
    $align?: string;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    box-sizing: border-box;
    position: relative;
    align-items: center;
    justify-content: ${({ $align }) => ($align === 'right' ? 'flex-end' : 'flex-start')};
    flex-flow: wrap;

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
    min-width: fit-content;
    white-space: nowrap;

    ${presets.base}
    ${presets.design}
    ${presets.size}

    ${({ $disabled }) =>
        !$disabled &&
        css`
            &:hover {
                ${presets.hover}
            }
        `}

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${presets.disabled};

            &:hover {
                cursor: auto;
            }
        `}

    ${({ $active, $disabled }) =>
        $active &&
        css`
            ${active.design}

            ${$disabled
                ? css`
                      ${active.disabled}
                  `
                : css`
                      &:hover {
                          ${active.hover}
                      }
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

export interface ChipsViewOnlyTextProps {
    $size?: PropsBox['$size'];
}
export const ChipsViewOnlyText = styled.div<ChipsViewOnlyTextProps>`
    ${viewOnlyPresets.base}
    ${viewOnlyPresets.size}
`;
