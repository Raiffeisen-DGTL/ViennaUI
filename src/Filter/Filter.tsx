import React, { FC, ReactElement, ReactNode, useCallback } from 'react';
import { Item } from './Item';
import { Groups, GroupsProps } from '../Groups';
import { SizeType } from '../Utils';

export interface FilterProps extends Omit<GroupsProps, 'size' | 'design'> {
    /** Дизайн */
    design?: 'primary' | 'ghost';
    /** Выравнивание */
    align?: 'horizontal' | 'vertical';
    /** Размер */
    size?: SizeType;
}

export const Filter: FC<FilterProps> & {
    Item: typeof Item;
} = (props) => {
    const { children, size = 'm', design = 'primary', align = 'horizontal', ...attrs } = props;
    const constructChildren = useCallback(
        () =>
            React.Children.toArray(children).map((child: ReactNode) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as ReactElement, {
                        size: child.props.size || size,
                        design,
                    });
                }
                return child;
            }),
        [children, size, design]
    );

    return (
        <Groups {...attrs} design={align} size='xs'>
            {constructChildren()}
        </Groups>
    );
};

Filter.displayName = 'Filter';
Filter.Item = Item;
