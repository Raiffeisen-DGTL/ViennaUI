import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../../../Utils/styling';
import { BoxStyled } from '../../../Utils/styled';

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
    cell: null,
    group: null,
    pinned: null,
});

export interface PropsHeaderStyled {
    $width?: string;
    $hasRightDivider?: boolean;
    $hasBottomDivider?: boolean;
    $group?: boolean;
    $pinned?: boolean;
    $isHover?: boolean;
    $color?: 'miami10' | 'sochi10' | 'paris10' | 'tokyo10' | 'dubai10' | 'nice10';
}
const HeaderStyled = styled.th<PropsHeaderStyled>`
    position: relative; // for IE
    position: sticky;
    top: 0;

    ${cell.base}
    ${presets.size};
    // Remove in next time. This code breaks resize.
    /* ${({ $width }) =>
        $width &&
        css`
            width: ${$width};
        `}; */

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
            ${presets.pinned};
            ${custom.pinned}
        `}

    ${({ $isHover }) =>
        $isHover &&
        css`
            &:hover {
                ${cell.hover}
            }
        `}

    ${custom.cell}
`;

export interface HeaderProps extends BoxStyled<typeof HeaderStyled, PropsHeaderStyled> {
    width?: PropsHeaderStyled['$width'];
    hasRightDivider?: PropsHeaderStyled['$hasRightDivider'];
    hasBottomDivider?: PropsHeaderStyled['$hasBottomDivider'];
    group?: PropsHeaderStyled['$group'];
    pinned?: PropsHeaderStyled['$pinned'];
    isHover?: PropsHeaderStyled['$isHover'];
    color?: PropsHeaderStyled['$color'];
}
export const Header: FC<HeaderProps> = ({
    children,
    width,
    hasRightDivider,
    hasBottomDivider,
    group,
    pinned,
    isHover,
    color,
    ...attrs
}) => {
    return (
        <HeaderStyled
            {...attrs}
            $width={width}
            $hasRightDivider={hasRightDivider}
            $hasBottomDivider={hasBottomDivider}
            $group={group}
            $pinned={pinned}
            $isHover={isHover}
            $color={color}>
            {children}
        </HeaderStyled>
    );
};

export const Head = styled.thead`
    ${presets.header}
    ${custom.base}
`;
