import { useState, useRef, useEffect } from 'react';

export function useStateCallback(initialState) {
    const [state, setState] = useState(initialState);
    const cbRef: any = useRef(null);

    const setStateCallback = (state, cb) => {
        cbRef.current = cb;
        setState(state);
    };

    useEffect(() => {
        if (cbRef.current) {
            cbRef.current(state);
            cbRef.current = null;
        }
    }, [state]);

    return [state, setStateCallback];
}
