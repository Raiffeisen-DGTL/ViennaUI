import styled from 'styled-components';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets('table.resizer', {
    base: null,
    size: '$size',
});

interface PropsResizerLine {
    $size?: any;
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
