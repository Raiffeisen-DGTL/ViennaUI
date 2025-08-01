import { TableItemGroupByType, TableState } from '../../types';
import { TableProps } from '../../Table';
import { SELECT_ALL, SelectRowModule, SelectRowState } from './SelectRowModule';
import { GroupTitleInterface } from '../GroupBy';
import { isEqualObjects } from '../../../Utils';

export interface SelectDataObject {
    isSelect: boolean;
    isIndeterminate?: boolean;
    isCheckboxDisabled?: boolean;
}
type ToggleSelectRowAction<T> = (item: T, onSuccess?: (state: TableState<T>) => void) => void;
export interface SelectRowService<T> {
    getSelectedRows: (currentState?: TableState<T>) => NonNullable<TableProps<T>['selected']>;
    getData: () => T[];
    isRowSelected: (
        id: T | TableItemGroupByType<T | GroupTitleInterface<T>>,
        selectedItems?: (T | GroupTitleInterface<T>)[]
    ) => boolean;
    isRowIndeterminated: (id: T) => boolean;
    isRowCheckboxDisabled: (id: T) => boolean;
    selectRow: ToggleSelectRowAction<T>;
    disableCheckboxRow: (items: T[]) => void;
    indeterminateRow: ToggleSelectRowAction<T>;
    disableCheckbox: ToggleSelectRowAction<T>;
    deselectRow: ToggleSelectRowAction<T>;
    toggleSelectRow: (item: T | 'all', data: SelectDataObject, onSuccess?: (state: TableState<T>) => void) => void;
    toggleSelectGroup: (
        group: GroupTitleInterface<T>,
        isSelect: boolean,
        onSuccess?: (state: TableState<T>) => void
    ) => void;
    isGroupSelected: (group: GroupTitleInterface<T>) => boolean;
    isGroupIndeterminated: (group: GroupTitleInterface<T>) => boolean;
    isSelectedAll: (data: (T | GroupTitleInterface<T>)[], selectedItems?: (T | GroupTitleInterface<T>)[]) => boolean;
    selectAll: (items: T[], onSuccess?: (state: TableState<T>) => void) => void;
    deselectAll: (onSuccess?: (state: TableState<T>) => void) => void;
}

