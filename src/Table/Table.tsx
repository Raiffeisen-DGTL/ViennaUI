import React, { forwardRef, useMemo, RefAttributes, useRef, ReactElement } from 'react';
import { WithMargin, getWhitespaceStyledProps } from '../Whitespace/utils';
import { useLocalization } from '../Localization';
import {
    Column,
    Footer,
    ActionIcon,
    ActionsListIcon,
    GroupBy,
    TableHeader,
    TableBody,
    ExpandingRow,
    SelectAll,
    Selection,
    TableProvider,
    ColumnGroup,
    Settings,
    SettingsInternal,
    ColumnsSettings,
    GroupingSettings,
    ActionsColumn,
    InputFilter,
    SelectFilter,
    FilterState,
    TableService,
    TableServiceFactory,
    GroupTitleInterface,
    ColumnProps,
    TableHeaderProps,
} from './components';
import { TableState, SortDirection, TableSize, TableData, TableValign, ModuleName } from './types';
import { defaultTableLocalization, TableLocalizationProps } from './localization';
import { initModules } from './TableModules';
import { initEvents } from './TableEvents';
import { validate } from './validate';
import { Wrapper, PropsWrapper, TableWrapper, Box, Empty } from './Table.styles';
import { BoxStyled } from '../Utils/styled';
import { Row, Td } from './components/TableBody/TableBody.styles';
import { ErrorState, LoadingState } from './components/Defaults';
import { DatePickerFilter } from './components/Filter/DatePickerFilter';
import { DatePickerRangeFilter } from './components/Filter/DatePickerRangeFilter';
import { BoxShadow } from './components/BoxShadow/BoxShadow';
import { defaultDataKey, defaultFilterExpandingRow } from './utils';
import { useTableUpdatedChildren } from './useTableUpdatedChildren';
import { EmptyStateDefault } from './components/Defaults/EmptyStateDefault';
import { AnyObject, OnChangeHandler, Pretty } from '../Utils';

export const defaultTableTestId: TableProps['testId'] = {
    container: 'table_container',
    emptyState: 'table_empty-state',
    row: (val: string) => `table_row-${val}`,
    cell: (row: string, col: string) => `table_cell-${row}-${col}`,
};

export interface TableOnSelectData<T> {
    item?: T | GroupTitleInterface<T> | null;
    isChecked?: boolean;
    isRowIndeterminate?: boolean;
    isSelectedAll?: boolean;
    isSelectedFullData?: boolean;
}
export interface TableProps<T = TableData>
    extends WithMargin,
        TableLocalizationProps,
        Omit<BoxStyled<typeof Wrapper, PropsWrapper>, 'onSelect'> {
    data?: T[];
    size?: TableSize;
    valign?: TableValign;
    noHeader?: boolean | undefined;
    noRowDivider?: boolean | undefined;
    maxHeight?: string | undefined;
    minHeight?: string | undefined;
    noOverflow?: boolean | undefined;
    disableSelectAll?: boolean | undefined;
    disableCheckboxSelectAll?: boolean | undefined;
    disableCheckboxes?: boolean | undefined;
    maxContent?: boolean | undefined;
    pinnableColumns?: boolean | undefined;
    selected?: T[];
    sort?: { field: string; direction: SortDirection } | undefined;
    filter?: FilterState<T> | undefined;
    dataKey?: ((item: T, index: number) => string) | undefined;
    onRowClick?: OnChangeHandler<T | GroupTitleInterface<T>, React.MouseEvent<HTMLElement>, null>;
    onRowItemClick?: OnChangeHandler<T, React.MouseEvent<HTMLElement>, null>;
    onRowGroupClick?: OnChangeHandler<GroupTitleInterface<T>, React.MouseEvent<HTMLElement>, null>;
    onRowDoubleClick?: OnChangeHandler<T | GroupTitleInterface<T>, React.MouseEvent<HTMLElement>, null>;
    onRowRightClick?: OnChangeHandler<T, React.MouseEvent<HTMLElement>, null>;
    onSort?: OnChangeHandler<{ field: string; direction: SortDirection }, React.FormEvent | undefined, null>;
    onFilter?: ((data?: AnyObject) => void) | undefined;
    onSelect?: OnChangeHandler<TableOnSelectData<T>, React.FormEvent, null>;
    onScroll?: ((event: React.UIEvent<HTMLElement>) => void) | undefined;
    initState?: TableState<T> | ((state: TableState<T>) => TableState<T>);
    state?: TableState<T>;
    service?: TableServiceFactory<T>;
    onUpdate?: (newState: TableState<T>, id: ModuleName | string) => void;
    onInit?: ({ service, state }: { service: TableService<T>; state: TableState<T> }) => void;
    expandedRow?: boolean | undefined;
    filterExpandingRow?: (item: T) => boolean;
    onExpand?: () => void | undefined;
    onClickShowAllColumns?: () => void | undefined;
    /* Позволяет отменить сортировку по 3 клику */
    enableCancelSort?: boolean | undefined;
    noBorderBottom?: boolean | undefined;
    noBorderBottomForLastRow?: boolean | undefined;
    isError?: boolean | undefined;
    isLoading?: boolean | undefined;
    isEmpty?: boolean | undefined;
    /* Позволяет добавить состояние indeterminate чекбоксу в таблице */
    indeterminate?: boolean | undefined;
    indeterminated?: T[];
    disableCheckboxRow?: T[];
    /* Позволяет переносить/или запретить переносить текст на следующую строчку для всей таблицы */
    noWrap?: boolean;
    columns?: ColumnProps<T>[];
    showSettingsAlarm?: boolean;
    /* Устанавливает атрибуты data-testid строкам и ячейкам таблицы */
    testId?: {
        container?: string;
        emptyState?: string;
        row?: (val: string) => string;
        cell?: (row: string, col: string) => string;
        tableHeader?: TableHeaderProps['testId'];
    };
    currentPage?: number;
    pageSize?: number;
}

