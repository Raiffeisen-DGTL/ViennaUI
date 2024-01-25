import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';

const fade = getPresets('modal.fade', {
    base: null,
    hide: null,
    show: null,
    custom: null,
});

const modal = getPresets('modal.window', {
    base: null,
    hide: null,
    show: null,
    custom: null,
});

const icon = getPresets('modal.icon', {
    base: null,
    hover: null,
    focus: null,
    custom: null,
});

export interface PropsFade {
    $show?: boolean;
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
    ${fade.custom}
    ${fade.hide}

    visibility: hidden;

    ${({ $show }) =>
        $show &&
        css`
            visibility: visible;
            ${fade.show}
        `}
`;

interface PropsBox {
    $toggle?: boolean;
}
export const Box = styled.div<PropsBox>`
    ${modal.base}
    -webkit-font-smoothing: antialiased;
    @media screen and (prefers-reduced-motion: reduce) {transition: none !important;}
    position: relative;
    margin: auto;
    ${modal.hide}
    ${modal.custom}
    ${({ $toggle }) =>
        $toggle &&
        css`
            ${modal.show}
        `};
`;

export const CloseIcon = styled.div`
    ${icon.base}
    &:hover {
        ${icon.hover}
    }
    ${icon.custom}
`;
