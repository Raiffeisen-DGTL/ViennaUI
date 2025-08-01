import styled, { css } from 'styled-components';
import { steps } from 'vienna.ui-theme';
import { color } from 'vienna.tokens';
import { getPresets } from '../../Utils/styling';
import { StepBox } from './Step.styles';
import { StepStatus } from './Step';

const stepIcon = getPresets(
    steps.stepIcon,
    'steps.stepIcon'
)({
    status: '$stepStatus',
    hover: '$stepStatus',
    size: '$size',
});

const stepIconStatus = getPresets(
    steps.stepIcon.status,
    'steps.stepIcon.status'
)({
    progressBlack: null,
    progressBlue: null,
    progressBlueWithBorder: null,
    progressBlackWithBorder: null,
    waiting: null,
    error: null,
    finished: null,
});

const stepIconHover = getPresets(
    steps.stepIcon.hover,
    'steps.stepIcon.hover,'
)({
    progressBlack: null,
    progressBlue: null,
    progressBlueWithBorder: null,
    progressBlackWithBorder: null,
    waiting: null,
    error: null,
    finished: null,
});

interface StepIconProps {
    $size?: 's' | 'm';
    $mode?: 'blue' | 'black';
    $stepStatus?: StepStatus | 'progressBlue' | 'progressBlueWithBorder' | 'progressBlack' | 'progressBlackWithBorder';
    $enableAnimation?: boolean;
    $allowHover?: boolean;
}

export const RoundBox = styled.div<StepIconProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 50%;
    ${stepIcon.status};
    ${stepIcon.size};

    ${({ $allowHover }) =>
        $allowHover &&
        css`
            ${StepBox}:hover & {
                ${stepIcon.hover};
            }
        `}

    @keyframes pulseBlue {
        0% {
            outline-offset: -2px;
            outline: solid 2px ${color.primary.oslo.c100};
            border: solid 2px ${color.primary.oslo.c120};
        }
        50% {
            outline-offset: 5px;
            outline: solid 2px transparent;
            border: solid 2px transparent;
        }

        100% {
            outline-offset: 5px;
            outline: solid 2px transparent;
            border: solid 2px ${color.primary.oslo.c120};
        }
    }

    @keyframes pulseBlack {
        0% {
            outline-offset: -2px;
            outline: solid 2px ${color.primary.seattle.c120};
            border: solid 2px ${color.primary.brand.primary};
        }
        50% {
            outline-offset: 5px;
            outline: solid 2px transparent;
            border: solid 2px transparent;
        }

        100% {
            outline-offset: 5px;
            outline: solid 2px transparent;
            border: solid 2px ${color.primary.brand.primary};
        }
    }

    ${({ $stepStatus, $enableAnimation, $mode }) =>
        $stepStatus === 'progress' &&
        $mode === 'blue' &&
        $enableAnimation &&
        css`
            z-index: 1;
            animation: pulseBlue;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-timing-function: ease;
        `}

    ${({ $stepStatus, $enableAnimation, $mode }) =>
        $stepStatus === 'progress' &&
        $mode === 'black' &&
        $enableAnimation &&
        css`
            z-index: 1;
            animation: pulseBlack;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-timing-function: ease;
        `}
    ${({ $stepStatus, $mode }) =>
        $stepStatus === 'progress' &&
        $mode === 'blue' &&
        css`
            ${stepIconStatus.progressBlue};
        `}

    ${({ $stepStatus, $mode }) =>
        $stepStatus === 'progress' &&
        $mode === 'black' &&
        css`
            ${stepIconStatus.progressBlack};
        `}

    ${({ $stepStatus, $mode, $enableAnimation, $allowHover }) =>
        $stepStatus === 'progress' &&
        $mode === 'blue' &&
        $enableAnimation &&
        $allowHover &&
        css`
            ${stepIconStatus.progressBlueWithBorder};
            ${StepBox}:hover & {
                ${stepIconHover.progressBlueWithBorder};
            }
        `}

    ${({ $stepStatus, $mode, $enableAnimation, $allowHover }) =>
        $stepStatus === 'progress' &&
        $mode === 'black' &&
        $enableAnimation &&
        $allowHover &&
        css`
            ${stepIconStatus.progressBlackWithBorder};
            ${StepBox}:hover & {
                ${stepIconHover.progressBlackWithBorder}
            }
        `}
`;
