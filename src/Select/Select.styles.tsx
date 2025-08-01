import styled, { css } from 'styled-components';
import { select } from 'vienna.ui-theme';
import { color, layout } from 'vienna.tokens';
import { Wrapped, StyledInput as Input, Placeholder as InputPlaceholder } from '../Input/Input.styles';
import { InputWrapper } from '../Input';
import { getPresets, getPresetsCustom } from '../Utils/styling';
import { ResponsiveProp, Breakpoints } from '../Utils/responsiveness';

const presets = getPresets(
    select,
    'select'
)({
    base: null,
    placeholder: null,
    placeholderDisabled: null,
    custom: null,
});

const part = getPresetsCustom('select.part')({
    base: null,
    focus: null,
});

const current = getPresets(
    select.current,
    'select.current'
)({
    size: ['$size', 'm'],
});

const wrapper = getPresets(
    select.wrapper,
    'select.wrapper'
)({
    base: null,
    size: ['$size', 'm'],
});

export interface PropsPart {
    $active?: boolean;
}
export const Part = styled.div<PropsPart>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${part.base}
    ${({ $active }) =>
        $active &&
        css`
            ${part.focus}
        `}
    &:hover {
        ${part.focus}
    }
`;

export interface PropsCurrent {
    $size?: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', Breakpoints>;
    $hasTemplate?: boolean;
}

export const ClearButton = styled.div<PropsCurrent>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: ${({ $size }) => ($size === 'xs' ? layout.size.s1 : layout.size.s2)}px;
    color: ${color.primary.seattle.c60};

    &:hover,
    &:focus {
        color: ${color.primary.brand.primary};
    }
`;

export const Current = styled.div<PropsCurrent>`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    height: 100%;
    display: flex;
    align-items: center;
    overflow-y: auto;

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

    ${presets.custom}

    position: ${({ $hasTemplate }) => ($hasTemplate ? 'relative' : '')};
`;

interface PropsBox {
    $disabled?: boolean;
}
export const Box = styled.div<PropsBox>`
    position: relative;
    ${presets.base}

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `}

    ${presets.custom}

    ${({ $disabled }) =>
        !$disabled &&
        css`
            &:hover ${Part} {
                color: ${color.primary.brand.primary};
            }
        `}
`;

export interface PropsPlaceholder {
    $disabled?: boolean;
}
export const Placeholder = styled.div<PropsPlaceholder>`
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    ${presets.placeholder}
    ${({ $disabled }) => $disabled && presets.placeholderDisabled}
`;

export const StyledInputWrapper = styled(InputWrapper)<PropsCurrent>`
    ${Wrapped} {
        ${wrapper.base}
    }
`;

export const DropdownBottomSlot = styled.div`
    position: sticky;
    bottom: 0;
    background-color: ${color.primary.brand.white};
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100%;
        height: 8px;
        background: ${color.primary.brand.white};
    }
`;
