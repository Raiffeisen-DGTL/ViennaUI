import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('pagination', {
    gap: 'size',
});

export const Box = styled.div<any>`
    display: inline-flex;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
    vertical-align: middle;
    width: 100%;

    ${({ align }) =>
        align &&
        css`
            justify-content: ${align};
        `}

    ${presets.gap}
`;