export const selectRowService = <T>(
    getState: () => TableState<T>,
    updateState: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void,
    _getData?: () => T[]
): SelectRowService<T> => {
    const getData: SelectRowService<T>['getData'] = () => {
        return typeof _getData === 'function' ? _getData() : [];
    };

    const getSelectedRows: SelectRowService<T>['getSelectedRows'] = (currentState) => {
        const st = currentState ?? getState();
        return st.selectRow?.selected ?? [];
    };

    const getIndeterminatedRows = (currentState?: TableState<T>) => {
        const st = currentState ?? getState();
        return st.selectRow?.indeterminated ?? [];
    };

    const getCheckboxDisabledRows = (currentState?: TableState<T>) => {
        const st = currentState ?? getState();
        return st.selectRow?.disabled ?? [];
    };

    const getDataWithoutDisabled = () => {
        const data = getData();
        const disabledRows = getCheckboxDisabledRows();
        return (
            data?.filter(
                (item) =>
                    !disabledRows.some((disabledRow) => isEqualObjects(disabledRow as object, item as object, true))
            ) || []
        );
    };

    const update = (selectRow: SelectRowState<T>, onSuccess?: (state: TableState<T>) => void) => {
        updateState(SelectRowModule.name, (prev) => {
            const disabled = getCheckboxDisabledRows(prev);
            const newState: TableState<T> = { ...prev, selectRow: { ...selectRow, disabled } };
            onSuccess?.(newState);
            return newState;
        });
    };

    const isEqualItems =
        <T, C>(obj1: T, result: boolean) =>
        (obj2: C) =>
            (typeof obj1 === 'object'
                ? !isEqualObjects(obj1 as object, obj2 as object, false, ['groupBy', 'groupId'])
                : obj1 !== (obj2 as unknown as T)) === result;

    const isRowCheckboxDisabled: SelectRowService<T>['isRowCheckboxDisabled'] = (item) => {
        const disabled = getCheckboxDisabledRows();
        return disabled.includes(item) || disabled.filter(isEqualItems(item, false)).length > 0;
    };

    const isRowSelected: SelectRowService<T>['isRowSelected'] = (item, selectedItems) =>
        (selectedItems ?? getSelectedRows()).some((row) => isEqualItems(item, false)(row));

    const isSelectedAll: SelectRowService<T>['isSelectedAll'] = (data, selectedItems) => {
        return (
            data.length > 0 &&
            data
                .filter((item) => !(item as GroupTitleInterface<T>).isGroupTitle && !isRowCheckboxDisabled(item as T))
                .every((item) => isRowSelected(item, selectedItems))
        );
    };

    const isGroupSelected = (group: GroupTitleInterface<T>) => {
        const data = getDataWithoutDisabled();
        const groupData = data.filter((item) => group.filter(item));
        return groupData.every((item) => isRowSelected(item));
    };

    const isGroupIndeterminated = (group: GroupTitleInterface<T>) => {
        const data = getData();
        const groupData = data.filter(group.filter);
        return groupData.some((item) => isRowSelected(item));
    };

    const isRowIndeterminated: SelectRowService<T>['isRowIndeterminated'] = (item) => {
        const indeteminated = getIndeterminatedRows();
        return indeteminated.includes(item);
    };

    const selectRow: SelectRowService<T>['selectRow'] = (item, onSuccess) => {
        updateState(SelectRowModule.name, (prev) => {
            const selected = getSelectedRows(prev);
            selected.push(item);
            const newState: TableState<T> = { ...prev, selectRow: { ...prev.selectRow, selected } };
            onSuccess?.(newState);
            return newState;
        });
    };

    const indeterminateRow: SelectRowService<T>['indeterminateRow'] = (item, onSuccess) => {
        updateState(SelectRowModule.name, (prev) => {
            const indeterminated = getIndeterminatedRows(prev);
            indeterminated.push(item);
            const newState: TableState<T> = { ...prev, selectRow: { ...prev.selectRow, indeterminated } };
            onSuccess?.(newState);
            return newState;
        });
    };

    const disableCheckbox: SelectRowService<T>['disableCheckbox'] = (item, onSuccess) => {
        updateState(SelectRowModule.name, (prev) => {
            const disabled = getCheckboxDisabledRows(prev);
            disabled.push(item);
            const newState: TableState<T> = { ...prev, selectRow: { ...prev.selectRow, disabled } };
            onSuccess?.(newState);
            return newState;
        });
    };

    const deselectRow: SelectRowService<T>['deselectRow'] = (item, onSuccess) => {
        updateState(SelectRowModule.name, (prev) => {
            const selected = getSelectedRows(prev).filter(isEqualItems(item, true));
            const indeterminated = getIndeterminatedRows(prev).filter(isEqualItems(item, true));
            const disabled = getCheckboxDisabledRows();
            const newState: TableState<T> = { ...prev, selectRow: { selected, indeterminated, disabled } };
            onSuccess?.(newState);
            return newState;
        });
    };

    const toggleSelectRow: SelectRowService<T>['toggleSelectRow'] = (
        item,
        { isSelect, isIndeterminate, isCheckboxDisabled },
        onSuccess
    ) => {
        let selected: T[] = [];

        if (item === SELECT_ALL) {
            const data = getDataWithoutDisabled();
            const disabledRows = getCheckboxDisabledRows();
            selected = isSelect || isIndeterminate ? [...data] : [];
            update({ selected, indeterminated: [] as T[], disabled: disabledRows });

            return;
        }
        let selector = deselectRow;
        if (isSelect) selector = selectRow;
        if (isIndeterminate) selector = indeterminateRow;
        if (isCheckboxDisabled) selector = disableCheckbox;

        selector(item, onSuccess);
    };

    const toggleSelectGroup: SelectRowService<T>['toggleSelectGroup'] = (group, checked, onSuccess) => {
        const data = getDataWithoutDisabled();
        const current = getSelectedRows();
        const groupData: T[] = data.filter((item) => group.filter(item));

        let selected: T[] = [];
        if (checked) {
            selected = current.concat(groupData);
        } else {
            selected = current.filter((i) => !groupData.some(isEqualItems(i, false)));
        }

        update({ selected }, onSuccess);
    };

    const selectAll: SelectRowService<T>['selectAll'] = (items, onSuccess) => {
        update({ selected: [...items] }, onSuccess);
    };

    const deselectAll: SelectRowService<T>['deselectAll'] = (onSuccess) => {
        update({ selected: [] }, onSuccess);
    };

    const disableCheckboxRow: SelectRowService<T>['disableCheckboxRow'] = (items) => {
        update({ disabled: [...items] });
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
        deselectAll,
        indeterminateRow,
        disableCheckbox,
        isGroupSelected,
        isRowIndeterminated,
        isGroupIndeterminated,
        disableCheckboxRow,
        isRowCheckboxDisabled,
        isSelectedAll,
    };
};
