import styled from 'styled-components';
import { tableLayers } from '../../TableLayers';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table.settings', {
    box: null,
    size: '$size',
});

const custom = getPresets('table.settings.custom', {
    box: null,
});

interface PropsBox {
    $size: any;
}
export const Box = styled.span<PropsBox>`
    display: inline-flex;
    align-items: center;
    position: absolute;
    right: 5px;
    top: 0;
    z-index: ${tableLayers.settings};
    ${presets.box}
    ${presets.size}

    ${custom.box}
`;
