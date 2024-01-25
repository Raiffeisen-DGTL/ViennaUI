import styled from 'styled-components';
import { getPresets } from '../../Utils/styling';

const presets = getPresets('formField.content', {
    base: null,
    custom: null,
});

export const Box = styled.div`
    ${presets.base}
    ${presets.custom}
`;
