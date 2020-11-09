import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { ChipsProps, ItemProps } from './Chips';

const presets = getPresets('chips', {
    box: null,
    base: null,
    focus: null,
    design: 'design',
    disabled: 'design',
    hover: null,
    custom: null,
    boxCustom: null,
});

const active = getPresets('chips.active', {
    design: 'design',
    hover: 'design',
    disabled: 'design',
    custom: null,
});

const justify = (props) => (props.align === 'right' ? 'flex-end' : 'flex-start');

export const Box = styled.div<ChipsProps>`
    display: flex;
    box-sizing: border-box;
    position: relative;
    align-items: center;
    justify-content: ${justify};

    ${presets.box}
    ${presets.boxCustom}
`;

export const Item = styled.div<ItemProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    ${presets.base}
    ${presets.design}

    &:hover {
        ${presets.hover}
    }

    ${({ disabled }) =>
        disabled &&
        css`
            pointer-events: none;
            ${presets.disabled};
        `}

    ${(props) =>
        props.active &&
        css`
            ${active.design}

            &:hover {
                ${active.hover}
            }

            ${props.disabled &&
            css`
                ${active.disabled};
            `}

            ${active.custom}
        `}

    ${({ isFocusStateVisible }: any) =>
        isFocusStateVisible &&
        css`
            &:focus {
                ${presets.focus}
            }
        `}

    ${presets.custom}
`;
