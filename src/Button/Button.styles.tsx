import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp, responsivePreset } from '../Utils/responsiveness';
import { ButtonDesign } from './Button';

const presets = getPresets('button', {
    base: null,
    loading: null,
    focus: '$design',
    size: responsivePreset('$size', 'm'),
    design: '$design',
    hover: '$design',
    disabled: '$design',
    gap: responsivePreset('$size', 'm'),
    custom: null,
    customWrapper: null,
});

export interface PropsBox<B = Breakpoints> {
    $design?: ButtonDesign;
    /** Размеры */
    $size?: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', B>;
    $grid?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    $square?: boolean;
    $pressed?: boolean;
    $loading?: boolean;
    $disabled?: boolean;
    $isFocusStateVisible?: boolean;
    $isLoading?: boolean;
}
export const Box = styled.button<PropsBox>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    white-space: nowrap;
    user-select: none;
    appearance: none;
    cursor: pointer;
    outline: 0;
    position: relative;

    ${presets.base}

    /** order is important here!
        design: ghost is overwrting padding from size
        so design must go after the size
    */
    ${presets.size}
    ${presets.design}

    &:active {
        top: 1px;
    }

    &:hover {
        ${({ $disabled }) => (!$disabled ? presets.hover : '')}
    }

    ${({ $pressed }) =>
        $pressed &&
        css`
            ${presets.hover}
        `}

    ${({ $grid }) =>
        $grid &&
        css`
            width: ${$grid ? `${(100 / 12) * $grid}%` : 'auto'};
        `}

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${presets.disabled}
        `}

    ${({ $isLoading }) =>
        $isLoading &&
        css`
            ${presets.loading}
        `}

    ${({ $isFocusStateVisible }) =>
        $isFocusStateVisible &&
        css`
            &:focus {
                ${presets.focus}
            }
        `}

    ${({ $square }) =>
        $square &&
        css`
            padding: 0;
        `}

    ${presets.custom}
`;

interface PropsContentWrapper {
    $size: PropsBox['$size'];
}
export const ContentWrapper = styled.span<PropsContentWrapper>`
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:last-of-type) {
        ${presets.gap}
    }

    & > svg {
        display: block;
    }

    ${presets.customWrapper}
`;

export const ContentWrapperIcon = styled(ContentWrapper)`
    flex: 0 0 auto;
`;
