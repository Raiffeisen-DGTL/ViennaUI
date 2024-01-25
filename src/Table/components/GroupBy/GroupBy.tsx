import React, { FC } from 'react';

export interface GroupByProps {
    id: string;
    title: string;
    filter: (data: any) => any;
    pinned?: boolean;
}

export const GroupBy: FC<GroupByProps> = (props) => {
    return <>{props.id}</>;
};

GroupBy.displayName = 'GroupBy';
