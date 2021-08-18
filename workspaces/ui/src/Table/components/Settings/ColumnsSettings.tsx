import React, { useCallback, useState, useMemo } from 'react';
import { Checkbox, Input, Link } from '../../../index';
import { BurgerHor, Search as SearchIcon } from 'vienna.icons';
import { useTableService, useTableLocalization } from '../Context';
import { useDraggableColumn } from '../DraggableColumn';
import { Box, ColumnsList, Column, Search } from './ColumnsSettings.styles';

export interface ColumnsSettingsProps {
    searchable?: boolean;
    hideShowAll?: boolean;
}

export const ColumnsSettings: React.FC<ColumnsSettingsProps> = (props) => {
    const { searchable, hideShowAll } = props;
    const localize = useTableLocalization();
    const { allColumns, showColumn, hideColumn, hideAllColumns, showAllColumns } = useTableService();
    const draggableColumn = useDraggableColumn();
    const isAllShown = !allColumns().some((c) => c.hidden);

    const [keyword, setKeyword] = useState<string>();
    const filterColumns = useCallback(
        (_, { value }) => {
            setKeyword(value);
        },
        [setKeyword]
    );

    const toggleColumn = useCallback(
        (column) => {
            return () => {
                const action = column.hidden ? showColumn : hideColumn;
                action(column.id);
            };
        },
        [showColumn, hideColumn]
    );

    const toggleAll = useCallback(() => {
        if (isAllShown) {
            hideAllColumns();
        } else {
            showAllColumns();
        }
    }, [hideAllColumns, showAllColumns, isAllShown]);

    const columns = useMemo(() => {
        let columns = allColumns();

        if (keyword) {
            const regexp = new RegExp(keyword, 'i');
            columns = allColumns().filter(
                (column) => column && typeof column.title === 'string' && column.title.search(regexp) !== -1
            );
        }

        const content = columns.map((c) => {
            const params = {
                'data-column': c.id,
                ...(c.draggable && draggableColumn),
            };
            return (
                <Column key={c.id} {...params}>
                    <Checkbox checked={!c.hidden} onChange={toggleColumn(c)}>
                        {c.title}
                    </Checkbox>
                    {c.draggable && <BurgerHor size='s' />}
                </Column>
            );
        });

        return content;
    }, [keyword, allColumns()]);

    return (
        <Box>
            {searchable && (
                <Search>
                    <Input
                        size='m'
                        prefix={<SearchIcon />}
                        placeholder={localize('ds.table.settings.columnSearch')}
                        onChange={filterColumns}
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
