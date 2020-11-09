import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const switcher = getPresets('switcher', {
    base: null,
});

const slider = getPresets('switcher.slider', {
    base: null,
    size: 'size',
    acrive: null,
    checked: null,
    disabledCheked: null,
    disabledUnCheked: null,
});

const control = getPresets('switcher.control', {
    base: null,
    size: 'size',
    push: 'size',
    disabledCheked: null,
    disabledUnCheked: null,
});

const label = getPresets('switcher.label', {
    base: null,
    size: 'size',
    disabled: null,
});

export const Caption = styled.span<{ size: 'm' | 'l'; disabled: any }>`
    position: relative;
    display: inline-block;
    ${label.base};
    ${label.size};
    ${({ disabled }) => disabled && label.disabled}
`;

export const Box = styled.label<any>`
    display: inline-flex;
    ${switcher.base}
`;

export const Input = styled.input`
    position: absolute;
    left: -9999px;
`;

export const Handle = styled.span<{ size: 'm' | 'l'; disabled: any; checked: any }>`
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

    ${({ checked }) =>
        checked &&
        css`
            ${slider.checked}

            &::before {
                ${control.push}
            }
        `}

    ${({ disabled, checked }): any =>
        disabled &&
        css`
            ${checked ? slider.disabledCheked : slider.disabledUnCheked}

            &::before {
                ${checked ? control.disabledCheked : control.disabledUnCheked}
            }
        `}
`;
