import styled, { css } from 'styled-components';
import { getPresets } from '../Utils/styling';
import { Orientation } from './Stepper';

const presets = getPresets('stepper.base', {
    orientation: '$orientation',
});

const line = getPresets('stepper.line', {
    orientation: '$orientation',
});

const progress = getPresets('stepper.progress', {
    base: null,
    orientation: '$orientation',
});

const PROGRESS_STEP_LENGTH = 200;

interface PropsBox {
    $orientation?: Orientation;
    $responsive?: boolean;
    $childrenCount?: number;
    $inverted?: boolean;
}
export const Box = styled.div<PropsBox>`
    display: flex;
    justify-content: space-between;
    position: relative;

    ${presets.orientation}

    ${({ $responsive, $childrenCount, $orientation }) =>
        !$responsive &&
        $childrenCount &&
        $orientation === 'vertical' &&
        css`
            height: ${($childrenCount - 1) * PROGRESS_STEP_LENGTH}px;
        `}

    ${({ $responsive, $childrenCount, $orientation }) =>
        !$responsive &&
        $childrenCount &&
        $orientation === 'horizontal' &&
        css`
            width: ${($childrenCount - 1) * PROGRESS_STEP_LENGTH}px;
        `}
`;

interface PropsLine {
    $orientation?: Orientation;
}
export const Line = styled.div<PropsLine>`
    position: absolute;
    top: 0;
    left: 0;

    ${line.orientation}
`;

interface PropsProgress {
    $orientation?: Orientation;
    $width?: number;
    $inverted?: boolean;
}
export const Progress = styled.div<PropsProgress>`
    position: absolute;
    transition: 0.3s;

    ${({ $orientation, $width }) =>
        $width && $orientation === 'vertical'
            ? css`
                  height: ${$width}%;
              `
            : css`
                  width: ${$width}%;
              `}

    ${({ $inverted = false, $orientation }) =>
        $inverted && $orientation === 'horizontal'
            ? css`
                  right: 0;
              `
            : css`
                  left: 0;
              `}

    ${({ $inverted = false, $orientation }) =>
        $inverted && $orientation === 'vertical'
            ? css`
                  bottom: 0;
              `
            : css`
                  top: 0;
              `}

    ${progress.base}
    ${progress.orientation}
`;
