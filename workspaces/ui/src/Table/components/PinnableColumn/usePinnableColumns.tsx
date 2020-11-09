import { useRef, useLayoutEffect } from 'react';

export const columnsOffsets = new Map();

export function usePinnableColumns(isPinnable) {
    const headerRef = useRef(null);

    useLayoutEffect(() => {
        if (!isPinnable) {
            return;
        }

        if (headerRef && headerRef.current) {
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

    return headerRef;
}
