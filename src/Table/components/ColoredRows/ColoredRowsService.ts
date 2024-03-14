import { ServiceFactory } from '../TableService/ServiceFactory';
import { ColoredRowsModule, ColoredRowsState, ColoredRowsStateItem } from './ColoredRowsModule';

export interface ColoredRowsService {
    getColoredRows: () => ColoredRowsState;
    getColoredRowColor: (id: ColoredRowsStateItem['id']) => ColoredRowsStateItem['color'] | undefined;
    setColoredRows: (state: ColoredRowsState) => void;
    setColoredRowsItem: (newItem: ColoredRowsStateItem) => void;
    removeColoredRowsItem: (id: ColoredRowsStateItem['id']) => void;
    removeAllColoredRows: () => void;
    toggleColoredRow: (item: ColoredRowsStateItem) => void;
    toggleSingleColoredRow: (item: ColoredRowsStateItem) => void;
}

export const coloredRowsService: ServiceFactory<ColoredRowsService> = function (getState, updateState) {
    const getColoredRows: ColoredRowsService['getColoredRows'] = () => {
        return getState().coloredRows || [];
    };

    const getColoredRowColor: ColoredRowsService['getColoredRowColor'] = (id) => {
        return getColoredRows().find((item) => item.id === id)?.color;
    };

    const setColoredRows: ColoredRowsService['setColoredRows'] = (state) => {
        updateState(ColoredRowsModule.name, (prev) => {
            return {
                ...prev,
                coloredRows: state,
            };
        });
    };

    const setColoredRowsItem: ColoredRowsService['setColoredRowsItem'] = (newItem) => {
        updateState(ColoredRowsModule.name, (prev) => {
            return {
                ...prev,
                coloredRows: [...(prev.coloredRows || []).filter((item) => item.id !== newItem.id), newItem],
            };
        });
    };

    const removeColoredRowsItem: ColoredRowsService['removeColoredRowsItem'] = (id) => {
        updateState(ColoredRowsModule.name, (prev) => {
            return {
                ...prev,
                coloredRows: (prev.coloredRows || []).filter((item) => item.id !== id),
            };
        });
    };

    const removeAllColoredRows: ColoredRowsService['removeAllColoredRows'] = () => {
        updateState(ColoredRowsModule.name, (prev) => {
            return {
                ...prev,
                coloredRows: [],
            };
        });
    };

    const toggleColoredRow: ColoredRowsService['toggleColoredRow'] = (item) => {
        if (getColoredRowColor(item.id)) {
            removeColoredRowsItem(item.id);
        } else {
            setColoredRowsItem(item);
        }
    };

    const toggleSingleColoredRow: ColoredRowsService['toggleSingleColoredRow'] = (item) => {
        if (getColoredRowColor(item.id)) {
            removeAllColoredRows();
        } else {
            removeAllColoredRows();
            setColoredRowsItem(item);
        }
    };

    return {
        getColoredRows,
        getColoredRowColor,
        setColoredRows,
        setColoredRowsItem,
        removeColoredRowsItem,
        removeAllColoredRows,
        toggleColoredRow,
        toggleSingleColoredRow,
    };
};
