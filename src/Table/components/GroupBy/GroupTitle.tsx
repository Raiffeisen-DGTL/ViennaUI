import React, { FC, useCallback } from 'react';
import { Checkbox } from '../../../Checkbox';
import { useTableService, useTableConfig } from '../Context';
import { Td, SelectTd, GroupTitleContainer } from './GroupTitle.styles';
import { GroupByProps } from './GroupBy';

export interface GroupTitleInterface extends GroupByProps {
    isGroupTitle: boolean;
}

export interface GroupTitleProps {
    group: GroupTitleInterface;
}

export const GroupTitle: FC<GroupTitleProps> = (props) => {
    const { group } = props;
    const { colSpan, toggleSelectGroup, isRowSelected } = useTableService();
    const { selectRow } = useTableConfig();

    const onChange = useCallback(
        (e) => {
            toggleSelectGroup(group, e.target.checked);

            if (typeof selectRow?.onSelect === 'function') {
                const data = {
                    item: group.id,
                    isChecked: e.target.checked,
                };
                selectRow.onSelect(e, data);
            }
        },
        [toggleSelectGroup, selectRow, group]
    );

    return (
        <GroupTitleContainer key={group.id} $pinned={group?.pinned}>
            {selectRow && (
                <SelectTd>
                    <Checkbox checked={isRowSelected(group.id)} onChange={onChange} />
                </SelectTd>
            )}
            <Td colSpan={colSpan()}>{group.title}</Td>
        </GroupTitleContainer>
    );
};
