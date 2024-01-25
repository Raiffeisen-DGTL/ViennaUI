import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@fcc/react-use';
import { debounce } from '../../../Utils';

export const columnsOffsets = new Map();

export function usePinnableColumns(isPinnable) {
    const headerRef = useRef(null);

    const calcOffset = debounce(() => {
        if (!isPinnable) {
            return;
        }

        if (headerRef?.current) {
            let currentOffset = 0;

            // checked for null at line 13.
            // @ts-ignore: Object is possibly 'null'.
            const children = Array.from(headerRef.current.children);
            children.forEach((child: any) => {
                columnsOffsets.set(child.getAttribute('data-column'), currentOffset);
                currentOffset += child.offsetWidth;
            });
        }
    });

    useIsomorphicLayoutEffect(() => {
        calcOffset();
        window.addEventListener('resize', calcOffset);
        return () => {
            window.removeEventListener('resize', calcOffset);
        };
    }, [isPinnable]);

    return headerRef;
}
