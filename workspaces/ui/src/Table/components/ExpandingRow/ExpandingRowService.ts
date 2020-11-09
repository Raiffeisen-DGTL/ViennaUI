import { TableState, TableConfig } from '../../types';

export interface ExpandingRowService {
    getExpandingRow: () => any;
    getExpandedRow: () => string | string[] | undefined;
    isRowExpanded: (rowId: string) => boolean;
    toggleExpandingRow: (rowId: string) => void;
    getExpandingRowSettings: () => any;
}
export function expandingRowService(state: TableState, updateState: any, config: TableConfig): ExpandingRowService {
    const updateExpandingRow = (active) => {
        const expandingRow = { ...state.expandingRow, active };
        updateState({ ...state, expandingRow });
    };

    const getExpandingRow = () => {
        return state.expandingRow;
    };

    const getExpandingRowSettings = () => {
        return config.expandingRow?.settings;
    };

    const settings = getExpandingRowSettings();
    const allowMultiple = settings?.allowMultiple;

    const actions = allowMultiple
        ? multipleExpanding(state, updateExpandingRow)
        : singleExpanding(state, updateExpandingRow);

    return { getExpandingRow, getExpandingRowSettings, ...actions };
}

function singleExpanding(state: TableState, update) {
    const getExpandedRow = () => {
        return state.expandingRow?.active;
    };

    const isRowExpanded = (rowId) => {
        return getExpandedRow() === rowId;
    };

    const toggleExpandingRow = (rowId) => {
        const active = !isRowExpanded(rowId) ? rowId : undefined;
        update(active);
    };

    return { getExpandedRow, isRowExpanded, toggleExpandingRow };
}

function multipleExpanding(state: TableState, update) {
    const getExpandedRow = () => {
        const active = state.expandingRow?.active;
        return Array.isArray(active) ? active : [];
    };

    const isRowExpanded = (rowId) => {
        return getExpandedRow().includes(rowId);
    };

    const toggleExpandingRow = (rowId) => {
        let active: string[];

        if (isRowExpanded(rowId)) {
            active = getExpandedRow().filter((id) => id !== rowId);
        } else {
            active = getExpandedRow();
            active.push(rowId);
        }

        update(active);
    };

    return { getExpandedRow, isRowExpanded, toggleExpandingRow };
}
