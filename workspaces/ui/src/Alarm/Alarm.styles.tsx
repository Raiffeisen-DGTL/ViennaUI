import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('alarm', {
    base: null,
    design: 'design',
});

export const Box = styled.div<any>`
    position: ${(props) => props.position};
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    ${presets.base}
    ${presets.design}

    ${(props) =>
        props.position === 'absolute' &&
        css`
            top: ${(props: any) => props.top || 'auto'};
            bottom: ${(props: any) => props.bottom || 'auto'};
            left: ${(props: any) => props.left || 'auto'};
            right: ${(props: any) => props.right || 'auto'};
        `}
`;
