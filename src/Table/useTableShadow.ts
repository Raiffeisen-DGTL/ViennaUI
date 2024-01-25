import { useEffect, useRef, useState } from 'react';
import { debounce } from '../Utils';

interface ShadowSize {
    width: number;
    height: number;
}

export function useTableShadow(isPinnable: boolean) {
    const tableRef = useRef<null | HTMLTableElement>(null);
    const tableWrapperRef = useRef<null | HTMLDivElement>(null);
    const [shadowSize, setShadowSize] = useState<ShadowSize>({
        width: 0,
        height: 0,
    });
    const [hasShadow, setHasShadow] = useState(false);

    const getHasShadow = (): boolean => isPinnable && (tableWrapperRef.current?.scrollLeft || 0) > 0;
    const getShadowSize = (): ShadowSize => {
        const width = Array.from(tableRef.current?.querySelectorAll('thead th [class^="Pinner"]') || []).reduce(
            (width, $pinner) => {
                const $th = $pinner.closest('th');
                if ($th) {
                    return width + $th.offsetWidth;
                }
                return width;
            },
            0
        );
        return {
            width,
            height: tableWrapperRef.current?.offsetHeight || 0,
        };
    };
    const calcShadowSize = () => setShadowSize(getShadowSize());
    const resizeHandler = () => debounce(calcShadowSize);
    const scrollHandler = () => setHasShadow(getHasShadow());

    useEffect(() => {
        calcShadowSize();
        window.addEventListener('resize', resizeHandler);
        tableWrapperRef.current?.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
            tableWrapperRef.current?.removeEventListener('scroll', scrollHandler);
        };
    }, [isPinnable]);

    return {
        tableRef,
        tableWrapperRef,
        shadowSize,
        hasShadow,
    };
}
