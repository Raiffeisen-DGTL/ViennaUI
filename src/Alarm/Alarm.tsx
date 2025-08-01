import React, { forwardRef } from 'react';
import { Box, PropsBox } from './Alarm.styles';
import { BoxStyled } from '../Utils/styled';

export type AlarmDesign = 'critical' | 'warning' | 'success' | 'accent' | 'neutral' | 'disabled';

export interface AlarmProps extends BoxStyled<typeof Box, PropsBox> {
    design: PropsBox['$design'];
    position?: PropsBox['$position'];
    top?: PropsBox['$top'];
    bottom?: PropsBox['$bottom'];
    left?: PropsBox['$left'];
    right?: PropsBox['$right'];
    size?: PropsBox['$size'];
}

export const Alarm = forwardRef<HTMLDivElement, AlarmProps>(
    ({ children, design, position, top, bottom, left, right, size = 's', ...attrs }, ref) => {
        return (
            <Box
                {...attrs}
                ref={ref}
                $design={design}
                $position={position}
                $top={top}
                $bottom={bottom}
                $left={left}
                $right={right}
                $size={size}>
                {children}
            </Box>
        );
    }
);

Alarm.displayName = 'Alarm';
