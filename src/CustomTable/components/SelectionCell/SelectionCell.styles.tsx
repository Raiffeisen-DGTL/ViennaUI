import styled from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets(
    table,
    'table'
)({
    selector: null,
});

export const Box = styled.div`
    display: flex;
    justify-content: center;
    ${presets.selector}
`;
