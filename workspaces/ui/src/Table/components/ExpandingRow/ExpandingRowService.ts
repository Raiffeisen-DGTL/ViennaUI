import { TableServiceFactoryConfig } from '../../types';
import { ExpandingRowModule } from './ExpandingRowModule';

export interface ExpandingRowService {
    getExpandingRow: () => any;
    getExpandedRow: () => string | string[] | undefined;
    isRowExpanded: (rowId: string) => boolean;
    toggleExpandingRow: (rowId: string) => void;
    getExpandingRowSettings: () => any;
}

export const expandingRowServiceId = ExpandingRowModule.name;

export const expandingRowService: TableServiceFactoryConfig<ExpandingRowService> = function (
    getState,
    updateState,
    config
) {
    const updateExpandingRow = (active) => {
        const state = getState();
        const expandingRow = { active };
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
        ? multipleExpanding(getState, updateExpandingRow)
        : singleExpanding(getState, updateExpandingRow);

    return { getExpandingRow, getExpandingRowSettings, ...actions };
};

function singleExpanding(getState, update) {
    const getExpandedRow = () => {
        return getState().expandingRow?.active;
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

function multipleExpanding(getState, update) {
    const getExpandedRow = () => {
        const active = getState().expandingRow?.active;
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
