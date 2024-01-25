import styled, { css } from 'styled-components';
import { Box as Item } from '../Item/Item.styles';
import { getPresets } from '../../Utils/styling';

const presets = getPresets('sidebar.submenu', {
    item: null,
});

const menu = getPresets('sidebar.submenu.menu', {
    base: null,
    item: null,
});

const item = getPresets('sidebar.item', {
    active: null,
});

const custom = getPresets('sidebar.item.custom', {
    active: null,
});

interface PropsSubmenuTitle {
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
        flex-grow: 1;
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
