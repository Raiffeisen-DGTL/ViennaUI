import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { TableLayers } from '../../TableLayers';
import { Icon } from '../ColumnTitle/ColumnTitle.styles';

const presets = getPresets('table', {
    header: null,
    size: 'size',
    pinned: null,
});

const cell = getPresets('table.cell.header', {
    base: null,
    hover: null,
    group: null,
    color: 'color',
    rightDivider: null,
    bottomDivider: null,
});

const custom = getPresets('table.custom.header', {
    base: null,
    row: null,
    cell: null,
    group: null,
    pinned: null,
});

export const Row = styled.tr`
    ${custom.row}
`;

export const Th = styled.th<any>`
    position: relative; // for IE
    position: sticky;
    top: 0;
    z-index: ${TableLayers.Header};

    ${cell.base}
    ${presets.size}

    ${({ width }) =>
        width &&
        css`
            min-width: ${width};
            max-width: ${width};
        `}

    ${({ color }) =>
        color &&
        css`
            ${cell.color}
        `}

    ${({ hasRightDivider }) =>
        hasRightDivider &&
        css`
            ${cell.rightDivider}
        `}

    ${({ hasBottomDivider }) =>
        hasBottomDivider &&
        css`
            ${cell.bottomDivider}
        `}

    ${({ group }) =>
        group &&
        css`
            ${cell.group}
            ${custom.group}
        `}

    ${({ pinned }) =>
        pinned &&
        css`
            position: sticky;
            z-index: ${TableLayers.PinnedHeader};
            ${presets.pinned};
            ${custom.pinned}
        `}

    ${({ isHover }) =>
        isHover &&
        css`
            &:hover {
                ${cell.hover}

                ${Icon} {
                    visibility: visible;
                }
            }
        `}

    ${custom.cell}
`;

export const Header = styled.thead`
    ${presets.header}
    ${custom.base}
`;
