import styled, { css } from 'styled-components';
import { tooltip } from 'vienna.ui-theme';
import { getPresets } from '../../Utils/styling';
import { PlacementType } from '@/Utils';

const presets = getPresets(
    tooltip,
    'tooltip'
)({
    base: null,
    size: '$size',
    design: '$design',
    placement: '$placement',
    custom: null,
});

const arrow = getPresets(
    tooltip.arrow,
    'tooltip.arrow'
)({
    base: null,
    design: '$design',
    position: '$placement',
});

const floor = getPresets(
    tooltip.floor,
    'tooltip.floor'
)({
    base: null,
});

export interface PropsBox {
    $top?: number;
    $left?: number;
    $bottom?: number;
    $right?: number;
    $arrow?: PlacementType<'left' | 'right' | 'top' | 'bottom'>;
    $placement?: PlacementType<'left' | 'right' | 'top' | 'bottom'>;
    $arrowShift?: { top?: number; left?: number; bottom?: number; right?: number };
    $show?: boolean;
    $width?: number | string;
    $design?: 'light' | 'dark' | 'warning' | 'critical' | 'success';
    $size?: 's' | 'm';
    $allowInteraction?: boolean;
}

export const Box = styled.div<PropsBox>`
    position: fixed;
    ${presets.base}
    ${presets.placement}
    ${presets.size}
    ${presets.design}

    display: flex;
    align-items: center;
    justify-content: center;

    ${({ $left, $top, $bottom, $right }) => css`
        left: ${$left}px;
        top: ${$top}px;
        bottom: ${$bottom}px;
        right: ${$right}px;
    `}

    ${({ $show }) =>
        !$show
            ? css`
                  left: -9999px;
                  top: -9999px;
                  opacity: 0;
              `
            : css`
                  opacity: 1;
              `}

    ${({ $width }) =>
        $width &&
        css`
            width: ${$width}px;
            text-align: center;
            white-space: normal;
        `}


    ${presets.custom}

    ${({ $allowInteraction }) =>
        $allowInteraction &&
        css`
            &:before {
                content: '';
                position: absolute;
                ${floor.base}
                background: transparent;
            }
        `}

    > svg {
        vertical-align: top;
    }
`;

export interface ArrowProps {
    $placement?: PlacementType<'left' | 'right' | 'top' | 'bottom'>;
    $design?: 'light' | 'dark' | 'warning' | 'critical' | 'success';
    $offsetX?: number;
    $offsetY?: number;
}

export const Block = styled.div<ArrowProps>`
    ${arrow.position}
    ${arrow.base}

    ${({ $offsetX }) =>
        $offsetX !== undefined &&
        css`
            left: ${$offsetX}px;
        `}
    ${({ $offsetY }) =>
        $offsetY !== undefined &&
        css`
            top: ${$offsetY}px;
        `}
    width: 14px;
    height: 7px;
`;

export const Arrow = styled.div<ArrowProps>`
    ${arrow.design}

    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    border-radius: 3px 0 0 0;
    margin-top: 2px;
`;
