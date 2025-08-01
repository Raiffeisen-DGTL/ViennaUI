import styled, { css } from 'styled-components';
import { textarea } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp } from '../Utils/responsiveness';

const presets = getPresets(
    textarea,
    'textarea'
)({
    base: null,
    size: ['$size', 'm'],
    design: '$design',
    hover: '$design',
    disabled: '$design',
    focused: '$design',
    invalid: '$design',
});

const placeholder = getPresets(
    textarea.placeholder,
    'textarea.placeholder'
)({
    base: null,
    disabled: null,
});

const counter = getPresets(
    textarea.counter,
    'textarea.counter'
)({
    base: null,
});

export const Root = styled.div`
    position: relative;
`;

export interface PropsBox<B = Breakpoints> {
    $design: 'outline' | 'material';
    $size: ResponsiveProp<'s' | 'm' | 'l', B>;
    $invalid?: boolean;
    $maxHeight?: number;
    $showCounter?: boolean;
}
export const Box = styled.textarea<PropsBox>`
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

    ${({ $maxHeight }) =>
        $maxHeight &&
        css`
            max-height: ${$maxHeight}px;
        `}

    ${({ $invalid }) =>
        $invalid &&
        css`
            ${presets.invalid}
        `}

    ${({ $showCounter }) =>
        $showCounter &&
        css`
            padding-bottom: 20px;
        `}

    &::-ms-clear,
    &::-ms-reveal {
        display: none;
    }

    &::-webkit-input-placeholder {
        ${placeholder.base}
    }

    &::-moz-placeholder {
        ${placeholder.base}
    }

    &:-ms-input-placeholder {
        ${placeholder.base}
    }
`;

export const Counter = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    text-decoration: none;
    box-sizing: border-box;
    display: block;
    ${counter.base};
`;
