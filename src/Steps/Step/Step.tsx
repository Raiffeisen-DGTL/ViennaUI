import React, { FC, ForwardedRef, forwardRef, PropsWithChildren, Ref, useState } from 'react';
import { CheckmarkIcon, CloseCancelXIcon } from 'vienna.icons';
import { Divider, Popover } from '../../index';
import { StepIcon } from './StepIcon';
import {
    ContentBox,
    DividerBox,
    HeaderAndHorizontalDividerBox,
    IconAndVerticalDividerBox,
    StepBox,
    HeaderBox,
    TextBox,
    StepHeader,
    StepText,
} from './Step.styles';
import { BoxStyled } from '../../Utils/styled';
import { Box, PropsBox } from '../../IconContainer/IconContainer.styles';

export type StepStatus = 'progress' | 'finished' | 'waiting' | 'error';

export interface StepProps extends BoxStyled<typeof Box, PropsBox> {
    size?: 's' | 'm';
    status?: StepStatus;
    index?: number;
    noDivider?: boolean;
    mode?: 'blue' | 'black';
    orientation?: 'horizontal' | 'vertical';
    header?: string;
    text?: string;
    isLast?: boolean;
    enableAnimation?: boolean;
    truncateHeader?: boolean;
    disabled?: boolean;
    /* Блокировка перехода по шагам */
    showTooltip?: boolean;
    /* Текст тултипа при статусе 'waiting' */
    tooltipText?: string;
}

function StepInternal(props: PropsWithChildren<StepProps>, ref: Ref<HTMLDivElement>) {
    const {
        size,
        index,
        noDivider,
        orientation,
        header,
        text,
        status = 'progress',
        mode,
        isLast,
        enableAnimation = false,
        truncateHeader,
        disabled = false,
        onClick,
        showTooltip = false,
        tooltipText = 'Чтобы перейти на этот шаг, нужно заполнить предыдущие',
    } = props;
    const [popoverVisible, setPopoverVisible] = useState(false);

    const getStepIcon = () => {
        const iconSize = size === 's' ? 'xs' : 's';
        return status === 'finished' ? (
            <CheckmarkIcon size={iconSize} />
        ) : status === 'error' ? (
            <CloseCancelXIcon size={iconSize} />
        ) : (
            index
        );
    };

    const getDivider = () => {
        return (
            !noDivider &&
            !isLast && (
                <DividerBox $orientation={orientation} $size={size}>
                    <Divider orientation={orientation} size={size} />
                </DividerBox>
            )
        );
    };
    const allowHover = !disabled;
    const contentForTooltip = tooltipText ? tooltipText : header;
    const tooltipDisabled = !truncateHeader && !showTooltip;
    const handleMouseOver = () => {
        setPopoverVisible(true);
    };
    const handleMouseOut = () => {
        setPopoverVisible(false);
    };

    return (
        <StepBox
            data-testid='step'
            ref={ref}
            $index={index}
            $isLast={isLast}
            $orientation={orientation}
            $noDivider={noDivider}
            $size={size}
            $disabled={disabled}
            onClick={onClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <IconAndVerticalDividerBox $orientation={orientation} $noDivider={noDivider}>
                <StepIcon
                    enableAnimation={enableAnimation}
                    mode={mode}
                    stepStatus={status}
                    size={size}
                    allowHover={allowHover}>
                    {getStepIcon()}
                </StepIcon>
                {orientation === 'vertical' && getDivider()}
            </IconAndVerticalDividerBox>
            <ContentBox $orientation={orientation} $size={size}>
                <HeaderAndHorizontalDividerBox $noDivider={noDivider} $isLast={isLast} $size={size}>
                    <Popover
                        showPopoverWithArrow
                        visible={popoverVisible}
                        placement='top-start'
                        design='dark'
                        noClose
                        disabled={tooltipDisabled}
                        content={contentForTooltip}>
                        <HeaderBox
                            $truncateHeader={truncateHeader}
                            $orientation={orientation}
                            $stepStatus={status}
                            $allowHover={allowHover}>
                            <StepHeader
                                data-testid='step-header'
                                $truncateHeader={truncateHeader}
                                $size={size}
                                $stepStatus={status}>
                                {header}
                            </StepHeader>
                        </HeaderBox>
                    </Popover>

                    {orientation === 'horizontal' && getDivider()}
                </HeaderAndHorizontalDividerBox>
                <TextBox $orientation={orientation} $allowHover={allowHover}>
                    <StepText $size={size} $stepStatus={status}>
                        {text}
                    </StepText>
                </TextBox>
            </ContentBox>
        </StepBox>
    );
}
export const Step = forwardRef(StepInternal) as (
    props: StepProps & { ref?: ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof StepInternal>;
(Step as FC).displayName = 'Step';
