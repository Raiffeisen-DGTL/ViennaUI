import styled, { css } from 'styled-components';
import { getPresets } from '../../../Utils/styling';
import { TableProps } from '../../Table';

const presets = getPresets('table', {
    body: null,
    size: '$size',
    selected: null,
    pinned: null,
});

const cell = getPresets('table.cell', {
    hover: null,
    divider: null,
    truncate: null,
    rightDivider: null,
});

const custom = getPresets('table.custom.body', {
    base: null,
    row: null,
    cell: null,
});

export interface PropsTd {
    $size?: TableProps['size'];
    $valign?: TableProps['valign'];
    $align?: 'left' | 'center' | 'right';
    $hasRightDivider?: boolean;
    $truncate?: boolean;
    $width?: string;
    $noWrap?: boolean;
    $pinned?: boolean;
}
export const Td = styled.td<PropsTd>`
    ${presets.size}
    box-sizing: border-box;
    ${({ $hasRightDivider }) =>
        $hasRightDivider &&
        css`
            ${cell.rightDivider}
        `}

    ${({ $truncate }) =>
        $truncate &&
        css`
            ${cell.truncate}
        `}

    ${({ $align }) =>
        $align &&
        css`
            text-align: ${$align};
        `}

    ${({ $valign }) =>
        $valign &&
        css`
            vertical-align: ${$valign};
        `}

    ${({ $width }) =>
        $width &&
        css`
            min-width: ${$width};
            max-width: ${$width};
        `}

    ${({ $noWrap }) =>
        $noWrap &&
        css`
            white-space: nowrap;
        `}

    ${({ $pinned }) =>
        $pinned &&
        css`
            position: sticky;
            z-index: 1;
            ${presets.pinned}
        `}

    ${custom.cell}
`;

export interface PropsRow {
    $noHover?: boolean;
    $noRowDivider?: boolean;
    $selected?: any;
    $isRowClickable?: any;
    $isPinnedGroupTitle?: boolean;
}
export const Row = styled.tr<PropsRow>`
    ${({ $noHover }) =>
        !$noHover &&
        css`
            &:hover {
                ${Td} {
                    ${cell.hover}
                }
            }
        `};

    ${({ $noRowDivider }) =>
        !$noRowDivider &&
        css`
            ${Td} {
                ${cell.divider}
            }
        `};

    ${({ $selected }) =>
        $selected &&
        css`
            ${Td} {
                ${presets.selected}
            }
        `}

    ${({ $isRowClickable }) =>
        $isRowClickable &&
        css`
            ${Td} {
                cursor: pointer;
            }
        `}

        ${({ $isPinnedGroupTitle }) =>
        $isPinnedGroupTitle &&
        css`
            position: relative;
        `}

    ${custom.row}
`;

export const Body = styled.tbody`
    ${presets.body}
    ${custom.base}
`;
