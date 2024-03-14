import { useState } from 'react';

export function useObjectState<T extends object>(defaultValue: T) {
    const [state, setState] = useState<T>(defaultValue);
    const setPartialState = (value: Partial<T>) => {
        setState((prev) => ({
            ...prev,
            ...value,
        }));
    };
    return {
        state,
        setState,
        setPartialState,
    };
}
