import styled from 'styled-components';
import { steps } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const stepsOrientation = getPresets(
    steps.base,
    'steps'
)({
    orientation: '$orientation',
});

interface StepsBoxProps {
    $orientation?: 'horizontal' | 'vertical';
}

export const StepsBox = styled.div<StepsBoxProps>`
    display: flex;
    ${stepsOrientation.orientation}
`;
