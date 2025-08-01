import styled from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets(
    table,
    'table'
)({
    footer: null,
});

export const TableFooter = styled.div`
    ${presets.footer}
`;
