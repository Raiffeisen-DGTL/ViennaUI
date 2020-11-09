import styled, { css, keyframes } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('notifications.notification', {
    size: null,
    sizeCompact: null,
    close: null,
});

const close = getPresets('notifications.notification.close', {
    base: null,
    design: 'design',
    hover: null,
});

export const CloseBox = styled.span<any>`
    position: absolute;
    ${close.base}
    ${close.design}

    &:hover {
        ${close.hover}
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        height: 0;
    }
`;

export const Box = styled.div<any>`
    transition: height 0.5s ease;
    ${presets.size}

    ${({ compactBelow }) =>
        compactBelow &&
        css`
            @media (max-width: ${compactBelow}px) {
                ${presets.sizeCompact}
            }
        `}

    ${({ open }) =>
        open
            ? css`
                  animation: ${fadeIn} 0.5s ease forwards;
              `
            : css`
                  animation: ${fadeOut} 0.5s ease forwards;
              `}
`;
