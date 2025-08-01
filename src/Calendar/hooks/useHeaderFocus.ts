import React, { useCallback, useEffect } from 'react';
import { HeaderButton, ViewMode } from '../types';
import { useCalendarContext } from '../Context';
import { getButtonMap } from './utils';
import { defer, useFreshFunc } from '../../Utils';

export const useHeaderFocus = (viewMode: ViewMode) => {
    const {
        focusedHeader,
        headerButtonNodes,
        gridButtonNodes,
        footerButtonNodes,
        setFocusedHeader,
        setFocusedGrid,
        setFocusedFooter,
    } = useCalendarContext();

    useEffect(() => {
        if (focusedHeader) {
            headerButtonNodes.current?.[focusedHeader]?.focus();
        }
    }, [focusedHeader]);

    const forwardedRef = (type: HeaderButton) => (node: HTMLButtonElement | null) => {
        if (node) {
            headerButtonNodes.current[type] = node;
        }
    };

    const fresh = useFreshFunc((event: React.KeyboardEvent<HTMLButtonElement>, type: HeaderButton) => {
        const buttonsMap = getButtonMap(viewMode);
        const currentIndex = buttonsMap.findIndex((item) => item === type);
        const lastIndex = buttonsMap.length - 1;
        const hasTodayButton = !!footerButtonNodes.current.todayButton;

        const getNext = (direction: number) => {
            const nextIndex = direction + currentIndex;

            if (nextIndex < 0) {
                return buttonsMap[lastIndex];
            }
            if (nextIndex > lastIndex) {
                return buttonsMap[0];
            }

            return buttonsMap[nextIndex];
        };

        switch (event.key) {
            case 'ArrowUp': {
                if (hasTodayButton) {
                    setFocusedFooter('todayButton');
                } else {
                    setFocusedGrid(gridButtonNodes.current.length - 1);
                }
                setFocusedHeader(null);
                break;
            }
            case 'ArrowDown': {
                setFocusedGrid(0);
                setFocusedHeader(null);
                break;
            }
            case 'ArrowLeft': {
                setFocusedHeader(getNext(-1));
                break;
            }
            case 'ArrowRight': {
                setFocusedHeader(getNext(1));
                break;
            }
            case 'Enter': {
                if (type === 'back' || type === 'year' || type === 'month') {
                    defer(() => setFocusedGrid(0));
                }
                setFocusedHeader(null);
                break;
            }
            case 'End':
            case 'Home':
            case 'Escape':
            default: {
                if (focusedHeader) {
                    headerButtonNodes.current?.[focusedHeader]?.blur();
                }
                setFocusedHeader(null);
                break;
            }
        }
    });

    const onKeyDown = (type: HeaderButton) => {
        return (event: React.KeyboardEvent<HTMLButtonElement>) => {
            fresh(event, type);
        };
    };

    const setUpFocusProps = useCallback((type: HeaderButton) => {
        return {
            forwardedRef: forwardedRef(type),
            onKeyDown: onKeyDown(type),
        };
    }, []);

    return {
        setFocusedHeader,
        setUpFocusProps,
        onKeyDown,
        forwardedRef,
    };
};
