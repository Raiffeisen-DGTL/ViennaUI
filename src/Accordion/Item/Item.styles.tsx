import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';

const presets = getPresets('accordion.item', {
    icon: null,
});

const custom = getPresets('accordion.item.custom', {
    header: null,
    content: null,
});

const header = getPresets('accordion.item.header', {
    base: null,
    active: null,
    hover: null,
    size: '$size',
});

const content = getPresets('accordion.item.content', {
    base: null,
});

export interface PropsHeader {
    $open?: boolean;
    $disabled?: boolean;
    $width?: number;
}
export const Header = styled.div<PropsHeader>`
    display: flex;
    align-items: center;
    flex-direction: row;
    ${header.base}
    ${({ $open }) =>
        $open &&
        css`
            ${header.hover}
        `};
    ${({ $width }) =>
        $width &&
        css`
            max-width: ${$width};
            min-width: ${$width};
        `};
    ${({ $open }) =>
        $open &&
        css`
            ${header.active};
        `}
    ${({ $disabled }) =>
        $disabled &&
        css`
            ${header.hover};
        `}
    ${custom.header}
`;

export interface PropsContent {
    $width?: number;
}
export const Content = styled.div<PropsContent>`
    display: flex;
    flex-direction: row;
    ${content.base}
    ${({ $width }) =>
        $width &&
        css`
            max-width: ${$width};
            min-width: ${$width};
        `}
    ${custom.content}
`;

export const IconBox = styled.div`
    ${presets.icon}
    display: flex;
`;

export const TextBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
`;
