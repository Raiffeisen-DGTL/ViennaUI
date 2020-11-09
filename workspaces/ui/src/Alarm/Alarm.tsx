import React, { HTMLAttributes } from 'react';
import { Box } from './Alarm.styles';

export interface AlarmProps extends HTMLAttributes<HTMLDivElement> {
    design?: 'critical' | 'warning' | 'success' | 'accent' | 'neutral' | 'disabled';
    position?: 'relative' | 'absolute';
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}

export const Alarm: React.FC<AlarmProps> = (props): JSX.Element => {
    return <Box {...props} />;
};

Alarm.displayName = 'Alarm';
Alarm.defaultProps = {
    design: 'neutral',
    position: 'relative',
};

export default Alarm;
