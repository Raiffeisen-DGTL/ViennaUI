import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Td } from '../TableBody/TableBody.styles';

const presets = getPresets('table.expander', {
    cell: null,
    hover: null,
    content: null,
});

export const ExpanderCell = styled(Td)`
    ${presets.cell}

    &:hover {
        ${presets.hover}
    }
`;

export const ExpanderIcon = styled.span<any>`
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

export const ExpandedContent = styled(Td)`
    ${presets.content}
`;
