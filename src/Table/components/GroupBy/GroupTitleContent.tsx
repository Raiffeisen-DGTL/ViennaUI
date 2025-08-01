import React, { useCallback, useRef } from 'react';
import { Expander } from './Expander';
import { Checkbox, CheckboxProps } from '../../../Checkbox';
import { useTableService, useTableConfig } from '../Context';
import { Title, GroupContainer, CheckboxContainer } from './GroupTitle.styles';
import { GroupTitleProps } from './GroupTitle';
import { useGroupBy } from './useGroupBy';

export const GroupTitleContent = <T,>(props: GroupTitleProps<T>) => {
    const { group, disabled, isSelectAll = false } = props;
    const { selectable = true } = group;
    const { toggleSelectGroup, isGroupSelected, isGroupIndeterminated, isSelectedAll, getData, selectAll } =
        useTableService<T>();
    const { selectRow, base } = useTableConfig();
    const groupedData = useGroupBy({
        data: getData(),
        dataKey: base.settings.dataKey,
    });

    const isChecked = isSelectAll ? isSelectedAll(groupedData) : isGroupSelected(group);

    const timestamp = useRef(Date.now());

    const onChange = useCallback<NonNullable<CheckboxProps['onChange']>>(
        (event) => {
            if (Date.now() - timestamp.current < 200) return;

            timestamp.current = Date.now();

            const value = event.target.checked;

            const onSuccess = (isSelectedAll: boolean) => {
                if (typeof selectRow?.onSelect === 'function') {
                    const data = {
                        item: isSelectAll ? null : group,
                        isSelectedAll,
                        isChecked: value,
                        isRowIndeterminate: false,
                    };
                    selectRow.onSelect({ value: data, event });
                }
            };

            if (isSelectAll && !value) {
                selectAll([]);
                onSuccess(isSelectAll && value);
            } else {
                toggleSelectGroup(group, value, (tableState) => {
                    const isSelectedAllCheckboxes = isSelectedAll(
                        groupedData,
                        (tableState.selectRow?.selected ?? []) as T[]
                    );
                    onSuccess(isSelectedAllCheckboxes);
                });
            }
        },
        [isSelectAll, isSelectedAll, groupedData, selectRow, selectAll, toggleSelectGroup, group]
    );

    return (
        <GroupContainer
            $pinned={group.pinned}
            $isWithCheckbox={selectRow !== undefined && selectable}
            $isSelectableTable={selectRow !== undefined}
            $isSelectAll={isSelectAll}>
            {selectRow && selectable && (
                <CheckboxContainer>
                    <Checkbox
                        disabled={disabled}
                        checked={isChecked}
                        indeterminate={!isChecked && isGroupIndeterminated(group)}
                        onChange={onChange}
                    />
                </CheckboxContainer>
            )}
            {group.expandable && <Expander id={group.id} isActive />}
            {!isSelectAll && <Title $isWithCheckbox={selectRow !== undefined}>{group.title}</Title>}
        </GroupContainer>
    );
};
