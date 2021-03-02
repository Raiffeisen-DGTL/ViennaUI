import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Wrapped } from '../Input/Input.styles';
import InputWrapper from '../Input/InputWrapper';

const multiselect = getPresets('select', {
    base: null,
    placeholder: null,
    placeholderDisabled: null,
    custom: null,
});

const current = getPresets('select.current', {
    size: 'size',
    custom: null,
});

const part = getPresets('select.part', {
    base: null,
    focus: null,
});

const chip = getPresets('select.chip', {
    base: null,
    size: 'size',
    text: null,
});

const chipIcon = getPresets('select.chip.icon', {
    base: null,
    size: 'size',
    hover: null,
});

const extra = getPresets('select.extra', {
    base: null,
    custom: null,
});

const wrapper = getPresets('select.wrapper', {
    size: 'size',
});

export const Part = styled.div<{ active?: boolean; right?: boolean }>`
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
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
    display: flex;
    align-items: center;
    ${current.size}
    ${current.custom}
`;

export const Extra = styled.span`
    ${extra.base}
    margin-right: 30px;
    ${extra.custom}
`;

export const Box = styled.div<{ design?: 'outline' | 'material' }>`
    position: relative;
    ${multiselect.base}
    ${multiselect.custom}
`;

export const Chip = styled.div<{ size?: any }>`
    display: flex;
    ${chip.base}

    &:only-of-type {
        width: 100%;
    }

    span {
        ${chip.text}
        ${chip.size}
    }

    svg {
        ${chipIcon.base}
        ${chipIcon.size}
        &:hover {
            ${chipIcon.hover}
        }
    }
`;

export const Text = styled.span`
    flex: 1;
`;

export const Placeholder = styled.div<{ size?: any; disabled?: boolean }>`
    width: 100%;
    overflow: hidden;
    ${multiselect.placeholder}
    ${({ disabled }) => disabled && multiselect.placeholderDisabled}
`;

export const StyledInputWrapper = styled(InputWrapper as any)`
    ${Wrapped as any} {
        ${wrapper.size}ƒ
    }
`;
