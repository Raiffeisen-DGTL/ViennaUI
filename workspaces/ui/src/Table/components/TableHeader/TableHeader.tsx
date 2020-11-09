import React, { useMemo } from 'react';
import { useTableConfig, useTableService } from '../Context/TableContext';
import { Header, Row, Th } from './TableHeader.styles';
import { Resizer } from '../ResizableColumn/Resizer';
import { Sort } from '../Sort';
import { Selector, SELECT_ALL } from '../SelectRow';
import { DraggableColumn, useDraggableColumn } from '../DraggableColumn';
import { ColumnGroupInternal } from '../ColumnGroup';
import { Pinner, usePinnableColumns } from '../PinnableColumn';

export const TableHeader = () => {
    const { columns } = useTableService();
    const { base, expandingRow, selectRow, actionsColumn } = useTableConfig();
    const { size, pinnableColumns } = base.settings;
    const expandedRow = expandingRow?.template;
    const draggableColumn = useDraggableColumn();

    const headerRef = usePinnableColumns(pinnableColumns);

    const content = useMemo(() => {
        return columns().map((column, index) => {
            const { id, title, sortable, resizable, draggable, groupId, ...attrs } = column;

            const pinned = pinnableColumns && column.pinned;

            const isHover = sortable || resizable;

            let hasRightDivider = false;
            if (columns()[index + 1]) {
                hasRightDivider = groupId !== columns()[index + 1].groupId;
            }

            const params = {
                id,
                size,
                isHover,
                'data-index': index,
                'data-column': id,
                hasBottomDivider: true,
                hasRightDivider: hasRightDivider,
                pinned,
                ...(draggable && draggableColumn),
                ...attrs,
            };

            return (
                <Th key={id} {...params}>
                    {!sortable && title}
                    {sortable && <Sort field={id}>{title}</Sort>}
                    {resizable && <Resizer size={size} />}
                    {draggable && <DraggableColumn />}
                    {pinned && <Pinner />}
                </Th>
            );
        });
    }, [columns()]);

    return (
        <Header>
            {columns().length > 0 && (
                <>
                    <ColumnGroupInternal />
                    <Row ref={headerRef}>
                        {selectRow && (
                            <Th data-column='selector' pinned={pinnableColumns} width='64px' hasBottomDivider>
                                {!selectRow.disableSelectAll && <Selector item={SELECT_ALL} />}
                                {pinnableColumns && <Pinner />}
                            </Th>
                        )}
                        {expandedRow && (
                            <Th data-column='expander' pinned={pinnableColumns} hasBottomDivider>
                                &nbsp;
                                {pinnableColumns && <Pinner />}
                            </Th>
                        )}
                        {content}
                        {actionsColumn && (
                            <Th data-column='actions-column' hasBottomDivider {...actionsColumn}>
                                &nbsp;
                            </Th>
                        )}
                    </Row>
                </>
            )}
        </Header>
    );
};

export default TableHeader;
