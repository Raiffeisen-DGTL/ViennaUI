import styled, { css } from 'styled-components';
import React from 'react';
import { getPresets } from '../Utils/styling';
import { BoxStyled } from '../Utils/styled';

const tabs = getPresets('tabs', {
    base: null,
    custom: null,
});

const tab = getPresets('tabs.tab', {
    base: null,
    size: '$size',
    active: null,
    disabled: null,
    hover: null,
    custom: null,
});

const line = getPresets('tabs.tab.line', {
    base: null,
    left: null,
    right: null,
    design: '$design',
});

const combineTab = getPresets('tabs.combineTab', {
    base: null,
    item: '$size',
});

export interface PropsTabStyled {
    $design?: 'accent' | 'primary';
    $size?: 'l' | 'm' | 's';
    $active?: boolean;
    $disabled?: boolean;
}
export const TabStyled = styled.div<PropsTabStyled>`
    position: relative;
    box-sizing: border-box;
    ${tab.base}
    ${tab.size}

    &:last-child {
        margin-right: 0px;
    }

    ${({ $active }) => $active && tab.active}

    &:before {
        position: absolute;
        content: '';
        left: 50%;
        width: 0px;
        ${line.base}
        ${line.design}
        ${line.right}
        ${({ $active }) =>
            $active &&
            css`
                width: 50%;
            `}
    }

    &:after {
        position: absolute;
        content: '';
        right: 50%;
        width: 0px;
        ${line.base}
        ${line.design}
        ${line.left}
        ${({ $active }) =>
            $active &&
            css`
                width: 50%;
            `}
    }

    ${({ $disabled }) => $disabled && tab.disabled}

    &:hover {
        ${tab.hover}
    }
    ${tab.custom}
`;

export interface PropsTab extends BoxStyled<typeof TabStyled, PropsTabStyled> {
    design?: PropsTabStyled['$design'];
    size?: PropsTabStyled['$size'];
    active?: PropsTabStyled['$active'];
    disabled?: PropsTabStyled['$disabled'];
    value?: any;
}
export const Tab: React.FC<PropsTab> = ({ children, design, size, active, disabled, ...attrs }) => (
    <TabStyled {...(attrs as {})} $design={design} $size={size} $active={active} $disabled={disabled}>
        {children}
    </TabStyled>
);

type PropsCombineTab = Pick<PropsTabStyled, '$size'>;
export const CombineTab = styled.div<PropsCombineTab>`
    position: relative;
    visibility: hidden;
    ${combineTab.base}
`;

export type PropsBox = Pick<PropsTabStyled, '$design' | '$size'> & {
    $resizable?: boolean;
};
export const Box = styled.div<PropsBox>`
    outline: none;
    ${({ $resizable }) =>
        !$resizable
            ? css`
                  width: 100%;
                  height: 100%;
              `
            : ''}

    ${tabs.base}
    ${tabs.custom}
`;

type PropsItem = Pick<PropsTabStyled, '$size'>;
export const Item = styled.div<PropsItem>`
    ${combineTab.item}
`;

export const Arrow = styled.span`
    margin-left: 4px;
    height: 20px;
    display: inline-block;
`;
