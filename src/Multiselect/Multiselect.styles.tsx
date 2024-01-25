import styled, { css } from 'styled-components';
import { Wrapped } from '../Input/Input.styles';
import { InputWrapper } from '../Input/InputWrapper';
import { getPresets } from '../Utils/styling';
import { Design, Size } from './Multiselect';

const multiselect = getPresets('select', {
    base: null,
    placeholder: null,
    placeholderDisabled: null,
    custom: null,
});

const current = getPresets('select.current', {
    size: '$size',
    custom: null,
});

const part = getPresets('select.part', {
    base: null,
    focus: null,
});

const chip = getPresets('select.chip', {
    base: null,
    size: '$size',
    text: null,
});

const chipIcon = getPresets('select.chip.icon', {
    base: null,
    size: '$size',
    hover: null,
});

const extra = getPresets('select.extra', {
    base: null,
    custom: null,
});

const wrapper = getPresets('select.wrapper', {
    size: '$size',
});

interface PropsPart {
    $active?: boolean;
    $right?: boolean;
}
export const Part = styled.div<PropsPart>`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
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

interface PropsCurrent {
    $size: Size;
}
export const Current = styled.div<PropsCurrent>`
    display: flex;
    width: 100%;
    align-items: center;
    height: 100%;
    ${current.size}
    ${current.custom}
`;

export const Extra = styled.span`
    ${extra.base}
    margin-right: 30px;
    ${extra.custom}
`;

export interface PropsBox {
    $design: Design;
}
export const Box = styled.div<PropsBox>`
    position: relative;
    ${multiselect.base}
    ${multiselect.custom}
`;

interface PropsChip {
    $size: Size;
}
export const Chip = styled.div<PropsChip>`
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
        min-width: fit-content;
        flex-shrink: 0;
        &:hover {
            ${chipIcon.hover}
        }
    }
`;

interface PropsPlaceholder {
    $size?: Size;
    $disabled?: boolean;
}
export const Placeholder = styled.div<PropsPlaceholder>`
    width: 100%;
    overflow: hidden;
    ${multiselect.placeholder}
    ${({ $disabled }) => $disabled && multiselect.placeholderDisabled}
`;

interface PropsStyledInputWrapper {
    $size?: Size;
}
export const StyledInputWrapper = styled(InputWrapper)<PropsStyledInputWrapper>`
    ${Wrapped} {
        ${wrapper.size}
    }
`;
