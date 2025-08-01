import styled, { css } from 'styled-components';
import { formField } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const container = getPresets(
    formField.container,
    'formField.container'
)({
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
            ${container.inline}
        `};

    ${container.custom}
`;
