import styled, { css } from 'styled-components';
import { getPresets } from 'vienna.ui-primitives';

const presets = getPresets('stepper.base', {
    orientation: 'orientation',
});

const line = getPresets('stepper.line', {
    orientation: 'orientation',
});

const progress = getPresets('stepper.progress', {
    base: null,
    orientation: 'orientation',
});

const PROGRESS_STEP_LENGTH = 200;

export const Box = styled.div<any>`
    display: flex;
    justify-content: space-between;
    position: relative;

    ${presets.orientation}

    ${(props) =>
        !props.responsive &&
        props.childrenCount &&
        props.orientation === 'vertical' &&
        css`
            height: ${(props.childrenCount - 1) * PROGRESS_STEP_LENGTH}px;
        `}

    ${(props) =>
        !props.responsive &&
        props.childrenCount &&
        props.orientation === 'horizontal' &&
        css`
            width: ${(props.childrenCount - 1) * PROGRESS_STEP_LENGTH}px;
        `}
`;

export const Line = styled.div<any>`
    position: absolute;
    top: 0;
    left: 0;

    ${line.orientation}
`;

export const Progress = styled.div<any>`
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;

    ${(props) =>
        props.width && props.orientation === 'vertical'
            ? css`
                  height: ${props.width}%;
              `
            : css`
                  width: ${props.width}%;
              `}

    ${progress.base}
    ${progress.orientation}
`;
