import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';

const inputPassword = getPresets('inputPassword', {
    base: null,
    hover: null,
    custom: null,
});

interface PropsIconWrapper {
    $visible: boolean;
}
export const IconWrapper = styled.div<PropsIconWrapper>`
    display: flex;
    ${inputPassword.base}
    ${({ $visible }) =>
        $visible &&
        css`
            ${inputPassword.hover}
        `}

    &:hover {
        ${inputPassword.hover}
    }

    ${inputPassword.custom}
`;
