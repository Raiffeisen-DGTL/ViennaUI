import styled, { css } from 'styled-components';
import { ItemProps } from './Item';
import { getPresets } from '../../Utils/styling';

const presets = getPresets('sidebar.item', {
    active: null,
    icon: null,
    notification: null,
});

const custom = getPresets('sidebar.item.custom', {
    active: null,
    icon: null,
    notification: null,
    title: null,
    ripple: null,
});

export const Title = styled.div<ItemProps>`
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;

    ${custom.title}
`;

export const Icon = styled.span`
    display: inline-flex;
    align-items: center;
    height: 100%;
    ${presets.icon}
    ${custom.icon}
`;

export const Notification = styled.div`
    ${presets.notification}
    ${custom.notification}
`;

export interface PropsBox {
    $hasIcon?: boolean;
    $active?: boolean;
}
export const Box = styled.div<PropsBox>`
    /*
        this looks hacky, but this is the only way to do it with the styled component.
        Sidebar will set display for Item to 'none', when collapsed. !important is needed to overwrite it for Items with icons.
    */
    display: flex ${({ $hasIcon }) => $hasIcon && '!important'};
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    ${({ $active }) =>
        $active &&
        css`
            ${presets.active}
            ${custom.active}
        `}
`;

export const Ripple = styled.span`
    ${custom.ripple}
`;
