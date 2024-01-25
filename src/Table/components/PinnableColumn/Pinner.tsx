import React, { useRef, useEffect } from 'react';
import { columnsOffsets } from './usePinnableColumns';
import { Box } from './Pinner.styles';
import { debounce } from '../../../Utils';

export const Pinner = () => {
    const pinnerRef = useRef(null);

    const addedOffset = debounce(() => {
        if (pinnerRef?.current) {
            // checked for null at line 9.
            // @ts-ignore: Object is possibly 'null'.
            const parent = pinnerRef.current.parentElement;
            const columnId = parent.getAttribute('data-column');
            const offset = columnsOffsets.get(columnId);

            if (offset !== undefined) {
                parent.style.left = `${offset}px`;
            }
        }
    });

    useEffect(() => {
        addedOffset();
        window.addEventListener('resize', addedOffset);
        return () => {
            window.removeEventListener('resize', addedOffset);
        };
    });

    return <Box ref={pinnerRef} />;
};
