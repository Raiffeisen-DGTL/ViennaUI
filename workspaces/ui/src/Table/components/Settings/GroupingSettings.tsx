import React, { FC, ReactNode, useCallback, useMemo } from 'react';
import { Text, Select, FormField } from 'vienna-ui';
import { Box } from './GroupingSettings.styles';
import { useTableService } from '../Context';
import { GroupByOption } from '../GroupBy/GroupByModule';

interface GroupProps {
    children: ReactNode;
    onGroupBy?: (event: React.MouseEvent<HTMLElement>, data: { id?: string }) => void;
}
interface ItemProps {
    name: string;
    children?: ReactNode;
}

export type GroupingSettingsProps = FC<GroupProps> & { Item: FC<ItemProps> };

const parseGroupingOptions = (children): GroupByOption[] => {
    const options: GroupByOption[] = React.Children.map(React.Children.toArray(children), (child: any) => {
        // checks child type
        if (!child?.type?.displayName || child.type?.displayName !== 'Table.GroupingSettings.Item') {
            // eslint-disable-next-line no-console
            console.warn(`Unrecognized component, expected: Table.GroupingSettings.Item, received: ${child?.type}`);
            return undefined;
        }

        const { id, name, children } = child.props;

        const groups = React.Children.map(React.Children.toArray(children), (child: any) => {
            if (!child?.type?.displayName || child.type?.displayName !== 'GroupBy') {
                // eslint-disable-next-line no-console
                console.warn(`Unrecognized component, expected: Table.GroupBy, received: ${child?.type}`);
                return undefined;
            }

            return child.props;
        });

        return { id, name, groups };
    });

    return options;
};

export const GroupingSettings: GroupingSettingsProps = (props) => {
    const { children, onGroupBy } = props;
    const { getGroupBy, setGroupBy, setGroupByOptions } = useTableService();
    const list = useMemo(() => {
        const list = parseGroupingOptions(children);
        setGroupByOptions(list);

        return list;
    }, [children]);

    const options = useMemo(() => {
        return list.map((group) => (
            <Select.Option key={group.id} value={group}>
                {group.name}
            </Select.Option>
        ));
    }, [list]);

    const onSelect = useCallback(
        (e, data) => {
            setGroupBy(data.value.id);

            if (typeof onGroupBy === 'function') {
                onGroupBy(e, { id: data.value.id });
            }
        },
        [list, setGroupBy]
    );

    const currentGroupBy = useMemo(() => list.find((group) => group.id === getGroupBy()?.id), [getGroupBy(), list]);

    return (
        <Box>
            <FormField>
                <FormField.Label>
                    <Text size='s' color='seattle100'>
                        Группировка
                    </Text>
                </FormField.Label>
                <FormField.Content>
                    <Select
                        size='m'
                        onSelect={onSelect}
                        valueToString={(item) => {
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

const Item = (props) => <>{props.name}</>;
Item.displayName = 'Table.GroupingSettings.Item';

GroupingSettings.Item = Item;
GroupingSettings.displayName = 'GroupingSettings';

export default GroupingSettings;
