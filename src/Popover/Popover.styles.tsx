import styled, { css } from 'styled-components';
import { popover } from 'vienna.ui-theme';
import { color } from 'vienna.tokens';
import { getPresets, getPresetsCustom } from '../Utils/styling';
import { PlacementType, SizeType } from '../Utils';
import { Dispatch, SetStateAction } from 'react';

const message = getPresets(
    popover.message,
    'popover.message'
)({
    base: null,
    noClose: null,
    design: '$design',
    custom: null,
    placement: '$placement',
});

const header = getPresets(
    popover.header,
    'popover.header'
)({
    base: null,
    size: '$size',
    custom: null,
});

const content = getPresets(
    popover.content,
    'popover.content'
)({
    base: null,
    custom: null,
});

const closeIcon = getPresets(
    popover.close,
    'popover.close'
)({
    base: null,
    custom: null,
    // focus: null,
    disabled: null,
});

const definition = getPresets(
    popover.definition,
    'popover.definition'
)({
    base: null,
});

const arrow = getPresets(
    popover.arrow,
    'popover.arrow'
)({
    base: null,
    design: '$design',
    position: '$placement',
});

const wrapper = getPresetsCustom('popover.wrapper')({
    custom: null,
});

export const Wrapper = styled.span`
    outline: none;
    position: relative;
    display: inline-flex;
    ${wrapper.custom}
`;

export interface PropsPopover {
    $active?: boolean;
    $toggle?: boolean;
    $size?: SizeType<'s' | 'm'>;
    $design?: 'dark' | 'light';
    $left?: number;
    $top?: number;
    $right?: number;
    $width?: number | 'auto';
    $height?: number;
    $bottom?: number;
    $placement?: PlacementType<'left' | 'right' | 'top' | 'bottom'>;
    $arrow?: PlacementType<'left' | 'right' | 'top' | 'bottom'>;
    $showPopoverWithArrow?: boolean;
    $noClose?: boolean;
}
export const Message = styled.div<PropsPopover>`
    position: absolute;
    display: flex;
    flex-direction: column;
    opacity: 0;
    ${({ $width }) => css`
        width: ${typeof $width === 'string' ? $width : `${$width}px`};
    `}
    ${({ $width }) => css`
        min-width: ${$width}px;
    `}
    ${({ $height }) => css`
        height: ${$height}px;
    `}
    ${({ $height }) => css`
        min-height: ${$height}px;
    `}
    ${message.base}
    ${message.design}
    ${message.custom}
    ${message.placement}

    ${({ $placement, $showPopoverWithArrow }) =>
        $placement === 'left' &&
        $showPopoverWithArrow &&
        css`
            margin-left: -12px;
        `}
    ${({ $placement, $showPopoverWithArrow }) =>
        $placement === 'right' &&
        $showPopoverWithArrow &&
        css`
            margin-left: 12px;
        `}
    ${({ $placement, $showPopoverWithArrow }) =>
        $placement === 'top' &&
        $showPopoverWithArrow &&
        css`
            margin-top: -12px;
        `}
    ${({ $placement, $showPopoverWithArrow }) =>
        $placement === 'bottom' &&
        $showPopoverWithArrow &&
        css`
            margin-top: 12px;
        `}

    ${({ $top, $left, $right, $bottom }) => css`
        top: ${$top}px;
        left: ${$left}px;
        right: ${$right}px;
        bottom: ${$bottom}px;
    `}

    ${({ $active }) =>
        !$active &&
        css`
            display: none;
        `}


    ${({ $toggle }) =>
        $toggle &&
        css`
            opacity: 1;
        `}
`;

export interface ArrowProps {
    ref?: Dispatch<SetStateAction<HTMLDivElement | undefined>>;
    $placement?: PlacementType<'left' | 'right' | 'top' | 'bottom'>;
    $design?: 'light' | 'dark';
    $offsetX?: number;
    $offsetY?: number;
}

export const Arrow = styled.div<ArrowProps>`
    ${arrow.design}

    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    border-radius: 3px 0 0 0;
    margin-top: 2px;
`;

export const BlockWithArrow = styled.div<ArrowProps>`
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

export interface PropsPopoverHeader {
    $size?: PropsPopover['$size'];
}
export const Header = styled.div<PropsPopoverHeader>`
    ${header.base}
    ${header.size}
    ${header.custom}
`;

export const Content = styled.div<PropsPopover>`
    ${content.base}
    ${content.custom}
`;

export interface CloseIconProps {
    $disabled?: boolean;
    $design?: 'light' | 'dark';
}

export const CloseLightIcon = styled.div<CloseIconProps>`
    position: absolute;
    ${closeIcon.base}
    ${closeIcon.custom}

    &:hover,
    &:focus {
        color: ${color.primary.brand.primary};
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: ${color.primary.seattle.c120};
            cursor: auto;
        `}
`;

export const CloseDarkIcon = styled.div<CloseIconProps>`
    position: absolute;
    ${closeIcon.base}
    ${closeIcon.custom}

    &:hover,
    &:focus {
        color: ${color.primary.brand.white};
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: ${color.primary.london.c120};
            cursor: auto;
        `}
`;

export const CloseIconContainer = styled.div<CloseIconProps>`
    ${closeIcon.base}
    ${closeIcon.custom}

    ${({ $design }) =>
        $design === 'light'
            ? css`
                  &:hover,
                  &:focus {
                      color: ${color.primary.brand.primary};
                  }
              `
            : $design === 'dark'
              ? css`
                    &:hover,
                    &:focus {
                        color: ${color.primary.brand.white};
                    }
                `
              : ''}

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: ${color.primary.london.c120};
            cursor: auto;
        `}

    > svg {
        display: block;
    }
`;

export const Definition = styled.span`
    ${definition.base}
`;

export const ScrollLocker = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    z-index: 500;
`;
