import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('table.groupBy', {
    title: null,
    select: null,
});

export const Td = styled.td`
    ${presets.title}
`;

export const SelectTd = styled.td`
    ${presets.select}
`;
