import { TableState } from '../../types';
import { TableProps } from '../../Table';
import { SELECT_ALL } from './SelectRowModule';
import { GroupTitleInterface } from '../GroupBy';

export interface SelectRowService {
    getSelectedRows: () => TableProps['selected'];
    getData: () => any[];
    isRowSelected: (id: any) => boolean;
    selectRow: (item: any) => any[];
    deselectRow: (item: any) => any[];
    toggleSelectRow: (item: any, isSelect: boolean) => void;
    toggleSelectGroup: (group: GroupTitleInterface, isSelect: boolean) => void;
    selectAll: (items: any[]) => void;
}

export function selectRowService(state: TableState, updateState: any, data): SelectRowService {
    const getData = () => {
        return data;
    };

    const getSelectedRows = () => {
        return state.selectRow?.selected ?? [];
    };

    const isSelectedAll = () => {
        const selected = getSelectedRows();

        if (data.length === 0 || selected.length < data.length) {
            return false;
        }

        const result = data.reduce((acc, item) => {
            return selected.includes(item) && acc;
        }, true);

        return result;
    };

    const isRowSelected = (item) => {
        if (item === SELECT_ALL) {
            return isSelectedAll();
        }

        const selected = getSelectedRows();
        return selected.includes(item);
    };

    const selectRow = (item) => {
        const selected = getSelectedRows();
        selected.push(item);
        return selected;
    };

    const deselectRow = (item) => {
        return getSelectedRows().filter((i) => i !== item);
    };

    const toggleSelectRow = (item, checked) => {
        let selected;

        if (item === SELECT_ALL) {
            selected = checked ? [...data] : [];
        } else {
            selected = checked ? selectRow(item) : deselectRow(item);
        }

        updateState({ ...state, selectRow: { selected } });
    };

    const toggleSelectGroup = (group: GroupTitleInterface, checked) => {
        const current = getSelectedRows();
        const groupData = data.filter(group.filter);

        let selected;
        if (checked) {
            current.push(group.id);
            selected = current.concat(groupData);
        } else {
            selected = current.filter((i) => i !== group.id && !groupData.includes(i));
        }

        updateState({ ...state, selectRow: { selected } });
    };

    const selectAll = (items) => {
        updateState({ ...state, selectRow: { selected: [...items] } });
    };

    return {
        getData,
        getSelectedRows,
        isRowSelected,
        selectRow,
        deselectRow,
        toggleSelectRow,
        toggleSelectGroup,
        selectAll,
    };
}
