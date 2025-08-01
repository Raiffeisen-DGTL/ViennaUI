import styled, { css } from 'styled-components';
import { drawer, screen } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { getNegativeCssValue } from '@/Utils/getNegativeCssValue';

const fade = getPresets(
    drawer.fade,
    'drawer.fade'
)({
    base: null,
    hide: null,
    show: null,
    custom: null,
});

const window = getPresets(
    drawer.window,
    'drawer.window'
)({
    base: null,
    custom: null,
    orientation: '$orientation',
});

const content = getPresets(
    drawer.content,
    'drawer.content'
)({
    base: null,
    custom: null,
    hasClose: null,
});

const icon = getPresets(
    drawer.icon,
    'drawer.icon'
)({
    base: null,
    hover: null,
    focus: null,
    custom: null,
});

interface PropsFade {
    $show?: boolean;
    $width?: string;
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

    overflow: hidden;

    ${({ $show }) =>
        $show &&
        css`
            ${fade.show}
        `}
`;

export interface PropsBox {
    $toggle?: boolean;
    $width?: string;
    $height?: string;
    $orientation?: 'left' | 'right' | 'top' | 'bottom';
    $show?: boolean;
}
export const Box = styled.div<PropsBox>`
    ${window.base}
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
        ${$orientation}: ${getNegativeCssValue(
            $orientation === 'left' || $orientation === 'right' ? ($width ?? 0) : ($height ?? 0)
        )};
    `};

    ${window.custom}

    ${({ $toggle }) => $toggle && window.orientation};
`;

export interface PropsContent {
    $hasClose?: boolean;
    $orientation?: 'left' | 'right';
}
export const Content = styled.div<PropsContent>`
    ${content.base}
    ${content.custom}

    ${({ $hasClose }) =>
        $hasClose &&
        css`
            ${content.hasClose}
        `}

         ${({ $orientation }) =>
        $orientation === 'right' &&
        css`
            height: 100%;
        `}
`;

interface PropsCloseIcon {
    $isFocusStateVisible?: boolean;
    $orientation?: 'left' | 'right';
}
export const CloseIcon = styled.div<PropsCloseIcon>`
    ${icon.base}
    &:hover {
        ${icon.hover}
    }
    ${({ $orientation }) =>
        $orientation === 'right' &&
        css`
            position: absolute;
            right: ${screen.head.base['padding-right']};
            left: auto;
            ${Content} {
                height: 100% !important;
            }
        `}

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
