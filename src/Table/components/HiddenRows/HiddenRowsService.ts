import { TableState, TableConfig } from '../../types';

export interface HiddenRowsService {
    getHideRows: () => string[];
    hideRow: (id: string) => void;
    showRow: (id: string) => void;
    hideAllRows: () => void;
    showAllRows: () => void;
}

export const hiddenRowsService = <T>(
    getState: () => TableState<T>,
    updateState: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void,
    getData?: () => T[],
    config?: TableConfig<T>
): HiddenRowsService => {
    const getHideRows: HiddenRowsService['getHideRows'] = () => getState().hiddenRows ?? [];

    const hideRow: HiddenRowsService['hideRow'] = (id) => {
        updateState('', (prev) => {
            return {
                ...prev,
                hiddenRows: prev.hiddenRows ? [...prev.hiddenRows, id] : [id],
            };
        });
    };

    const showRow: HiddenRowsService['hideRow'] = (id) => {
        updateState('', (prev) => {
            return {
                ...prev,
                hiddenRows: prev.hiddenRows ? prev.hiddenRows.filter((item) => item !== id) : [],
            };
        });
    };

    const hideAllRows: HiddenRowsService['hideAllRows'] = () => {
        updateState('', (prev) => {
            const dataKey = config?.base.settings.dataKey;
            const data = getData?.();
            return {
                ...prev,
                hiddenRows: data && dataKey ? data.map((item, index) => dataKey(item, index)) : [],
            };
        });
    };

    const showAllRows: HiddenRowsService['showAllRows'] = () => {
        updateState('', (prev) => {
            return {
                ...prev,
                hiddenRows: [],
            };
        });
    };

    return {
        getHideRows,
        hideRow,
        showRow,
        hideAllRows,
        showAllRows,
    };
};
