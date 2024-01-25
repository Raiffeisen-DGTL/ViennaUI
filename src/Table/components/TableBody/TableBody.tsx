import React, { useMemo, useCallback } from 'react';
import { ColumnProps } from '../Column/Column';
import { useTableConfig, useTableService } from '../Context/TableContext';
import { Expander, ExpandingRowInternal } from '../ExpandingRow';
import { Selector } from '../SelectRow';
import { useGroupBy, GroupTitle } from '../GroupBy';
import { Pinner } from '../PinnableColumn';
import { ActionsColumnInternal } from '../ActionsColumn';
import { Empty } from './Empty';
import { Body, Row, Td } from './TableBody.styles';

export const TableBody = (props: any) => {
    const { columns, isRowSelected } = useTableService();
    const {
        columns: { templates },
        expandingRow,
        base,
        selectRow,
        actionsColumn,
        columnGroup,
    } = useTableConfig();

    const { dataKey, noRowDivider, size, valign, pinnableColumns, onRowClick, onRowDoubleClick } = base.settings;

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

    // runs column template function with item from data
    const getCellContent = useCallback(
        (columnId, item, rowIndex: number) => {
            if (!item || !columnId) {
                return null;
            }

            const template = templates?.get(columnId);
            return template ? template(item, rowIndex) : item[columnId];
        },
        [templates]
    );

    const handleRowClick = useCallback(
        (item: any) => (e: React.MouseEvent<HTMLElement>) => {
            if (typeof onRowClick === 'function') {
                onRowClick(e, item);
            }
        },
        [onRowClick]
    );

    const handleRowDoubleClick = useCallback(
        (item: any) => (e: React.MouseEvent<HTMLElement>) => {
            if (typeof onRowDoubleClick === 'function') {
                onRowDoubleClick(e, item);
            }
        },
        [onRowDoubleClick]
    );

    const isRowClickable = onRowClick ?? onRowDoubleClick;

    const data = useGroupBy(props.data);

    // Table rows
    const content = useMemo(() => {
        if (!columns().length) {
            return (
                <Row $noHover $noRowDivider>
                    <Td>
                        <Empty />
                    </Td>
                </Row>
            );
        }

        return data?.map((item, rowIndex: number) => {
            // Group title row
            if (item.isGroupTitle) {
                return (
                    <Row
                        key={dataKey?.(item, rowIndex)}
                        $noHover
                        $noRowDivider
                        $isRowClickable={isRowClickable}
                        $isPinnedGroupTitle={item?.pinned}
                        onClick={handleRowClick(item)}
                        onDoubleClick={handleRowDoubleClick(item)}>
                        <GroupTitle group={item} />
                    </Row>
                );
            }

            const noBottomDivider = noRowDivider || (base?.settings.outlined && rowIndex + 1 === data.length);

            // Data row
            return (
                <React.Fragment key={dataKey?.(item, rowIndex)}>
                    <Row
                        $noRowDivider={noBottomDivider}
                        $selected={isRowSelected(item)}
                        $isRowClickable={isRowClickable}
                        data-row={dataKey?.(item, rowIndex)}
                        onClick={handleRowClick(item)}
                        onDoubleClick={handleRowDoubleClick(item)}>
                        {/* select checkbox */}
                        {selectRow && (
                            <Td data-column='selector' $size={size} $valign={valign} $pinned={pinnableColumns}>
                                <Selector item={item} />
                                {pinnableColumns && <Pinner />}
                            </Td>
                        )}

                        {/* expander icon */}
                        {expandingRow && <Expander id={dataKey?.(item, rowIndex)} />}

                        {/* table columns */}
                        {columns().map((column: ColumnProps, index) => {
                            const { id, truncate, noWrap, align, width, onClick } = column;

                            const pinned = pinnableColumns && (column.pinned || columnIdsInPinnedGroups.includes(id));

                            const content = getCellContent(id, item, rowIndex);

                            let hasRightDivider = false;
                            if (columns()[index + 1]) {
                                hasRightDivider = column.groupId !== columns()[index + 1].groupId;
                            }

                            return (
                                <Td
                                    key={id}
                                    data-column={id}
                                    title={typeof content === 'string' ? content : undefined}
                                    $valign={valign}
                                    $hasRightDivider={hasRightDivider}
                                    $noWrap={noWrap}
                                    $pinned={pinned}
                                    $align={align}
                                    $size={size}
                                    $width={width}
                                    $truncate={truncate}
                                    onClick={onClick}>
                                    {content}
                                    {pinned && <Pinner />}
                                </Td>
                            );
                        })}

                        {/* actions columns */}
                        {actionsColumn && (
                            <ActionsColumnInternal key='actionsColumn' size={size} valign={valign} {...actionsColumn}>
                                {(actionsColumn.children as any)(item)}
                            </ActionsColumnInternal>
                        )}
                    </Row>

                    {/* expanded row container */}
                    {expandingRow && (
                        <ExpandingRowInternal id={dataKey?.(item, rowIndex)} CustomWrapper={expandingRow.wrapper}>
                            {expandingRow.template(item)}
                        </ExpandingRowInternal>
                    )}
                </React.Fragment>
            );
        });
    }, [data, columns()]);

    return <Body>{content}</Body>;
};
