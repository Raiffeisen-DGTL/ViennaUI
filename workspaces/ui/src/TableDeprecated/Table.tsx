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
} from './components';
import { TableService, TableState, SortDirection } from './types';
import { defaultTableLocalization, TableLocalizationProps } from './localization';
import { initModules } from './TableModules';
import { initEvents } from './TableEvents';
import { Wrapper, TableWrapper, Box, Empty } from './Table.styles';

interface Props {
    children: ReactNode;
    service?: () => TableService;
    data?: any[];
    size?: 's' | 'm' | 'l';
    noHeader?: boolean;
    noRowDivider?: boolean;
    maxHeight?: string;
    minHeight?: string;
    noOverflow?: boolean;
    selected?: any[];
    disableSelectAll?: boolean;
    pinnableColumns?: boolean;
    state?: TableState;
    sort?: SortDirection;
    filter?: FilterState;
    onStateUpdate?: (newState: TableState, id: string) => void;
    onRowClick?: (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void;
    onRowDoubleClick?: (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void;
    onSort?: (event?: React.FormEvent, data?: { field: string; direction: SortDirection }) => void;
    onFilter?: (data?: Record<string, any>) => void;
    onSelect?: (event: React.FormEvent, data: any) => void;
    onScroll?: (event: React.FormEvent) => void;
    onServiceInit?: (service: TableService) => void;
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
        noHeader,
        noRowDivider,
        expandedRow,
        selected,
        sort,
        filter,
        disableSelectAll,
        pinnableColumns,
        onExpand,
        onStateUpdate,
        onServiceInit,
        onSort,
        onFilter,
        onRowClick,
        onRowDoubleClick,
        onSelect,
        onScroll,
        state: forcedState,
        ...attrs
    } = props;

    const localization = useLocalization(props, defaultTableLocalization);

    const { config, state, features } = initModules({
        children,
        settings: {
            maxHeight,
            size,
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
    });

    const tableEvents = useMemo(
        () =>
            initEvents({
                onStateUpdate,
                onServiceInit,
                onSort,
                onFilter,
            }),
        [onStateUpdate, onServiceInit, onSort, onFilter]
    );

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
                {...attrs}
                data-id='table-container'>
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
};

Table.displayName = 'Table';
export default Table;
