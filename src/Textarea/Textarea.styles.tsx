import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp, responsivePreset } from '../Utils/responsiveness';

const presets = getPresets('textarea', {
    base: null,
    size: responsivePreset('$size', 'm'),
    design: '$design',
    hover: '$design',
    disabled: '$design',
    focused: '$design',
    invalid: '$design',
});

const placeholder = getPresets('textarea.placeholder', {
    base: null,
    disabled: null,
});

const counter = getPresets('textarea.counter', {
    base: null,
});

export const Root = styled.div`
    position: relative;
`;

export interface PropsBox<B = Breakpoints> {
    $design: 'outline' | 'material';
    $size: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl' | B>;
    $invalid?: boolean;
    $maxHeight?: number;
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
