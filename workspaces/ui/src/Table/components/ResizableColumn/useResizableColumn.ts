import '../../../Utils/elementClosestPolyfill/elementClosestPolyfill';
import { useEffect } from 'react';
import { useTableService } from '../Context/TableContext';

export const useResizableColumns = () => {
    const { setColumnWidth } = useTableService();
    let pageX;
    let curCol;
    let nxtCol;
    let curColWidth;
    let nxtColWidth;
    let resizer;
    let tableHeight;

    const onMouseMove = (e) => {
        e.preventDefault();
        if (curCol) {
            const diffX = e.pageX - pageX;
            const newWidth = curColWidth + diffX;

            curCol.width = `${newWidth}px`;

            // if the column width is already minimal possible
            if (curCol.offsetWidth !== newWidth) {
                return;
            }

            if (nxtCol) {
                nxtCol.width = `${nxtColWidth - diffX}px`;
            }
        }
    };

    const onMouseUp = () => {
        // store new widths in state
        setColumnWidth(curCol.id, curCol.width);

        if (nxtCol) {
            setColumnWidth(nxtCol.id, nxtCol.width);
        }

        // clean up
        resizer.style.height = null;
        resizer.style.opacity = null;
        resizer = null;
        curCol = null;
        nxtCol = null;
        pageX = null;
        nxtColWidth = null;
        curColWidth = null;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseDown = (e) => {
        e.preventDefault();

        resizer = e.target;
        curCol = e.target.parentElement;
        nxtCol = curCol.nextElementSibling;
        pageX = e.pageX;

        curColWidth = curCol.offsetWidth;
        if (nxtCol) nxtColWidth = nxtCol.offsetWidth;

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
