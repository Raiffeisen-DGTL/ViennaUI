import { TableServiceFactoryConfig } from '../../types';
import { GroupByOption, GroupByModule } from './GroupByModule';

export interface GroupByService {
    getGroupBy: () => GroupByOption | undefined;
    setGroupBy: (id?: string) => void;
    setGroupByOptions: (options: GroupByOption[], selected?: string) => void;
}

export const groupByServiceId = GroupByModule.name;

export const groupByService: TableServiceFactoryConfig<GroupByService> = function (state, update, config) {
    const getGroupBy = () => {
        return config?.groupBy?.options.find((group) => group.id === state.groupBy?.id);
    };

    const setGroupBy = (id) => {
        update(groupByServiceId, { ...state, groupBy: { id } });
    };

    const setGroupByOptions = (options: GroupByOption[], selected?: string) => {
        config.groupBy = { options };

        if (selected) {
            setGroupBy(selected);
        }
    };

    return { getGroupBy, setGroupBy, setGroupByOptions };
};
