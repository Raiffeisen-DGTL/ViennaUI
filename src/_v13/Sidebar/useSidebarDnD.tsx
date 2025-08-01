import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DragPlaceholder } from './Sidebar.styles';
import { enableDrag, getDropId, updateDraggablePosition, updateSortOrder } from './utils';
import { OnDragSort, SidebarProps } from './types';

const SIXTY_FPS = 1000 / 60;
const RMB = 2;

interface UseSidebarDnDProps<T extends string | number, U extends string | number>
    extends Pick<SidebarProps<T, U>, 'items' | 'draggable' | 'itemOrder' | 'onDragSort'> {}

export const useSidebarDnD = <T extends string | number, U extends string | number>({
    draggable,
    items,
    itemOrder,
    onDragSort,
}: UseSidebarDnDProps<T, U>) => {
    const [isDragging, setIsDragging] = useState(false);

    const [dragSortOrder, setDragSortOrder] = useState<T[]>(itemOrder ?? items?.map(({ id }) => id) ?? []);

    const draggedElement = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const onDragSortPayload = useRef<Parameters<OnDragSort<T>>[0] | null>(null);
    const timestamp = useRef(0);

    const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (e.button === RMB || containerRef.current === null) return;

        setIsDragging(true);
        draggedElement.current = e.currentTarget;
        enableDrag(draggedElement.current, true);

        updateDraggablePosition({
            container: containerRef.current,
            dragged: draggedElement.current,
            clientY: e.clientY,
            isInitialCall: true,
            forceYPosition: draggedElement.current.offsetTop,
        });
    }, []);

    const getDragPlaceholder = (dragId: T) => {
        if (
            isDragging &&
            draggedElement.current !== null &&
            (draggedElement.current.dataset.dragid ?? '') === dragId.toString()
        ) {
            const rect = draggedElement.current.getBoundingClientRect();

            return <DragPlaceholder $width={rect.width} $height={rect.height} />;
        }

        return null;
    };

    const onMouseUp = useCallback((e: MouseEvent) => {
        if (draggedElement.current === null || containerRef.current === null) return;

        setIsDragging(false);
        enableDrag(draggedElement.current, false);
        draggedElement.current = null;

        onDragSortPayload.current && onDragSort?.(onDragSortPayload.current);
    }, []);

    const onMouseMove = useCallback((e: MouseEvent) => {
        if (Date.now() - timestamp.current < SIXTY_FPS) return;
        if (draggedElement.current === null || containerRef.current === null) return;

        updateDraggablePosition({
            container: containerRef.current,
            dragged: draggedElement.current,
            clientY: e.clientY,
        });

        const dropId = getDropId(containerRef.current, e.clientY);

        setDragSortOrder(
            updateSortOrder({
                dragged: draggedElement.current,
                dropId,
                cb: (payload) => (onDragSortPayload.current = payload),
            })
        );
        timestamp.current = Date.now();
    }, []);

    useEffect(() => {
        if (!draggable) return;

        document.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, [draggable]);

    useEffect(() => {
        setDragSortOrder(itemOrder ?? items?.map(({ id }) => id) ?? []);
    }, [items, itemOrder]);

    return {
        containerRef,
        dragSortOrder,
        onMouseDown,
        getDragPlaceholder,
    };
};
