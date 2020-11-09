import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Box as Item, Title, Notification, Ripple } from './Item/Item.styles';

const presets = getPresets('sidebar', {
    base: null,
    design: 'design',
    collapsed: null,
    menu: 'design',
    footer: null,
});

const collapser = getPresets('sidebar.collapser', {
    base: null,
    hover: null,
});

const customCollapser = getPresets('sidebar.custom.collapser', {
    base: null,
    hover: null,
});

const header = getPresets('sidebar.header', {
    base: null,
    size: 'size',
    collapsed: null,
});

const headerCustom = getPresets('sidebar.header.custom', {
    base: null,
    size: 'size',
    collapsed: null,
});

const item = getPresets('sidebar.item', {
    base: null,
    active: null,
    size: 'size',
    hover: 'design',
    disabled: 'design',
});

const customItem = getPresets('sidebar.item.custom', {
    base: null,
    active: null,
    size: 'size',
    hover: 'design',
    disabled: 'design',
});

const ripple = getPresets('sidebar.item.ripple', {
    base: null,
    design: 'design',
});

const custom = getPresets('sidebar.custom', {
    box: null,
    item: null,
    menu: null,
    footer: null,
});

export const Box = styled.div<any>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    ${presets.base}
    ${presets.design}
    width: ${({ width }) => width};
    height: 100%;

    ${Item} {
        ${item.base}
        ${item.size}
        ${customItem.base}

        &:hover {
            ${item.hover}
            ${customItem.hover}
        }

        &[disabled] {
            ${item.disabled}
            ${customItem.disabled}
        }

        ${Ripple} {
            ${ripple.base}
            ${ripple.design}
        }
    }

    ${({ isCollapsed }) =>
        isCollapsed &&
        css`
            ${presets.collapsed}

            ${Item} {
                display: none;

                ${Title} {
                    display: none;
                }

                ${Notification} {
                    display: none;
                }
            }
        `}

    a {
        text-decoration: none;
        color: currentColor;
    }

    ${custom.box}
`;

export const ItemWrapper = styled.div<any>`
    display: block;
    width: 100%;

    ${({ active }) =>
        active &&
        css`
            ${item.active}
        `}

    ${custom.item}
`;

export const Collapser = styled.span`
    cursor: pointer;
    ${collapser.base}
    ${customCollapser.base}

    &:hover {
        ${collapser.hover}
        ${customCollapser.hover}
    }
`;

export const Header = styled.div<any>`
    ${header.base}
    ${headerCustom.base}
    ${header.size}
    ${headerCustom.size}

    ${({ isCollapsed }) =>
        isCollapsed &&
        css`
            ${header.collapsed}
            ${headerCustom.collapsed}
        `}
`;

export const Menu = styled.div<any>`
    flex-grow: 1;
    position: relative;
    ${presets.menu}
    ${custom.menu}
`;

export const Footer = styled.div`
    ${presets.footer}
    ${custom.footer}
`;
