import styled, { css } from 'styled-components';
import { switcher } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { Size } from './Switcher';

const presets = getPresets(
    switcher,
    'switcher'
)({
    base: null,
});

const slider = getPresets(
    switcher.slider,
    'switcher.slider'
)({
    base: null,
    size: ['$size', 'm'],
    active: null,
    checked: null,
    disabledChecked: null,
    disabledUnChecked: null,
});

const control = getPresets(
    switcher.control,
    'switcher.control'
)({
    base: null,
    focus: null,
    size: ['$size', 'm'],
    push: ['$size', 'm'],
    disabledChecked: null,
    disabledUnChecked: null,
});

const label = getPresets(
    switcher.label,
    'switcher.label'
)({
    base: null,
    size: ['$size', 'm'],
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
    ${presets.base}
`;

export const Input = styled.input`
    position: absolute;
    left: -9999px;
    top: 0;
    visibility: hidden;
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

    &:focus {
        ${control.focus}
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
            ${$checked ? slider.disabledChecked : slider.disabledUnChecked}

            &::before {
                ${$checked ? control.disabledChecked : control.disabledUnChecked}
            }
        `}
`;
