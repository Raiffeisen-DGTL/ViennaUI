import styled, { css } from 'styled-components';
import { iconContainer } from 'vienna.ui-theme';
import { SizeType, ColorType } from '../Utils';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';

const presets = getPresets(
    iconContainer,
    'iconContainer'
)({
    base: null,
    type: '$type',
    squareRadius: ['$size', 'm'],
    squircleRadius: ['$size', 'm'],
    color: '$color',
    size: ['$size', 'm'],
    disabled: null,
    loading: null,
    image: null,
    custom: null,
});

export type IconContainerType = 'circle' | 'square' | 'squircle';
export type IconContainerSize = SizeType<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'>;

export interface PropsBox<B = Breakpoints> {
    $type?: IconContainerType;
    $size?: ResponsiveProp<IconContainerSize, B>;
    $color?: ColorType;
    $disabled?: boolean;
    $disabledImage?: boolean;
    $loading?: boolean;
    $clickable?: boolean;
}
export const Box = styled.div<PropsBox>`
    ${presets.base}
    ${presets.type}
    ${({ $type }) =>
        $type === 'square' &&
        css`
            ${presets.squareRadius}
        `}
    ${({ $type }) =>
        $type === 'squircle' &&
        css`
            ${presets.squircleRadius}
        `}
    ${presets.size}
    ${({ $disabled, $disabledImage, $loading }) =>
        !$disabled &&
        !$disabledImage &&
        !$loading &&
        css`
            ${presets.color}
        `}

    ${({ $disabled, $disabledImage, $loading }) =>
        $disabled &&
        !$disabledImage &&
        !$loading &&
        css`
            ${presets.disabled}
        `}

    ${({ $disabledImage, $loading }) =>
        $disabledImage &&
        !$loading &&
        css`
            filter: opacity(50%) saturate(0);
        `}

    ${({ $loading }) =>
        $loading &&
        css`
            ${presets.loading}
        `}

    ${({ $clickable }) =>
        $clickable &&
        css`
            cursor: pointer;
        `}

     > img {
        ${presets.image}
        ${presets.type}
    }

    ${presets.custom}
`;
