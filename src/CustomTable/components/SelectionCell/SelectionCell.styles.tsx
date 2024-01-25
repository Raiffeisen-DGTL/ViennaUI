import styled from 'styled-components';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table', {
    selector: null,
});

export const Box = styled.div`
    display: flex;
    justify-content: center;
    ${presets.selector}
`;
