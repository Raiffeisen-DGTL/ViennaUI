import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Box as Item } from '../Item/Item.styles';

const presets = getPresets('sidebar.submenu', {
    size: 'size',
    item: null,
});

const menu = getPresets('sidebar.submenu.menu', {
    base: null,
    item: null,
});

const item = getPresets('sidebar.item', {
    active: null,
});

export const SubmenuTitle = styled.div<any>`
    display: flex;
    align-items: center;

    ${({ active }) =>
        active &&
        css`
            ${item.active}
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
