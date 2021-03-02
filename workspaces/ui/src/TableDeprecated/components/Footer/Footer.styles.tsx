import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('table', {
    footer: null,
});

export const TableFooter = styled.div`
    ${presets.footer}
`;
