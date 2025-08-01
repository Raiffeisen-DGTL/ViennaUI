import React, { useMemo, useCallback } from 'react';
import { ColumnProps } from '../Column';
import { useTableConfig, useTableFeatures, useTableService } from '../Context';
import { Expander, ExpandingRowInternal } from '../ExpandingRow';
import { Selector } from '../SelectRow';
import { useGroupBy, GroupTitle, GroupTitleInterface, GroupByProps } from '../GroupBy';
import { Pinner } from '../PinnableColumn';
import { ActionsColumnInternal } from '../ActionsColumn';
import { EmptyColumns, EmptyColumnsPropsType } from './EmptyColumns';
import { Body, Row, Td } from './TableBody.styles';
import { InvalidData } from './InvalidData';
import { DEFAULT_EXPANDER_WIDTH } from '../../constants';
import { useTableSort } from '../../useTableSort';
import { useHideRows } from '../HiddenRows/useHideRows';
import { TableProps } from '../../Table';
import { isGroupTitle } from '@/Table/utils';

export interface PropsType<T> {
    data: T[];
    currentPage?: number;
    pageSize?: number;
    noBorderBottom: boolean;
    noBorderBottomForLastRow: boolean;
    onClickShowAllColumns: EmptyColumnsPropsType['onClickShowAllColumns'];
    filterExpandingRow: (item: T) => boolean;
    indeterminate?: boolean;
    noWrap?: boolean;
    testId?: TableProps['testId'];
}

const itemIsGroupTitle = <T,>(item: T | GroupByProps<T> | GroupTitleInterface<T>): item is GroupTitleInterface<T> => {
    return (item as GroupTitleInterface<T>).isGroupTitle !== undefined;
};

