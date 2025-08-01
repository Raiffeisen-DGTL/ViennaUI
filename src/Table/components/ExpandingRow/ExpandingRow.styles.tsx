import styled, { css } from 'styled-components';
import { table } from 'vienna.ui-theme';
import { Td } from '../TableBody/TableBody.styles';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets(
    table.expander,
    'table.expander'
)({
    cell: null,
    hover: null,
    content: null,
    contentBase: null,
});

export const ExpanderCell = styled(Td)`
    ${presets.cell}

    &:hover {
        ${presets.hover}
    }
`;

export const ExpanderIcon = styled.span`
    display: flex;
    justify-content: center;
    cursor: pointer;
`;

interface PropsExpandedContent {
    $hasPadding?: boolean;
}
export const ExpandedContent = styled(Td)<PropsExpandedContent>`
    ${presets.contentBase}
    ${({ $hasPadding }) =>
        $hasPadding &&
        css`
            ${presets.content}
        `}
`;
