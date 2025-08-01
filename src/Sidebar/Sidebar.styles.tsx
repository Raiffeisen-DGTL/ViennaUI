import styled, { css } from 'styled-components';
import { sidebar } from 'vienna.ui-theme';
import { Box as Item, Title, Icon, Notification, Ripple } from './Item/Item.styles';
import { SubmenuTitle, Menu as Submenu } from './Submenu/Submenu.styles';
import { Design, Size } from './Sidebar';
import { getPresets, getPresetsCustom } from '../Utils/styling';

const presets = getPresets(
    sidebar,
    'sidebar'
)({
    base: null,
    design: '$design',
    collapsed: null,
    menu: '$design',
    footer: null,
});

const collapser = getPresets(
    sidebar.collapser,
    'sidebar.collapser'
)({
    base: null,
    hover: null,
});

const customCollapser = getPresetsCustom('sidebar.custom.collapser')({
    base: null,
    hover: null,
});

const header = getPresets(
    sidebar.header,
    'sidebar.header'
)({
    base: null,
    size: '$size',
    collapsed: null,
});

const headerCustom = getPresetsCustom('sidebar.header.custom')({
    base: null,
    size: '$size',
    collapsed: null,
});

const item = getPresets(
    sidebar.item,
    'sidebar.item'
)({
    base: null,
    active: null,
    size: '$size',
    hover: '$design',
    disabled: '$design',
});

const customItem = getPresetsCustom('sidebar.item.custom')({
    base: null,
    active: null,
    size: '$size',
    hover: '$design',
    disabled: '$design',
});

const ripple = getPresets(
    sidebar.item.ripple,
    'sidebar.item.ripple'
)({
    base: null,
    design: '$design',
});

const submenu = getPresets(
    sidebar.submenu,
    'sidebar.submenu'
)({
    size: '$size',
    design: '$design',
});

const custom = getPresetsCustom('sidebar.custom')({
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
                padding-left: 0;
                padding-right: 0;

                ${Icon} {
                    margin: 0 auto;
                }

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

export interface PropsItemWrapper {
    $design?: Design;
    $active?: boolean;
    $disabled?: boolean;
}
export const ItemWrapper = styled.div<PropsItemWrapper>`
    display: block;
    width: 100%;

    ${({ $active }) =>
        $active &&
        css`
            ${item.active}
            ${customItem.active}
        `}
    ${({ $disabled }) =>
        $disabled &&
        css`
            ${item.disabled}
            ${customItem.disabled}
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

export interface PropsHeader {
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

export interface PropsMenu {
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
