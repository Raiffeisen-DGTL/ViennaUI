import React, { FC, forwardRef, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../../../Utils/styling';
import { BoxStyled } from '../../../Utils/styled';
import { TableSize } from '../../../Table/types';

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

interface PropsTdStyled {
    $size?: TableSize;
    $hasRightDivider?: boolean;
    $truncate?: boolean;
    $align?: 'left' | 'center' | 'right';
    $valign?: 'top' | 'center' | 'bottom';
    $width?: string;
    $noWrap?: boolean;
    $pinned?: boolean;
}
const TdStyled = styled.td<PropsTdStyled>`
    ${presets.size}

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
            ${presets.pinned}
        `}

    ${custom.cell}
`;
export interface TdProps extends Omit<BoxStyled<typeof TdStyled, PropsTdStyled>, 'valign'> {
    size?: PropsTdStyled['$size'];
    hasRightDivider?: PropsTdStyled['$hasRightDivider'];
    truncate?: PropsTdStyled['$truncate'];
    align?: PropsTdStyled['$align'];
    valign?: PropsTdStyled['$valign'];
    width?: PropsTdStyled['$width'];
    noWrap?: PropsTdStyled['$noWrap'];
    pinned?: PropsTdStyled['$pinned'];
}
export const Td: FC<TdProps> = ({
    children,
    size,
    hasRightDivider,
    truncate,
    align,
    valign,
    width,
    noWrap,
    pinned,
    ...attrs
}) => {
    return (
        <TdStyled
            {...attrs}
            $size={size}
            $hasRightDivider={hasRightDivider}
            $truncate={truncate}
            $align={align}
            $valign={valign}
            $width={width}
            $noWrap={noWrap}
            $pinned={pinned}>
            {children}
        </TdStyled>
    );
};

interface PropsRowStyled {
    $noHover?: boolean;
    $noRowDivider?: boolean;
    $selected?: boolean;
    $isRowClickable?: boolean;
}
const RowStyled = styled.tr<PropsRowStyled>`
    ${({ $noHover }) =>
        !$noHover &&
        css`
            &:hover {
                ${TdStyled} {
                    ${cell.hover}
                }
            }
        `};

    ${({ $noRowDivider }) =>
        !$noRowDivider &&
        css`
            ${TdStyled} {
                ${cell.divider}
            }
        `};

    ${({ $selected }) =>
        $selected &&
        css`
            ${TdStyled} {
                ${presets.selected}
            }
        `}

    ${({ $isRowClickable }) =>
        $isRowClickable &&
        css`
            ${TdStyled} {
                cursor: pointer;
            }
        `}

    ${custom.row}
`;

export interface RowProps extends BoxStyled<typeof RowStyled, PropsRowStyled> {
    noHover?: PropsRowStyled['$noHover'];
    noRowDivider?: PropsRowStyled['$noRowDivider'];
    selected?: PropsRowStyled['$selected'];
    isRowClickable?: PropsRowStyled['$isRowClickable'];
    children: ReactNode;
}

export const Row = forwardRef<HTMLTableRowElement, RowProps>((props, ref) => {
    const { children, noHover, noRowDivider, selected, isRowClickable, ...attrs } = props;
    return (
        <RowStyled
            {...attrs}
            ref={ref}
            $noHover={noHover}
            $noRowDivider={noRowDivider}
            $selected={selected}
            $isRowClickable={isRowClickable}>
            {children}
        </RowStyled>
    );
});

export const Body = styled.tbody`
    ${presets.body}
    ${custom.base}
`;
