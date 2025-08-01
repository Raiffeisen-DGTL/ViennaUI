import styled from 'styled-components';
import { comboButton } from 'vienna.ui-theme';
import { Button, ButtonProps } from '../Button';
import { getPresets } from '../Utils/styling';

const leftButton = getPresets(
    comboButton.leftButton,
    'comboButton.leftButton'
)({
    base: null,
    design: '$design',
    focus: '$design',
    custom: null,
});

const rightButton = getPresets(
    comboButton.rightButton,
    'comboButton.rightButton'
)({
    base: null,
    design: '$design',
    custom: null,
});

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

interface PropsButton {
    $design?: ButtonProps['design'];
}

export const LeftButton = styled(Button)<PropsButton>`
    ${leftButton.base};
    ${leftButton.design};
    &:hover,
    &:focus {
        z-index: 1;
        ${leftButton.focus};
    }
    ${leftButton.custom};
`;

export const RightButton = styled(Button)<PropsButton>`
    ${rightButton.base};
    ${rightButton.design};
    ${rightButton.custom};
`;
