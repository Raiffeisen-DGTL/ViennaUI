import { useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'vienna.react-use';

type UseLockBodyOutput = [boolean, (locked: boolean) => void];

export function useLockBody(initialLocked = false): UseLockBodyOutput {
    const [locked, setLocked] = useState(initialLocked);

    // Do the side effect before render
    useIsomorphicLayoutEffect(() => {
        if (!locked) {
            return;
        }

        const { body } = document;

        if (!body || !body.style) return;

        // Save initial body style
        const originalOverflow = document.body.style.overflow;

        // Lock body scroll
        document.body.style.overflow = 'hidden';

        // eslint-disable-next-line consistent-return
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [locked]);

    // Update state if initialValue changes
    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialLocked]);

    return [locked, setLocked];
}
