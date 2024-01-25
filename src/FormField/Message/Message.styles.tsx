import styled from 'styled-components';
import { getPresets } from '../../Utils/styling';
import { FormFieldSize } from '../FormField';

const presets = getPresets('formField.message', {
    base: null,
    design: '$color',
    custom: null,
    align: '$align',
    size: '$size',
});

export interface PropsBox {
    $color?: 'warning' | 'critical';
    $align?: 'left' | 'center' | 'right';
    $size?: FormFieldSize;
}
export const Box = styled.div<PropsBox>`
    ${presets.base}
    ${presets.design}
    ${presets.align}
    ${presets.custom}
    ${presets.size}
`;
