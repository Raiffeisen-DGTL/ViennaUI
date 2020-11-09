import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const tabs = getPresets('tabs', {
    base: null,
    custom: null,
});

const tab = getPresets('tabs.tab', {
    base: null,
    design: 'design',
    size: 'size',
    active: null,
    disabled: null,
    hover: null,
    custom: null,
});

const line = getPresets('tabs.tab.line', {
    base: null,
    left: null,
    right: null,
    design: 'design',
});

const combineTab = getPresets('tabs.combineTab', {
    base: null,
    item: 'size',
});

export const Tab = styled.div<{
    design?: 'accent' | 'primary';
    size?: 'l' | 'm' | 's';
    active?: any;
    disabled?: any;
}>`
    position: relative;
    ${tab.base}
    ${tab.size}

    &:last-child {
        margin-right: 0px;
    }

    ${({ active }) => active && tab.active}

    &:before {
        position: absolute;
        content: '';
        left: 50%;
        width: 0px;
        ${line.base}
        ${line.design}
        ${line.right}
        ${({ active }) => active && 'width: 50%;'}
    }

    &:after {
        position: absolute;
        content: '';
        right: 50%;
        width: 0px;
        ${line.base}
        ${line.design}
        ${line.left}
        ${({ active }) => active && 'width: 50%;'}
    }

    ${({ disabled }) => disabled && tab.disabled}

    &:hover {
        ${tab.hover}
    }
    ${tab.custom}
`;

export const CombineTab = styled.div<{ size: any }>`
    position: relative;
    visibility: hidden;
    ${combineTab.base}
`;

export const Box = styled.div<{ design?: 'accent' | 'primary'; size?: 'l' | 'm' | 's' }>`
    outline: none;
    ${tabs.base}
    ${tabs.custom}
`;

export const Item = styled.div<{ size: any }>`
    ${combineTab.item}
`;

export const Arrow = styled.span`
    margin-left: 4px;
    height: 20px;
    display: inline-block;
`;
