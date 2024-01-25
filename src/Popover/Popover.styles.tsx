import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';

const message = getPresets('popover.message', {
    base: null,
    design: '$design',
    custom: null,
});

const header = getPresets('popover.header', {
    base: null,
    custom: null,
});

const content = getPresets('popover.content', {
    base: null,
    custom: null,
});

const closeIcon = getPresets('popover.close', {
    base: null,
    custom: null,
});

const defenition = getPresets('popover.defenition', {
    base: null,
});

const wrapper = getPresets('popover.wrapper', {
    custom: null,
});

export const Wrapper = styled.span`
    outline: none;
    position: relative;
    display: inline-flex;
    ${wrapper.custom}
`;

export interface PropsMessage {
    $active?: boolean;
    $toggle?: boolean;
    $design?: 'dark' | 'light';
    $left?: number;
    $top?: number;
    $right?: number;
    $width?: number;
    $bottom?: number;
}
export const Message = styled.div<PropsMessage>`
    position: absolute;
    display: flex;
    flex-direction: column;
    opacity: 0;
    ${({ $width }) =>
        css`
            width: ${$width}px;
        `}
    ${({ $width }) =>
        css`
            min-width: ${$width}px;
        `}
    ${message.base}
    ${message.design}
    ${message.custom}

    ${({ $top, $left, $right, $bottom }) =>
        css`
            top: ${$top}px;
            left: ${$left}px;
            right: ${$right}px;
            bottom: ${$bottom}px;
        `}

    ${({ $active }) =>
        !$active &&
        css`
            display: none;
        `}


    ${({ $toggle }) =>
        $toggle &&
        css`
            opacity: 1;
        `}
`;

export const Header = styled.div`
    ${header.base}
    ${header.custom}
`;

export const Content = styled.div`
    ${content.base}
    ${content.custom}
`;

export const CloseIcon = styled.div`
    position: absolute;
    ${closeIcon.base}
    ${closeIcon.custom}
`;

export const Defenition = styled.span`
    ${defenition.base}
`;

export const ScrollLocker = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: 500;
`;
