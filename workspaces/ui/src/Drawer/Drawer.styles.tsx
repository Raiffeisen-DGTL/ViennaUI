import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const fade = getPresets('drawer.fade', {
    base: null,
    hide: null,
    show: null,
    custom: null,
});

const drawer = getPresets('drawer.window', {
    base: null,
    custom: null,
    orientation: 'orientation',
});

const content = getPresets('drawer.content', {
    base: null,
    custom: null,
});

const icon = getPresets('drawer.icon', {
    base: null,
    hover: null,
    custom: null,
});

export const Fade = styled.div<{ show?: boolean }>`
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

    ${({ show }) =>
        show &&
        css`
            visibility: visible;
            ${fade.show}
        `}
`;

export const Box = styled.div<{
    toggle?: boolean;
    width?: string;
    height?: string;
    orientation?: 'left' | 'right' | 'top' | 'bottom';
}>`
    ${drawer.base}
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;

    height: ${({ height }) => (height ? `${height}` : 'auto')};
    width: ${({ width }) => (width ? `${width}` : 'auto')};

    max-width: 100%;

    ${({ orientation }) =>
        orientation === 'left' || orientation === 'right' ? 'min-height: 100%' : 'min-width: 100%'};

    ${({ orientation }) => orientation}: -${({ orientation, width, height }) =>
    orientation === 'left' || orientation === 'right' ? (width ? `${width}` : '0') : height ? `${height}` : '0'};
    ${drawer.custom}

    ${(props) =>
        props.toggle &&
        css`
            ${drawer.orientation(props)}
        `}
`;

export const Content = styled.div`
    ${content.base}
    ${content.custom}
`;

export const CloseIcon = styled.div`
    ${icon.base}
    &:hover {
        ${icon.hover}
    }
    ${icon.custom}
`;
