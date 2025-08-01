import styled, { css } from 'styled-components';
import { table } from 'vienna.ui-theme';
import { color } from 'vienna.tokens';
import { getPresets } from '../../../Utils/styling';
import { Row } from '../TableBody/TableBody.styles';
import { IconContainer } from '../../../IconContainer';

interface IconWrapperProps {
    $disabled?: boolean;
}

interface IconProps extends IconWrapperProps {
    $visible: boolean;
    $loading?: boolean;
}

const presets = getPresets(
    table.actionIcon,
    'table.actionIcon'
)({
    base: null,
    hover: null,
});

export const WrapperIcon = styled.div<IconWrapperProps>`
    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `};
`;

export const Icon = styled(IconContainer)<IconProps>`
    ${({ color }) =>
        color
            ? css`
                  cursor: pointer;
              `
            : presets.base}
    ${({ $visible }) =>
        $visible
            ? css`
                  visibility: visible;
              `
            : css`
                  visibility: hidden;
              `};
    ${({ $disabled }) =>
        $disabled &&
        css`
            background-color: ${color.primary.seattle.c30};
            color: ${color.primary.seattle.c60};
            pointer-events: none;
        `};

    ${({ $loading }) =>
        $loading &&
        css`
            background-color: ${color.primary.seattle.c30};
            pointer-events: none;
        `};
    ${({ $loading }) =>
        $loading &&
        css`
            &:hover {
                background-color: ${color.primary.seattle.c30};
                cursor: not-allowed;
            }
        `};
    ${Row}:hover & {
        visibility: visible;
    }
`;
