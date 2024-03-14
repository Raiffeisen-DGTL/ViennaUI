import styled from 'styled-components';
import { getPresets } from '../Utils/styling';

const presets = getPresets('feedbackSection', {
    form: null,
    descriptionWrapper: null,
});

export const Form = styled.form`
    ${presets.form}
`;

export const DescriptionWrapper = styled.div`
    ${presets.descriptionWrapper}
`;
