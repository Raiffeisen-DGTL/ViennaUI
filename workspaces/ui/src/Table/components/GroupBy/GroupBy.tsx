import React, { FC } from 'react';

export interface GroupByProps {
    id: string;
    title: string;
    filter: (data: any) => any;
}

export const GroupBy: FC<GroupByProps> = (props: GroupByProps) => {
    return <>{props.id}</>;
};

GroupBy.displayName = 'GroupBy';
export default GroupBy;
