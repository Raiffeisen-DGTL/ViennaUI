import { ExpandingRowConfig, ExpandingRowModule, ExpandingRowState } from './ExpandingRowModule';
import { TableConfig, TableState } from '../../types';

export interface ExpandingRowService<T> {
    getExpandingRow: () => ExpandingRowState | undefined;
    getExpandedRow: () => string | string[] | undefined;
    isRowExpanded: (rowId: string) => boolean;
    toggleExpandingRow: (rowId: string) => void;
    getExpandingRowSettings: () => ExpandingRowConfig<T>['settings'] | undefined;
    toggleExpandingAllRows: () => void;
}

export const expandingRowServiceId = ExpandingRowModule.name;

type GetStateType<T> = () => TableState<T>;
type UpdateStateType<T> = (
    id: string | string[],
    newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)
) => void;

export const expandingRowService = <T>(
    getState: GetStateType<T>,
    updateState: UpdateStateType<T>,
    config: TableConfig<T>
): ExpandingRowService<T> => {
    const updateExpandingRow = (active: string | string[]) => {
        const state = getState();
        const expandingRow = {
            active: active ?? state.expandingRow?.active,
        };
        updateState(expandingRowServiceId, { ...state, expandingRow });
    };

    const getExpandingRow = () => {
        return getState().expandingRow;
    };

    const getExpandingRowSettings = () => {
        return config.expandingRow?.settings;
    };

    const settings = getExpandingRowSettings();
    const allowMultiple = settings?.allowMultiple;

    const actions = allowMultiple
        ? multipleExpanding<T>(getState, updateExpandingRow)
        : singleExpanding<T>(getState, updateExpandingRow);

    return { getExpandingRow, getExpandingRowSettings, ...actions };
};

function singleExpanding<T>(getState: GetStateType<T>, update: UpdateStateType<T>) {
    const getExpandedRow = () => {
        return getState().expandingRow?.active;
    };

    const isRowExpanded = (rowId: string) => {
        return getExpandedRow() === rowId;
    };

    const toggleExpandingRow = (rowId: string) => {
        const active = !isRowExpanded(rowId) ? rowId : '';
        update(active, getState());
    };

    const toggleExpandingAllRows = () => {
        // eslint-disable-next-line no-console
        console.warn('useful only with allowMultiple');
    };

    return { getExpandedRow, isRowExpanded, toggleExpandingRow, toggleExpandingAllRows };
}

function multipleExpanding<T>(getState: GetStateType<T>, update: UpdateStateType<T>) {
    const getExpandedRow = () => {
        const active = getState().expandingRow?.active;
        return Array.isArray(active) ? active : [];
    };

    const isRowExpanded = (rowId: string) => {
        return getExpandedRow().includes(rowId);
    };

    const toggleExpandingRow = (rowId: string) => {
        let active: string[];

        if (getExpandedRow().includes(rowId)) {
            active = getExpandedRow().filter((id) => id !== rowId);
        } else {
            active = getExpandedRow();
            active.push(rowId);
        }

        update(active, getState());
    };

    const toggleExpandingAllRows = () => {
        const currentItems = getExpandedRow();
        const allItems: string[] = getState()?.visibleRows ?? [];
        const visibleCurrent = currentItems.filter((id) => allItems.includes(id));

        const newState = visibleCurrent.length !== allItems.length ? allItems : [];

        update(newState, getState());
    };

    return { getExpandedRow, isRowExpanded, toggleExpandingRow, toggleExpandingAllRows };
}
