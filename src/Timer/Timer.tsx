import { FC, ReactNode, useState } from 'react';
import { useInterval } from './useInterval';

export interface TimerProps {
    children?: ReactNode;
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

export const Timer: FC<TimerProps> = ({
    children,
    id,
    stop,
    delay = 1000,
    countdown,
    allowNegatives,
    onChange,
    onStop,
    start = 0,
    step = 1,
}: TimerProps) => {
    const [count, setCount] = useState(start);

    const stopNow = (countdown && !allowNegatives && count === 0) || (stop && stop === count);

    useInterval(
        () => {
            setCount(countdown ? (c) => c - step : (c) => c + step);
            onChange?.(count, id);
        },
        stopNow ? undefined : delay
    );

    if (stopNow && onStop) {
        onStop(count, id);
    }

    // @ts-ignore
    return children && typeof children === 'function' ? children(count, id) : count;
};

Timer.displayName = 'Timer';
