import styled, { css, keyframes } from 'styled-components';
import { Design } from './Notification';
import { getPresets } from '../../Utils/styling';

const presets = getPresets('notifications.notification', {
    size: null,
    sizeCompact: null,
    close: null,
    notificationsGap: null,
});

const close = getPresets('notifications.notification.close', {
    base: null,
    design: '$design',
    hover: null,
});

interface PropsCloseBox {
    $design?: Design;
}

export const CloseBox = styled.span<PropsCloseBox>`
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

export interface PropsBox {
    $open?: boolean;
    $compactBelow?: number;
}
export const Box = styled.div<PropsBox>`
    transition: height 0.5s ease;
    ${presets.size}
    ${presets.notificationsGap}

    ${({ $compactBelow }) =>
        $compactBelow &&
        css`
            @media (max-width: ${$compactBelow}px) {
                ${presets.sizeCompact}
            }
        `}

    ${({ $open }) =>
        $open
            ? css`
                  animation: ${fadeIn} 0.5s ease forwards;
              `
            : css`
                  animation: ${fadeOut} 0.5s ease forwards;
              `}
`;
