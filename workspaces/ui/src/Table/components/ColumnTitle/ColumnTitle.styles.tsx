import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('table.cell.header.title', {
    base: null,
    hover: null,
});

const icon = getPresets('table.cell.header.title.icon', {
    base: null,
    active: null,
});

export const Icon = styled.span<any>`
    visibility: hidden;
    display: inline-flex;
    ${icon.base}
`;

export const Box = styled.div<any>`
    display: flex;
    align-items: center;
    cursor: pointer;
    max-width: 100%;

    &:hover {
        ${presets.hover}

        ${Icon} {
            visibility: visible;
        }
    }

    ${({ forceIconVisibility }) =>
        forceIconVisibility &&
        css`
            ${Icon} {
                visibility: visible;
            }
        `}

    ${({ active }) =>
        active &&
        css`
            ${presets.hover}

            ${Icon} {
                visibility: visible;
                ${icon.active}
            }
        `}
`;

export const Title = styled.span`
    display: inline-block;
    ${presets.base}
`;
