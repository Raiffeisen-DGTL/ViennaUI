import { useEffect, useRef, useState } from 'react';
import { debounce, RenderProps } from '../Utils';
import React from 'react';
import { CarouselProps } from '@/Carousel/Carousel';

/** Дефолтная ширина айтема для fill, если не указано количество айтемов для отображения на одной странице карусели itemsVisible  */
export const BASE_ITEM_WIDTH = 300;
/** Отступы между айтемами - всегда фиксированы, нужно для расчета прокрутки для fixed */
export const BASE_ITEM_OFFSET = 12;

export interface UseCarouselProps extends Pick<CarouselProps, 'onClickPrev' | 'onClickNext' | 'controlsRef'> {
    mode: string;
    items: RenderProps[];
    itemsVisible?: number;
    flipByOne?: boolean;
    dragToFlip?: boolean;
    itemWidth?: number;
}

export const useCarousel = ({
    mode,
    items,
    itemsVisible,
    flipByOne = false,
    dragToFlip = false,
    itemWidth = BASE_ITEM_WIDTH,
    controlsRef,
    onClickPrev,
    onClickNext,
}: UseCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);
    const [goRightButtonDisabled, setGoRightButtonDisabled] = useState(false);

    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const translateX = useRef(0);
    const totalChildren = useRef(items.length);

    const goLeftButtonDisabled = currentIndex === 0;

    const resize = () => {
        if (!viewportRef.current || !trackRef.current) return;

        const viewportWidth = viewportRef.current.offsetWidth;
        let newVisibleCount: number;
        let itemWidthForFill: number = 0;

        if (mode === 'fill') {
            newVisibleCount = itemsVisible || Math.floor(viewportWidth / (BASE_ITEM_WIDTH + BASE_ITEM_OFFSET));
            itemWidthForFill = viewportWidth / newVisibleCount - BASE_ITEM_OFFSET;
        } else {
            const effectiveItemWidth = itemWidth + BASE_ITEM_OFFSET;
            newVisibleCount = Math.floor(viewportWidth / effectiveItemWidth);
        }

        newVisibleCount = Math.min(Math.max(1, newVisibleCount), totalChildren.current);
        const prevVisibleCount = visibleCount;
        setVisibleCount(newVisibleCount);
        let newIndex = currentIndex;

        if (mode === 'fill') {
            const prevTotalWidth = prevVisibleCount * (itemWidthForFill + BASE_ITEM_OFFSET);
            const newTotalWidth = newVisibleCount * (itemWidthForFill + BASE_ITEM_OFFSET);

            const scaleFactor = newTotalWidth / prevTotalWidth;
            newIndex = Math.round(newIndex * scaleFactor);
        } else {
            newIndex = Math.min(newIndex, totalChildren.current - newVisibleCount);
        }

        updateTransform(Math.max(0, newIndex));
    };

    const getTransformValue = (index: number) => {
        const itemWithOffset = itemWidth + BASE_ITEM_OFFSET;
        const viewportWidth = viewportRef.current?.offsetWidth || 0;
        const itemWidthForFill = viewportWidth / visibleCount - BASE_ITEM_OFFSET;

        if (mode === 'fill') {
            const totalWidth = totalChildren.current * (itemWidthForFill + BASE_ITEM_OFFSET);
            const maxOffset = Math.max(0, totalWidth - viewportWidth);
            return `-${Math.min(index * (itemWidthForFill + BASE_ITEM_OFFSET), maxOffset)}px`;
        } else {
            const totalWidth = totalChildren.current * itemWithOffset - BASE_ITEM_OFFSET;
            const maxOffset = Math.max(0, totalWidth - viewportWidth);
            return `-${Math.min(index * itemWithOffset, maxOffset)}px`;
        }
    };

    const updateTransform = (index: number) => {
        if (!trackRef.current) return;
        const correctedIndex = Math.max(0, Math.min(index, totalChildren.current - visibleCount));
        trackRef.current.style.transition = 'transform 0.5s ease-out';
        trackRef.current.style.transform = `translateX(${getTransformValue(correctedIndex)})`;
        setCurrentIndex(correctedIndex);
    };

    const goTo = (index: number) => {
        setCurrentIndex(index);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => {
            const step = flipByOne ? 1 : visibleCount;
            const total = totalChildren.current;
            let newIndex = prev + step;

            if (flipByOne) {
                if (newIndex >= total - (visibleCount - 1)) {
                    newIndex = 0;
                }
            } else {
                const updatedLastVisibleIndex = Math.max(
                    0,
                    Math.ceil(total / visibleCount) * visibleCount - visibleCount
                );
                if (newIndex > updatedLastVisibleIndex) {
                    newIndex = 0;
                }
            }
            return newIndex;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => {
            const step = flipByOne ? 1 : visibleCount;
            const total = totalChildren.current;
            let newIndex = prev - step;

            if (newIndex < 0) {
                if (flipByOne) {
                    newIndex = total - (visibleCount - 1);
                } else {
                    const updatedLastVisibleIndex = Math.max(
                        0,
                        Math.ceil(total / visibleCount) * visibleCount - visibleCount
                    );
                    newIndex = updatedLastVisibleIndex - visibleCount;
                }
            }
            return newIndex;
        });
    };

    const nextClickHandler = () => {
        handleNext();
        onClickNext?.();
    };

    const prevClickHandler = () => {
        handlePrev();
        onClickPrev?.();
    };

    const handleDragStartTrack = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragToFlip) return;
        isDragging.current = true;
        startX.current = e.clientX;
        if (trackRef.current) {
            trackRef.current.style.transition = 'none';
        }
    };

    const handleDragMoveTrack = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging.current) return;
        translateX.current = e.clientX - startX.current;
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(calc(${getTransformValue(currentIndex)} + ${translateX.current}px))`;
        }
    };
    const handleDragEndTrack = () => {
        if (!isDragging.current) return;
        isDragging.current = false;

        const threshold = (viewportRef.current?.offsetWidth || itemWidth) * 0.1;

        if (Math.abs(translateX.current) > threshold) {
            const deltaIndex = translateX.current > 0 ? -1 : 1;
            const newIndex = currentIndex + deltaIndex;

            if (newIndex !== currentIndex) {
                updateTransform(newIndex);
            }
        } else {
            updateTransform(currentIndex);
        }

        translateX.current = 0;
    };

    useEffect(() => {
        if (!controlsRef) return;

        controlsRef.current = {
            next: handleNext,
            prev: handlePrev,
            goTo,
        };
    }, [controlsRef, handleNext, handlePrev]);

    useEffect(() => {
        setGoRightButtonDisabled(items.length <= visibleCount);
    }, [visibleCount, items.length]);

    useEffect(() => {
        updateTransform(currentIndex);
    }, [currentIndex, visibleCount, items]);

    useEffect(() => {
        resize();
    }, [itemsVisible, viewportRef.current?.offsetWidth, items.length]);

    useEffect(() => {
        totalChildren.current = items.length;
        const debouncedResize = debounce(resize, 100);
        resize();
        window.addEventListener('resize', debouncedResize);
        return () => window.removeEventListener('resize', debouncedResize);
    }, [items]);

    return {
        currentIndex,
        visibleCount,
        totalChildren,
        viewportRef,
        trackRef,
        nextClickHandler,
        prevClickHandler,
        handleDragStartTrack,
        handleDragMoveTrack,
        handleDragEndTrack,
        goLeftButtonDisabled,
        goRightButtonDisabled,
    };
};
