import { useTableService } from '../Context';
import { GroupTitleInterface } from './GroupTitle';
import { GroupByProps } from './GroupBy';

function groupTitleItem(group: GroupByProps): GroupTitleInterface {
    return {
        isGroupTitle: true,
        ...group,
    };
}

export function useGroupBy(data): any[] {
    const { getGroupBy } = useTableService();
    const groupBy = getGroupBy();

    if (!groupBy || !Array.isArray(groupBy.groups) || groupBy.groups.length === 0) {
        return data;
    }

    const result =
        groupBy.groups.reduce((acc: any, group) => {
            const groupData = data.filter(group.filter);
            acc.push(groupTitleItem(group));
            return acc.concat(groupData);
        }, []) ?? [];
    return result;
}
