import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const filter = getPresets('filter', {
    box: null,
    base: null,
    focus: null,
    design: 'design',
    size: 'design',
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

export const Box = styled.div<{ design?: 'primary' | 'ghost'; size?: 'm' }>`
    display: flex;
    align-items: center;
    flex-grow: 1;
    ${filter.base}
    ${filter.box}
    ${filter.design}
    ${filter.custom}
`;

export const Label = styled.div<{ maxWidth?: number }>`
    ${label.base}
    ${filter.customLabel}
    ${({ maxWidth }) =>
        maxWidth &&
        css`
            max-width: ${maxWidth}px;
        `}
`;

export const Icon = styled.div<{ isFocusStateVisible?: boolean }>`
    display: flex;
    align-items: center;
    ${icon.base}
    &:not(:hover) {
        ${icon.notHover}
    }
    ${({ isFocusStateVisible }: any) =>
        isFocusStateVisible &&
        css`
            &:focus {
                ${icon.focus}
            }
        `}
    ${icon.base}
    ${filter.customLabel}
`;
