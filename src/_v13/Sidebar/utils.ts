import { isEqualObjects } from '@/Utils';
import { OnDragSort } from './types';

interface ClosestCarry {
    offset: number;
    elementId: string | null;
}

export function getDropId(container: HTMLDivElement, clientY: number) {
    const draggables = [...container.querySelectorAll<HTMLDivElement>('[data-dragid]:not([data-dragged="true"])')];

    const closest = draggables.reduce<ClosestCarry>(
        (acc, curr) => {
            const box = curr.getBoundingClientRect();
            const offset = clientY - box.top - box.height / 2;

            if (offset > 0 || offset < acc.offset) return acc;

            return {
                offset,
                elementId: curr.dataset.dragid ?? null,
            };
        },
        { offset: -Infinity, elementId: null }
    );

    return closest.elementId;
}

interface UpdateDraggableArgs {
    container: HTMLDivElement;
    dragged: HTMLDivElement;
    clientY: number;
    isInitialCall?: boolean;
    isSubmenu?: boolean;
    forceYPosition?: number;
}

export function updateDraggablePosition({
    container,
    dragged,
    clientY,
    isInitialCall = false,
    forceYPosition,
}: UpdateDraggableArgs) {
    const containerRect = container.getBoundingClientRect();
    const dragRect = dragged.getBoundingClientRect();
    const containerScroll = container.scrollTop;

    const newY = forceYPosition ?? clientY - containerRect.top - dragRect.height / 2 + containerScroll;

    if (!isInitialCall) {
        const newYExceedsBounds = newY + dragRect.height > containerRect.height + containerScroll || newY < 0;

        if (newYExceedsBounds) return;
    }

    dragged.style.top = newY + 'px';
    dragged.style.width = containerRect.width + 'px';
}

export function enableDrag(dragged: HTMLDivElement, shouldEnable: boolean) {
    const dragIcon = dragged.querySelector<HTMLDivElement>('#drag-icon');

    if (shouldEnable) {
        dragged.dataset.dragged = 'true';
        dragged.style.position = 'absolute';
        dragged.style.zIndex = '1000';
        dragged.style.cursor = 'grabbing';
        dragIcon && (dragIcon.style.cursor = 'grabbing');
    } else {
        dragged.dataset.dragged = '';
        dragged.style.position = '';
        dragged.style.top = '';
        dragged.style.width = '';
        dragged.style.zIndex = '';
        dragged.style.cursor = '';
        dragIcon && (dragIcon.style.cursor = '');
    }
}

interface UpdateSortOrderArgs<T> {
    dragged: HTMLDivElement;
    dropId: string | null;
    cb?: OnDragSort<T>;
}

export function updateSortOrder<T>({ dragged, dropId, cb }: UpdateSortOrderArgs<T>) {
    return (prevOrder: T[]) => {
        const cast = typeof prevOrder[0] === 'string' ? String : Number;

        const draggedId = dragged.dataset.dragid;

        if (!draggedId) return prevOrder;

        const castedDraggedId = cast(draggedId) as T;

        const newOrder = [...prevOrder].filter((id) => id !== castedDraggedId);

        let newIndex = -1;

        if (dropId === null) {
            newOrder.push(castedDraggedId);
            newIndex = newOrder.length - 1;
        } else {
            const targetIndex = newOrder.indexOf(cast(dropId) as T);
            newOrder.splice(targetIndex, 0, castedDraggedId);
            newIndex = targetIndex;
        }

        if (isEqualObjects(prevOrder, newOrder)) return prevOrder;

        cb?.({ newOrder, dragged: { id: castedDraggedId, newIndex } });

        return newOrder;
    };
}
