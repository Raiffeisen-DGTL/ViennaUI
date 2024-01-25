import styled from 'styled-components';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table.filterPopover', {
    base: null,
    size: '$size',
});

interface PropsFilterPopup {
    $size?: any;
}
export const FilterPopup = styled.div<PropsFilterPopup>`
    ${presets.base}
    ${presets.size}
`;
