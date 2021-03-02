import React, { useCallback } from 'react';
import { Item, Props as ItemProps } from './Item';
import { Groups, GroupsProps } from '../Groups';

interface Props extends Omit<GroupsProps, 'size' | 'design'> {
    /** Дизайн */
    design?: 'primary' | 'ghost';
    /** Выравнивание */
    align?: 'horizontal' | 'vertical';
    /** Размер */
    size?: 'm';
}

export const Filter: React.FC<React.PropsWithChildren<Props>> & {
    Item: React.FC<React.PropsWithChildren<ItemProps>>;
} = (props: React.PropsWithChildren<Props>) => {
    const { children, size = 'm', design = 'primary', align = 'horizontal', ...attrs } = props;

    const constructChildren = useCallback(
        () => React.Children.toArray(children).map((child: any) => React.cloneElement(child, { size, design })),
        [children, size, design]
    );

    return (
        <Groups design={align} {...attrs}>
            {constructChildren()}
        </Groups>
    );
};

Filter.displayName = 'Filter';
Filter.Item = Item;
export default Filter;
