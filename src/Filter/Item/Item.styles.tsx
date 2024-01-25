import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';

const filter = getPresets('filter', {
    box: null,
    base: null,
    design: '$design',
    size: '$size',
    hover: null,
    custom: null,
    customLabel: null,
    customIcon: null,
});

const icon = getPresets('filter.icon', {
    base: null,
    notHover: null,
    focus: null,
});

const label = getPresets('filter.label', {
    base: null,
});

export interface PropsBox {
    $design?: 'primary' | 'ghost';
    $size?: 'm';
}
export const Box = styled.div<PropsBox>`
    display: flex;
    align-items: center;
    flex-grow: 1;
    &:hover {
        ${filter.hover}
    }
    ${filter.base}
    ${filter.box}
    ${filter.design}
    ${filter.size}
    margin-left: 0;
    ${filter.custom}
`;

interface PropsLabel {
    $maxWidth?: number;
}
export const Label = styled.div<PropsLabel>`
    ${label.base}
    ${filter.customLabel}
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
    ${filter.customLabel}
`;
