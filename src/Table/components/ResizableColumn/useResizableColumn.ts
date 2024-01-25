import '../../../Utils/elementClosestPolyfill/elementClosestPolyfill';
import { useEffect } from 'react';
import { useTableService } from '../Context/TableContext';

export const useResizableColumns = () => {
    const { setColumnWidth } = useTableService();
    let pageX;
    let curCol;
    let curColWidth;
    let resizer;
    let tableHeight;

    const onMouseMove = (e) => {
        e.preventDefault();
        if (curCol) {
            const diffX = e.pageX - pageX;
            const newWidth = curColWidth + diffX;

            curCol.width = `${newWidth}px`;
        }
    };

    const onMouseUp = () => {
        // store new widths in state
        setColumnWidth(curCol.id, curCol.width);

        // clean up
        resizer.style.height = null;
        resizer.style.opacity = null;
        resizer = null;
        curCol = null;
        pageX = null;
        curColWidth = null;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseDown = (e) => {
        e.preventDefault();

        resizer = e.target;
        curCol = e.target.parentElement;
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
        return function cleanup() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return { onMouseDown };
};
