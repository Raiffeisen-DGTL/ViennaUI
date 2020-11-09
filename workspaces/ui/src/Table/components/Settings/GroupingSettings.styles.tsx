import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('table.settings.grouping', {
    box: null,
});

const custom = getPresets('table.settings.grouping', {
    box: null,
});

export const Box = styled.div`
    ${presets.box}
    ${custom.box}
`;
