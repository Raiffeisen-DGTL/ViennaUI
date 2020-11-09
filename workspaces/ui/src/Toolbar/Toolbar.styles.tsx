import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const toolbar = getPresets('toolbar', {
    base: null,
    design: 'design',
    custom: null,
});

export const Box = styled.div<{ design?: 'light' | 'dark' }>`
    outline: none;
    box-sizing: border-box;
    ${toolbar.base}
    ${toolbar.design}
    ${toolbar.custom}
`;
