import { Ref } from 'react';

export function composeRef<T>(...refs: (Ref<T> | undefined)[]): Ref<T> {
    const _refs = refs.filter((ref) => ref !== undefined);

    if (refs.length <= 1) {
        return _refs[0];
    }

    return (node: T) => {
        _refs.forEach((ref) => {
            if (typeof ref === 'function') {
                ref(node);
            } else if (typeof ref === 'object' && ref && 'current' in ref) {
                (ref as unknown as Record<string, T>).current = node;
            }
        });
    };
}
