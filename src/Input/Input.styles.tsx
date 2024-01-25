import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { Breakpoints, ResponsiveProp, responsivePreset } from '../Utils/responsiveness';

const input = getPresets('input.native', {
    base: null,
    size: responsivePreset('$size', 'm'),
    design: '$design',
});

const placeholder = getPresets('input.placeholder', {
    base: null,
    gap: null,
});

const wrapper = getPresets('input.wrapper', {
    base: null,
    design: '$design',
    size: responsivePreset('$size', 'm'),
    hover: '$design',
    invalid: '$design',
    disabled: '$design',
});

const wrapped = getPresets('input.wrapped', {
    base: null,
    disabled: null,
});

const disabledColor = getPresets('input.wrapped.disabled', {
    color: null,
});

const infix = getPresets('input.infix', {
    base: null,
    hover: null,
    size: '$size',
});

const prefix = getPresets('input.prefix', {
    base: null,
});

const postfix = getPresets('input.postfix', {
    base: null,
});

const custom = getPresets('input.custom', {
    input: null,
    placeholder: null,
    wrapper: null,
    infix: null,
    prefix: null,
    postfix: null,
});

type Design = 'outline' | 'material';
type Size<B = Breakpoints> = ResponsiveProp<'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl', B>;

interface PropsPlaceholder {
    $design?: Design;
    $size?: Size;
    $disabled?: boolean;
}
export const Placeholder = styled.div<PropsPlaceholder>`
    ${input.size}
    ${input.design}
    ${placeholder.base}
    ${placeholder.gap}
    line-height: normal;
    overflow: hidden;
    ${custom.placeholder}
`;

interface PropsBox {
    $design?: Design;
}
export const Box = styled.div<PropsBox>`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    // for correct height
    line-height: normal;
`;

export interface PropsStyledInput<B = Breakpoints> {
    $design?: Design;
    $size?: Size<B>;
    $align?: 'left' | 'center' | 'right';
    $disabled?: boolean;
}
export const StyledInput = styled.input<PropsStyledInput>`
    position: relative;
    padding: 0;
    ${input.base}
    ${input.size}
    ${input.design}

    ${({ $align }) =>
        css`
            text-align: ${$align};
        `}

    &::placeholder {
        ${placeholder.base}
    }

    &::-ms-clear,
    &::-ms-reveal {
        display: none;
    }

    ${custom.input}
`;

interface PropsPrefix {
    $size?: Size;
    $active?: boolean;
}
export const Prefix = styled.div<PropsPrefix>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${infix.base}
    ${infix.size}
    ${({ $active }) => $active && infix.hover}
    ${prefix.base}
    ${custom.infix}
    ${custom.prefix}
`;

interface PropsPostfix {
    $size?: Size;
    $active?: boolean;
}
export const Postfix = styled.div<PropsPostfix>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${infix.base}
    ${infix.size}
    ${({ $active }) => $active && infix.hover}
    ${postfix.base}
    ${custom.infix}
    ${custom.postfix}
`;

interface PropsWrapped {
    $disabled?: boolean;
}
export const Wrapped = styled.div<PropsWrapped>`
    height: 100%;
    width: 100%;
    ${wrapped.base}
    & > *, input {
        ${wrapped.base}
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            ${wrapped.disabled}
            & *, input {
                // fix text color dim in safari
                ${wrapped.disabled}
                opacity: 1;
                -webkit-text-fill-color: ${disabledColor.color};
                &::placeholder {
                    ${wrapped.disabled}
                    opacity: 1;
                    -webkit-text-fill-color: ${disabledColor.color};
                }
            }
        `}
`;

interface PropsWrapper {
    $design?: Design;
    $size?: Size;
    $disabled?: boolean;
    $invalid?: boolean;
    $active?: boolean;
}
export const Wrapper = styled.label<PropsWrapper>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    // for correct smartPlaceholder work
    white-space: nowrap;
    overflow: hidden;

    ${wrapper.base}
    ${wrapper.size}
    ${wrapper.design}

    ${custom.wrapper}

    ${({ $design, $disabled }) => $disabled && wrapper.disabled({ $design })}
    ${({ $design, $invalid }) => $invalid && wrapper.invalid({ $design })}
    ${({ $design, $active }) => $active && wrapper.hover({ $design })}

    &:hover {
        ${wrapper.hover}
    }
`;

export const PlaceholderWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Invisible = styled.span`
    color: transparent;
    opacity: 0;
`;
