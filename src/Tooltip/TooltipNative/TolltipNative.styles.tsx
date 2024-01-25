import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';

const tooltip = getPresets('tooltip', {
    base: null,
    size: '$size',
    design: '$design',
    placement: '$placement',
    custom: null,
});

const arrowDem = getPresets('tooltip.arrow', {
    base: null,
    width: null,
    design: '$design',
    position: '$arrow',
});

const floor = getPresets('tooltip.floor', {
    base: null,
});

export interface PropsBox {
    $top?: number;
    $left?: number;
    $bottom?: number;
    $right?: number;
    $arrow?: 'left' | 'right' | 'top' | 'bottom';
    $placement?: 'left' | 'right' | 'top' | 'bottom';
    $arrowShift?: any;
    $show?: boolean;
    $width?: number | string;
    $design?: 'light' | 'dark';
    $size?: 's' | 'm';
    $allowInteraction?: boolean;
}

export const Box = styled.div<PropsBox>`
    position: fixed;
    ${tooltip.base}
    ${tooltip.placement}
    ${tooltip.size}
    ${tooltip.design}

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


    ${tooltip.custom}

    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        ${arrowDem.design}
        ${arrowDem.position}
        ${({ $arrowShift }) => $arrowShift}
    }

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
