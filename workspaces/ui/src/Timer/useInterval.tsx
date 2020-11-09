/** © Dan Abramov https://overreacted.io/making-setinterval-declarative-with-react-hooks/ */
import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
    const savedCallback = useRef(callback);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }

        return undefined;
    }, [delay]);
}

export default useInterval;
