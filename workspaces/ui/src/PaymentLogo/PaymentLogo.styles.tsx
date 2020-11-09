import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('paymentlogo', {
    base: null,
    size: 'size',
    design: 'design',
    custom: null,
});

export const Box = styled.div<any>`
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

    ${(props) =>
        props.clickable &&
        css`
            cursor: pointer;
        `}

    ${presets.custom}
`;
