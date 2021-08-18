import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('table.settings.columns', {
    list: null,
    column: null,
    search: null,
});

const custom = getPresets('table.settings.custom.columns', {
    box: null,
    list: null,
    column: null,
    search: null,
});

export const Box = styled.div`
    display: flex;
    flex-direction: column;

    ${custom.box}
`;

export const ColumnsList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 288px;

    ${presets.list}
    ${custom.list}
`;

export const Column = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${presets.column}
    ${custom.column}
`;

export const Search = styled.div`
    ${presets.search}
    ${custom.search}
`;
