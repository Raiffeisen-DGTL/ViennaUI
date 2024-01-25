import styled from 'styled-components';
import { Td } from '../TableBody/TableBody.styles';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table.expander', {
    cell: null,
    hover: null,
});

export const ExpanderTd = styled(Td)`
    ${presets.cell}

    &:hover {
        ${presets.hover}
    }
`;

export const ExpanderIcon = styled.span`
    display: flex;
    justify-content: center;
    cursor: pointer;
`;
