import React, { PropsWithChildren } from 'react';
import { Table, Body, Head, Header, Row, Td, ExpanderCell, SelectionCell, SelectionHeader } from './components';

export const CustomTable: React.FC<PropsWithChildren> & {
    Head: typeof Head;
    Body: typeof Body;
    Data: typeof Td;
    Header: typeof Header;
    Row: typeof Row;
    ExpanderCell: typeof ExpanderCell;
    SelectionCell: typeof SelectionCell;
    SelectionHeader: typeof SelectionHeader;
} = ({ children, ...props }) => {
    const { ...attrs } = props;
    return <Table {...attrs}>{children}</Table>;
};

CustomTable.Head = Head;

CustomTable.Body = Body;

CustomTable.Data = Td;

CustomTable.Header = Header;

CustomTable.Row = Row;

CustomTable.ExpanderCell = ExpanderCell;

CustomTable.SelectionCell = SelectionCell;

CustomTable.SelectionHeader = SelectionHeader;

CustomTable.displayName = 'CustomTable';
