import styled, { css } from 'styled-components';
import { Box as Item, Title, Notification, Ripple } from './Item/Item.styles';
import { SubmenuTitle, Menu as Submenu } from './Submenu/Submenu.styles';
import { Design, Size } from './Sidebar';
import { getPresets } from '../Utils/styling';

const presets = getPresets('sidebar', {
    base: null,
    design: '$design',
    collapsed: null,
    menu: '$design',
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
    size: '$size',
    collapsed: null,
});

const headerCustom = getPresets('sidebar.header.custom', {
    base: null,
    size: '$size',
    collapsed: null,
});

const item = getPresets('sidebar.item', {
    base: null,
    active: null,
    size: '$size',
    hover: '$design',
    disabled: '$design',
});

const customItem = getPresets('sidebar.item.custom', {
    base: null,
    active: null,
    size: '$size',
    hover: '$design',
    disabled: '$design',
});

const ripple = getPresets('sidebar.item.ripple', {
    base: null,
    design: '$design',
});

const submenu = getPresets('sidebar.submenu', {
    size: '$size',
    design: '$design',
});

const custom = getPresets('sidebar.custom', {
    box: null,
    item: null,
    menu: null,
    footer: null,
});

export interface PropsBox {
    $design?: Design;
    $size?: Size;
    $collapsed?: boolean;
    $width?: string;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    ${presets.base}
    ${presets.design}
    width: ${({ $width }) => $width};
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

    ${SubmenuTitle} {
        ${submenu.size}

        &:hover {
            ${item.hover}
            ${customItem.hover}
        }
    }

    ${Submenu} {
        ${Item} {
            ${submenu.design}
        }
    }

    ${({ $collapsed }) =>
        $collapsed &&
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

interface PropsItemWrapper {
    $design?: Design;
    $active?: boolean;
}
export const ItemWrapper = styled.div<PropsItemWrapper>`
    display: block;
    width: 100%;

    &:hover {
        ${item.hover}
        ${customItem.hover}
    }

    ${({ $active }) =>
        $active &&
        css`
            ${item.active}
            ${customItem.active}
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

interface PropsHeader {
    $size?: Size;
    $isCollapsed?: boolean;
}
export const Header = styled.div<PropsHeader>`
    ${header.base}
    ${headerCustom.base}
    ${header.size}
    ${headerCustom.size}

    ${({ $isCollapsed }) =>
        $isCollapsed &&
        css`
            ${header.collapsed}
            ${headerCustom.collapsed}
        `}
`;

interface PropsMenu {
    $design?: Design;
}
export const Menu = styled.div<PropsMenu>`
    flex-grow: 1;
    position: relative;
    ${presets.menu}
    ${custom.menu}
`;

export const Footer = styled.div`
    ${presets.footer}
    ${custom.footer}
`;
