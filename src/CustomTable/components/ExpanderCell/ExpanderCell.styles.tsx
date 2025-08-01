import styled from 'styled-components';
import { table } from 'vienna.ui-theme';
import { Td } from '../TableBody/TableBody.styles';
import { getPresets } from '../../../Utils/styling';

const expander = getPresets(
    table.expander,
    'table.expander'
)({
    cell: null,
    hover: null,
});

export const ExpanderTd = styled(Td)`
    ${expander.cell}

    &:hover {
        ${expander.hover}
    }
`;

export const ExpanderIcon = styled.span`
    display: flex;
    justify-content: center;
    cursor: pointer;
`;
