import styled from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets } from '../../../Utils/styling';
import { TableSize } from '../../types';

const presets = getPresets(
    table.resizer,
    'table.resizer'
)({
    base: null,
    size: '$size',
});

interface PropsResizerLine {
    $size?: TableSize;
}
export const ResizerLine = styled.div<PropsResizerLine>`
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;

    ${presets.base}
    ${presets.size}

    &:hover {
        opacity: 1;
    }
`;
