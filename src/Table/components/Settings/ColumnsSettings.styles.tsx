import styled from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../../../Utils/styling';

const presets = getPresets(
    table.settings.columns,
    'table.settings.columns'
)({
    list: null,
    column: null,
    search: null,
});

const custom = getPresetsCustom('table.settings.custom.columns')({
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

export const TitleBox = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 152px;
`;
