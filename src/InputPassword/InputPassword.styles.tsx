import styled, { css } from 'styled-components';
import { inputPassword } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    inputPassword,
    'inputPassword'
)({
    base: null,
    hover: null,
    custom: null,
});

interface PropsIconWrapper {
    $visible: boolean;
}
export const IconWrapper = styled.div<PropsIconWrapper>`
    display: flex;
    ${presets.base}
    ${({ $visible }) =>
        $visible &&
        css`
            ${presets.hover}
        `}

    &:hover {
        ${presets.hover}
    }

    ${presets.custom}
`;
