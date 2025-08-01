import styled, { css } from 'styled-components';
import { table } from 'vienna.ui-theme';
import { tableLayers } from '../../TableLayers';
import { Icon } from '../ColumnTitle/ColumnTitle.styles';
import { getPresets, getPresetsCustom } from '../../../Utils/styling';

const presets = getPresets(
    table,
    'table'
)({
    header: null,
    size: '$size',
    pinned: null,
});

const cell = getPresets(
    table.cell.header,
    'table.cell.header'
)({
    base: null,
    hover: null,
    group: null,
    color: '$color',
    rightDivider: null,
    bottomDivider: null,
});

const custom = getPresetsCustom('table.custom.header')({
    base: null,
    row: null,
    cell: null,
    group: null,
    pinned: null,
});

export const Row = styled.tr`
    ${custom.row}
`;

export interface PropsTh {
    $size?: 'xs' | 's' | 'm' | 'l';
    $color?: string;
    $width?: string;
    $minWidth?: string;
    $hasRightDivider?: boolean;
    $hasBottomDivider?: boolean;
    $group?: boolean;
    $pinned?: boolean;
    $isHover?: boolean;
    $draggable?: boolean;
    $padding?: string;
}
export const Th = styled.th<PropsTh>`
    position: relative; // for IE
    box-sizing: border-box;
    top: 0;
    z-index: ${tableLayers.header};
    overflow: hidden;

    ${cell.base}
    ${presets.size}


    ${({ $width }) =>
        $width &&
        css`
            width: ${$width};
            max-width: ${$width};
        `}

    ${({ $minWidth }) =>
        $minWidth &&
        css`
            min-width: ${$minWidth};
        `}

    ${({ $padding }) =>
        $padding &&
        css`
            padding: ${$padding};
        `}

    ${({ $color }) =>
        $color &&
        css`
            ${cell.color}
        `}

    ${({ $hasRightDivider }) =>
        $hasRightDivider &&
        css`
            ${cell.rightDivider}
        `}

    ${({ $hasBottomDivider }) =>
        $hasBottomDivider &&
        css`
            ${cell.bottomDivider}
        `}

    ${({ $group }) =>
        $group &&
        css`
            ${cell.group}
            ${custom.group}
        `}

    ${({ $pinned }) =>
        $pinned &&
        css`
            position: sticky;
            z-index: ${tableLayers.pinnedHeader};
            ${presets.pinned};
            ${custom.pinned}
        `}

    ${({ $isHover }) =>
        $isHover &&
        css`
            &:hover {
                ${cell.hover}

                ${Icon} {
                    visibility: visible;
                }
            }
        `}
    ${({ $draggable }) =>
        $draggable &&
        css`
            cursor: grab;

            &:active {
                cursor: grabbing;
            }
        `}

    ${custom.cell}
`;

export const Header = styled.thead`
    // for multiple rows in header
    position: sticky;
    top: 0;
    z-index: 4;
    ${presets.header}
    ${custom.base}
`;
