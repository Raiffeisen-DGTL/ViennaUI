import { useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from 'vienna.react-use';
import { debounce } from '../../../../Utils';
import { useTableService, useTableState } from '../../Context';
import { Props } from '../BoxShadow';
import { getColumnsWidthQuery } from '../../../utils';

interface ShadowSize {
    width: number;
    height: number;
}

export const useTableShadow = ({ tableRef }: Props) => {
    const { columns, getData } = useTableService();
    const pinnableColumnsCount = columns().filter((item) => item.pinned).length;
    const state = useTableState();
    const columnsWidthQuery = getColumnsWidthQuery(state.columns?.list);
    const data = getData();

    const [shadowSize, setShadowSize] = useState<ShadowSize>({
        width: 0,
        height: 0,
    });
    const [hasShadow, setHasShadow] = useState(false);

    const getHasShadow = (): boolean => (tableRef.current?.scrollLeft || 0) > 0;
    const getShadowSize = (): ShadowSize => {
        const width = Array.from(tableRef.current?.querySelectorAll('thead th [data-role="pinner"]') || []).reduce(
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
            height: tableRef.current?.offsetHeight || 0,
        };
    };
    const calcShadowSize = () => setShadowSize(getShadowSize());
    const resizeHandler = () => debounce(calcShadowSize);
    const scrollHandler = () => setHasShadow(getHasShadow());

    useIsomorphicLayoutEffect(calcShadowSize, [pinnableColumnsCount, columnsWidthQuery, data]);

    useEffect(() => {
        calcShadowSize();
        window.addEventListener('resize', resizeHandler);
        tableRef.current?.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
            tableRef.current?.removeEventListener('scroll', scrollHandler);
        };
    }, [columns().length]);

    return {
        shadowSize,
        hasShadow,
    };
};
