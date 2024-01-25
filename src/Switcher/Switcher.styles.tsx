import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { responsivePreset } from '../Utils/responsiveness';
import { Size } from './Switcher';

const switcher = getPresets('switcher', {
    base: null,
});

const slider = getPresets('switcher.slider', {
    base: null,
    size: responsivePreset('$size', 'm'),
    active: null,
    checked: null,
    disabledCheked: null,
    disabledUnCheked: null,
});

const control = getPresets('switcher.control', {
    base: null,
    size: responsivePreset('$size', 'm'),
    push: responsivePreset('$size', 'm'),
    disabledCheked: null,
    disabledUnCheked: null,
});

const label = getPresets('switcher.label', {
    base: null,
    size: responsivePreset('$size', 'm'),
    disabled: null,
});

interface PropsCaption {
    $size?: Size;
    $disabled?: boolean;
}
export const Caption = styled.span<PropsCaption>`
    position: relative;
    display: inline-block;
    ${label.base};
    ${label.size};
    ${({ $disabled }) => $disabled && label.disabled}
`;

export const Box = styled.label`
    display: inline-flex;
    ${switcher.base}
`;

export const Input = styled.input`
    position: absolute;
    left: -9999px;
`;

interface PropsHandle {
    $size?: Size;
    $disabled?: boolean;
    $checked?: boolean;
}
export const Handle = styled.span<PropsHandle>`
    position: relative;
    display: inline-block;
    ${slider.base}
    ${slider.size}

    &:active {
        ${slider.active}
    }

    &::before {
        display: block;
        content: '';

        ${control.base}
        ${control.size}
    }

    ${({ $checked }) =>
        $checked &&
        css`
            ${slider.checked}

            &::before {
                ${control.push}
            }
        `}

    ${({ $disabled, $checked }) =>
        $disabled &&
        css`
            ${$checked ? slider.disabledCheked : slider.disabledUnCheked}

            &::before {
                ${$checked ? control.disabledCheked : control.disabledUnCheked}
            }
        `}
`;
