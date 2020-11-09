import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('badge', {
    base: null,
    size: 'size',
    color: 'color',
    gap: 'size',
});

const custom = getPresets('badge.custom', {
    box: null,
    item: null,
});

export const Box = styled.span<any>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    white-space: nowrap;
    appearance: none;
    outline: 0;
    position: relative;

    ${presets.base}
    ${presets.size}
    ${presets.color}

    ${(props) =>
        props.grid &&
        css`
            width: ${props.grid ? `${(100 / 12) * props.grid}%` : 'auto'};
        `}

    ${(props) =>
        props.clickable &&
        css`
            cursor: pointer;
        `}

    ${custom.box}
`;

export const Item = styled.span<any>`
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:last-child) {
        ${presets.gap}
    }

    & > svg {
        display: block;
    }

    ${custom.item}
`;
