import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

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

export const Title = styled.div<any>`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    ${custom.title}
`;

export const Icon = styled.span`
    ${presets.icon}
    ${custom.icon}
`;

export const Notification = styled.div`
    ${presets.notification}
    ${custom.notification}
`;

export const Box = styled.div<any>`
    /*
        this looks hacky, but this is the only way to do it with the styled component.
        Sidebar will set display for Item to 'none', when collapsed. !important is needed to overwrite it for Items with icons.
    */
    display: flex ${({ hasIcon }) => hasIcon && '!important'};
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    ${({ active }) =>
        active &&
        css`
            ${presets.active}
            ${custom.active}
        `}
`;

export const Ripple = styled.span<any>`
    ${custom.ripple}
`;
