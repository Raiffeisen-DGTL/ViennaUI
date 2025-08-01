import React, { useRef, useEffect } from 'react';
import { Box } from './Pinner.styles';
import { debounce } from '../../../Utils';
import { useTableService, useTableState } from '../Context';
import { getColumnsWidthQuery } from '../../utils';

export const Pinner = () => {
    const parentRef = useRef<HTMLElement | null>(null);
    const { columnsOffsets } = useTableService();
    const state = useTableState();
    const columnsWidthQuery = getColumnsWidthQuery(state.columns?.list);

    const addedOffset = debounce(() => {
        const parent = parentRef.current;
        if (parent) {
            const columnId = parent.getAttribute('data-column');
            const offset = columnsOffsets().get(columnId ?? '');

            if (offset !== undefined) {
                parent.style.left = `${offset}px`;
            }
        }
    });

    useEffect(() => {
        addedOffset();
    }, [columnsWidthQuery]);

    useEffect(() => {
        addedOffset();
        window.addEventListener('resize', addedOffset);
        return () => {
            window.removeEventListener('resize', addedOffset);
        };
    }, []);

    useEffect(
        () => () => {
            const parent = parentRef.current;
            const columnId = parent?.getAttribute('data-column');

            if (parent && columnId) {
                parent.style.left = '';
            }
        },
        []
    );

    return (
        <Box
            data-role='pinner'
            ref={(element: HTMLDivElement | null) => {
                if (element) {
                    parentRef.current = element.parentElement;
                }
            }}
        />
    );
};
