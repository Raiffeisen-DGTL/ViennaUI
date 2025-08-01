import { ReactElement } from 'react';
import { Module, TableData } from '../../types';
import { omit } from '../../../Utils/omit';
import { GroupByProps } from './GroupBy';

export interface GroupByOption<T> {
    id: string;
    name: string;
    groups: GroupByProps<T>[];
}
export interface GroupByConfig<T> {
    options: GroupByOption<T>[];
}

export interface GroupByState {
    id: string;
    expanded: string[];
    groupIds: string[];
}

// interface InitConfigProps {
//     child: { props: GroupByProps };
//     config?: GroupByConfig;
// }
//
// interface InitStateProps {
//     child: { props: GroupByProps };
//     config?: GroupByState;
//     expanded: string[];
//     groupIds: string[];
// }

export const GroupByModule: Module<
    GroupByConfig<TableData>,
    GroupByState,
    TableData,
    ReactElement<GroupByProps<TableData>>
> = {
    name: 'groupBy',
    initConfig: ({ child, config }) => {
        const defaultGroupBy: GroupByOption<TableData> = config?.options?.length
            ? config.options[0]
            : { id: 'default', name: 'default', groups: [] };
        defaultGroupBy.groups.push(omit(child.props, 'expandedDefault'));

        return { options: [defaultGroupBy] };
    },
    initState: ({ child, config }) => {
        const props = child.props;
        const expanded = config?.expanded ?? [];
        const groupIds = config?.groupIds ?? [];

        if (props.expandable && (props.expandedDefault ?? true)) {
            expanded.push(props.id);
        }
        groupIds.push(props.id);

        return { id: 'default', expanded, groupIds };
    },
    conditionalFeature: ({ config }) => {
        return (config?.expanded ?? []).length > 0 ? 'ExpandingGroup' : null;
    },
};
