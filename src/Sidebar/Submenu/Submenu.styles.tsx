import styled, { css } from 'styled-components';
import { sidebar } from 'vienna.ui-theme';
import { Box as Item } from '../Item/Item.styles';
import { getPresets, getPresetsCustom } from '../../Utils/styling';

const presets = getPresets(
    sidebar.submenu,
    'sidebar.submenu'
)({
    item: null,
});

const menu = getPresets(
    sidebar.submenu.menu,
    'sidebar.submenu.menu'
)({
    base: null,
    item: null,
});

const item = getPresets(
    sidebar.item,
    'sidebar.item'
)({
    active: null,
});

const custom = getPresetsCustom('sidebar.item.custom')({
    active: null,
});

export interface PropsSubmenuTitle {
    $active?: boolean;
}
export const SubmenuTitle = styled.div<PropsSubmenuTitle>`
    display: flex;
    align-items: center;

    ${({ $active }) =>
        $active &&
        css`
            ${item.active}
            ${custom.active}
        `}

    ${Item} {
        flex-grow: 0;
        ${presets.item}
    }
`;

export const Menu = styled.div`
    ${menu.base}

    ${Item} {
        ${menu.item}
        box-shadow: none;
    }
`;
