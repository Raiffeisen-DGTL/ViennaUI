import styled from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets(
    table.settings.grouping,
    'table.settings.grouping'
)({
    box: null,
});

const custom = getPresets(
    table.settings.grouping,
    'table.settings.grouping'
)({
    box: null,
});

export const Box = styled.div`
    ${presets.box}
    ${custom.box}
`;
