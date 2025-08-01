import styled, { css } from 'styled-components';
import { paymentlogo } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    paymentlogo,
    'paymentlogo'
)({
    base: null,
    size: '$size',
    design: '$design',
    custom: null,
});

export interface PropsBox {
    $design?: 'wildsand' | 'whitebox' | 'ghost';
    $size?: 'xs' | 's' | 'm' | 'l' | 'xl';
    $clickable?: boolean;
}
export const Box = styled.div<PropsBox>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    white-space: nowrap;
    user-select: none;
    appearance: none;
    outline: 0;
    position: relative;

    ${presets.base}
    ${presets.size}
    ${presets.design}

    ${({ $clickable }) =>
        $clickable &&
        css`
            cursor: pointer;
        `}

    ${presets.custom}
`;
