import { Module } from '../../types';
import { GroupByProps } from './GroupBy';

export interface GroupByOption {
    id: string;
    name: string;
    groups: GroupByProps[];
}
export interface GroupByConfig {
    options: GroupByOption[];
}

export interface GroupByState {
    id: string;
}

export const GroupByModule: Module = {
    name: 'groupBy',
    initConfig: ({ child, config }): GroupByConfig => {
        const defaultGroupBy = config ? config.options[0] : { id: 'default', name: 'default', groups: [] };
        const props = child.props;
        defaultGroupBy.groups.push(props);

        return { options: [defaultGroupBy] };
    },
    initState: (): GroupByState => {
        return { id: 'default' };
    },
};
