import React, { useCallback, useEffect } from 'react';
import { ViewMode } from '../types';
import { useCalendarContext } from '../Context';
import { getButtonMap, getCoords } from './utils';
import { defer, useFreshFunc } from '../../Utils';

export const useGridFocus = (viewMode: ViewMode) => {
    const { gridButtonNodes, footerButtonNodes, focusedGrid, setFocusedGrid, setFocusedHeader, setFocusedFooter } =
        useCalendarContext();

    useEffect(() => {
        if (focusedGrid !== null) {
            gridButtonNodes.current?.[focusedGrid]?.focus();
        }
    }, [focusedGrid]);

    const forwardedRef = (index: number) => (node: HTMLButtonElement | null) => {
        if (node) {
            gridButtonNodes.current[index] = node;
        }
    };

    const fresh = useFreshFunc((event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
        const buttonsMap = gridButtonNodes.current;
        const lastIndex = buttonsMap.length - 1;
        const hasTodayButton = !!footerButtonNodes.current.todayButton;

        const getNext = (direction: number) => {
            const nextIndex = direction + index;

            if (nextIndex < 0) {
                return lastIndex;
            }
            if (nextIndex > lastIndex) {
                return 0;
            }

            return nextIndex;
        };

        const { isFirstRow, isLastRow, rowLength } = getCoords({ index: index, viewMode, lastIndex });

        switch (event.key) {
            case 'ArrowUp': {
                if (isFirstRow) {
                    setFocusedHeader(getButtonMap(viewMode)[0]);
                    setFocusedGrid(null);
                } else {
                    setFocusedGrid(index - rowLength);
                }
                break;
            }
            case 'ArrowDown': {
                if (isLastRow) {
                    if (hasTodayButton) {
                        setFocusedFooter('todayButton');
                    } else {
                        setFocusedHeader(getButtonMap(viewMode)[0]);
                    }
                    setFocusedGrid(null);
                } else {
                    setFocusedGrid(index + rowLength);
                }
                break;
            }
            case 'ArrowLeft': {
                setFocusedGrid(getNext(-1));
                break;
            }
            case 'ArrowRight': {
                setFocusedGrid(getNext(1));
                break;
            }
            case 'Enter': {
                if (viewMode === 'month_list' || viewMode === 'year_list') {
                    defer(() => setFocusedGrid(0));
                } else {
                    setFocusedGrid(null);
                }
                break;
            }
            case 'End':
            case 'Home':
            case 'Escape':
            default: {
                if (focusedGrid !== null) {
                    gridButtonNodes.current?.[focusedGrid]?.blur();
                }
                setFocusedGrid(null);
                break;
            }
        }
    });

    const onKeyDown = (index: number) => {
        return (event: React.KeyboardEvent<HTMLButtonElement>) => {
            fresh(event, index);
        };
    };

    const setUpFocusProps = useCallback((index: number) => {
        return {
            forwardedRef: forwardedRef(index),
            onKeyDown: onKeyDown(index),
        };
    }, []);

    const resetSavedNodes = () => {
        gridButtonNodes.current = [];
    };

    return {
        setUpFocusProps,
        onKeyDown,
        forwardedRef,
        resetSavedNodes,
    };
};

export type UseGridFocus = ReturnType<typeof useGridFocus>;
