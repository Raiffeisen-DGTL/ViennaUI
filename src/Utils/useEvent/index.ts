import { MutableRefObject, SyntheticEvent, useEffect, useRef } from 'react';

export function useEvent<T extends HTMLElement, E extends Event | SyntheticEvent>(
    name: string,
    callback: (e: E) => any
): [MutableRefObject<T | null>, () => void] {
    const ref = useRef<T | null>(null);
    const callbackFunc = callback as EventListener;

    useEffect(() => {
        const target = ref.current;

        target?.addEventListener(name, callbackFunc);
        return () => target?.removeEventListener(name, callbackFunc);
    }, [ref.current, name, callback]);

    return [ref, () => ref.current?.dispatchEvent(new Event(name))];
}
