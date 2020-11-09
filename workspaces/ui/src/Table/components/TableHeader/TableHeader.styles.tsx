import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('table', {
    header: null,
    size: 'size',
    pinned: null,
});

const cell = getPresets('table.cell.header', {
    base: null,
    hover: null,
    group: null,
    color: 'color',
    rightDivider: null,
    bottomDivider: null,
});

export const Row = styled.tr``;

export const Th = styled.th<any>`
    position: relative; // for IE
    position: sticky;
    top: 0;
    z-index: 10;

    ${cell.base}
    ${presets.size}

    ${({ width }) =>
        width &&
        css`
            min-width: ${width};
            max-width: ${width};
        `}

    ${({ color }) =>
        color &&
        css`
            ${cell.color}
        `}

    ${({ hasRightDivider }) =>
        hasRightDivider &&
        css`
            ${cell.rightDivider}
        `}

    ${({ hasBottomDivider }) =>
        hasBottomDivider &&
        css`
            ${cell.bottomDivider}
        `}

    ${({ group }) =>
        group &&
        css`
            ${cell.group}
        `}

    ${({ pinned }) =>
        pinned &&
        css`
            position: sticky;
            z-index: 2;
            ${presets.pinned}
        `}

    &:hover {
        ${({ isHover }) =>
            isHover &&
            css`
                ${cell.hover}
            `}
    }
`;

export const Header = styled.thead`
    ${presets.header}
`;
