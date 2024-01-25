import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp, responsivePreset } from '../Utils/responsiveness';

const checkbox = getPresets('checkbox', {
    base: null,
    size: responsivePreset('$size', 'm'),
    hover: null,
    disabled: null,
    error: null,
    checked: null,
});

const label = getPresets('checkbox.label', {
    base: null,
    size: responsivePreset('$size', 'm'),
    disabled: null,
});

export const IconBox = styled.span`
    position: relative;
    align-self: flex-start;
`;

interface Size<B = Breakpoints> {
    $size?: ResponsiveProp<'s' | 'm' | 'l', B>;
}

interface PropsIcon<B = Breakpoints> extends Size<B> {
    $disabled?: boolean;
    $checked?: boolean;
    $indeterminate?: boolean;
    $invalid?: boolean;
    $active?: boolean;
}
export const Icon = styled.svg<PropsIcon>`
    display: block;
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    color: transparent;
    transition: all 0.2s;

    ${checkbox.base}

    ${checkbox.size}

    ${({ $checked, $indeterminate }) =>
        ($checked || $indeterminate) &&
        css`
            ${checkbox.checked}
        `}

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${checkbox.disabled}
        `}

    ${({ $invalid }) =>
        $invalid &&
        css`
            ${checkbox.error}
        `}

    ${({ $active }) =>
        $active &&
        css`
            ${checkbox.hover}
        `}
`;

type PropsContent<B = Breakpoints> = Size<B>;
export const Content = styled.span<PropsContent>`
    ${label.base}
    ${label.size}
`;

export interface PropsBox {
    $disabled?: boolean;
}
export const Box = styled.label<PropsBox>`
    display: inline-flex;
    align-items: center;

    &:hover ${Icon} {
        ${checkbox.hover}
        ${({ $disabled }) =>
            $disabled &&
            css`
                ${checkbox.disabled}
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

export const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: -1;
`;
