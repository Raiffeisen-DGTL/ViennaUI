import styled, { css } from 'styled-components';
import { modal } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';

const getDefaultModalWidth = <B extends Breakpoints>(size: ResponsiveProp<'s' | 'm' | 'l', B>): number => {
    switch (size) {
        case 's':
            return 420;
        case 'm':
            return 600;
        default:
            return 1024;
    }
};

const fade = getPresets(
    modal.fade,
    'modal.fade'
)({
    base: null,
    hide: null,
    show: null,
    blur: null,
    custom: null,
});

const window = getPresets(
    modal.window,
    'modal.window'
)({
    base: null,
    hide: null,
    show: null,
    custom: null,
});

const icon = getPresets(
    modal.icon,
    'modal.icon'
)({
    base: null,
    hover: null,
    focus: null,
    custom: null,
});

export interface PropsFade {
    $show?: boolean;
    $blur?: boolean;
}
export const Fade = styled.div<PropsFade>`
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    ${fade.base}
    ${({ $blur }) =>
        $blur &&
        css`
            ${fade.blur}
        `}
    ${fade.custom}
    ${fade.hide}

    ${({ $show }) =>
        $show &&
        css`
            ${fade.show}
        `}
`;

export interface PropsBox<B = Breakpoints> {
    $toggle?: boolean;
    $size?: ResponsiveProp<'s' | 'm' | 'l', B>;
    $width?: number;
}
export const Box = styled.div<PropsBox>`
    ${window.base}
    -webkit-font-smoothing: antialiased;
    @media screen and (prefers-reduced-motion: reduce) {
        transition: none !important;
    }
    position: relative;
    margin: auto;
    ${window.hide}
    ${window.custom}

    ${({ $size }) =>
        $size &&
        css`
            width: ${getDefaultModalWidth($size)}px;
        `}

    ${({ $width }) =>
        $width &&
        css`
            width: ${$width}px;
        `}

    ${({ $toggle }) =>
        $toggle &&
        css`
            ${window.show}
        `};
`;

export const CloseIcon = styled.div`
    ${icon.base}
    &:hover {
        ${icon.hover}
    }
    ${icon.custom}
`;
