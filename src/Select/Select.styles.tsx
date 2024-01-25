import styled, { css } from 'styled-components';
import { StyledInput as Input, Placeholder as InputPlaceholder, Wrapped } from '../Input/Input.styles';
import { InputWrapper } from '../Input';
import { getPresets } from '../Utils/styling';
import { responsivePreset, ResponsiveProp, Breakpoints } from '../Utils/responsiveness';

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
    size: responsivePreset('$size', 'm'),
});

const wrapper = getPresets('select.wrapper', {
    size: responsivePreset('$size', 'm'),
});

interface PropsPart {
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

interface PropsCurrent {
    $size?: ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', Breakpoints>;
}
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

    ${select.custom}
`;

export const Box = styled.div`
    position: relative;
    ${select.base}
    ${select.custom}
`;

interface PropsPlaceholder {
    $disabled?: boolean;
}
export const Placeholder = styled.div<PropsPlaceholder>`
    width: 100%;
    overflow: hidden;
    ${select.placeholder}
    ${({ $disabled }) => $disabled && select.placeholderDisabled}
`;

export const StyledInputWrapper = styled(InputWrapper)`
    ${Wrapped} {
        ${wrapper.size}
    }
`;
