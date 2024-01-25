import React, { FC, useMemo } from 'react';
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
} from './components';
import { TableState, SortDirection } from './types';
import { defaultTableLocalization, TableLocalizationProps } from './localization';
import { initModules } from './TableModules';
import { initEvents } from './TableEvents';
import { validate } from './validate';
import { Wrapper, PropsWrapper, TableWrapper, Box, Empty, BoxShadow } from './Table.styles';
import { BoxStyled } from '../Utils/styled';
import { Row, Td } from './components/TableBody/TableBody.styles';
import { useTableShadow } from './useTableShadow';

export interface TableProps
    extends WithMargin,
        TableLocalizationProps,
        Omit<BoxStyled<typeof Wrapper, PropsWrapper>, 'onSelect'> {
    data?: any[];
    size?: 'xs' | 's' | 'm' | 'l';
    valign?: 'baseline' | 'top' | 'middle' | 'bottom' | 'inherit' | 'initial' | 'unset';
    noHeader?: boolean;
    noRowDivider?: boolean;
    maxHeight?: string;
    minHeight?: string;
    noOverflow?: boolean;
    disableSelectAll?: boolean;
    pinnableColumns?: boolean;
    selected?: any[];
    sort?: { field: string; direction: 'asc' | 'desc' };
    filter?: FilterState;
    dataKey?: (item: any, index: number) => string;
    onRowClick?: (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void;
    onRowDoubleClick?: (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void;
    onSort?: (event?: React.FormEvent, data?: { field: string; direction: SortDirection }) => void;
    onFilter?: (data?: Record<string, any>) => void;
    onSelect?: (event: React.FormEvent, data: any) => void;
    onScroll?: (event: React.UIEvent<HTMLElement>) => void;
    initState?: TableState | ((state: TableState) => TableState);
    state?: TableState;
    service?: TableServiceFactory;
    onUpdate?: (newState: TableState, id: string) => void;
    onInit?: ({ service, state }: { service: TableService; state: TableState }) => void;
    // TODO: добавить типизацию
    expandedRow?: any;
    onExpand?: any;
}

interface TableParts {
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
    Row: FC<any>;
    Td: FC<any>;
}

export const Table: FC<TableProps> & TableParts = (props) => {
    const {
        data,
        service,
        children,
        maxHeight,
        minHeight,
        noOverflow,
        size = 's',
        valign = 'top',
        noHeader,
        noRowDivider,
        expandedRow,
        selected,
        sort,
        filter,
        disableSelectAll,
        pinnableColumns,
        onExpand,
        onSort,
        onFilter,
        onRowClick,
        onRowDoubleClick,
        onSelect,
        onScroll,
        onInit,
        onUpdate,
        initState,
        state: forcedState,
        dataKey = (item) => item.id,
        localization,
        ...rest
    } = props;

    const l10n = useLocalization(localization, defaultTableLocalization);

    const { config, state, features } = useMemo(
        () =>
            initModules({
                initState,
                children,
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
                    selected,
                    disableSelectAll,
                    onSelect,
                    pinnableColumns,
                    sort,
                    filter,
                    dataKey,
                },
            }),
        [
            children,
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
            disableSelectAll,
            onSelect,
            pinnableColumns,
            sort,
            filter,
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
    const { tableRef, tableWrapperRef, shadowSize, hasShadow } = useTableShadow(!!pinnableColumns);

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
                {...(attrs as {})}
                {...(propsStyled as {})}
                $maxHeight={maxHeight}
                $minHeight={minHeight}
                $outlined={base?.settings.outlined}
                data-id='table-container'>
                {selectRow?.selectAll && selectRow.selectAll}
                {settings?.template && (
                    <SettingsInternal size={base?.settings.size}>{settings.template}</SettingsInternal>
                )}
                <TableWrapper
                    ref={tableWrapperRef}
                    $isOverflow={!noOverflow}
                    data-id='table-wrapper'
                    onScroll={onScroll}>
                    <Box ref={tableRef}>
                        {!base?.settings.noHeader && <TableHeader />}
                        <TableBody data={data} />
                    </Box>
                </TableWrapper>
                {pinnableColumns && (
                    <BoxShadow
                        style={{
                            width: `${shadowSize.width}px`,
                            height: `${shadowSize.height}px`,
                            opacity: hasShadow ? 1 : 0,
                        }}
                    />
                )}
                {empty?.templates && <Empty>{empty.templates}</Empty>}
                {footer?.templates && footer.templates}
            </Wrapper>
        </TableProvider>
    );
};

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
Table.SortDirection = SortDirection;
Table.Row = Row;
Table.Td = Td;

Table.defaultProps = {
    size: 's',
    valign: 'top',
    dataKey: (item) => item.id,
};

Table.displayName = 'Table';
