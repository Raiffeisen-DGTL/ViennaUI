import styled from 'styled-components';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table.draggable', {
    box: null,
    drop: null,
});

export const Box = styled.div`
    position: absolute;
    ${presets.box}
`;

export const DropLeft = styled.div`
    position: absolute;
    left: 0;
    ${presets.drop}
`;

export const DropRight = styled.div`
    position: absolute;
    right: 0;
    ${presets.drop}
`;
