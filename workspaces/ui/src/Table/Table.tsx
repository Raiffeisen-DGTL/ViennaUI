import React, { ReactNode, FC, useMemo } from 'react';
import { useLocalization } from '../Localization';
import {
    Column,
    ColumnProps,
    Footer,
    FooterProps,
    ActionIcon,
    ActionsListIcon,
    ActionIconProps,
    GroupBy,
    GroupByProps,
    TableHeader,
    TableBody,
    ExpandingRow,
    ExpandingRowProps,
    SelectAll,
    SelectAllProps,
    TableProvider,
    ColumnGroup,
    ColumnGroupProps,
    Settings,
    SettingsProps,
    SettingsInternal,
    ColumnsSettings,
    ColumnsSettingsProps,
    GroupingSettings,
    GroupingSettingsProps,
    ActionsColumn,
    ActionsColumnProps,
    InputFilter,
    SelectFilter,
    FilterState,
    TableService,
} from './components';
import { TableState, SortDirection } from './types';
import { defaultTableLocalization, TableLocalizationProps } from './localization';
import { initModules } from './TableModules';
import { initEvents } from './TableEvents';
import { validate } from './validate';
import { Wrapper, TableWrapper, Box, Empty } from './Table.styles';

interface Props {
    children: ReactNode;
    data?: any[];
    size?: 's' | 'm' | 'l';
    valign?: 'baseline' | 'top' | 'middle' | 'bottom';
    noHeader?: boolean;
    noRowDivider?: boolean;
    maxHeight?: string;
    minHeight?: string;
    noOverflow?: boolean;
    disableSelectAll?: boolean;
    pinnableColumns?: boolean;
    selected?: any[];
    sort?: SortDirection;
    filter?: FilterState;
    onRowClick?: (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void;
    onRowDoubleClick?: (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void;
    onSort?: (event?: React.FormEvent, data?: { field: string; direction: SortDirection }) => void;
    onFilter?: (data?: Record<string, any>) => void;
    onSelect?: (event: React.FormEvent, data: any) => void;
    onScroll?: (event: React.FormEvent) => void;
    initState?: TableState;
    state?: TableState;
    // initState?: TableState;
    service?: () => TableService;
    onUpdate?: (newState: TableState, id: string) => void;
    onInit?: ({ service: TableService, state: TableState }) => void;
    // TODO: delete these two:
    // onServiceInit handler is deprecated. FCC-1246
    onServiceInit?: (service: TableService) => void;
    // onStateUpdate handler is deprecated. FCC-1246
    onStateUpdate?: (newState: TableState, id: string) => void;
    // / TODO
}

interface HTMLAttributeProps {
    [key: string]: any;
    id?: string;
    className?: string;
    role?: string;
    spellCheck?: boolean;
    tabIndex?: number;
}

export type TableProps = HTMLAttributeProps & Props;
interface TableParts {
    Column: FC<ColumnProps>;
    Footer: FC<FooterProps>;
    ActionIcon: FC<ActionIconProps>;
    ActionsListIcon: FC<ActionIconProps>;
    ExpandingRow: FC<ExpandingRowProps>;
    SelectAll: FC<SelectAllProps>;
    ColumnGroup: FC<ColumnGroupProps>;
    GroupBy: FC<GroupByProps>;
    Settings: FC<SettingsProps>;
    ColumnsSettings: FC<ColumnsSettingsProps>;
    GroupingSettings: GroupingSettingsProps;
    ActionsColumn: FC<ActionsColumnProps>;
    InputFilter: FC;
    SelectFilter: FC;
    SortDirection: typeof SortDirection;
}

export const Table: FC<TableProps> & TableParts & TableLocalizationProps = (props: TableProps) => {
    const {
        data,
        service,
        children,
        maxHeight,
        minHeight,
        noOverflow,
        size,
        valign,
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
        onServiceInit,
        onStateUpdate,
        initState,
        state: forcedState,
        ...attrs
    } = props;

    const localization = useLocalization(props, defaultTableLocalization);

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
                onServiceInit,
                onStateUpdate,
            }),
        [onInit, onUpdate, onSort, onFilter, onServiceInit, onStateUpdate]
    );

    validate({ props, config, state, features });

    const { base, empty, footer, selectRow, settings } = config;

    const providerProps = {
        config,
        state: forcedState ?? state,
        features,
        tableEvents,
        isForcedState: Boolean(forcedState),
        service,
        data,
        localization,
    };

    return (
        <TableProvider {...providerProps}>
            <Wrapper
                maxHeight={maxHeight}
                minHeight={minHeight}
                outlined={base?.settings.outlined}
                data-id='table-container'
                {...attrs}>
                {selectRow?.selectAll && selectRow.selectAll}
                {settings?.template && (
                    <SettingsInternal size={base?.settings.size}>{settings.template}</SettingsInternal>
                )}
                <TableWrapper onScroll={onScroll} isOverflow={!noOverflow} data-id='table-wrapper'>
                    <Box>
                        {!base?.settings.noHeader && <TableHeader />}
                        <TableBody data={data} />
                    </Box>
                </TableWrapper>
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
Table.ColumnGroup = ColumnGroup;
Table.GroupBy = GroupBy;
Table.Settings = Settings;
Table.ColumnsSettings = ColumnsSettings;
Table.GroupingSettings = GroupingSettings;
Table.ActionsColumn = ActionsColumn;
Table.InputFilter = InputFilter;
Table.SelectFilter = SelectFilter;
Table.SortDirection = SortDirection;

Table.defaultProps = {
    size: 's',
    valign: 'top',
};

Table.displayName = 'Table';
export default Table;
