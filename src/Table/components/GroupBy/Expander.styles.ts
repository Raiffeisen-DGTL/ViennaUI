import { table } from 'vienna.ui-theme';
import styled from 'styled-components';
import { getPresets } from '../../../Utils/styling';
import { DEFAULT_EXPANDER_WIDTH } from '../../constants';

const presetsExpander = getPresets(
    table.expander,
    'table.expander'
)({
    cell: null,
    hover: null,
});

export const ExpanderCell = styled.div`
    width: ${DEFAULT_EXPANDER_WIDTH};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${presetsExpander.cell}

    &:hover {
        ${presetsExpander.hover}
    }
`;
