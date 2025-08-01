import { useEffect, useRef } from 'react';
import { useTableService } from '../Context';

export const useResizableColumns = () => {
    const { setColumnWidth } = useTableService();
    const resizerRef = useRef<HTMLDivElement>(null);
    let pageX: number | null = null;
    let curCol: HTMLElement | null = null;
    let curColWidth: number | null = null;
    let tableHeight: number | null = null;

    const onMouseMove = (e: MouseEvent) => {
        e.preventDefault();
        if (curCol) {
            const diffX: number = e.pageX - (pageX || 0);
            const newWidth: number = (curColWidth || 0) + diffX;

            setColumnWidth(curCol.dataset.column || '', `${newWidth}px`);

            curCol.style.width = `${newWidth}px`;
        }
    };

    const onMouseUp = () => {
        // store new widths in state
        if (curCol) {
            const colId = curCol.dataset.column;
            setColumnWidth(colId || '', curCol.style.width);
        }

        if (resizerRef.current) {
            resizerRef.current.style.height = '';
            resizerRef.current.style.opacity = '';
        }
        curCol = null;
        pageX = null;
        curColWidth = null;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseDown = (e: MouseEvent) => {
        e.preventDefault();

        const resizer = e.target as HTMLDivElement;
        curCol = resizer.parentElement;
        pageX = e.pageX;

        curColWidth = curCol?.offsetWidth || null;

        const table = resizer.closest('table');
        tableHeight = table && table.offsetHeight;
        resizer.style.height = tableHeight ? `${tableHeight}px` : '';
        resizer.style.opacity = '1';

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    useEffect(() => {
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return { resizerRef, onMouseDown };
};
