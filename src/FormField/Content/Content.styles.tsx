import styled from 'styled-components';
import { formField } from 'vienna.ui-theme';
import { getPresets } from '../../Utils/styling';

const content = getPresets(
    formField.content,
    'formField.content'
)({
    base: null,
    custom: null,
});

export const Box = styled.div`
    ${content.base}
    ${content.custom}
`;
