import React, { useMemo } from 'react';
import { useTableConfig, useTableService } from '../Context';
import { Header, Row, Th } from './TableHeader.styles';
import { Resizer } from '../ResizableColumn';
import { Selector, SELECT_ALL } from '../SelectRow';
import { DraggableColumn, useDraggableColumn } from '../DraggableColumn';
import { ColumnGroupInternal } from '../ColumnGroup';
import { Pinner, usePinnableColumns } from '../PinnableColumn';
import { Sort } from '../Sort';
import { Filter } from '../Filter';
import { BasicTitle } from '../ColumnTitle';

export const TableHeader = () => {
    const { columns } = useTableService();
    const { base, expandingRow, selectRow, actionsColumn, columnGroup } = useTableConfig();
    const { size, pinnableColumns } = base.settings;
    const expandedRow = expandingRow?.template;
    const draggableColumn = useDraggableColumn();

    const columnIdsInPinnedGroups: string[] = useMemo(
        () =>
            (columnGroup?.groups ?? []).reduce((prev, group) => {
                if (group?.pinned && group?.columns.length) {
                    prev = prev.concat(group?.columns);
                }

                return prev;
            }, []),
        [columnGroup]
    );

    const headerRef = usePinnableColumns(pinnableColumns);

    const content = useMemo(() => {
        return columns().map((column, index) => {
            const { id, sortable, resizable, draggable, groupId, filter, ...attrs } = column;
            const pinned = pinnableColumns && (column.pinned || columnIdsInPinnedGroups.includes(id));
            const isHover = sortable ?? resizable ?? draggable ?? filter;

            let hasRightDivider = false;
            if (columns()[index + 1]) {
                hasRightDivider = groupId !== columns()[index + 1].groupId;
            }

            const width = column.width ? column.width : null;

            const Title = filter ? Filter : sortable ? Sort : BasicTitle;

            delete attrs.noWrap;
            delete attrs.pinned;
            delete attrs.forceIconVisibility;
            delete attrs.truncate;
            delete attrs.align;

            return (
                <Th
                    {...(draggable ? draggableColumn : {})}
                    {...(attrs as {})}
                    key={id}
                    id={id}
                    data-column={id}
                    data-index={index}
                    $size={size}
                    $isHover={isHover}
                    $hasBottomDivider
                    $hasRightDivider={hasRightDivider}
                    $pinned={pinned}
                    $width={width || undefined}>
                    <Title column={column} size={size} />
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
                            <Th data-column='selector' $pinned={pinnableColumns} $width='64px' $hasBottomDivider>
                                {!selectRow.disableSelectAll && <Selector item={SELECT_ALL} />}
                                {pinnableColumns && <Pinner />}
                            </Th>
                        )}
                        {expandedRow && (
                            <Th
                                data-column='expander'
                                $pinned={pinnableColumns}
                                $width={expandingRow?.settings.width}
                                $hasBottomDivider>
                                &nbsp;
                                {pinnableColumns && <Pinner />}
                            </Th>
                        )}
                        {content}
                        {actionsColumn && (
                            <Th
                                data-column='actions-column'
                                $hasBottomDivider
                                $width={actionsColumn.width}
                                {...actionsColumn}>
                                &nbsp;
                            </Th>
                        )}
                    </Row>
                </>
            )}
        </Header>
    );
};
