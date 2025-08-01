import React, { useCallback, MouseEvent, ChangeEvent, useRef } from 'react';
import { Checkbox, CheckboxProps } from '../../../Checkbox';
import { Box } from './Selector.styles';
import { useTableService, useTableConfig } from '../Context';
import { SELECT_ALL } from './SelectRowModule';
import { useEvent, useLatest } from '../../../Utils';
import { useGroupBy } from '../GroupBy';

export interface SelectorProps<T> {
    item: T;
    disabled?: boolean;
    indeterminate?: boolean;
    disableCheckboxRow?: T[];
}

const onClick = (e: MouseEvent) => e.stopPropagation();

export const Selector = <T,>({ item, indeterminate, disableCheckboxRow }: SelectorProps<T>) => {
    const {
        getData,
        toggleSelectRow,
        isRowSelected,
        getSelectedRows,
        isRowIndeterminated,
        isRowCheckboxDisabled,
        isSelectedAll,
    } = useTableService<T>();

    const { selectRow, selection, base } = useTableConfig<T>();
    const rows = getSelectedRows();

    const groupedData = useGroupBy({
        data: getData(),
        dataKey: base.settings.dataKey,
    });

    const onChange = useCallback<NonNullable<CheckboxProps['onChange']>>(
        (event) => {
            const isSelect = event.target.checked;
            const isIndeterminate = event.target.indeterminate;
            toggleSelectRow(item, { isSelect, isIndeterminate }, (tableState) => {
                const isSelectedAllCheckboxes = isSelectedAll(
                    groupedData,
                    (tableState.selectRow?.selected ?? []) as T[]
                );

                if (typeof selectRow?.onSelect === 'function') {
                    const data = {
                        item: item !== SELECT_ALL ? item : null,
                        isChecked: event.target.checked,
                        isRowIndeterminate: event.target.indeterminate,
                        isSelectedAll: isSelectedAllCheckboxes,
                    };
                    selectRow.onSelect({ value: data, event });
                }
            });
        },
        [groupedData, isRowCheckboxDisabled, isRowSelected, item, selectRow, toggleSelectRow]
    );

    const onChangeLatest = useLatest(onChange);

    const isDisabled =
        disableCheckboxRow?.includes(item as T) || selectRow?.disableCheckboxes || isRowCheckboxDisabled(item as T);

    const timestamp = useRef(Date.now());

    const onCheckboxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (Date.now() - timestamp.current < 200) return;

        timestamp.current = Date.now();

        if (isDisabled) return;

        const $checkbox = e.target as HTMLInputElement;
        $checkbox.checked = !$checkbox.checked;
        onChangeLatest.current(e);
    }, []);

    const [checkboxRef, checkboxTriggerOnChange] = useEvent<HTMLInputElement, ChangeEvent<HTMLInputElement>>(
        'change',
        onCheckboxChange
    );

    const isIndeterminate =
        (indeterminate && item === SELECT_ALL && !isRowSelected(item) && rows?.length !== 0) ||
        isRowIndeterminated(item as T);

    return (
        <Box $pointed={!isDisabled} onClick={checkboxTriggerOnChange}>
            {selection ? (
                selection.template({ data: item, isSelected: isRowSelected(item), onClick, onChange })
            ) : (
                <Checkbox
                    ref={checkboxRef}
                    disabled={isDisabled}
                    checked={isRowSelected(item)}
                    indeterminate={isIndeterminate}
                    onClick={onClick}
                />
            )}
        </Box>
    );
};
