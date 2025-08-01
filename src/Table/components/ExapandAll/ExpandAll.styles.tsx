import { getPresets } from '@/Utils/styling';
import { table } from 'vienna.ui-theme';
import { PropsTh, Th } from '@/Table/components/TableHeader/TableHeader.styles';
import styled, { css } from 'styled-components';
import { color } from 'vienna.tokens';

const presets = getPresets(
    table.expander,
    'table.expander'
)({
    hover: null,
});

interface ExpanderAllCellProps extends PropsTh {
    $hasInteractive?: boolean;
}
export const ExpandAllCell = styled(Th)<ExpanderAllCellProps>`
    color: ${color.primary.brand.primary};
    ${({ $hasInteractive }) =>
        $hasInteractive &&
        css`
            cursor: pointer;
        `}

    &:hover {
        ${presets.hover}
    }
`;
