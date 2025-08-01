import { GroupByModule, GroupByOption, GroupByState } from './GroupByModule';
import { GroupByProps } from './GroupBy';
import { TableConfig, TableState } from '../../types';

export interface GroupByService<T> {
    getGroupBy: () => GroupByOption<T> | undefined;
    setGroupBy: (id: string) => void;
    setGroupByOptions: (options: GroupByOption<T>[], selected?: string) => void;
    isGroupExpanded: (id: string) => boolean;
    toggleExpandingGroup: (id: string) => void;
    getExpandingGroup: (id: string) => GroupByProps<T> | undefined;
    toggleExpandingAllGroups: () => void;
}

export const groupByServiceId = GroupByModule.name;

export const groupByService = <T>(
    getState: () => TableState<T>,
    update: (id: string, newState: TableState<T> | ((prev: TableState<T>) => TableState<T>)) => void,
    config: TableConfig<T>
): GroupByService<T> => {
    const getGroupBy: GroupByService<T>['getGroupBy'] = () => {
        const currentGroup = getState().groupBy?.id;
        return config?.groupBy?.options.find((group) => group.id === currentGroup);
    };

    const setGroupBy: GroupByService<T>['setGroupBy'] = (id) => {
        update(groupByServiceId, (prev) => {
            const groupBy = { ...(prev.groupBy ?? {}), id } as GroupByState;
            return { ...prev, groupBy };
        });
    };

    const setGroupByOptions: GroupByService<T>['setGroupByOptions'] = (options, selected) => {
        config.groupBy = { options };

        if (selected) {
            setGroupBy(selected);
        }
    };

    const getExpandedGroups = () => {
        return getState().groupBy?.expanded ?? [];
    };

    const isGroupExpanded: GroupByService<T>['isGroupExpanded'] = (id) => {
        return getExpandedGroups().includes(id);
    };

    const toggleExpandingGroup: GroupByService<T>['toggleExpandingGroup'] = (id) => {
        update(groupByServiceId, (prev) => {
            const expanded: string[] = [].slice.call(prev.groupBy?.expanded ?? []);
            const index = expanded.findIndex((item) => item === id);

            if (index === -1) {
                expanded.push(id);
            } else {
                expanded.splice(index, 1);
            }

            const groupBy = { ...(prev.groupBy ?? {}), expanded } as GroupByState;
            return { ...prev, groupBy };
        });
    };

    const getExpandingGroup: GroupByService<T>['getExpandingGroup'] = (id) => {
        return (config.groupBy?.options ?? [])
            .reduce((acc: GroupByProps<T>[], option) => [...acc, ...(option?.groups ?? [])], [])
            .find((group) => group.id === id);
    };

    const toggleExpandingAllGroups: GroupByService<T>['toggleExpandingAllGroups'] = () => {
        update(groupByServiceId, (prev) => {
            const currentItems = getExpandedGroups() ?? [];
            const allItems = getState().groupBy?.groupIds ?? [];
            const newState = currentItems.length !== allItems.length ? allItems : [];

            const groupBy = {
                ...(prev.groupBy ?? {}),
                expanded: newState,
            } as GroupByState;
            return { ...prev, groupBy };
        });
    };

    return {
        getGroupBy,
        setGroupBy,
        setGroupByOptions,
        isGroupExpanded,
        toggleExpandingGroup,
        toggleExpandingAllGroups,
        getExpandingGroup,
    };
};
