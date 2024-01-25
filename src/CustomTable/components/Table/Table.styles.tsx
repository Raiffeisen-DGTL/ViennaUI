import styled from 'styled-components';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table', {
    base: null,
});

const custom = getPresets('table.custom', {
    box: null,
});

export const Table = styled.table`
    ${presets.base}

    border-spacing: 0;
    width: 100%;

    ${custom.box}
`;
