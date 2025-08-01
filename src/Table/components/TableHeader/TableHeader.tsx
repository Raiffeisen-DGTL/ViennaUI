import React, { useMemo } from 'react';
import { useTableConfig, useTableFeatures, useTableService } from '../Context';
import { DEFAULT_EXPANDER_WIDTH } from '../../constants';
import { Header, Row, Th } from './TableHeader.styles';
import { Resizer } from '../ResizableColumn';
import { SELECT_ALL } from '../SelectRow';
import { DraggableColumn, useDraggableColumn } from '../DraggableColumn';
import { ColumnGroupInternal } from '../ColumnGroup';
import { Pinner, usePinnableColumns } from '../PinnableColumn';
import { Sort } from '../Sort';
import { Filter } from '../Filter';
import { BasicTitle } from '../ColumnTitle';
import { GroupTitleContent } from '../GroupBy/GroupTitleContent';
import { omit } from '../../../Utils/omit';
import { ExpandAll } from '../ExapandAll';

export const defaultTableHeaderTestId: TableHeaderProps['testId'] = {
    cell: (id) => `table-header_cell-${id}`,
};

export interface TableHeaderProps {
    enableCancelSort?: boolean;
    indeterminate?: boolean;
    testId?: {
        cell?: (id: string) => string;
    };
}
export const TableHeader = <T,>({ enableCancelSort, testId = defaultTableHeaderTestId }: TableHeaderProps) => {
    const features = useTableFeatures();
    const { columns, getData, getHiddenColumns } = useTableService<T>();
    const { base, selectRow, actionsColumn, columnGroup } = useTableConfig<T>();
    const data = getData();
    const { size, pinnableColumns } = base.settings;
    const draggableColumn = useDraggableColumn();

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

    const headerRef = usePinnableColumns(pinnableColumns);

    const content = useMemo(() => {
        return columns().map((column, index) => {
            const { id, sortable, resizable, draggable, groupId, filter, title, titleHint, hidden, ...props } = column;
            const pinned = pinnableColumns && (column.pinned || columnIdsInPinnedGroups.includes(id));
            const isHover = sortable ?? resizable ?? draggable ?? !!filter;

            const { hiddenColumns, isDirty } = getHiddenColumns();
            const isHidden = isDirty ? hiddenColumns.includes(column.id) : hidden;

            let hasRightDivider = false;
            if (columns()[index + 1]) {
                hasRightDivider = groupId !== columns()[index + 1].groupId;
            }

            const hint: string | undefined = titleHint ?? (typeof title === 'string' ? title : undefined);

            const width = column.width ? column.width : null;
            const minWidth = column.minWidth ? column.minWidth : width;

            const Title = filter ? Filter : sortable ? Sort : BasicTitle;

            const attrs = omit(
                props,
                'titleSettings',
                'unpinnedIndex',
                'noWrap',
                'pinned',
                'forceIconVisibility',
                'truncate',
                'align',
                'minWidth',
                'leftBorder',
                'monospaceFont',
                'disableHide'
            );

            return (
                <Th
                    {...(draggable ? draggableColumn : {})}
                    {...attrs}
                    key={id}
                    id={id}
                    title={hint}
                    data-column={id}
                    data-index={index}
                    data-testid={testId?.cell?.(id)}
                    hidden={isHidden}
                    $size={size}
                    $isHover={isHover}
                    $hasBottomDivider
                    $hasRightDivider={hasRightDivider}
                    $pinned={pinned}
                    $draggable={draggable}
                    $width={width || undefined}
                    $minWidth={minWidth || undefined}>
                    <Title column={column} size={size} enableCancelSort={enableCancelSort} />
                    {resizable && <Resizer size={size} />}
                    {draggable && <DraggableColumn />}
                    {pinned && <Pinner />}
                </Th>
            );
        });
    }, [columns(), getHiddenColumns]);

    return (
        <Header>
            {columns().length > 0 && (
                <>
                    <ColumnGroupInternal />
                    <Row ref={headerRef}>
                        {selectRow && (
                            <Th
                                data-column='selector'
                                $pinned={pinnableColumns}
                                $width='64px'
                                $minWidth='64px'
                                $hasBottomDivider>
                                {!selectRow.disableSelectAll && (
                                    <GroupTitleContent
                                        group={{
                                            id: SELECT_ALL,
                                            title: SELECT_ALL,
                                            isGroupTitle: false,
                                            filter: () => true,
                                        }}
                                        disabled={
                                            selectRow.disableCheckboxSelectAll ||
                                            selectRow.disableCheckboxes ||
                                            data.length === 0
                                        }
                                        isSelectAll
                                    />
                                )}
                                {pinnableColumns && <Pinner />}
                            </Th>
                        )}
                        {(features.has('ExpandingRow') || features.has('ExpandingGroup')) && (
                            <ExpandAll isGroupExpanded={features.has('ExpandingGroup')} />
                        )}
                        {features.has('ExpandingGroup') && features.has('ExpandingRow') && (
                            <Th
                                data-column='expander_group'
                                $pinned={pinnableColumns}
                                $width={DEFAULT_EXPANDER_WIDTH}
                                $minWidth={DEFAULT_EXPANDER_WIDTH}
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
                                $width={!actionsColumn.shrinkActionsColumn ? actionsColumn.width : '0'}
                                $minWidth={!actionsColumn.shrinkActionsColumn ? actionsColumn.width : '0'}
                                $padding={actionsColumn.shrinkActionsColumn ? '0' : undefined}
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
