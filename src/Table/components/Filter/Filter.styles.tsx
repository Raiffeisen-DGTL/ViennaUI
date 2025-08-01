import styled from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets(
    table.filterPopover,
    'table.filterPopover'
)({
    base: null,
    size: '$size',
});

interface PropsFilterPopup {
    $size?: 'xs' | 's' | 'm' | 'l';
}
export const FilterPopup = styled.div<PropsFilterPopup>`
    ${presets.base}
    ${presets.size}
`;
