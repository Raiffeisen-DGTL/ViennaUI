import styled from 'styled-components';
import { table } from 'vienna.ui-theme';
import { color } from 'vienna.tokens';
import { tableLayers } from '../../TableLayers';
import { getPresets, getPresetsCustom } from '../../../Utils/styling';

const presets = getPresets(
    table.settings,
    'table.settings'
)({
    box: null,
    size: '$size',
});

const custom = getPresetsCustom('table.settings.custom')({
    box: null,
});

interface PropsBox {
    $size: 'xs' | 's' | 'm' | 'l';
}
export const Box = styled.span<PropsBox>`
    display: inline-flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 0;
    z-index: ${tableLayers.settings};
    background: ${color.primary.brand.white};
    overflow: visible;
    ${presets.box}
    ${presets.size}

    ${custom.box}
`;

export const SettingsBackground = styled.span`
    box-shadow: -4px 0 8px 4px ${color.primary.brand.white};
`;
