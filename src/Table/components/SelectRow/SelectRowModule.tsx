import { ReactNode } from 'react';
import { Module, TableData } from '../../types';
import { TableProps } from '../../Table';

export interface SelectRowConfig<T> {
    disableSelectAll: TableProps<T>['disableSelectAll'];
    disableCheckboxSelectAll: TableProps<T>['disableCheckboxSelectAll'];
    onSelect?: TableProps<T>['onSelect'];
    selectAll?: ReactNode;
    disableCheckboxes?: TableProps<T>['disableCheckboxes'];
    disableCheckboxRow?: TableProps<T>['disableCheckboxRow'];
}

export interface SelectRowState<T> {
    selected?: T[];
    indeterminated?: T[];
    disabled?: T[];
}

export const SELECT_ALL = 'all';

export const SelectRowModule: Module<SelectRowConfig<TableData>, SelectRowState<TableData>, TableData> = {
    name: 'selectRow',
    feature: 'SelectRow',
    initConfig: ({ child, settings, config }): SelectRowConfig<TableData> => {
        const selectRow = config || {};
        const { onSelect, disableSelectAll, disableCheckboxSelectAll, disableCheckboxes, disableCheckboxRow } =
            settings;

        return {
            ...selectRow,
            selectAll: child,
            onSelect,
            disableSelectAll,
            disableCheckboxSelectAll,
            disableCheckboxes,
            disableCheckboxRow,
        };
    },

    initState: ({ settings }): SelectRowState<TableData> => {
        const { selected, indeterminated, disableCheckboxRow } = settings;
        return {
            selected,
            indeterminated,
            disabled: disableCheckboxRow,
        };
    },
};
