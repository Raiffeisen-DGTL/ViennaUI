import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('table', {
    body: null,
    size: 'size',
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

export const Td = styled.td<any>`
    ${presets.size}

    ${({ hasRightDivider }) =>
        hasRightDivider &&
        css`
            ${cell.rightDivider}
        `}

    ${({ truncate }) =>
        truncate &&
        css`
            ${cell.truncate}
        `}

    ${({ align }) =>
        align &&
        css`
            text-align: ${align};
        `}

    ${({ valign }) =>
        valign &&
        css`
            vertical-align: ${valign};
        `}

    ${({ width }) =>
        width &&
        css`
            min-width: ${width};
            max-width: ${width};
        `}

    ${({ noWrap }) =>
        noWrap &&
        css`
            white-space: nowrap;
        `}

    ${({ pinned }) =>
        pinned &&
        css`
            position: sticky;
            ${presets.pinned}
        `}

    ${custom.cell}
`;

export const Row = styled.tr<any>`
    ${({ noHover }) =>
        !noHover &&
        css`
            &:hover {
                ${Td} {
                    ${cell.hover}
                }
            }
        `};

    ${({ noRowDivider }) =>
        !noRowDivider &&
        css`
            ${Td} {
                ${cell.divider}
            }
        `};

    ${({ selected }) =>
        selected &&
        css`
            ${Td} {
                ${presets.selected}
            }
        `}

    ${({ isRowClickable }) =>
        isRowClickable &&
        css`
            ${Td} {
                cursor: pointer;
            }
        `}

    ${custom.row}
`;

export const Body = styled.tbody<any>`
    ${presets.body}
    ${custom.base}
`;
