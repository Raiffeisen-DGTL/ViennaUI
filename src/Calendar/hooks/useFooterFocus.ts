import React, { useCallback, useEffect } from 'react';
import { useCalendarContext } from '../Context';
import { getButtonMap } from './utils';
import { FooterButton, ViewMode } from '../types';
import { defer, useFreshFunc } from '../../Utils';

export const useFooterFocus = (viewMode: ViewMode) => {
    const { gridButtonNodes, footerButtonNodes, setFocusedGrid, setFocusedHeader, focusedFooter, setFocusedFooter } =
        useCalendarContext();

    useEffect(() => {
        if (focusedFooter !== null) {
            footerButtonNodes.current?.[focusedFooter]?.focus();
        }
    }, [focusedFooter]);

    const forwardedRef = (type: FooterButton) => (node: HTMLButtonElement | null) => {
        if (node) {
            footerButtonNodes.current[type] = node;
        }
    };

    const fresh = useFreshFunc((event: React.KeyboardEvent<HTMLButtonElement>, type: FooterButton) => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowLeft': {
                setFocusedGrid(gridButtonNodes.current.length - 1);
                setFocusedFooter(null);
                break;
            }
            case 'ArrowDown':
            case 'ArrowRight': {
                setFocusedHeader(getButtonMap(viewMode)[0]);
                setFocusedFooter(null);
                break;
            }
            case 'Enter': {
                if (type === 'todayButton') {
                    defer(() => setFocusedGrid(new Date().getDate() - 1));
                }
                setFocusedFooter(null);
                break;
            }
            case 'End':
            case 'Home':
            case 'Escape':
            default: {
                if (focusedFooter !== null) {
                    footerButtonNodes.current?.[focusedFooter]?.blur();
                }
                setFocusedFooter(null);
                break;
            }
        }
    });

    const onKeyDown = (type: FooterButton) => {
        return (event: React.KeyboardEvent<HTMLButtonElement>) => {
            fresh(event, type);
        };
    };
    const setUpFocusProps = useCallback((type: FooterButton) => {
        return {
            forwardedRef: forwardedRef(type),
            onKeyDown: onKeyDown(type),
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