export interface TableParts {
    Column: typeof Column;
    Footer: typeof Footer;
    ActionIcon: typeof ActionIcon;
    ActionsListIcon: typeof ActionsListIcon;
    ExpandingRow: typeof ExpandingRow;
    SelectAll: typeof SelectAll;
    Selection: typeof Selection;
    ColumnGroup: typeof ColumnGroup;
    GroupBy: typeof GroupBy;
    Settings: typeof Settings;
    ColumnsSettings: typeof ColumnsSettings;
    GroupingSettings: typeof GroupingSettings;
    ActionsColumn: typeof ActionsColumn;
    InputFilter: typeof InputFilter;
    SelectFilter: typeof SelectFilter;
    SortDirection: typeof SortDirection;
    DatePickerFilter: typeof DatePickerFilter;
    DatePickerRangeFilter: typeof DatePickerRangeFilter;
    Row: typeof Row;
    Td: typeof Td;
    EmptyState: typeof Empty;
}

export namespace Table {
    export type OnRowClick<T = TableData> = Pretty.Func<
        OnChangeHandler<T | GroupTitleInterface<T>, React.MouseEvent<HTMLElement>, null>
    >;
    export type onRowItemClick<T = TableData> = Pretty.Func<OnChangeHandler<T, React.MouseEvent<HTMLElement>, null>>;
    export type onRowGroupClick<T = TableData> = Pretty.Func<
        OnChangeHandler<GroupTitleInterface<T>, React.MouseEvent<HTMLElement>, null>
    >;
    export type OnRowDoubleClick<T = TableData> = Pretty.Func<
        OnChangeHandler<T | GroupTitleInterface<T>, React.MouseEvent<HTMLElement>, null>
    >;
    export type OnRowRightClick<T = TableData> = Pretty.Func<OnChangeHandler<T, React.MouseEvent<HTMLElement>, null>>;
    export type OnSort = Pretty.Func<
        OnChangeHandler<{ field: string; direction: SortDirection }, React.FormEvent | undefined, null>
    >;
    export type OnFilter<T = TableData> = Pretty.Func<((data?: T) => void) | undefined>;
    export type OnSelect<T = TableData> = Pretty.Func<OnChangeHandler<TableOnSelectData<T>, React.FormEvent, null>>;
}

