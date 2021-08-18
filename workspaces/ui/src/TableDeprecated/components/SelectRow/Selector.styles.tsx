import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('table', {
    selector: null,
});

export const Box = styled.div`
    display: flex;
    justify-content: center;
    ${presets.selector}
`;
