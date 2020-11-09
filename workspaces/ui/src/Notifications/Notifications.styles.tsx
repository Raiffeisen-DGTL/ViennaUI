import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('notifications', {
    actionsGap: null,
    align: 'align',
    valign: 'valign',
});

export const Box = styled.div<any>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 99999999;
    margin: 12px 0;
    transition: height 0.5s ease;

    ${({ valign }) =>
        valign === 'top' &&
        css`
            flex-direction: column-reverse;
        `}

    ${presets.align}
    ${presets.valign}
`;
