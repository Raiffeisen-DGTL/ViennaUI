import styled from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';
import { Button } from '../Button';

const leftButton = getPresets('comboButton.leftButton', {
    base: null,
    design: 'design',
    focus: 'design',
    custom: null,
});

const rightButton = getPresets('comboButton.rightButton', {
    base: null,
    design: 'design',
    custom: null,
});

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const LeftButton = styled(Button)`
    ${leftButton.base};
    ${leftButton.design};
    &: hover, &: focus {
        z-index: 1;
        ${leftButton.focus};
    }
    ${leftButton.custom};
`;
export const RightButton = styled(Button)`
    ${rightButton.base};
    ${rightButton.design};
    ${rightButton.custom};
`;
