import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Design, Size } from './Textarea';

const presets = getPresets('textarea', {
    base: null,
    size: 'size',
    design: 'design',
    hover: 'design',
    disabled: 'design',
    focused: 'design',
    invalid: 'design',
    placeholder: 'design',
});

interface BoxProps {
    readonly design: Design;
    readonly size: Size;
    readonly invalid?: boolean;
    readonly maxHeight?: number;
}

export const Box = styled.textarea<BoxProps>`
    vertical-align: middle;
    text-align: left;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    border: 0;
    flex: 1 1 auto;
    appearance: none;
    resize: none;

    ${presets.base}
    ${presets.size}
    ${presets.design}

    &:hover {
        ${presets.hover}
    }

    &:focus {
        ${presets.focused}
    }

    &:disabled,
    &:disabled::placeholder {
        ${presets.disabled}
    }

    ${(props) =>
        props.maxHeight &&
        css`
            max-height: ${props.maxHeight}px;
        `}

    ${(props) =>
        props.invalid &&
        css`
            ${presets.invalid}
        `}

    &::-ms-clear,
    &::-ms-reveal {
        display: none;
    }

    &:focus::-webkit-input-placeholder {
        color: transparent;
    }

    &:focus::-moz-placeholder {
        color: transparent;
    }

    &:focus:-ms-input-placeholder {
        color: transparent;
    }
`;
