import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Icon } from '../ActionIcons/ActionIcon.styles';

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
`;

export const Row = styled.tr<any>`
    ${({ noHover }) =>
        !noHover &&
        css`
            &:hover {
                ${Td} {
                    ${cell.hover}
                }

                ${Icon} {
                    visibility: visible;
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
`;

export const Body = styled.tbody<any>`
    ${presets.body}
`;
