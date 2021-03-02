import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('table.sort.box', {
    hover: null,
    active: null,
});

const icon = getPresets('table.sort.icon', {
    base: null,
    active: null,
});

export const Icon = styled.span<any>`
    visibility: hidden;
    display: inline-flex;
    ${icon.base}

    ${({ active }) =>
        active &&
        css`
            visibility: visible;
            ${icon.active}
        `}
`;

export const Box = styled.div<any>`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        ${presets.hover}

        ${Icon} {
            visibility: visible;
        }
    }

    ${({ active }) =>
        active &&
        css`
            ${presets.active}
        `}
`;
