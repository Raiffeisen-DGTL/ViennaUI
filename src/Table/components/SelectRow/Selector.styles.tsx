import styled, { css } from 'styled-components';
import { table } from 'vienna.ui-theme';
import { getPresets } from '../../../Utils/styling';

const presets = getPresets(
    table,
    'table'
)({
    selector: null,
});

const selector = getPresets(
    table.selector,
    'table.selector'
)({
    pointed: null,
    disabledCheckbox: null,
});
export interface PropsBox {
    $pointed?: boolean;
}

export const Box = styled.div<PropsBox>`
    display: flex;
    justify-content: center;
    ${presets.selector}

    ${({ $pointed }) =>
        $pointed &&
        css`
            ${selector.pointed}
        `}
`;
