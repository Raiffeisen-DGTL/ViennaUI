import { Module } from '../../types';
import { TableProps } from '../../Table';

export interface SelectRowConfig {
    disableSelectAll: TableProps['disableSelectAll'];
    onSelect?: TableProps['onSelect'];
    selectAll?: React.ReactNode;
}

export interface SelectRowState {
    selected?: any[];
}

export const SELECT_ALL = 'all';

export const SelectRowModule: Module = {
    name: 'selectRow',
    feature: 'SelectRow',
    initConfig: ({ child, settings, config }): SelectRowConfig => {
        const selectRow = config || {};
        const { onSelect, disableSelectAll } = settings;

        return {
            ...selectRow,
            selectAll: child,
            onSelect,
            disableSelectAll,
        };
    },

    initState: ({ settings }): SelectRowState => {
        const { selected } = settings;
        return {
            selected,
        };
    },
};
