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
    } = useTableConfig();

    const { noRowDivider, size, valign, pinnableColumns, onRowClick, onRowDoubleClick, noHeader } = base.settings;

    // runs column template function with item from data
    const getCellContent = useCallback(
        (columnId, item) => {
            if (!item || !columnId) {
                return null;
            }

            const template = templates?.get(columnId);
            return template ? template(item) : item[columnId];
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

    const isRowClickable = onRowClick || onRowDoubleClick;

    const data = useGroupBy(props.data);

    // Table rows
    const content = useMemo(() => {
        if (!columns().length) {
            return (
                <Row noHover noRowDivider>
                    <Td>
                        <Empty />
                    </Td>
                </Row>
            );
        }

        return (
            data &&
            data.map((item, rowIndex: number) => {
                // Group title row
                if (item.isGroupTitle) {
                    return (
                        <Row
                            key={item.id}
                            onClick={handleRowClick(item)}
                            onDoubleClick={handleRowDoubleClick(item)}
                            noHover
                            noRowDivider
                            isRowClickable={isRowClickable}>
                            <GroupTitle group={item} />
                        </Row>
                    );
                }

                const noBottomDivider = noRowDivider || (base?.settings.outlined && rowIndex + 1 === data.length);

                // Data row
                return (
                    <React.Fragment key={item.id}>
                        <Row
                            noRowDivider={noBottomDivider}
                            selected={isRowSelected(item)}
                            onClick={handleRowClick(item)}
                            onDoubleClick={handleRowDoubleClick(item)}
                            isRowClickable={isRowClickable}
                            data-row={item.id}>
                            {/* select checkbox */}
                            {selectRow && (
                                <Td data-column='selector' size={size} valign={valign} pinned={pinnableColumns}>
                                    <Selector item={item} />
                                    {pinnableColumns && <Pinner />}
                                </Td>
                            )}

                            {/* expander icon */}
                            {expandingRow && <Expander id={item.id} />}

                            {/* table columns */}
                            {columns().map((column: ColumnProps, index) => {
                                const { id, truncate, noWrap, align, width, onClick } = column;

                                const pinned = pinnableColumns && column.pinned;

                                const content = getCellContent(id, item);

                                let hasRightDivider = false;
                                if (columns()[index + 1]) {
                                    hasRightDivider = column.groupId !== columns()[index + 1].groupId;
                                }

                                const params = {
                                    noWrap,
                                    align,
                                    hasRightDivider,
                                    'data-column': id,
                                    ...(truncate
                                        ? { truncate, width, title: typeof content === 'string' ? content : null }
                                        : {}),
                                    ...(noHeader ? { width } : {}),
                                    pinned,
                                    onClick,
                                };
                                return (
                                    <Td key={id} size={size} valign={valign} {...params}>
                                        {content}
                                        {pinned && <Pinner />}
                                    </Td>
                                );
                            })}

                            {/* actions columns */}
                            {actionsColumn && (
                                <ActionsColumnInternal
                                    key='actionsColumn'
                                    size={size}
                                    valign={valign}
                                    item={item}
                                    {...actionsColumn}
                                />
                            )}
                        </Row>

                        {/* expanded row container */}
                        {expandingRow && (
                            <ExpandingRowInternal id={item.id}>{expandingRow.template(item)}</ExpandingRowInternal>
                        )}
                    </React.Fragment>
                );
            })
        );
    }, [data, columns()]);

    return <Body>{content}</Body>;
};

export default TableBody;
