import styled, { css } from 'styled-components';
import { Td, Row } from '../TableBody/TableBody.styles';
import { tableLayers } from '../../TableLayers';

export interface ActionsColumnProps {
    $shrinkActionsColumn?: boolean;
}

export const ActionsColumn = styled(Td)<ActionsColumnProps>`
    position: sticky;
    right: 0;

    ${({ $shrinkActionsColumn }) =>
        $shrinkActionsColumn &&
        css`
            position: absolute;
            padding-right: 0;
            padding-left: 0;
        `}

    ${Row}:hover & {
        z-index: ${tableLayers.pinnedColumn};
        background: transparent;
    }
`;

export const HoveringActionsWrapper = styled.div`
    position: relative;
    width: fit-content;
    top: 50%;
    transform: translateY(-50%);
    transform: translateX(-100%);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`;
