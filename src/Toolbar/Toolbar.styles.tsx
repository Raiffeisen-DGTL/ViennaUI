import styled from 'styled-components';
import { toolbar } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    toolbar,
    'toolbar'
)({
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
    ${presets.base}
    ${presets.design}
    ${presets.custom}
`;
