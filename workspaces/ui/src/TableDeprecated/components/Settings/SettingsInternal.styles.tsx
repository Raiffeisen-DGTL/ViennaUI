import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { TableLayers } from '../../TableLayers';

const presets = getPresets('table.settings', {
    box: null,
    size: 'size',
});

const custom = getPresets('table.settings.custom', {
    box: null,
});

export const Box = styled.span<any>`
    display: inline-flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    z-index: ${TableLayers.Settings};
    ${presets.box}
    ${presets.size}

    ${custom.box}
`;
