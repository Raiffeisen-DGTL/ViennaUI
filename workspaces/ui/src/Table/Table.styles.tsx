import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { useMargin } from '../Whitespace/utils';

const presets = getPresets('table', {
    base: null,
    empty: null,
    outlined: null,
});

const custom = getPresets('table.custom', {
    wrapper: null,
    tableWrapper: null,
    box: null,
    empty: null,
});

export const Wrapper = styled.div<any>`
    display: flex;
    flex-direction: column;
    background: white;
    position: relative;

    ${({ maxHeight }) =>
        maxHeight &&
        css`
            max-height: ${maxHeight};
        `}

    ${({ minHeight }) =>
        minHeight &&
        css`
            min-height: ${minHeight};
        `}

    ${({ outlined }) =>
        outlined &&
        css`
            ${presets.outlined}
        `}

    ${useMargin}

    ${custom.wrapper}
`;

export const TableWrapper = styled.div<any>`
    width: 100%;
    flex-grow: 1;

    ${({ isOverflow }) =>
        isOverflow &&
        css`
            overflow: auto;
        `}

    ${custom.tableWrapper}
`;

export const Box = styled.table<any>`
    ${presets.base}

    border-spacing: 0;
    width: 100%;

    ${custom.box}
`;

export const Empty = styled.div`
    ${presets.empty}
    ${custom.empty}
`;
