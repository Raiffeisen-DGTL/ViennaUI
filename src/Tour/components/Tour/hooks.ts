import { useEffect, useCallback, useState } from 'react';
import { inView, smoothScroll, getWindow, getRect, RectResult } from '../../utils';
import { StepType, TourProps } from './types';
import { useLatest, omit, getEntries } from '../../../Utils';

const initialState: DimensionsType = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    windowWidth: 0,
    windowHeight: 0,
    x: 0,
    y: 0,
};

type ScrollLogicalPosition = 'center' | 'end' | 'nearest' | 'start';
type ScrollBehavior = 'auto' | 'smooth';

interface ScrollIntoViewOptions {
    behavior?: ScrollBehavior;
    block?: ScrollLogicalPosition;
    inline?: ScrollLogicalPosition;
}

export interface KeyboardProps extends Required<Pick<TourProps, 'onChangeIsOpen' | 'onChangeCurrentStep' | 'isOpen'>> {
    currentStep: number;
    stepsLength: number;
}

export enum KeyboardKeys {
    Escape = 'Escape',
    ArrowRight = 'ArrowRight',
    ArrowLeft = 'ArrowLeft',
}

interface HighlightedRect extends RectResult {
    windowWidth: number;
    windowHeight: number;
    hasHighlightedElems: boolean;
}

type DimensionsType = Omit<HighlightedRect, 'hasHighlightedElems'>;

export const useSizes = (
    step: StepType,
    scrollOptions: ScrollIntoViewOptions & {
        inViewThreshold?: number | { x?: number; y?: number };
    } = {
        block: 'center',
        behavior: 'smooth',
        inViewThreshold: 0,
    },
    isOpen: boolean
) => {
    const [transition, setTransition] = useState(false);
    const [observing, setObserving] = useState(false);
    const [isHighlightingObserved, setIsHighlightingObserved] = useState(false);
    const [refresher, setRefresher] = useState<null | unknown>(null);
    const [dimensions, setDimensions] = useState<DimensionsType>(initialState);
    const target = step?.selector instanceof Element ? step?.selector : document.querySelector(step?.selector);

    const handleResize = useCallback(() => {
        const newDimensions = omit(getHighlightedRect(target, step?.highlightedSelectors), 'hasHighlightedElems');
        if (getEntries(dimensions).some(([key, value]) => newDimensions[key] !== value)) {
            setDimensions(newDimensions);
        }
    }, [target, step?.highlightedSelectors, dimensions]);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [target, step?.highlightedSelectors, refresher]);

    useEffect(() => {
        const isInView = inView({
            ...dimensions,
            threshold: scrollOptions.inViewThreshold,
        });

        if (!isInView && target && isOpen) {
            setTransition(true);
            smoothScroll(target, scrollOptions)
                .then(() => {
                    if (!observing) setRefresher(Date.now());
                })
                .finally(() => {
                    setTransition(false);
                });
        }
    }, [dimensions]);

    const observableRefresher = useCallback(() => {
        setObserving(true);
        const { hasHighlightedElems, ...dimensions } = getHighlightedRect(target, step?.highlightedSelectors);
        setIsHighlightingObserved(hasHighlightedElems);
        setDimensions(dimensions);
        setObserving(false);
    }, [target, step?.highlightedSelectors, dimensions]);

    return {
        sizes: dimensions,
        transition,
        target,
        observableRefresher,
        isHighlightingObserved,
    };
};

function getHighlightedRect(
    node: Element | null,
    highlightedSelectors: string[] = [],
    bypassElem = true
): HighlightedRect {
    let hasHighlightedElems = false;
    const { w: windowWidth, h: windowHeight } = getWindow();
    if (!highlightedSelectors) {
        return {
            ...getRect(node),
            windowWidth,
            windowHeight,
            hasHighlightedElems: false,
        };
    }

    const attrs = getRect(node);
    const altAttrs = {
        bottom: 0,
        height: 0,
        left: windowWidth,
        right: 0,
        top: windowHeight,
        width: 0,
    };

    for (const selector of highlightedSelectors) {
        const element = document.querySelector(selector) as HTMLElement;
        if (!element || element.style.display === 'none' || element.style.visibility === 'hidden') {
            continue;
        }

        const rect = getRect(element);
        hasHighlightedElems = true;
        if (bypassElem || !node) {
            if (rect.top < altAttrs.top) {
                altAttrs.top = rect.top;
            }

            if (rect.right > altAttrs.right) {
                altAttrs.right = rect.right;
            }

            if (rect.bottom > altAttrs.bottom) {
                altAttrs.bottom = rect.bottom;
            }

            if (rect.left < altAttrs.left) {
                altAttrs.left = rect.left;
            }

            altAttrs.width = altAttrs.right - altAttrs.left;
            altAttrs.height = altAttrs.bottom - altAttrs.top;
        } else {
            if (rect.top < attrs.top) {
                attrs.top = rect.top;
            }

            if (rect.right > attrs.right) {
                attrs.right = rect.right;
            }

            if (rect.bottom > attrs.bottom) {
                attrs.bottom = rect.bottom;
            }

            if (rect.left < attrs.left) {
                attrs.left = rect.left;
            }

            attrs.width = attrs.right - attrs.left;
            attrs.height = attrs.bottom - attrs.top;
        }
    }

    const bypassable = bypassElem || !node ? altAttrs.width > 0 && altAttrs.height > 0 : false;

    return {
        left: (bypassable ? altAttrs : attrs).left,
        top: (bypassable ? altAttrs : attrs).top,
        right: (bypassable ? altAttrs : attrs).right,
        bottom: (bypassable ? altAttrs : attrs).bottom,
        width: (bypassable ? altAttrs : attrs).width,
        height: (bypassable ? altAttrs : attrs).height,
        windowWidth,
        windowHeight,
        hasHighlightedElems,
        x: attrs.x,
        y: attrs.y,
    };
}

export const useKeyboard = ({
    currentStep,
    isOpen,
    stepsLength,
    onChangeIsOpen,
    onChangeCurrentStep,
}: KeyboardProps) => {
    const latest = useLatest({
        currentStep,
        onChangeIsOpen,
        onChangeCurrentStep,
    });

    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
            if (isOpen) {
                e.stopPropagation();

                const { currentStep, onChangeIsOpen, onChangeCurrentStep } = latest.current;

                if (e.key === KeyboardKeys.Escape) {
                    e.preventDefault();
                    onChangeIsOpen(false);
                    onChangeCurrentStep(0);
                }
                if (e.key === KeyboardKeys.ArrowRight) {
                    e.preventDefault();
                    onChangeCurrentStep(Math.min(currentStep + 1, stepsLength - 1));
                }
                if (e.key === KeyboardKeys.ArrowLeft) {
                    e.preventDefault();
                    onChangeCurrentStep(Math.max(currentStep - 1, 0));
                }
            }
        };

        window.addEventListener('keydown', keyDownHandler, false);

        return () => window.removeEventListener('keydown', keyDownHandler);
    }, [isOpen]);
};
