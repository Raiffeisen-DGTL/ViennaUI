import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('formField.message', {
    base: null,
    design: 'color',
    custom: null,
    align: 'align',
});

export const Box = styled.div<{ color?: 'warning' | 'critical'; align?: 'left' | 'center' | 'right' }>`
    ${presets.base}
    ${presets.design}
    ${presets.align}
    ${presets.custom}
`;
