import { useEffect, useRef } from 'react';

export const usePortal = (id?: string) => {
    const createElement = () => {
        if (typeof document !== 'undefined') {
            // Checking if a document exists for SSR
            return document.createElement('div');
        }

        return null;
    };
    const rootRef = useRef(createElement());

    useEffect(() => {
        // Look for existing target dom element to append to
        const parent = (id && document.querySelector(`#${id}`)) || document.body;
        if (rootRef.current) {
            // Add the detached element to the parent
            parent.appendChild(rootRef.current);
        }

        // This function is run on unmount
        return () => {
            rootRef.current?.remove();
        };
    }, [id]);

    return rootRef.current;
};

export default usePortal;