export const Table = forwardRef<HTMLDivElement, TableProps>((props, ref) => {
    const {
        data = [],
        service,
        children,
        maxHeight,
        minHeight,
        noOverflow,
        size = 's',
        valign = 'top',
        maxContent,
        noHeader,
        noRowDivider,
        expandedRow,
        filterExpandingRow = defaultFilterExpandingRow,
        selected,
        indeterminate,
        indeterminated,
        sort,
        filter,
        disableSelectAll,
        disableCheckboxSelectAll,
        pinnableColumns,
        onExpand,
        enableCancelSort = false,
        onSort,
        onFilter,
        onRowClick,
        onRowDoubleClick,
        onRowRightClick,
        onSelect,
        disableCheckboxRow,
        onScroll,
        onInit,
        onUpdate,
        onClickShowAllColumns,
        initState,
        state: forcedState,
        dataKey = defaultDataKey,
        localization,
        noBorderBottom = false,
        noBorderBottomForLastRow = false,
        isLoading,
        isError,
        isEmpty,
        disableCheckboxes,
        noWrap,
        columns,
        showSettingsAlarm,
        testId = defaultTableTestId,
        currentPage,
        pageSize,
        ...rest
    } = props;

    const l10n = useLocalization(localization, defaultTableLocalization);

    const updatedChildren = useTableUpdatedChildren(props);
    const { config, state, features } = useMemo(
        () =>
            initModules<(typeof data)[0]>({
                initState,
                children,
                columns,
                settings: {
                    maxHeight,
                    size,
                    valign,
                    noHeader,
                    noRowDivider,
                    expandedRow,
                    onExpand,
                    onRowClick,
                    onRowDoubleClick,
                    onRowRightClick,
                    selected,
                    indeterminate,
                    indeterminated,
                    disableSelectAll,
                    disableCheckboxSelectAll,
                    disableCheckboxes,
                    onSelect,
                    pinnableColumns,
                    sort,
                    filter,
                    disableCheckboxRow,
                    dataKey: dataKey as TableProps<(typeof data)[0]>['dataKey'],
                    isOuterSortable: Boolean(onSort),
                },
            }),
        [
            updatedChildren,
            maxHeight,
            size,
            valign,
            noHeader,
            noRowDivider,
            expandedRow,
            onExpand,
            onRowClick,
            onRowDoubleClick,
            selected,
            indeterminated,
            disableSelectAll,
            disableCheckboxSelectAll,
            disableCheckboxes,
            onSelect,
            pinnableColumns,
            sort,
            disableCheckboxRow,
            filter,
            columns,
            dataKey,
            indeterminate,
            initState,
        ]
    );

    const tableEvents = useMemo(
        () =>
            initEvents({
                onInit,
                onUpdate,
                onSort,
                onFilter,
            }),
        [onInit, onUpdate, onSort, onFilter]
    );

    validate({ props, config, state, features });

    const { base, empty, footer, selectRow, settings } = config;
    const { attrs, propsStyled } = getWhitespaceStyledProps(rest);
    const tableRef = useRef<null | HTMLTableElement>(null);

    return (
        <TableProvider
            config={config}
            state={forcedState ?? state}
            features={features}
            tableEvents={tableEvents}
            isForcedState={Boolean(forcedState)}
            service={service}
            data={data}
            localization={l10n}>
            <Wrapper
                ref={ref}
                $maxContent={maxContent}
                $maxHeight={maxHeight}
                $minHeight={minHeight}
                $outlined={base?.settings.outlined}
                {...propsStyled}
                data-id='table-container'
                {...attrs}>
                {selectRow?.selectAll && selectRow.selectAll}
                {settings?.template && (
                    <SettingsInternal
                        testId={settings.testId}
                        size={base.settings.size}
                        showAlarm={showSettingsAlarm}
                        settingsTitle={(settings.template as ReactElement)?.props?.settingsTitle}>
                        {settings.template}
                    </SettingsInternal>
                )}
                <TableWrapper ref={tableRef} $isOverflow={!noOverflow} data-id='table-wrapper' onScroll={onScroll}>
                    <Box data-testid={testId?.container}>
                        {!base?.settings.noHeader && (
                            <TableHeader enableCancelSort={enableCancelSort} testId={testId?.tableHeader} />
                        )}
                        <TableBody
                            data={data}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            noBorderBottom={noBorderBottom}
                            noBorderBottomForLastRow={noBorderBottomForLastRow}
                            filterExpandingRow={filterExpandingRow}
                            indeterminate={indeterminate}
                            noWrap={noWrap}
                            testId={testId}
                            onClickShowAllColumns={onClickShowAllColumns}
                        />
                    </Box>
                </TableWrapper>
                {pinnableColumns && <BoxShadow tableRef={tableRef} />}
                {empty?.templates ? (
                    <Empty data-testid={testId?.emptyState}>{empty.templates}</Empty>
                ) : isLoading ? (
                    <LoadingState />
                ) : isError ? (
                    <ErrorState />
                ) : isEmpty ? (
                    <EmptyStateDefault data-testid={testId?.emptyState} />
                ) : null}
                {footer?.templates && footer.templates}
            </Wrapper>
        </TableProvider>
    );
}) as unknown as (<T>(props: TableProps<T> & RefAttributes<HTMLDivElement>) => React.ReactElement) & {
    displayName?: string;
} & TableParts;

Table.Column = Column;
Table.Footer = Footer;
Table.ActionIcon = ActionIcon;
Table.ActionsListIcon = ActionsListIcon;
Table.ExpandingRow = ExpandingRow;
Table.SelectAll = SelectAll;
Table.Selection = Selection;
Table.ColumnGroup = ColumnGroup;
Table.GroupBy = GroupBy;
Table.Settings = Settings;
Table.ColumnsSettings = ColumnsSettings;
Table.GroupingSettings = GroupingSettings;
Table.ActionsColumn = ActionsColumn;
Table.InputFilter = InputFilter;
Table.SelectFilter = SelectFilter;
Table.DatePickerFilter = DatePickerFilter;
Table.DatePickerRangeFilter = DatePickerRangeFilter;
Table.SortDirection = SortDirection;
Table.Row = Row;
Table.Td = Td;
Table.EmptyState = Empty;

Table.EmptyState.displayName = 'EmptyState';
Table.displayName = 'Table';
