import React, { ReactNode, FC } from 'react';
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
} from './components';
import { TableService, TableState } from './types';
import { initModules } from './TableModules';
import { Wrapper, TableWrapper, Box, Empty } from './Table.styles';

interface Props {
    children: ReactNode;
    service?: () => TableService;
    data?: any[];
    size?: 's' | 'm' | 'l';
    noHeader?: boolean;
    noRowDivider?: boolean;
    maxHeight?: string;
    selected?: any[];
    disableSelectAll?: boolean;
    pinnableColumns?: boolean;
    state?: TableState;
    onStateUpdate?: (newState: TableState) => void;
    onRowClick?: (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void;
    onRowDoubleClick?: (event: React.MouseEvent<HTMLElement>, data: Record<string, any>) => void;
    onSort?: (event: React.FormEvent, data: { field: string; direction: 'asc' | 'desc' }) => void;
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
}

export const Table: FC<TableProps> & TableParts = (props: TableProps) => {
    const {
        data,
        service,
        children,
        maxHeight,
        size,
        noHeader,
        noRowDivider,
        expandedRow,
        onExpand,
        onStateUpdate,
        onServiceInit,
        onSort,
        onRowClick,
        onRowDoubleClick,
        selected,
        disableSelectAll,
        pinnableColumns,
        onSelect,
        onScroll,
        state: forcedState,
        ...attrs
    } = props;

    const { config, state } = initModules({
        children,
        settings: {
            maxHeight,
            size,
            noHeader,
            noRowDivider,
            expandedRow,
            onExpand,
            onSort,
            onRowClick,
            onRowDoubleClick,
            selected,
            disableSelectAll,
            onSelect,
            pinnableColumns,
        },
    });

    const { base, empty, footer, selectRow, settings } = config;

    const providerProps = {
        config,
        state: forcedState ?? state,
        isForcedState: Boolean(forcedState),
        service,
        onStateUpdate,
        onServiceInit,
        data,
    };

    return (
        <TableProvider {...providerProps}>
            <Wrapper maxHeight={base?.settings.maxHeight} outlined={base?.settings.outlined} {...attrs}>
                {selectRow?.selectAll && selectRow.selectAll}
                {settings?.template && (
                    <SettingsInternal size={base?.settings.size}>{settings.template}</SettingsInternal>
                )}
                <TableWrapper onScroll={onScroll}>
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

Table.defaultProps = {
    size: 's',
};

Table.displayName = 'Table';
export default Table;
