import React, { useState } from 'react';
import { useInterval } from './useInterval';

interface TimerProps {
    children?: React.ReactNode;
    id?: string;
    start?: number;
    stop?: number;
    delay?: number;
    step?: number;
    countdown?: boolean;
    allowNegatives?: boolean;
    onChange?: (count: number, id?: string) => void;
    onStop?: (count: number, id?: string) => void;
}

export const Timer: React.FC<TimerProps> = (props: TimerProps) => {
    const { children, id, stop, delay, countdown, allowNegatives, onChange, onStop, start = 0, step = 1 } = props;
    const [count, setCount] = useState(start);

    const stopNow = (countdown && !allowNegatives && count === 0) || (stop && stop === count);

    useInterval(
        () => {
            setCount(countdown ? (c) => c - step : (c) => c + step);

            if (onChange) {
                onChange(count, id);
            }
        },
        stopNow ? null : delay
    );

    if (stopNow && onStop) {
        onStop(count, id);
    }

    return children && typeof children === 'function' ? children(count, id) : count;
};

Timer.defaultProps = {
    delay: 1000,
    start: 0,
    step: 1,
};

Timer.displayName = 'Timer';
export default Timer;
