import { TableConfig, TableState } from '../../types';
import { GroupByState } from '../GroupBy/GroupByModule';

export interface ExpandAllService {
    isAllExpanded: () => boolean;
    toggleExpandingAll: () => void;
}

export const expandAllService: <T>(
    getState: () => TableState<T>,
    update: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void,
    config: TableConfig<T>
) => ExpandAllService = (getState, updateState, config) => {
    const isAllExpanded = () => {
        const state = getState();
        const activeExpandingRows = state.expandingRow?.active;
        const expandedRows = Array.isArray(activeExpandingRows) ? activeExpandingRows : [];
        const allRows = state.allRows || [];
        const allowMultiple = config.expandingRow?.settings.allowMultiple;

        const expandedGroups = state.groupBy?.expanded ?? [];
        const allGroups = state.groupBy?.groupIds ?? [];

        return (!allowMultiple || expandedRows.length === allRows.length) && expandedGroups.length === allGroups.length;
    };

    const expandingAll = (collapse?: boolean) => {
        const allowMultiple = config.expandingRow?.settings.allowMultiple;
        updateState('expandAll', (prev) => {
            const allRows = prev.allRows || [];
            const allGroups = prev.groupBy?.groupIds ?? [];
            const groupBy = {
                ...(prev.groupBy ?? {}),
                expanded: collapse ? [] : allGroups,
            } as GroupByState;
            return {
                ...prev,
                ...(allowMultiple && {
                    expandingRow: {
                        active: collapse ? [] : allRows,
                    },
                }),
                groupBy,
            };
        });
    };

    const toggleExpandingAll = () => {
        expandingAll(isAllExpanded());
    };

    return { isAllExpanded, toggleExpandingAll };
};
