import styled, { css } from 'styled-components';
import { pagination } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    pagination,
    'pagination'
)({
    gap: '$size',
});

export interface PropsBox {
    $size?: 'm' | 'l' | 's';
    $align?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
}
export const Box = styled.div<PropsBox>`
    display: inline-flex;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
    vertical-align: middle;
    width: 100%;

    ${({ $align }) =>
        $align &&
        css`
            justify-content: ${$align};
        `}

    ${presets.gap}
`;
