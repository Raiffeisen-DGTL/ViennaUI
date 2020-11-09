import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const radio = getPresets('radio', {
    base: null,
    size: 'size',
    hover: null,
    disabled: null,
    invalid: null,
    checked: null,
});

const label = getPresets('radio.label', {
    base: null,
    size: 'size',
    disabled: null,
});

const checkmark = getPresets('radio.checkmark', {
    base: null,
    disabled: null,
});

export const Icon = styled.span<{ size: any; disabled: any; invalid?: boolean }>`
    display: block;
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    transition: all .2s;
    align-self: flex-start;

    ${radio.base}
    ${radio.size}

    ${({ disabled }): any =>
        disabled &&
        css`
            ${radio.disabled}
        `}

    ${({ invalid }): any =>
        invalid &&
        css`
            ${radio.invalid}
        `}
`;

export const Content = styled.span<{ size: any }>`
    ${label.base}
    ${label.size}
`;

export const Box = styled.label<{ size: any; disabled: any }>`
    padding: 2px 0;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s;

    &:hover ${Icon} {
        ${radio.hover}
        ${({ disabled }): any =>
            disabled &&
            css`
                ${radio.disabled}
            `}
    }

    ${Content} {
        ${({ disabled }): any =>
            disabled &&
            css`
                ${label.disabled}
            `}
    }
`;

export const Input = styled.input<{ invalid?: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    opacity: 0;
    z-index: -1;

    &:checked ~ ${Icon} {
        ${radio.checked}

        ${({ disabled }): any =>
            disabled &&
            css`
                ${radio.disabled}
            `}

        ${({ invalid }): any =>
            invalid &&
            css`
                ${radio.invalid}
            `}

        &::after {
            content: '';
            display: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50%;
            height: 50%;
            border-radius: 50%;

            display: block;
            ${checkmark.base}

            ${({ disabled }): any =>
                disabled &&
                css`
                    ${checkmark.disabled}
                `};
        }
    }

    &:focus ~ ${Icon} {
        ${radio.hover}
    }
`;
