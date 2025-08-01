import styled, { css } from 'styled-components';
import { steps } from 'vienna.ui-theme';
import { getPresets } from '../../Utils/styling';
import { StepStatus } from './Step';

const step = getPresets(
    steps.step,
    'steps.step'
)({
    base: null,
    orientation: '$orientation',
    noDivider: null,
    iconAndVerticalDividerBox: null,
    contentBox: null,
    headerAndHorizontalDividerBox: '$size',
    textBox: null,
    headerBox: null,
    dividerBox: null,
    first: null,
    last: null,
    stepHeader: null,
    stepText: null,
});

const stepIconAndVerticalDividerBox = getPresets(
    steps.step.iconAndVerticalDividerBox,
    'steps.step.iconAndVerticalDividerBox'
)({
    base: null,
    orientation: '$orientation',
});

const contentBox = getPresets(
    steps.step.contentBox,
    'steps.step.contentBox'
)({
    base: null,
    vertical: '$size',
    horizontal: '$size',
});

const headerAndHorizontalDividerBox = getPresets(
    steps.step.headerAndHorizontalDividerBox,
    'steps.step.headerAndHorizontalDividerBox'
)({
    base: null,
    size: '$size',
    noDivider: '$noDivider',
});

const stepHeader = getPresets(
    steps.step.stepHeader,
    'steps.step.stepHeader'
)({
    base: null,
    hover: '$stepStatus',
    status: '$stepStatus',
    size: '$size',
    truncateHeader: null,
});

const stepText = getPresets(
    steps.step.stepText,
    'steps.step.stepText'
)({
    base: null,
    hover: null,
    status: '$stepStatus',
});

const headerBox = getPresets(
    steps.step.headerBox,
    'steps.step.headerBox'
)({
    base: null,
    orientation: '$orientation',
});

const headerBoxOrientation = getPresets(
    steps.step.headerBox.orientation,
    'steps.step.headerBox.orientation'
)({
    vertical: '$size',
});

const textBox = getPresets(
    steps.step.textBox,
    'steps.step.textBox'
)({
    base: null,
    orientation: '$orientation',
});

const dividerBoxOrientation = getPresets(
    steps.step.dividerBox.orientation,
    'steps.step.dividerBox.orientation'
)({
    horizontal: '$size',
    vertical: '$size',
});

interface StepBoxProps {
    $isLast?: boolean;
    $index?: number;
    $stepStatus?: StepStatus;
    $orientation?: 'horizontal' | 'vertical';
    $noDivider?: boolean;
    $size?: 's' | 'm';
    $truncateHeader?: boolean;
    $allowHover?: boolean;
    $disabled?: boolean;
}

interface StepHeaderProps {
    $stepStatus: StepStatus;
    $size?: 's' | 'm';
    $truncateHeader?: boolean;
}
interface StepTextProps {
    $stepStatus: StepStatus;
    $size?: 's' | 'm';
}

export const StepBox = styled.div<StepBoxProps>`
    display: flex;
    position: relative;
    cursor: pointer;
    ${step.base}
    ${({ $isLast }) =>
        $isLast &&
        css`
            ${step.last}
        `}
    ${({ $orientation }) =>
        $orientation === 'vertical' &&
        css`
            ${step.orientation}
        `}

    ${({ $noDivider, $orientation }) =>
        !$noDivider &&
        $orientation === 'horizontal' &&
        css`
            ${step.orientation}
        `}
    ${({ $isLast, $noDivider, $orientation }) =>
        $isLast &&
        !$noDivider &&
        $orientation === 'horizontal' &&
        css`
            width: min-content;
        `}
    ${({ $noDivider, $orientation }) =>
        $noDivider &&
        $orientation === 'horizontal' &&
        css`
            ${step.noDivider}
        `}
    ${({ $index }) =>
        $index === 1 &&
        css`
            ${step.first}
        `}
    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `}
`;

export const IconAndVerticalDividerBox = styled.div<StepBoxProps>`
    ${stepIconAndVerticalDividerBox.base}
    ${stepIconAndVerticalDividerBox.orientation}
`;

export const ContentBox = styled.div<StepBoxProps>`
    ${contentBox.base}
    ${({ $orientation }) =>
        $orientation === 'vertical' &&
        css`
            ${contentBox.vertical}
        `}
    ${({ $orientation }) =>
        $orientation === 'horizontal' &&
        css`
            ${contentBox.horizontal}
        `}
`;

export const HeaderAndHorizontalDividerBox = styled.div<StepBoxProps>`
    display: flex;
    ${headerAndHorizontalDividerBox.base}
    ${headerAndHorizontalDividerBox.size}
    ${headerAndHorizontalDividerBox.noDivider}
    ${({ $isLast, $noDivider }) =>
        $isLast &&
        !$noDivider &&
        css`
            width: auto;
        `}
`;
export const StepHeader = styled.span<StepHeaderProps>`
    ${stepHeader.base}
    ${stepHeader.size}
    ${stepHeader.status}
`;

export const HeaderBox = styled.div<StepBoxProps>`
    display: flex;

    ${StepBox}:hover & ${StepHeader} {
        ${({ $allowHover }) =>
            $allowHover &&
            css`
                ${stepHeader.hover}
            `};
    }

    ${({ $truncateHeader }) =>
        $truncateHeader &&
        css`
           ${stepHeader.truncateHeader}
        }
        `}

    ${headerBox.base}

    ${({ $orientation }) =>
        $orientation === 'vertical' &&
        css`
            ${headerBoxOrientation.vertical}
        `}
`;

export const StepText = styled.span<StepTextProps>`
    ${stepText.base}
    ${stepText.status}
`;

export const TextBox = styled.div<StepBoxProps>`
    display: flex;
    ${textBox.base}
    ${textBox.orientation}
    ${StepBox}:focus & span {
        ${stepText.hover}
    }

    ${StepBox}:hover & ${StepText} {
        ${({ $allowHover }) =>
            $allowHover &&
            css`
                ${stepText.hover}
            `};
    }
`;

export const DividerBox = styled.div<StepBoxProps>`
    ${({ $orientation }) =>
        $orientation === 'vertical' &&
        css`
            ${dividerBoxOrientation.vertical};
            z-index: 0;
        `}
    ${({ $orientation }) =>
        $orientation === 'horizontal' &&
        css`
            ${dividerBoxOrientation.horizontal}
        `}
`;
