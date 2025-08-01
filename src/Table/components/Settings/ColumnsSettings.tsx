import React, { useCallback, useState, useMemo } from 'react';
import { BurgerHorIcon, SearchIconIcon } from 'vienna.icons';
import { Checkbox } from '../../../Checkbox';
import { Input, InputProps } from '../../../Input';
import { Link } from '../../../Link';
import { useTableService, useTableLocalization } from '../Context';
import { useDraggableColumn } from '../DraggableColumn';
import { Box, ColumnsList, Column, Search, TitleBox } from './ColumnsSettings.styles';
import { ColumnProps } from '../Column';
import { TableData } from '../../types';

export const defaultTableColumnsSettingsTestId: СolumnsSettingsTestId = {
    search: 'table_column-settings_search',
};

export interface СolumnsSettingsTestId {
    search?: string;
}
export interface ColumnsSettingsProps {
    searchable?: boolean;
    hideShowAll?: boolean;
    ignoredColumnsIds?: string[];
    testId?: СolumnsSettingsTestId;
}

export interface HiddenColumnsState {
    hiddenColumns: string[];
    isDirty: boolean;
    isAllShown: boolean;
}

export const ColumnsSettings: React.FC<ColumnsSettingsProps> = (props) => {
    const { searchable, hideShowAll, ignoredColumnsIds = [], testId = defaultTableColumnsSettingsTestId } = props;
    const localize = useTableLocalization();
    const {
        allColumns: getAllColumns,
        getHiddenColumns,
        showColumn,
        hideColumn,
        hideAllColumns,
        showAllColumns,
    } = useTableService();
    const draggableColumn = useDraggableColumn();
    const isAllShown = getHiddenColumns().isAllShown;

    const allColumns = useMemo(() => getAllColumns(), [getAllColumns]);

    const [keyword, setKeyword] = useState<string>();
    const filterColumns: InputProps['onChange'] = ({ value }) => {
        setKeyword(value);
    };
    const filterColumnsMemo = useCallback(filterColumns, [setKeyword]);

    const isColumnHidden = useCallback(
        (col: ColumnProps<TableData>) => {
            const { hiddenColumns, isDirty } = getHiddenColumns();

            return isDirty ? hiddenColumns.includes(col.id) : col.hidden;
        },
        [getHiddenColumns]
    );

    const toggleColumn = useCallback(
        (column: ColumnProps<TableData>) => {
            return () => {
                const action = isColumnHidden(column) ? showColumn : hideColumn;
                action(column.id);
            };
        },
        [showColumn, hideColumn, isColumnHidden]
    );

    const toggleAll = useCallback(() => {
        if (isAllShown) {
            hideAllColumns();
        } else {
            showAllColumns();
        }
    }, [hideAllColumns, showAllColumns, isAllShown]);

    const columns = useMemo(() => {
        let columns = allColumns;

        if (ignoredColumnsIds.length) {
            columns = columns.filter((column) => !ignoredColumnsIds.some((id) => id === column.id));
        }

        if (keyword) {
            const regexp = new RegExp(keyword, 'i');

            columns = columns.filter((column) => {
                const title =
                    typeof column.titleSettings === 'string'
                        ? column.titleSettings
                        : typeof column.title === 'string'
                          ? column.title
                          : '';
                return title.search(regexp) !== -1;
            });
        }

        const content = columns.map((c) => {
            const params = {
                'data-column': c.id,
                ...(c.draggable && draggableColumn),
            };

            return (
                <Column key={c.id} {...params}>
                    <Checkbox checked={!isColumnHidden(c)} onChange={toggleColumn(c)} disabled={c.disableHide}>
                        <TitleBox>{c.titleSettings ?? c.title}</TitleBox>
                    </Checkbox>
                    {c.draggable && <BurgerHorIcon size='s' />}
                </Column>
            );
        });

        return content;
    }, [keyword, allColumns, isColumnHidden, draggableColumn]);

    return (
        <Box data-id='table-settings-columns'>
            {searchable && (
                <Search>
                    <Input
                        size='m'
                        prefix={<SearchIconIcon />}
                        data-testid={testId?.search}
                        placeholder={localize('ds.table.settings.columnSearch')}
                        onChange={filterColumnsMemo}
                    />
                </Search>
            )}
            <ColumnsList>{columns}</ColumnsList>
            {hideShowAll && (
                <Link design='accent' onClick={toggleAll}>
                    {isAllShown
                        ? localize('ds.table.settings.hideAllColumns')
                        : localize('ds.table.settings.showAllColumns')}
                </Link>
            )}
        </Box>
    );
};
