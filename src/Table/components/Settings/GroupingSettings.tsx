import React, { FC, ReactNode, useCallback, useMemo } from 'react';
import { Text } from '../../../Typography';
import { Select, SelectProps } from '../../../Select';
import { FormField } from '../../../FormField';
import { Box } from './GroupingSettings.styles';
import { useTableService, useTableLocalization } from '../Context';
import { GroupByOption, GroupByProps } from '../GroupBy';
import { TableReactComponent } from '../../types';

interface GroupProps {
    children: ReactNode;
    onGroupBy?: (event: React.MouseEvent<HTMLElement>, data: { id: string }) => void;
}
interface ItemProps {
    id: string;
    name: string;
    children?: ReactNode;
    selected?: boolean;
}

export type GroupingSettingsProps = FC<GroupProps> & { Item: FC<ItemProps> };

const parseGroupingOptions = <T,>(children: ReactNode): [GroupByOption<T>[], string] => {
    let selectedOption: string = '';
    const options: GroupByOption<T>[] = React.Children.map(
        React.Children.toArray(children) as TableReactComponent[],
        (child: TableReactComponent) => {
            // checks child type
            if (!child?.type?.displayName || child.type?.displayName !== 'Table.GroupingSettings.Item') {
                // eslint-disable-next-line no-console
                console.warn(`Unrecognized component, expected: Table.GroupingSettings.Item, received: ${child?.type}`);
                return undefined;
            }

            const { id, name, selected, children } = (child as TableReactComponent<ItemProps>).props;

            if (selected) {
                selectedOption = id;
            }

            const groups = React.Children.map(
                React.Children.toArray(children) as TableReactComponent[],
                (child: TableReactComponent) => {
                    if (!child?.type?.displayName || child.type?.displayName !== 'GroupBy') {
                        // eslint-disable-next-line no-console
                        console.warn(`Unrecognized component, expected: Table.GroupBy, received: ${child?.type}`);
                        return undefined;
                    }

                    return (child as TableReactComponent<GroupByProps<T>>).props;
                }
            );

            return { id, name, groups };
        }
    );

    return [options, selectedOption];
};

export const GroupingSettings: GroupingSettingsProps = <T,>(props: GroupProps) => {
    const { children, onGroupBy } = props;
    const localize = useTableLocalization();
    const { getGroupBy, setGroupBy, setGroupByOptions } = useTableService<T>();
    const list = useMemo(() => {
        const [list, selected] = parseGroupingOptions<T>(children);
        setGroupByOptions(list, selected);

        return list;
    }, [children]);

    const options = useMemo(() => {
        return list.map((group) => (
            <Select.Option key={group.id} value={group}>
                {group.name}
            </Select.Option>
        ));
    }, [list]);

    const onSelect: SelectProps<GroupByOption<T>>['onSelect'] = ({ value, event }) => {
        const id = (value as GroupByOption<T>).id;
        setGroupBy(id);

        if (typeof onGroupBy === 'function') {
            // TODO: некорректный тип в SelectProps или в onGroupBy
            onGroupBy(event as React.MouseEvent<HTMLElement>, { id });
        }
    };

    const onSelectMemo = useCallback(onSelect, [list, setGroupBy]);

    const currentGroupBy = useMemo(() => list.find((group) => group.id === getGroupBy()?.id), [getGroupBy(), list]);

    return (
        <Box data-id='table-settings-grouping'>
            <FormField>
                <FormField.Label>
                    <Text size='s' color='seattle100'>
                        {localize('ds.table.settings.groupBy')}
                    </Text>
                </FormField.Label>
                <FormField.Content>
                    <Select
                        size='m'
                        onSelect={onSelectMemo}
                        valueToString={(item: GroupByOption<T>) => {
                            return item?.name ?? '';
                        }}
                        value={currentGroupBy}>
                        {options}
                    </Select>
                </FormField.Content>
            </FormField>
        </Box>
    );
};

const Item = (props: ItemProps) => <>{props.name}</>;
Item.displayName = 'Table.GroupingSettings.Item';

GroupingSettings.Item = Item;
GroupingSettings.displayName = 'GroupingSettings';
