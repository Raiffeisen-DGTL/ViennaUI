import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('formField.content', {
    base: null,
    custom: null,
});

export const Box = styled.div`
    ${presets.base}
    ${presets.custom}
`;
