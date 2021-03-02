import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const tooltip = getPresets('tooltip.wrapper', {
    custom: null,
});

export const Box = styled.div<any>`
    display: inline-block;
    ${({ inline }) =>
        !inline &&
        css`
            display: block;
        `}
    ${({ truncate }) =>
        truncate &&
        css`
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        `}
    ${tooltip.custom};
`;
