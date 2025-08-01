import { useMemo, useState, useRef, RefObject, ReactNode } from 'react';
import { useIsomorphicLayoutEffect, useWindowResize } from 'vienna.react-use';

const closureClassName = (() => {
    let count = 0;
    return () => {
        count++;
        return `usecramlist-cache-${count}`;
    };
})();

const isClient = typeof window !== 'undefined';

const paddingsSum = (elem: Element) => {
    if (isClient) {
        // для SSR проверка наличия window
        const computed = window.getComputedStyle(elem);
        return (
            parseInt(computed.getPropertyValue('padding-left'), 10) +
            parseInt(computed.getPropertyValue('padding-right'), 10)
        );
    }

    return 0;
};

const marginsSum = (elem: Element) => {
    if (isClient) {
        // для SSR проверка наличия window
        const computed = window.getComputedStyle(elem);
        return (
            parseInt(computed.getPropertyValue('margin-left'), 10) +
            parseInt(computed.getPropertyValue('margin-right'), 10)
        );
    }

    return 0;
};

const resizeHandler = (
    containerRef: RefObject<HTMLElement>,
    extraComponentRef: RefObject<HTMLElement>,
    elementsRef: { refs: HTMLElement[] },
    items: ReactNode[],
    setCount: (count: number) => void,
    startWith: number,
    visibleExtraComponent?: boolean
) => {
    if (containerRef.current && extraComponentRef && extraComponentRef.current) {
        let sum = 0;
        let count = 0;
        const main: HTMLElement[] = elementsRef.refs;

        const extraElement = extraComponentRef.current;
        const extra: number = extraElement.offsetWidth || main[items.length]?.offsetWidth || 0;
        const paddingsWidth = paddingsSum(containerRef.current);
        const parentWidth = containerRef.current.offsetWidth - paddingsWidth;

        if (!visibleExtraComponent) {
            extraElement.style.visibility = 'hidden'; // сокрытие компонента заместитиеля
            extraElement.style.position = 'fixed'; // убирем его что бы не занимал места

            // '-1' -> вычитаем блок "Еще"
            for (let idx = 0; idx < main.length - 1; idx++) {
                main[idx].style.width = ''; // сброс
                main[idx].style.display = ''; // сброс
            }
        }

        for (let idx = 0; idx < main.length - 1; idx++) {
            if (main[idx] === extraComponentRef.current) {
                continue;
            }
            main[idx].style.display = '';
            const prevSum = sum;
            sum += main[idx].offsetWidth + marginsSum(main[idx]);
            if (startWith === 0 && sum > parentWidth && idx + 1 > startWith) {
                count++;
                main[idx].style.display = 'none';
            }
            if (
                startWith === 0 &&
                count &&
                idx &&
                idx - 1 > startWith &&
                main[idx - 1].style.display !== 'none' &&
                prevSum + extra + marginsSum(extraElement) + marginsSum(extraElement) > parentWidth
            ) {
                count++;
                main[idx - 1].style.display = 'none';
            }
        }

        // Код отвечающий за то чтобы всегда показывать те элементы которые меньше чем startWith
        // '-1' -> вычитаем блок "Еще"
        if (startWith > 0 && main.length - 1 > startWith) {
            for (let idx = startWith; idx < main.length - 1; idx++) {
                main[idx].style.display = 'none';
                count++;
            }
        }

        if (count) {
            extraElement.style.visibility = 'visible';
            extraElement.style.position = '';
        }

        setCount(count);
    }
};

export const useCustomCramList = (items: ReactNode[], startWith = 0, visibleExtraComponent = false) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const extraComponentRef = useRef<HTMLDivElement>(null);
    const elementsRef = useMemo(() => ({ refs: [] as HTMLElement[] }), []);
    const additionalClass = useMemo(() => closureClassName(), []);
    const styleSheet = useRef<CSSStyleSheet | null>();

    const [count, setCount] = useState(items.length);

    useWindowResize(() =>
        resizeHandler(containerRef, extraComponentRef, elementsRef, items, setCount, startWith, visibleExtraComponent)
    );

    useIsomorphicLayoutEffect(() => {
        if (containerRef.current && isClient) {
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

    useIsomorphicLayoutEffect(() => {
        if (containerRef.current && extraComponentRef.current) {
            const children = Array.from(containerRef.current.children) as HTMLElement[];
            elementsRef.refs = children;
            styleSheet.current?.insertRule(`.${additionalClass} > * {visibility: hidden;}`, 0);
            resizeHandler(
                containerRef,
                extraComponentRef,
                elementsRef,
                items,
                setCount,
                startWith,
                visibleExtraComponent
            );
            styleSheet.current?.deleteRule(0);
        }
    }, [additionalClass, elementsRef, items, startWith]);

    // Правильно, конечно, указать возвращаемый тип во время объявления функции, но
    // будет получена ошибка Parsing error: Cannot read properties of undefined (reading 'map')
    // Вероятней всего, это связано со старой версией линтера
    return [containerRef, extraComponentRef, count] as const;
};
