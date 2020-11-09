import { TableState, TableConfig } from '../../types';
import { GroupByOption } from './GroupByModule';

export interface GroupByService {
    getGroupBy: () => GroupByOption | undefined;
    setGroupBy: (id?: string) => void;
    setGroupByOptions: (options: GroupByOption[]) => void;
}

export const groupByService = function (state: TableState, update, config: TableConfig): GroupByService {
    const setGroupByOptions = (options: GroupByOption[]) => {
        config.groupBy = { options };
    };

    const getGroupBy = () => {
        return config.groupBy?.options.find((group) => group.id === state.groupBy?.id);
    };

    const setGroupBy = (id) => {
        update({ ...state, groupBy: { id } });
    };

    return { getGroupBy, setGroupBy, setGroupByOptions };
};
