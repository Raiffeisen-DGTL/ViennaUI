import React, { useLayoutEffect, useMemo, useState, useRef } from 'react';
import { useWindowResize } from '../useWindowResize';

const closureClassName = (() => {
    let count = 0;
    return () => {
        count++;
        return `usecramlist-cache-${count}`;
    };
})();

const paddingsSum = (elem) => {
    if (window) {
        // для SSR проверка наличия window
        const computed = window.getComputedStyle(elem);
        return (
            parseInt(computed.getPropertyValue('padding-left'), 10) +
            parseInt(computed.getPropertyValue('padding-right'), 10)
        );
    }

    return 0;
};

const marginsSum = (elem) => {
    if (window) {
        // для SSR проверка наличия window
        const computed = window.getComputedStyle(elem);
        return (
            parseInt(computed.getPropertyValue('margin-left'), 10) +
            parseInt(computed.getPropertyValue('margin-right'), 10)
        );
    }

    return 0;
};

const resizeHandler = (containerRef, extraComponentRef, elementsRef, items, setCount, startWith: number) => {
    if (containerRef.current && extraComponentRef && extraComponentRef.current) {
        let sum = 0;
        let count = 0;
        const main: HTMLElement[] = elementsRef.refs;

        const extraElement = extraComponentRef.current;
        const extra: number = extraElement.offsetWidth || main[items.length].offsetWidth;
        const paddingsWidth = paddingsSum(containerRef.current);
        const parentWidth = containerRef.current.offsetWidth - paddingsWidth;

        extraElement.style.visibility = 'hidden'; // сокрытие компонента заместитиеля
        extraElement.style.position = 'fixed'; // убирем его что бы не занимал места

        for (let idx = 0; idx < main.length - 1; idx++) {
            if (main[idx] === extraComponentRef) {
                continue;
            }
            main[idx].style.display = '';
            const prevSum = sum;
            sum += main[idx].offsetWidth + marginsSum(main[idx]);
            if (sum > parentWidth) {
                count++;
                main[idx].style.display = 'none';
            }
            if (
                idx &&
                main[idx - 1].style.display !== 'none' &&
                prevSum + extra + marginsSum(extraElement) > parentWidth
            ) {
                count++;
                main[idx - 1].style.display = 'none';
            }
        }

        if (main.length <= startWith + 1) {
            for (let idx = 0; idx < startWith; idx++) {
                main[0].style.display = '';
            }
            setCount(0);
            return;
        }

        if (count) {
            extraElement.style.visibility = 'visible';
            extraElement.style.position = '';
        }

        setCount(count);
    }
};

export const useCramList = (
    items: React.ReactNode[],
    startWith = 0
): [React.RefObject<any>, React.RefObject<any>, number] => {
    const containerRef = useRef<HTMLDivElement>(null);
    const extraComponentRef = useRef<HTMLDivElement>(null);
    const elementsRef = useMemo(() => ({ refs: [] as HTMLElement[] }), []);
    const additionalClass = useMemo(() => closureClassName(), []);
    const styleSheet = useRef<any>(null);

    const [count, setCount] = useState(items.length);

    useWindowResize(() => resizeHandler(containerRef, extraComponentRef, elementsRef, items, setCount, startWith));

    useLayoutEffect(() => {
        if (containerRef.current && document) {
            // Проверяем document для SSR
            // Делаем детей невидимыми что бы избежать мерцания, и избавится от необходимости определять стили вручную
            const styleEl = document.createElement('style');
            document.head.appendChild(styleEl);
            styleSheet.current = styleEl.sheet;
            containerRef.current.classList.add(additionalClass);
            return () => {
                document.head.removeChild(styleEl);
            };
        }

        return () => {};
    }, [additionalClass]);

    useLayoutEffect(() => {
        if (containerRef.current && extraComponentRef.current) {
            const children = Array.from(containerRef.current.children) as HTMLElement[];
            elementsRef.refs = children;
            styleSheet?.current.insertRule(`.${additionalClass} > * {visibility: hidden;}`, 0);
            resizeHandler(containerRef, extraComponentRef, elementsRef, items, setCount, startWith);
            styleSheet?.current.deleteRule(0);
        }
    }, [additionalClass, elementsRef, items, startWith]);

    return [containerRef, extraComponentRef, count];
};
