import { useEffect, useRef } from 'react';

// Fires callback on conditions update, except the first (mounting) effect
export const useUpdateEffect = (callback: () => any, conditions?: any[]) => {
    const hasMountedRef = useRef(false);

    if (typeof conditions !== 'undefined' && !Array.isArray(conditions)) {
        conditions = [conditions];
    }
    useEffect(() => {
        if (hasMountedRef.current) {
            callback();
        }
        hasMountedRef.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, conditions);
};
