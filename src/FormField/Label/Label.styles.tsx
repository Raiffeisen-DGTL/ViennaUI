import styled, { css } from 'styled-components';
import { getPresets } from '../../Utils/styling';
import { FormFieldSize } from '../FormField';

const star = getPresets('formField.star', {
    base: null,
    custom: null,
});

const box = getPresets('formField.label', {
    base: null,
    custom: null,
    size: '$size',
});

export interface PropsBox {
    $size?: FormFieldSize;
    $required?: boolean;
}
export const Box = styled.label<PropsBox>`
    ${box.base}
    ${box.custom}
    ${box.size}

    ${({ $required }) =>
        $required &&
        css`
            &::after {
                content: '*';
                ${star.base}
                ${star.custom}
            }
        `}
`;
