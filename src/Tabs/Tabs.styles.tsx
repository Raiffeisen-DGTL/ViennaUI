import styled, { css } from 'styled-components';
import React from 'react';
import { tabs } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { BoxStyled } from '../Utils/styled';
import { TabsValueType } from './Tabs';
import { Wrapper } from '@/Link/Link.styles';

const presets = getPresets(
    tabs,
    'tabs'
)({
    base: null,
    custom: null,
});

const tab = getPresets(
    tabs.tab,
    'tabs.tab'
)({
    base: null,
    size: '$size',
    active: null,
    disabled: null,
    hover: null,
    custom: null,
});

const line = getPresets(
    tabs.tab.line,
    'tabs.tab.line'
)({
    base: null,
    left: null,
    right: null,
    design: '$design',
});

const combineTab = getPresets(
    tabs.combineTab,
    'tabs.combineTab'
)({
    base: null,
    item: '$size',
});

export interface PropsTabStyled {
    $design?: 'accent' | 'primary';
    $size?: 'l' | 'm' | 's';
    $active?: boolean;
    $disabled?: boolean;
    $isLastTab?: boolean;
    $alignMiddle?: boolean;
}

export type TabsLinkProps = Omit<React.HTMLAttributes<HTMLDivElement>, keyof PropsTabStyled> & {
    href?: string;
    to?: string;
};

export const TabStyled = styled.div<PropsTabStyled>`
    position: relative;
    box-sizing: border-box;
    text-decoration: none;
    ${tab.base}
    ${tab.size}

    &:last-child {
        margin-right: 0;
    }
    ${({ $isLastTab }) =>
        $isLastTab &&
        css`
            margin-right: 0;
        `}

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

    ${({ $alignMiddle }) =>
        $alignMiddle &&
        css`
            padding-bottom: 0;
        `}
        ${Wrapper} {
        text-decoration: none;
}}
`;

export interface PropsTab<T = TabsValueType> extends BoxStyled<typeof TabStyled, PropsTabStyled>, TabsLinkProps {
    design?: PropsTabStyled['$design'];
    size?: PropsTabStyled['$size'];
    active?: PropsTabStyled['$active'];
    disabled?: PropsTabStyled['$disabled'];
    value?: T;
    isLastTab?: boolean;
    alignMiddle?: boolean;
}
export const Tab = <T,>({
    children,
    design,
    size,
    active,
    disabled,
    isLastTab,
    alignMiddle,
    ...attrs
}: PropsTab<T>) => {
    return (
        <TabStyled
            {...attrs}
            $design={design}
            $size={size}
            $active={active}
            $disabled={disabled}
            $isLastTab={isLastTab}
            $alignMiddle={alignMiddle}>
            {children}
        </TabStyled>
    );
};

type PropsCombineTab = Pick<PropsTabStyled, '$size'>;
export const CombineTab = styled.div<PropsCombineTab>`
    position: relative;
    ${combineTab.base}
`;

export type PropsBox = Pick<PropsTabStyled, '$design' | '$size'> & {
    $alignMiddle?: boolean;
};
export const Box = styled.div<PropsBox>`
    outline: none;
    ${({ $alignMiddle }) =>
        $alignMiddle
            ? css`
                  width: 100%;
                  height: 100%;
              `
            : ''}

    ${presets.base}
    ${presets.custom}
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
