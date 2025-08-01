import { useCallback, useEffect, useRef } from 'react';

// создает свежую функцию при каждом обновлении стейта, и возвращает мемоизированную ссылку для ее вызова
export const useFreshFunc = <T extends (...args: any[]) => any>(callback: T): T => {
    const link = useRef<T>(callback);

    useEffect(() => {
        link.current = callback;
    });

    return useCallback(((...args: Parameters<T>) => link.current(...args)) as T, []);
};
