import styled from 'styled-components';
import { getPresets } from '../Utils/styling';

const toolbar = getPresets('toolbar', {
    base: null,
    design: '$design',
    custom: null,
});

export interface PropsBox {
    $design?: 'light' | 'dark';
}
export const Box = styled.div<PropsBox>`
    outline: none;
    box-sizing: border-box;
    ${toolbar.base}
    ${toolbar.design}
    ${toolbar.custom}
`;
