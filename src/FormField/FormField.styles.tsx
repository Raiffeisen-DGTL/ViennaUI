import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';

const presets = getPresets('formField.container', {
    inline: null,
    custom: null,
});

export interface PropsBox {
    $inline?: boolean;
}
export const Box = styled.div<PropsBox>`
    ${({ $inline }) =>
        $inline &&
        css`
            ${presets.inline}
        `};

    ${presets.custom}
`;
