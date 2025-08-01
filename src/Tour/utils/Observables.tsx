import React, { useRef, useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import type { MutableRefObject } from 'react';

const config: MutationObserverInit = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
};

const useMutationObserver = (
    ref: MutableRefObject<HTMLElement | null>,
    callback: MutationCallback,
    options: MutationObserverInit = config
) => {
    useEffect(() => {
        if (ref.current) {
            const observer = new MutationObserver(callback);
            observer.observe(ref.current, options);

            return () => {
                observer.disconnect();
            };
        }

        return () => {};
    }, [callback, options, ref]);
};

const Observables: React.FC<ObservablesProps> = ({ mutationObservables, resizeObservables, refresh }) => {
    const [mutationsCounter, setMutationsCounter] = useState(0);
    const ref = useRef(document.documentElement || document.body);

    const refreshHighlightedRegionIfObservable = (nodes: NodeList) => {
        const posibleNodes = Array.from(nodes);
        for (const node of posibleNodes) {
            if (mutationObservables) {
                if (!(node as Element).attributes) {
                    continue;
                }
                const found = mutationObservables.find((observable: string) => (node as Element).matches(observable));

                if (found) {
                    refresh();
                }
            }
        }
    };

    const incrementMutationsCounterIfObservable = (nodes: NodeList) => {
        const posibleNodes = Array.from(nodes);
        for (const node of posibleNodes) {
            if (resizeObservables) {
                if (!(node as Element).attributes) {
                    continue;
                }
                const found = resizeObservables.find((observable: string) => (node as Element).matches(observable));

                if (found) setMutationsCounter(mutationsCounter + 1);
            }
        }
    };

    useMutationObserver(
        ref,
        (mutationList: MutationRecord[]) => {
            for (const mutation of mutationList) {
                if (mutation.addedNodes.length !== 0) {
                    refreshHighlightedRegionIfObservable(mutation.addedNodes);
                    incrementMutationsCounterIfObservable(mutation.addedNodes);
                }

                if (mutation.removedNodes.length !== 0) {
                    refreshHighlightedRegionIfObservable(mutation.removedNodes);
                    incrementMutationsCounterIfObservable(mutation.removedNodes);
                }
            }
        },
        { childList: true, subtree: true }
    );

    useEffect(() => {
        if (!resizeObservables) {
            return;
        }

        const resizeObserver: ResizeObserver = new ResizeObserver(() => {
            refresh();
        });

        for (const observable of resizeObservables) {
            const element = document.querySelector(observable);
            if (element) {
                resizeObserver.observe(element);
            }
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [resizeObservables, mutationsCounter]);

    return null;
};

interface ObservablesProps {
    mutationObservables?: string[];
    resizeObservables?: string[];
    refresh: () => void;
}

export default Observables;
