import React from 'react';
import { GroupByProps } from './GroupBy';
import { GroupTitleContent } from './GroupTitleContent';
import { useTableService } from '../Context';
import { GroupTitleRoot } from './GroupTitle.styles';

export interface GroupTitleInterface<T> extends GroupByProps<T> {
    isGroupTitle?: boolean;
}

export interface GroupTitleProps<T> {
    group: GroupTitleInterface<T>;
    disabled?: boolean;
    isSelectAll?: boolean;
}

export const GroupTitle = <T,>(props: GroupTitleProps<T>) => {
    const { colSpan } = useTableService();
    return (
        <GroupTitleRoot key={props.group.id} colSpan={colSpan()}>
            <GroupTitleContent {...props} />
        </GroupTitleRoot>
    );
};
