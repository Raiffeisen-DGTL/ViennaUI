import React, { useCallback } from 'react';
import { AttachIcon } from 'vienna.icons';
import { Box, Label } from './SelectAll.styles';
import { Link } from '../../../Link';
import { useTableService, useTableLocalization, useTableConfig } from '../Context';
import { TableState } from '../../types';

export interface SelectAllProps<T> {
    fullData: T[];
}

export const SelectAll = <T,>(props: SelectAllProps<T>) => {
    const { fullData } = props;
    const { getData, selectAll, getSelectedRows, isSelectedAll, deselectAll } = useTableService<T>();
    const { selectRow } = useTableConfig();
    const localize = useTableLocalization();
    const data = getData();
    const selectedRows = getSelectedRows();
    const isSelectedAllPage = isSelectedAll(data, selectedRows) && selectedRows?.length !== fullData?.length;
    const isSelectedAllTable = isSelectedAll(fullData, selectedRows);

    const onSelect = useCallback(
        (event: React.MouseEvent, state: TableState<T>) => {
            const updatedSelectedRows = state.selectRow?.selected ?? [];
            if (typeof selectRow?.onSelect === 'function') {
                const dataSelected = {
                    isSelectedAll: isSelectedAll(data, updatedSelectedRows),
                    isSelectedFullData: isSelectedAll(fullData, updatedSelectedRows),
                };
                selectRow.onSelect({ value: dataSelected, event });
            }
        },
        [data, fullData, isSelectedAll, selectRow]
    );

    const onSelectAll = useCallback(
        (e: React.MouseEvent) => {
            selectAll(fullData, (state) => {
                onSelect(e, state);
            });
        },
        [selectAll, fullData, onSelect]
    );

    const onDeselectAll = useCallback(
        (e: React.MouseEvent) => {
            deselectAll((state) => {
                onSelect(e, state);
            });
        },
        [deselectAll, onSelect]
    );

    return (
        <>
            {isSelectedAllPage && (
                <Box>
                    <span>
                        <Label>
                            {`${localize('ds.table.settings.selectAll.fullData')[2]} (${data.length}) ${
                                localize('ds.table.settings.selectAll.fullData')[3]
                            }`}
                        </Label>
                        <Label>
                            <Link design='accent' onClick={onSelectAll}>
                                <AttachIcon />
                                {`${localize('ds.table.settings.selectAll.fullData')[0]} (${fullData.length}) ${
                                    localize('ds.table.settings.selectAll.fullData')[1]
                                }`}
                            </Link>
                        </Label>
                    </span>
                </Box>
            )}

            {isSelectedAllTable && (
                <Box>
                    <span>
                        <Label>
                            {`${localize('ds.table.settings.selectAll.onPage')[2]} (${fullData.length}) ${
                                localize('ds.table.settings.selectAll.onPage')[3]
                            }`}
                        </Label>
                        <Label>
                            <Link design='accent' onClick={onDeselectAll}>
                                <AttachIcon />
                                {`${localize('ds.table.settings.selectAll.cancel')}
                            `}
                            </Link>
                        </Label>
                    </span>
                </Box>
            )}
        </>
    );
};

SelectAll.displayName = 'SelectAll';
