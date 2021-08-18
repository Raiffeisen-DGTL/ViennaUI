import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('table.resizer', {
    base: null,
    size: 'size',
});

export const ResizerLine = styled.div<{ size: any }>`
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