export const TableBody = <T,>(props: PropsType<T>) => {
    const {
        noBorderBottom,
        noBorderBottomForLastRow,
        onClickShowAllColumns,
        filterExpandingRow,
        indeterminate,
        noWrap,
        testId,
    } = props;
    const features = useTableFeatures();
    const { columns, isRowSelected, getColoredRowColor, isRowExpanded } = useTableService<T>();
    const {
        columns: { templates },
        expandingRow,
        base,
        selectRow,
        actionsColumn,
        columnGroup,
    } = useTableConfig<T>();
    const {
        dataKey,
        noRowDivider,
        size,
        valign,
        pinnableColumns,
        onRowClick,
        onRowGroupClick,
        onRowItemClick,
        onRowDoubleClick,
        onRowRightClick,
    } = base.settings;
    const columnIdsInPinnedGroups: string[] = useMemo(
        () =>
            (columnGroup?.groups ?? []).reduce((prev: string[], group) => {
                if (group?.pinned && group?.columns?.length) {
                    prev = prev.concat(group.columns);
                }

                return prev;
            }, []),
        [columnGroup]
    );

    // runs column template function with item from data
    const getCellContent = useCallback(
        (columnId: string, item: T, rowIndex: number) => {
            if (!item || !columnId) {
                return null;
            }

            const template = templates?.get(columnId);
            return typeof template === 'function'
                ? template(item, rowIndex)
                : (template ?? (item[columnId as keyof T] as string));
        },
        [templates]
    );

    const handleRowClick = useCallback(
        (value: T | GroupTitleInterface<T>) => (event: React.MouseEvent<HTMLElement>) => {
            onRowClick?.({ value, event });

            if (isGroupTitle(value)) {
                onRowGroupClick?.({ value, event });
            } else {
                onRowItemClick?.({ value, event });
            }
        },
        [onRowClick, onRowItemClick, onRowGroupClick]
    );

    const handleRowDoubleClick = useCallback(
        (value: T | GroupTitleInterface<T>) => (event: React.MouseEvent<HTMLElement>) =>
            onRowDoubleClick?.({ value, event }),
        [onRowDoubleClick]
    );

    const handleRowContextMenu = (value: T) => (event: React.MouseEvent<HTMLElement>) => {
        onRowRightClick?.({ value, event });
    };

    const isRowClickable = Boolean(onRowClick ?? onRowDoubleClick);
    const visibleRawData = useHideRows({ data: props.data, dataKey });
    const sortedRawData = useTableSort(visibleRawData);
    const groupedData = useGroupBy({
        data: sortedRawData,
        dataKey,
    });

    const paginate = (page: number, pageSize: number) => {
        return groupedData.slice(page * pageSize, (page + 1) * pageSize);
    };
    const dataset = useMemo(() => {
        if (props.currentPage !== undefined && props.pageSize !== undefined) {
            return paginate(props.currentPage, props.pageSize);
        } else {
            return groupedData;
        }
    }, [props.currentPage, props.pageSize, groupedData]);

    const hasNoBorderBottom = (id: string): boolean => {
        return isRowExpanded(id) && noBorderBottom;
    };

    const isRowLast = (len: number, rowIndex: number): boolean => {
        return len - 1 === rowIndex;
    };

    const hasNoBorderBottomForLastRow = useMemo(
        () => (len: number, rowIndex: number) => {
            return isRowLast(len, rowIndex) && noBorderBottomForLastRow;
        },
        [noBorderBottomForLastRow]
    );

    // Table rows
    const content = useMemo(() => {
        if (!columns().length) {
            return (
                <Row $noHover $noRowDivider>
                    <Td>
                        <EmptyColumns onClickShowAllColumns={onClickShowAllColumns} />
                    </Td>
                </Row>
            );
        }

        if (!Array.isArray(props.data) && props.data !== undefined) {
            return (
                <Row $noHover $noRowDivider>
                    <Td colSpan={columns().length}>
                        <InvalidData />
                    </Td>
                </Row>
            );
        }

        return dataset?.map((item, rowIndex) => {
            const rowKey = isGroupTitle(item) ? item.id.toString() : dataKey?.(item, rowIndex);
            const getRowColor = (): string | undefined => {
                return getColoredRowColor(rowKey || '');
            };

            // Group title row
            if (itemIsGroupTitle(item)) {
                return (
                    <Row
                        key={rowKey}
                        $noHover
                        $noRowDivider={noRowDivider}
                        $isRowClickable={isRowClickable}
                        $isPinnedGroupTitle={item?.pinned}
                        $bg={getRowColor()}
                        $noWrap={noWrap}
                        data-test-id={testId?.row?.(rowKey)}
                        data-testid={testId?.row?.(rowKey)}
                        onClick={handleRowClick(item)}
                        onDoubleClick={handleRowDoubleClick(item)}>
                        <GroupTitle group={item} />
                    </Row>
                );
            }

            const noBottomDivider =
                noRowDivider ||
                hasNoBorderBottom(rowKey) ||
                (base?.settings.outlined && rowIndex + 1 === groupedData.length) ||
                hasNoBorderBottomForLastRow(groupedData?.length, rowIndex);

            // Data row
            return (
                <React.Fragment key={rowKey}>
                    <Row
                        $noRowDivider={noBottomDivider}
                        $isRowClickable={isRowClickable}
                        $bg={getRowColor()}
                        $selected={isRowSelected(item)}
                        $noWrap={noWrap}
                        data-row={rowKey}
                        data-test-id={testId?.row?.(rowKey)}
                        data-testid={testId?.row?.(rowKey)}
                        onClick={handleRowClick(item)}
                        onDoubleClick={handleRowDoubleClick(item)}
                        onContextMenu={handleRowContextMenu(item)}>
                        {/* select checkbox */}
                        {selectRow && (
                            <Td
                                data-column='selector'
                                data-test-id={testId?.cell?.(rowKey, 'selector')}
                                data-testid={testId?.cell?.(rowKey, 'selector')}
                                $size={size}
                                $valign={valign}
                                $pinned={pinnableColumns}
                                $bg={getRowColor()}>
                                <Selector
                                    disabled={selectRow.disableCheckboxes}
                                    disableCheckboxRow={selectRow.disableCheckboxRow}
                                    item={item}
                                    indeterminate={indeterminate}
                                />
                                {pinnableColumns && <Pinner />}
                            </Td>
                        )}

                        {features.has('ExpandingGroup') && (
                            <Td
                                data-column='expander'
                                data-test-id={testId?.cell?.(rowKey, 'expander')}
                                data-testid={testId?.cell?.(rowKey, 'expander')}
                                $pinned={pinnableColumns}
                                $width={DEFAULT_EXPANDER_WIDTH}
                                $minWidth={DEFAULT_EXPANDER_WIDTH}>
                                {pinnableColumns && <Pinner />}
                            </Td>
                        )}

                        {/* expander icon */}
                        {expandingRow && (
                            <Expander id={rowKey} isActive={filterExpandingRow(item)} bg={getRowColor()} />
                        )}

                        {/* table columns */}
                        {columns().map((column: ColumnProps<T>, index) => {
                            const {
                                id,
                                truncate,
                                noWrap,
                                align,
                                width,
                                minWidth,
                                onClick,
                                monospaceFont = false,
                                leftBorder,
                                cropText,
                                wordBreak,
                            } = column;

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
                                    data-test-id={testId?.cell?.(rowKey, id)}
                                    data-testid={testId?.cell?.(rowKey, id)}
                                    title={typeof content === 'string' ? content : undefined}
                                    $valign={valign}
                                    $hasRightDivider={hasRightDivider}
                                    $leftBorder={leftBorder}
                                    $cropText={cropText}
                                    $noWrap={noWrap}
                                    $pinned={pinned}
                                    $align={align}
                                    $size={size}
                                    $wordBreak={wordBreak}
                                    $width={width}
                                    $minWidth={minWidth || width}
                                    $truncate={truncate}
                                    $monospaceFont={monospaceFont}
                                    $bg={getRowColor()}
                                    onClick={onClick}>
                                    {content}
                                    {pinned && <Pinner />}
                                </Td>
                            );
                        })}

                        {/* actions columns */}
                        {actionsColumn && (
                            <ActionsColumnInternal key='actionsColumn' size={size} valign={valign} {...actionsColumn}>
                                {typeof actionsColumn.children === 'function'
                                    ? actionsColumn.children(item, rowIndex)
                                    : actionsColumn.children}
                            </ActionsColumnInternal>
                        )}
                    </Row>

                    {/* expanded row container */}
                    {expandingRow && filterExpandingRow(item) && (
                        <ExpandingRowInternal
                            hasActionsColumn={!!actionsColumn}
                            id={rowKey}
                            CustomWrapper={expandingRow.wrapper}>
                            {typeof expandingRow.template === 'function'
                                ? expandingRow.template(item)
                                : expandingRow.template}
                        </ExpandingRowInternal>
                    )}
                </React.Fragment>
            );
        });
    }, [groupedData, columns()]);

    return <Body>{content}</Body>;
};
