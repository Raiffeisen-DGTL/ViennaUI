import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const message = getPresets('popover.message', {
    base: null,
    design: 'design',
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
    custom: null,
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

export const Message = styled.div<{
    active?: boolean;
    toggle?: boolean;
    design?: 'dark' | 'light';
    left?: any;
    top?: any;
    right?: any;
    width?: number;
    bottom?: any;
}>`
    position: absolute;
    display: flex;
    flex-direction: column;
    opacity: 0;
    ${({ width }) => `width: ${width}px;`}
    ${({ width }) => `min-width: ${width}px;`}
    ${message.base}
    ${message.design}
    ${message.custom}

    ${({ top, left, right, bottom }) =>
        css`
            top: ${top}px;
            left: ${left}px;
            right: ${right}px;
            bottom: ${bottom}px;
        `}

    ${({ active }) =>
        !active &&
        css`
            display: none;
        `}


    ${({ toggle }) =>
        toggle &&
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
