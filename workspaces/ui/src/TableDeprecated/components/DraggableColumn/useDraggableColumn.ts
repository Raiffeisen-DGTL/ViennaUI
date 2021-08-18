import '../../../Utils/elementClosestPolyfill/elementClosestPolyfill';
import { useTableService } from '../Context';

export function useDraggableColumn() {
    const { moveColumn } = useTableService();
    let tableHeight;
    let drag;
    let currentIdx;
    let drop;
    let currentId;

    const clean = () => {
        // clean stuff
        if (drag) {
            drag.style.height = '0';
            drag = null;
        }

        if (drop) {
            drop.style.height = '0';
            drop = null;
        }
    };

    const onDragStart = (e) => {
        const target = e.currentTarget;

        const tableWrapper = target.closest("[data-id='table-wrapper']");
        tableHeight = tableWrapper && tableWrapper.offsetHeight;

        drag = target.querySelector("[data-id='dragable']");

        if (drag) {
            drag.style.height = `${tableHeight}px`;
        }

        currentIdx = target.getAttribute('data-index');
        currentId = target.getAttribute('data-column');
    };

    const onDrop = (e) => {
        e.preventDefault();
        clean();

        const destinationId = e.currentTarget.getAttribute('data-column');

        // move column
        if (currentId && destinationId) {
            moveColumn(currentId, destinationId);
        }
    };

    const onDragEnter = (e) => {
        e.preventDefault();

        const target = e.currentTarget;
        const targetIdx = target.getAttribute('data-index');
        const [left, right] = target.querySelectorAll("[data-id='drop']");

        // chek if left or right border should be shown
        drop = targetIdx < currentIdx ? left : right;
        if (drop) {
            drop.style.height = `${tableHeight}px`;
        }
    };

    const onDragLeave = (e) => {
        const target = e.currentTarget;

        if (!target.contains(e.relatedTarget)) {
            // clean the borders
            const [left, right] = target.querySelectorAll("[data-id='drop']");
            if (left && right) {
                left.style.height = '0';
                right.style.height = '0';
            }
        }
    };

    const onDragEnd = (e) => {
        e.preventDefault();
        clean();
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    return { draggable: true, onDragStart, onDragEnter, onDragLeave, onDragOver, onDrop, onDragEnd };
}
