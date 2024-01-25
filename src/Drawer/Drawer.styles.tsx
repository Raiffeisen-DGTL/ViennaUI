import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';

const fade = getPresets('drawer.fade', {
    base: null,
    hide: null,
    show: null,
    custom: null,
});

const drawer = getPresets('drawer.window', {
    base: null,
    custom: null,
    orientation: '$orientation',
});

const content = getPresets('drawer.content', {
    base: null,
    custom: null,
});

const icon = getPresets('drawer.icon', {
    base: null,
    hover: null,
    focus: null,
    custom: null,
});

interface PropsFade {
    $show?: boolean;
}
export const Fade = styled.div<PropsFade>`
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    line-height: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    ${fade.base}
    ${fade.custom}
    ${fade.hide}

    visibility: hidden;
    overflow: hidden;

    ${({ $show }) =>
        $show &&
        css`
            visibility: visible;
            ${fade.show}
        `}
`;

export interface PropsBox {
    $toggle?: boolean;
    $width?: string;
    $height?: string;
    $orientation?: 'left' | 'right' | 'top' | 'bottom';
}
export const Box = styled.div<PropsBox>`
    ${drawer.base}
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;

    height: ${({ $height }) => ($height ? `${$height}` : 'auto')};
    width: ${({ $width }) => ($width ? `${$width}` : 'auto')};

    max-width: 100%;

    ${({ $orientation }) =>
        $orientation === 'left' || $orientation === 'right'
            ? css`
                  min-height: 100%;
              `
            : css`
                  min-width: 100%;
              `};

    ${({ $orientation, $width, $height }) => css`
        ${$orientation}: -${$orientation === 'left' || $orientation === 'right' ? $width ?? 0 : $height ?? 0};
    `};

    ${drawer.custom}

    ${({ $toggle }) => $toggle && drawer.orientation};
`;

export const Content = styled.div`
    ${content.base}
    ${content.custom}
`;

interface PropsCloseIcon {
    $isFocusStateVisible?: boolean;
}
export const CloseIcon = styled.div<PropsCloseIcon>`
    ${icon.base}
    &:hover {
        ${icon.hover}
    }
    ${({ $isFocusStateVisible }) =>
        $isFocusStateVisible &&
        css`
            &:focus {
                ${icon.focus}
            }
        `}
    ${icon.custom}
`;

export const DrawerDemo = styled.div`
    width: 460px;
    max-width: 100%;
`;
