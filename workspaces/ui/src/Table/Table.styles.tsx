import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

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
    max-height: ${({ maxHeight }) => maxHeight || '100%'};

    ${({ outlined }) =>
        outlined &&
        css`
            ${presets.outlined}
        `}

    ${custom.wrapper}
`;

export const TableWrapper = styled.div`
    width: 100%;
    overflow: auto;
    max-height: 100%;

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
