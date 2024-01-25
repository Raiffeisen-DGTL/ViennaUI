import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { getPresets } from '../../../Utils/styling';
import { BoxStyled } from '../../../Utils/styled';

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

interface PropsTdStyled {
    $size: any;
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
            {...(attrs as {})}
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
}
export const Row: FC<RowProps> = ({ children, noHover, noRowDivider, selected, isRowClickable, ...attrs }) => {
    return (
        <RowStyled
            {...(attrs as {})}
            $noHover={noHover}
            $noRowDivider={noRowDivider}
            $selected={selected}
            $isRowClickable={isRowClickable}>
            {children}
        </RowStyled>
    );
};

export const Body = styled.tbody`
    ${presets.body}
    ${custom.base}
`;
