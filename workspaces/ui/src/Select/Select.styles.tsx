import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { StyledInput as Input, Placeholder as InputPlaceholder, Wrapped } from '../Input/Input.styles';
import { InputWrapper } from '../Input';

const select = getPresets('select', {
    base: null,
    placeholder: null,
    placeholderDisabled: null,
    custom: null,
});

const part = getPresets('select.part', {
    base: null,
    focus: null,
});

const current = getPresets('select.current', {
    size: 'size',
    custom: null,
});

const wrapper = getPresets('select.wrapper', {
    size: 'size',
});

export const Part = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${part.base}
    ${({ active }) =>
        active &&
        css`
            ${part.focus}
        `}
    &:hover {
        ${part.focus}
    }
`;

export const Current = styled.div<{ size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' }>`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${current.size}

    ${Input} {
        padding: 0;
        width: 100%;
        height: auto;
        border-radius: 0;
    }

    ${InputPlaceholder} {
        padding: 0;
    }

    ${select.custom}
`;

export const Box = styled.div`
    position: relative;
    ${select.base}
    ${select.custom}
`;

export const Placeholder = styled.div<{ size?: any; disabled?: boolean }>`
    ${select.placeholder}
    ${({ disabled }) => disabled && select.placeholderDisabled}
`;

export const StyledInputWrapper = styled(InputWrapper as any)`
    ${Wrapped as any} {
        ${wrapper.size}ƒ
    }
`;
