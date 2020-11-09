import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const input = getPresets('input.native', {
    base: null,
    size: 'size',
    design: 'design',
});

const placeholder = getPresets('input.placeholder', {
    base: null,
    gap: null,
});

const wrapper = getPresets('input.wrapper', {
    base: null,
    design: 'design',
    size: 'size',
    hover: 'design',
    invalid: 'design',
    disabled: 'design',
});

const wrapped = getPresets('input.wrapped', {
    base: null,
    disabled: null,
});

const infix = getPresets('input.infix', {
    base: null,
    hover: null,
    size: 'size',
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

export const Placeholder = styled.div<{
    design?: 'outline' | 'material';
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    disabled?: boolean;
}>`
    ${input.size}
    ${input.design}
    ${placeholder.base}
    ${({ disabled }) => disabled && placeholder.disabled}
    ${placeholder.gap}
    line-height: normal;
    overflow: hidden;
    ${custom.placeholder}
`;

export const Box = styled.div<{
    design?: 'outline' | 'material';
}>`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    // for correct height
    line-height: normal;
`;

export const StyledInput = styled.input<{
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    disabled?: boolean;
    design?: 'outline' | 'material';
}>`
    position: relative;
    padding: 0;
    ${input.base}
    ${input.size}
    ${input.design}

    &::placeholder{
        ${placeholder.base}
    }

    &::-ms-clear, &::-ms-reveal {
        display: none;
    }

    ${custom.input}
`;

export const Prefix = styled.div<{
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    active?: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${infix.base}
    ${infix.size}
    ${({ active }) => active && infix.hover}
    ${prefix.base}
    ${custom.infix}
    ${custom.prefix}
`;

export const Postfix = styled.div<{
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    active?: boolean;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    ${infix.base}
    ${infix.size}
    ${({ active }) => active && infix.hover}
    ${postfix.base}
    ${custom.infix}
    ${custom.postfix}
`;

export const Wrapped = styled.div<{ disabled?: boolean }>`
    width: 100%;
    ${wrapped.base}
    & > *, input {
        ${wrapped.base}
    }

    ${({ disabled }) =>
        disabled &&
        css`
            ${wrapped.disabled}
            & *, input {
                ${wrapped.disabled}
                &::placeholder {
                    ${wrapped.disabled}
                }
            }
        `}
`;

export const Wrapper = styled.div<{
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
    disabled?: boolean;
    invalid?: boolean;
    active?: boolean;
    design?: 'outline' | 'material';
}>`
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

    ${(props) => props.disabled && wrapper.disabled(props)}
    ${(props) => props.invalid && wrapper.invalid(props)}
    ${(props) => props.active && wrapper.hover(props)}

    &:hover{
        ${wrapper.hover}
    }

`;

export const PlaceholderWrapper = styled.div<{ size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' }>`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;
