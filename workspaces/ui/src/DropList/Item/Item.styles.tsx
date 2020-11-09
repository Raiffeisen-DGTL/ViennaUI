import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const item = getPresets('dropList.item', {
    base: null,
    size: 'size',
    hover: null,
    selected: null,
    disabled: null,
    custom: null,
});

export const Box = styled.div<{
    size?: 's' | 'm' | 'l';
    disabled?: boolean;
    selected?: boolean;
    hover?: boolean;
    wrapLine?: boolean;
}>`
    display: flex;
    align-items: center;
    white-space: nowrap;
    flex: 0 0 auto;
    box-sizing: border-box;
    position: relative;

    ${item.base}
    ${item.size}

    &:hover {
        ${item.hover}
    }

    ${({ hover }) => hover && item.hover}
    ${({ selected }) => selected && item.selected}
    ${({ disabled }) => disabled && item.disabled}

    ${({ wrapLine }) =>
        wrapLine &&
        css`
            white-space: normal;
        `}

    ${item.custom}
`;
