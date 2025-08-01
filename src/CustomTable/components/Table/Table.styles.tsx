import styled from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets, getPresetsCustom } from '../../../Utils/styling';

const presets = getPresets(
    table,
    'table'
)({
    base: null,
});

const custom = getPresetsCustom('table.custom')({
    box: null,
});

export const Table = styled.table`
    ${presets.base}

    border-spacing: 0;
    width: 100%;

    ${custom.box}
`;
