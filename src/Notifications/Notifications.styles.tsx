import styled, { css } from 'styled-components';
import { notifications } from 'vienna.ui-theme';
import { getPresets } from '../Utils/styling';

const presets = getPresets(
    notifications,
    'notifications'
)({
    actionsGap: null,
    align: '$align',
    valign: '$valign',
});

export interface PropsBox {
    $align?: 'left' | 'center' | 'right';
    $valign?: 'top' | 'bottom';
}
export const Box = styled.div<PropsBox>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 99999999;
    margin: 12px 0;
    transition: height 0.5s ease;

    ${({ $valign }) =>
        $valign === 'top' &&
        css`
            flex-direction: column-reverse;
        `}

    ${({ $align }) =>
        $align === 'right' &&
        css`
            padding-right: 46px;
        `}

    ${presets.align}
    ${presets.valign}
`;
