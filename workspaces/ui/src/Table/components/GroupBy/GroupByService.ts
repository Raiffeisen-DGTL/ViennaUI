import { ServiceFactoryConfig } from '../TableService/ServiceFactory';
import { GroupByOption, GroupByModule } from './GroupByModule';

export interface GroupByService {
    getGroupBy: () => GroupByOption | undefined;
    setGroupBy: (id?: string) => void;
    setGroupByOptions: (options: GroupByOption[], selected?: string) => void;
}

export const groupByServiceId = GroupByModule.name;

export const groupByService: ServiceFactoryConfig<GroupByService> = function (getState, update, config) {
    const getGroupBy = () => {
        const currentGroup = getState().groupBy?.id;
        return config?.groupBy?.options.find((group) => group.id === currentGroup);
    };

    const setGroupBy = (id) => {
        const state = getState();
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
