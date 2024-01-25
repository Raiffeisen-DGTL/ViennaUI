import styled from 'styled-components';
import { Td, Row } from '../TableBody/TableBody.styles';
import { tableLayers } from '../../TableLayers';

export const ActionsColumn = styled(Td)`
    position: sticky;
    right: 0;

    ${Row}:hover & {
        z-index: ${tableLayers.pinnedColumn};
    }
`;
