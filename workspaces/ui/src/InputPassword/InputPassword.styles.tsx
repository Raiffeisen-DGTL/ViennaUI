import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const inputPassword = getPresets('inputPassword', {
    base: null,
    hover: null,
    custom: null,
});

export const IconWrapper = styled.div<{ visible: boolean }>`
    display: flex;
    ${inputPassword.base}
    ${({ visible }) =>
        visible &&
        css`
            ${inputPassword.hover}
        `}

    &:hover {
        ${inputPassword.hover}
    }

    ${inputPassword.custom}
`;
