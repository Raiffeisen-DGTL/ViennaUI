import { useCallback, useRef } from 'react';

type Debounce = (...args: any[]) => void;
export const useDebounce = (func, delay = 0): Debounce & { despose: () => void } => {
    const timer = useRef(0);

    const result: any = useCallback(
        (...args: any[]) => {
            if (!timer.current) {
                timer.current = setTimeout(() => {
                    timer.current = 0;
                    let callback;
                    if (typeof args[args.length - 1] === 'function') {
                        callback = args.pop();
                    }
                    func(...args);
                    if (callback) {
                        callback();
                    }
                }, delay);
            }
        },
        [timer, delay, func]
    );

    // Принудительное отключение таймера
    const despose = () => timer.current && clearTimeout(timer.current);

    // eslint-disable-next-line dot-notation
    result.despose = despose;

    return result;
};
