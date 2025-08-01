import styled, { css } from 'styled-components';
import { table } from 'vienna.ui-theme';
import { color } from 'vienna.tokens';
import { getPresets, getPresetsCustom } from '../../../Utils/styling';
import { ColumnProps } from '../Column';
import { TableSize, TableValign, TableData } from '../../types';

export const ColoredBg = {
    colors: {
        geneva10: color.utilitarian.geneva.c10,
        moscow10: color.utilitarian.moscow.c10,
        osaka10: color.utilitarian.osaka.c10,
        seattle05: color.primary.seattle.c05,
        seattle10: color.primary.seattle.c10,
    },
    hovers: {
        geneva10: color.utilitarian.geneva.c30,
        moscow10: color.utilitarian.moscow.c30,
        osaka10: color.utilitarian.osaka.c30,
        seattle05: color.primary.seattle.c10,
        seattle10: color.primary.seattle.c30,
    },
};

const presets = getPresets(
    table,
    'table'
)({
    body: null,
    size: '$size',
    selected: null,
    pinned: null,
});

const cell = getPresets(
    table.cell,
    'table.cell'
)({
    hover: null,
    divider: null,
    truncate: null,
    rightDivider: null,
});

const custom = getPresetsCustom('table.custom.body')({
    base: null,
    row: null,
    cell: null,
});

export interface PropsTd {
    $size?: TableSize;
    $valign?: TableValign;
    $align?: 'left' | 'center' | 'right';
    $hasRightDivider?: boolean;
    $truncate?: boolean;
    $width?: string;
    $minWidth?: string;
    $noWrap?: boolean;
    $pinned?: boolean;
    $monospaceFont?: boolean;
    $bg?: string;
    $leftBorder?: ColumnProps<TableData>['leftBorder'];
    $cropText?: ColumnProps<TableData>['cropText'];
    $wordBreak?: ColumnProps<TableData>['wordBreak'];
}
export const Td = styled.td<PropsTd>`
    ${presets.size}
    box-sizing: border-box;
    ${({ $hasRightDivider }) =>
        $hasRightDivider &&
        css`
            ${cell.rightDivider}
        `}

    ${({ $leftBorder }) =>
        $leftBorder &&
        css`
            border-left: ${color.utilitarian.moscow.c100} 2px solid;
        `}

    ${({ $cropText }) =>
        $cropText &&
        css`
            overflow: hidden;
            text-overflow: ellipsis;
        `}

   ${({ $wordBreak }) =>
        $wordBreak &&
        css`
            word-break: ${$wordBreak};
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
            max-width: ${$width};
            width: ${$width};
        `}

    ${({ $minWidth }) =>
        $minWidth &&
        css`
            min-width: ${$minWidth};
        `}

    ${({ $monospaceFont }) =>
        $monospaceFont &&
        css`
            font-variant-numeric: tabular-nums;
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

    ${({ $pinned, $bg }) =>
        $pinned && $bg
            ? css`
                  position: sticky;
                  z-index: 3;
                  background-color: ${ColoredBg.colors[$bg as keyof typeof ColoredBg.colors]};
                  &:hover {
                      background-color: ${ColoredBg.hovers[$bg as keyof typeof ColoredBg.hovers]};
                  }
              `
            : $pinned &&
              !$bg &&
              css`
                  position: sticky;
                  z-index: 3;
                  ${presets.pinned}
              `}

    ${custom.cell}
`;

export interface PropsRow {
    $noHover?: boolean;
    $noRowDivider?: boolean;
    $selected?: boolean;
    $isRowClickable?: boolean;
    $isPinnedGroupTitle?: boolean;
    $bg?: string;
    $noWrap?: boolean;
}

export const Row = styled.tr<PropsRow>`
    ${({ $bg, $selected }) =>
        $bg &&
        !$selected &&
        css`
            ${() => {
                if (ColoredBg.colors[$bg as keyof typeof ColoredBg.colors]) {
                    return css`
                        background-color: ${ColoredBg.colors[$bg as keyof typeof ColoredBg.hovers]};
                    `;
                }

                return css`
                    background-color: ${$bg};
                `;
            }}
        `}

    ${Td}:not(#actions) {
        ${({ $bg, $selected }) =>
            $bg &&
            !$selected &&
            css`
                ${() => {
                    if (ColoredBg.colors[$bg as keyof typeof ColoredBg.colors]) {
                        return css`
                            background-color: ${ColoredBg.colors[$bg as keyof typeof ColoredBg.hovers]};
                        `;
                    }

                    return css`
                        background-color: ${$bg};
                    `;
                }}
            `}
    }

    ${({ $noHover, $bg, $selected }) =>
        !$noHover && !$bg && !$selected
            ? css`
                  &:hover,
                  &:hover ${Td}:not(#actions) {
                      ${cell.hover}
                  }
              `
            : !$noHover &&
              $bg &&
              !$selected &&
              css`
                  &:hover {
                      ${() => {
                          if (ColoredBg.hovers[$bg as keyof typeof ColoredBg.colors]) {
                              return css`
                                  background-color: ${ColoredBg.hovers[$bg as keyof typeof ColoredBg.hovers]};
                              `;
                          }
                          return css`
                              filter: saturate(300%) brightness(100%) contrast(97%) opacity(1);
                          `;
                      }}
                  }

                  &:hover ${Td}:not(#actions) {
                      ${() => {
                          if (ColoredBg.hovers[$bg as keyof typeof ColoredBg.colors]) {
                              return css`
                                  background-color: ${ColoredBg.hovers[$bg as keyof typeof ColoredBg.hovers]};
                              `;
                          }
                          return '';
                      }}
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
            ${presets.selected}
            ${Td}:not(#actions) {
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

    ${({ $noWrap }) =>
        $noWrap &&
        css`
            white-space: nowrap;
        `}

    ${custom.row}
`;

export const Body = styled.tbody`
    ${presets.body}
    ${custom.base}
`;
