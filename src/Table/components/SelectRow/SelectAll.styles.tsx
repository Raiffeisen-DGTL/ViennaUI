import styled from 'styled-components';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table.selectAll', {
    box: null,
    label: null,
});

export const Box = styled.div`
    ${presets.box}
`;

export const Label = styled.span`
    ${presets.label};
`;
