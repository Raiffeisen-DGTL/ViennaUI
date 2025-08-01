import styled, { css } from 'styled-components';
import { radio } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';
import { Breakpoints } from '../Utils/responsiveness';
import { RadioSize } from './Radio';

const presets = getPresets(
    radio,
    'radio'
)({
    base: null,
    size: ['$size', 'm'],
    hover: null,
    disabled: null,
    invalid: null,
    checked: null,
});

const label = getPresets(
    radio.label,
    'radio.label'
)({
    base: null,
    size: ['$size', 'm'],
    disabled: null,
});

const checkmark = getPresets(
    radio.checkmark,
    'radio.checkmark'
)({
    base: null,
    disabled: null,
});

interface PropsIcon<B = Breakpoints> {
    $size?: RadioSize<B>;
    $disabled?: boolean;
    $invalid?: boolean;
}
export const Icon = styled.span<PropsIcon>`
    display: block;
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    transition: all 0.2s;
    align-self: flex-start;

    ${presets.base}
    ${presets.size}

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${presets.disabled}
        `}

    ${({ $invalid }) =>
        $invalid &&
        css`
            ${presets.invalid}
        `}
`;

interface PropsContent<B = Breakpoints> {
    $size?: RadioSize<B>;
}
export const Content = styled.span<PropsContent>`
    ${label.base}
    ${label.size}
`;

export interface PropsBox<B = Breakpoints> {
    $size?: RadioSize<B>;
    $disabled?: boolean;
}
export const Box = styled.label<PropsBox>`
    position: relative;
    padding: 2px 0;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s;

    &:hover ${Icon} {
        ${presets.hover}
        ${({ $disabled }) =>
            $disabled &&
            css`
                ${presets.disabled}
            `}
    }

    ${Content} {
        ${({ $disabled }) =>
            $disabled &&
            css`
                ${label.disabled}
            `}
    }
`;

interface PropsInput<B = Breakpoints> {
    $size?: RadioSize<B>;
    $disabled?: boolean;
    $invalid?: boolean;
}
export const Input = styled.input<PropsInput>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    opacity: 0;
    z-index: -1;

    &:checked ~ ${Icon} {
        ${presets.checked}

        ${({ $disabled }) =>
            $disabled &&
            css`
                ${presets.disabled}
            `}

        ${({ $invalid }) =>
            $invalid &&
            css`
                ${presets.invalid}
            `}

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50%;
            height: 50%;
            border-radius: 50%;

            display: block;
            ${checkmark.base}

            ${({ $disabled }) =>
                $disabled &&
                css`
                    ${checkmark.disabled}
                `};
        }
    }

    &:focus ~ ${Icon} {
        ${presets.hover}
    }
`;
