import styled, { css } from 'styled-components';
import { color } from 'vienna.tokens';

export const Wrapper = styled.div<{ $isOverlayHidden: boolean }>`
    left: 0;
    top: 0;
    position: fixed;
    z-index: 99999;
    pointer-events: none;
    color: ${color.primary.brand.primary};
    ${({ $isOverlayHidden }) =>
        $isOverlayHidden
            ? css`
                  opacity: 0;
              `
            : css`
                  opacity: 0.24;
              `};
`;

export const SvgWrapper = styled.svg<{
    $windowWidth: number;
    $windowHeight: number;
    $wpt: number | string;
    $wpl: number | string;
}>`
    position: fixed;
    ${({ $windowHeight, $windowWidth, $wpl, $wpt }) => css`
        width: ${$windowWidth}px;
        height: ${$windowHeight}px;
        left: ${Number($wpl)}px;
        top: ${Number($wpt)}px;
    `};
`;

export const MaskArea = styled.rect<{ $x: number; $y: number; $width: number; $height: number; $rx: number }>`
    fill: black;
    ${({ $height, $width, $x, $y, $rx = 16 }) => css`
        x: ${$x}px;
        y: ${$y}px;
        width: ${$width}px;
        height: ${$height}px;
        rx: ${$rx};
    `};
`;

export const MaskRect = styled.rect<{ $windowWidth: number; $windowHeight: number; $maskId?: string }>`
    fill: currentColor;
    ${({ $windowHeight, $windowWidth, $maskId }) => {
        return css`
            x: 0px;
            y: 0px;
            width: ${$windowWidth}px;
            height: ${$windowHeight}px;
            mask: url(#${$maskId});
        `;
    }};
`;

export const HighlightedArea = styled.rect<{
    $x: number;
    $y: number;
    $width: number;
    $height: number;
}>`
    pointer-events: auto;
    fill: transparent;
    display: none;
    ${({ $x, $y, $width, $height }) => css`
        x: ${$x}px;
        y: ${$y}px;
        width: ${$width}px;
        height: ${$height}px;
    `};
`;

export const ClickArea = styled.rect<{
    $width: number;
    $height: number;
    $top: number;
    $left: number;
    $windowWidth: number;
    $windowHeight: number;
    $clipId?: string;
}>`
    fill: currentColor;
    pointer-events: auto;
    ${({ $clipId, $windowHeight, $windowWidth }) => css`
        x: 0px;
        y: 0px;
        width: ${$windowWidth}px;
        height: ${$windowHeight}px;
        clip-path: url(#${$clipId});
    `};
`;
