import { useEffect } from 'react';
import { useCacheCallback } from '@fcc/react-use';

export function useInterval(callback: () => void, delay?: number) {
    const cached = useCacheCallback(callback);

    // Set up the interval.
    useEffect(() => {
        if (delay) {
            const id = setInterval(() => cached(), delay);
            return () => clearInterval(id);
        }

        return undefined;
    }, [cached, delay]);
}
