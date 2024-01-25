import React, { FC, useCallback } from 'react';
import { Item } from './Item';
import { Groups, GroupsProps } from '../Groups';

export interface FilterProps extends Omit<GroupsProps, 'size' | 'design'> {
    /** Дизайн */
    design?: 'primary' | 'ghost';
    /** Выравнивание */
    align?: 'horizontal' | 'vertical';
    /** Размер */
    size?: 'm';
}

export const Filter: FC<FilterProps> & {
    Item: typeof Item;
} = (props) => {
    const { children, size = 'm', design = 'primary', align = 'horizontal', ...attrs } = props;

    const constructChildren = useCallback(
        () => React.Children.toArray(children).map((child: any) => React.cloneElement(child, { size, design })),
        [children, size, design]
    );

    return (
        <Groups {...(attrs as {})} design={align} size='xs'>
            {constructChildren()}
        </Groups>
    );
};

Filter.displayName = 'Filter';
Filter.Item = Item;
