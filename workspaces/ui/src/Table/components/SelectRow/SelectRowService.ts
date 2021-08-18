import { TableState } from '../../types';
import { ServiceFactory } from '../TableService/ServiceFactory';
import { TableProps } from '../../Table';
import { SELECT_ALL, SelectRowModule } from './SelectRowModule';
import { GroupTitleInterface } from '../GroupBy';

export interface SelectRowService {
    getSelectedRows: () => TableProps['selected'];
    getData: () => any[];
    isRowSelected: (id: any) => boolean;
    selectRow: (item: any) => void;
    deselectRow: (item: any) => void;
    toggleSelectRow: (item: any, isSelect: boolean) => void;
    toggleSelectGroup: (group: GroupTitleInterface, isSelect: boolean) => void;
    selectAll: (items: any[]) => void;
}

export const selectRowService: ServiceFactory<SelectRowService> = function (getState, updateState, _getData) {
    const getData = () => {
        return typeof _getData === 'function' ? _getData() : [];
    };

    const getSelectedRows = (currentState?: TableState) => {
        const st = currentState ?? getState();
        return st.selectRow?.selected ?? [];
    };

    const update = (selectRow) => {
        const state = getState();
        updateState(SelectRowModule.name, { ...state, selectRow });
    };

    const isSelectedAll = () => {
        const selected = getSelectedRows();
        const data = getData() ?? [];

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
        updateState(SelectRowModule.name, (prev) => {
            const selected = getSelectedRows(prev);
            selected.push(item);
            const newState = { ...prev, selectRow: { selected } };

            return newState;
        });
    };

    const deselectRow = (item) => {
        updateState(SelectRowModule.name, (prev) => {
            const selected = getSelectedRows(prev).filter((i) => i !== item);
            return { ...prev, selectRow: { selected } };
        });
    };

    const toggleSelectRow = (item, checked) => {
        let selected;

        if (item === SELECT_ALL) {
            const data = getData();
            selected = checked ? [...data] : [];
            update({ selected });
            return;
        }

        const selector = checked ? selectRow : deselectRow;
        selector(item);
    };

    const toggleSelectGroup = (group: GroupTitleInterface, checked) => {
        const data = getData();
        const current = getSelectedRows();
        const groupData: any[] = data.filter(group.filter);

        let selected;
        if (checked) {
            current.push(group.id);
            selected = current.concat(groupData);
        } else {
            selected = current.filter((i) => i !== group.id && !groupData.includes(i));
        }

        update({ selected });
    };

    const selectAll = (items) => {
        update({ selected: [...items] });
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
};
