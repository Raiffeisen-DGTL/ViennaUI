import { useEffect } from 'react';
import { useDebounce } from '../useDebounce';

export const useWindowResize = (resizeHandler): void => {
    const debouncer = useDebounce(resizeHandler, 0);

    useEffect(() => {
        window.addEventListener('resize', debouncer, false);
        return () => {
            window.removeEventListener('resize', debouncer);
        };
    }, [debouncer]);
};
