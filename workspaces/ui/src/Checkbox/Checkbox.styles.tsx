import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const checkbox = getPresets('checkbox', {
    base: null,
    size: 'size',
    hover: null,
    disabled: null,
    error: null,
    checked: null,
});

const label = getPresets('checkbox.label', {
    base: null,
    size: 'size',
    disabled: null,
});

export const IconBox = styled.span`
    position: relative;
    align-self: flex-start;
`;

export const Icon = styled.svg<{
    size: any;
    disabled: any;
    checked: any;
    indeterminate: any;
    invalid: any;
    active: any;
}>`
    display: block;
    position: relative;
    flex: 0 0 auto;
    box-sizing: border-box;
    color: transparent;
    transition: all .2s;

    ${checkbox.base}

    ${checkbox.size}

    ${({ checked, indeterminate }): any =>
        (checked || indeterminate) &&
        css`
            ${checkbox.checked}
        `}

    ${({ disabled }): any =>
        disabled &&
        css`
            ${checkbox.disabled}
        `}

    ${({ invalid }): any =>
        invalid &&
        css`
            ${checkbox.error}
        `}

    ${({ active }): any =>
        active &&
        css`
            ${checkbox.hover}
        `}
`;

export const Content = styled.span<{ size: any }>`
    ${label.base}
    ${label.size}
`;

export const Box = styled.label<{ disabled: any }>`
    padding: 2px 0;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s;

    &:hover ${Icon} {
        ${checkbox.hover}
        ${({ disabled }): any =>
            disabled &&
            css`
                ${checkbox.disabled}
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
