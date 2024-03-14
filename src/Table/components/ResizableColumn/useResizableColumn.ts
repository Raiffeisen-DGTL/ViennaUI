import  { useEffect, useRef } from 'react';
import { useTableService } from '../Context';

export const useResizableColumns = () => {
    const { setColumnWidth } = useTableService();
    const resizerRef = useRef(null);
    let pageX;
    let curCol;
    let curColWidth;
    let tableHeight;

    const onMouseMove = (e) => {
        e.preventDefault();
        if (curCol) {
            const diffX = e.pageX - pageX;
            const newWidth = curColWidth + diffX;

            setColumnWidth(curCol.dataset.column, `${newWidth}px`);

            curCol.style.width = `${newWidth}px`;
        }
    };

    const onMouseUp = () => {
        // store new widths in state
        if (curCol) {
            const colId = curCol.dataset.column;
            setColumnWidth(colId, curCol.style.width);
        }

        // @ts-ignore
        resizerRef.current.style.height = null;
        // @ts-ignore
        resizerRef.current.style.opacity = null;
        curCol = null;
        pageX = null;
        curColWidth = null;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseDown = (e) => {
        e.preventDefault();

        const resizer = e.target;
        curCol = resizer.parentElement;
        pageX = e.pageX;

        curColWidth = curCol.offsetWidth;

        const table = resizer.closest('table');
        tableHeight = table && table.offsetHeight;
        resizer.style.height = `${tableHeight}px`;
        resizer.style.opacity = 1;

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
