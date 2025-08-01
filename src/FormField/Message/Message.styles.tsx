import styled from 'styled-components';
import { formField } from 'vienna.ui-theme';
import { getPresets } from '../../Utils/styling';
import { FormFieldSize } from '../FormField';

const message = getPresets(
    formField.message,
    'formField.message'
)({
    base: null,
    design: '$color',
    custom: null,
    align: '$align',
    size: '$size',
});

export interface PropsBox {
    $color?: 'warning' | 'critical' | 'disabled';
    $align?: 'left' | 'center' | 'right';
    $size?: FormFieldSize;
}
export const Box = styled.div<PropsBox>`
    ${message.base}
    ${message.design}
    ${message.align}
    ${message.custom}
    ${message.size}
`;
