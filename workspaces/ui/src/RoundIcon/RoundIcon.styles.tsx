import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('roundIcon', {
    base: null,
    color: 'color',
    size: 'size',
    custom: null,
});

export const Box = styled.div<any>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    ${presets.base}
    ${presets.size}
    ${presets.color}
    ${presets.custom}

    ${(props) =>
        props.clickable &&
        css`
            cursor: pointer;
        `}
`;
