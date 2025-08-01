import { RefObject, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ARROW_NEXT, ARROW_PREV, ELLIPSIS_NEXT, ELLIPSIS_PREV } from '../constants';

export const useKeyboardPagination = (
    selectedPage: number,
    lastPageIndex: number,
    pagersNumbers: number[]
): {
    keyboardNavigationPage: number;
    focusedPagerRef: RefObject<HTMLButtonElement>;
    selectedPagerRef: RefObject<HTMLButtonElement>;
    handleFocus: (index: number) => void;
    keyDownHandler: (event: React.KeyboardEvent<HTMLDivElement>) => void;
} => {
    const [keyboardNavigationPage, setKeyboardNavigationPage] = useState(selectedPage);
    const focusedPagerRef = useRef<HTMLButtonElement>(null);
    const selectedPagerRef = useRef<HTMLButtonElement>(null);

    const focusablePagers = useMemo(() => {
        return [ARROW_PREV, ...pagersNumbers, ARROW_NEXT];
    }, [pagersNumbers]);

    useEffect(() => {
        if (!focusablePagers.includes(keyboardNavigationPage)) {
            selectedPagerRef.current?.focus();
        }
    }, [focusablePagers, keyboardNavigationPage]);

    useEffect(() => {
        focusedPagerRef.current?.focus();
    }, [keyboardNavigationPage]);

    const commonFocusHandler = useCallback(
        (type: 'prev' | 'next') => {
            const currentIndex = focusablePagers.findIndex((item) => item === keyboardNavigationPage);
            const newIndex = currentIndex + (type === 'prev' ? -1 : 1);
            const focusedPager = focusablePagers[newIndex];

            if (focusedPager === undefined) return;

            setKeyboardNavigationPage(focusedPager);

            if (focusedPager === selectedPage) {
                selectedPagerRef.current?.focus();
            } else {
                focusedPagerRef.current?.focus();

                if (type === 'prev' && selectedPage === 0 && focusedPager === ARROW_PREV) {
                    setKeyboardNavigationPage(0);
                }

                if (type === 'next' && selectedPage === lastPageIndex && focusedPager === ARROW_NEXT) {
                    setKeyboardNavigationPage(lastPageIndex);
                }
            }
        },
        [focusablePagers, keyboardNavigationPage, lastPageIndex, selectedPage]
    );

    const handleFocus = (index: number) => {
        setKeyboardNavigationPage(index);
    };

    const handleBlur = (target: HTMLButtonElement | null) => {
        if (document.activeElement === target) {
            target?.blur();
        }
    };

    const keyDownHandler = useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
            switch (event.key) {
                case 'ArrowRight':
                    if (keyboardNavigationPage === ARROW_PREV) {
                        handleFocus(0);
                    }

                    if (keyboardNavigationPage === ELLIPSIS_PREV) {
                        const index = pagersNumbers.findIndex((item) => item === ELLIPSIS_PREV);
                        handleFocus(pagersNumbers[index + 1]);
                    }

                    if (keyboardNavigationPage === ELLIPSIS_NEXT) {
                        handleFocus(lastPageIndex);
                    }

                    if (
                        document.activeElement === selectedPagerRef.current ||
                        document.activeElement === focusedPagerRef.current
                    ) {
                        commonFocusHandler('next');
                    }
                    break;
                case 'ArrowLeft':
                    if (keyboardNavigationPage === ARROW_NEXT) {
                        handleFocus(lastPageIndex);
                    }

                    if (keyboardNavigationPage === ELLIPSIS_PREV) {
                        handleFocus(0);
                    }

                    if (keyboardNavigationPage === ELLIPSIS_NEXT) {
                        const index = pagersNumbers.findIndex((item) => item === ELLIPSIS_NEXT);
                        handleFocus(pagersNumbers[index - 1]);
                    }

                    if (
                        document.activeElement === selectedPagerRef.current ||
                        document.activeElement === focusedPagerRef.current
                    ) {
                        commonFocusHandler('prev');
                    }

                    break;
                case 'Escape':
                    handleBlur(focusedPagerRef.current);
                    handleBlur(selectedPagerRef.current);
                    break;
                default:
                    break;
            }
        },
        [keyboardNavigationPage, pagersNumbers, lastPageIndex, commonFocusHandler]
    );

    return {
        keyboardNavigationPage,
        focusedPagerRef,
        selectedPagerRef,
        handleFocus,
        keyDownHandler,
    };
};
