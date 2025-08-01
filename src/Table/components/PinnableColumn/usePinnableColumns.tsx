import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'vienna.react-use';
import { debounce } from '../../../Utils';
import { getColumnsWidthQuery } from '../../utils';
import { useTableService, useTableState } from '../Context';

export function usePinnableColumns(isPinnable?: boolean) {
    const { columns, getData, columnsOffsets } = useTableService();
    const pinnableColumnsCount = columns().filter((item) => item.pinned).length;
    const headerRef = useRef<HTMLTableRowElement>(null);
    const map = columnsOffsets();
    const state = useTableState();
    const data = getData();
    const columnsWidthQuery = getColumnsWidthQuery(state.columns?.list);

    const calcOffset = debounce(() => {
        if (!isPinnable) {
            return;
        }

        if (headerRef?.current) {
            let currentOffset = 0;

            const children = Array.from(headerRef.current.children) as HTMLTableHeaderCellElement[];
            children.forEach((child) => {
                const attr = child.getAttribute('data-column');
                if (attr) {
                    map.set(attr, currentOffset);
                    currentOffset += child.offsetWidth;
                }
            });
        }
    });

    useIsomorphicLayoutEffect(() => {
        calcOffset();
    }, [pinnableColumnsCount, data]);

    useIsomorphicLayoutEffect(() => {
        calcOffset();
    }, [pinnableColumnsCount, data]);

    useIsomorphicLayoutEffect(() => {
        calcOffset();
        window.addEventListener('resize', calcOffset);
        return () => {
            window.removeEventListener('resize', calcOffset);
        };
    }, [isPinnable, columnsWidthQuery]);

    return headerRef;
}
