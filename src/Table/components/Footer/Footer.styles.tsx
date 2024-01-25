import styled from 'styled-components';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table', {
    footer: null,
});

export const TableFooter = styled.div`
    ${presets.footer}
`;
