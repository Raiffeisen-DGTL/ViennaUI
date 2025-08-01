import styled, { css } from 'styled-components';
import { filter } from 'vienna.ui-theme';
import { getPresets } from '../../Utils/styling';
import { SizeType } from '../../Utils';

const presets = getPresets(
    filter,
    'filter'
)({
    box: null,
    base: null,
    design: '$design',
    size: '$size',
    hover: null,
    custom: null,
    customLabel: null,
    customIcon: null,
});

const icon = getPresets(
    filter.icon,
    'filter.icon'
)({
    base: null,
    notHover: null,
    focus: null,
});

const label = getPresets(
    filter.label,
    'filter.label'
)({
    base: null,
});

export interface PropsBox {
    $design?: 'primary' | 'ghost';
    $size?: SizeType;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    align-items: center;
    flex-grow: 1;
    &:hover {
        ${presets.hover}
    }
    ${presets.base}
    ${presets.box}
    ${presets.design}
    ${presets.size}
    margin-left: 0;
    ${presets.custom}
`;

interface PropsLabel {
    $maxWidth?: number;
}
export const Label = styled.div<PropsLabel>`
    ${label.base}
    ${presets.customLabel}
    ${({ $maxWidth }) =>
        $maxWidth &&
        css`
            max-width: ${$maxWidth}px;
        `}
`;

interface PropsIcon {
    $isFocusStateVisible?: boolean;
}
export const Icon = styled.div<PropsIcon>`
    display: flex;
    align-items: center;
    ${icon.base}
    &:not(:hover) {
        ${icon.notHover}
    }
    ${({ $isFocusStateVisible }) =>
        $isFocusStateVisible &&
        css`
            &:focus {
                ${icon.focus}
            }
        `}
    ${icon.base}
    ${presets.customLabel}
`;
