import React, { PropsWithChildren } from 'react';
import { StepStatus } from './Step';
import { RoundBox } from './StepIcon.styles';
import { BoxStyled } from '../../Utils/styled';
import { Box, PropsBox } from '../../IconContainer/IconContainer.styles';

export interface StepIconProps extends BoxStyled<typeof Box, PropsBox> {
    stepStatus?: StepStatus;
    mode?: 'blue' | 'black';
    size?: 's' | 'm';
    enableAnimation?: boolean;
    allowHover?: boolean;
}

export const StepIcon = (props: PropsWithChildren<StepIconProps>) => {
    const { mode, size, stepStatus, enableAnimation, allowHover, onClick, children } = props;

    return (
        <RoundBox
            $enableAnimation={enableAnimation}
            $mode={mode}
            $size={size}
            $stepStatus={stepStatus}
            $allowHover={allowHover}
            onClick={onClick}>
            {children}
        </RoundBox>
    );
};

StepIcon.displayName = 'StepIcon';
