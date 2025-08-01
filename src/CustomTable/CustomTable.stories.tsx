import React, { PropsWithChildren } from 'react';
import { CustomTable } from './CustomTable';
import { Story, Meta } from 'storybook';
import {
    ColumnDef,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table';
import styled from 'styled-components';

export default {
    title: 'Development/CustomTable',
    component: CustomTable,
} as Meta;

interface Person {
    id: number | string;
    level: string;
    firstName: string;
    lastName: string;
    position: string;
    phone: string;
    subRows?: Array<Partial<Person>>;
}

const defaultData: Person[] = [
    {
        id: '0',
        level: '1',
        firstName: 'Joseph',
        lastName: 'Doe',
        position: 'Software Engineer',
        phone: '9163456789',
        subRows: [
            {
                phone: '9253456785',
            },
            {
                phone: '9773456567',
            },
        ],
    },
    {
        id: '1',
        level: '2',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456780',
    },
    {
        id: '2',
        level: '3',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: '3',
        level: '3',
        firstName: 'James',
        lastName: 'Jameson',
        position: 'PM',
        phone: '916456789',
    },
    {
        id: '4',
        level: '1',
        firstName: 'John',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456789',
    },
    {
        id: '5',
        level: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'Software Engineer',
        phone: '9163456780',
    },
    {
        id: '6',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: '7',
        level: '1',
        firstName: 'James',
        lastName: 'Jameson',
        position: 'CTO',
        phone: '916456789',
    },
    {
        id: '8',
        level: '1',
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        phone: '9163456789',
    },
    {
        id: '9',
        level: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'CTO',
        phone: '9163456780',
    },
    {
        id: '10',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'CTO',
        phone: 'none',
    },
    {
        id: '11',
        level: '1',
        firstName: 'James',
        lastName: 'Jameson',
        position: 'PM',
        phone: '916456789',
    },
    {
        id: '12',
        level: '1',
        firstName: 'John',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456789',
    },
    {
        id: '13',
        level: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456780',
    },
    {
        id: '14',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: '15',
        level: '1',
        firstName: 'James',
        lastName: 'Jameson',
        position: 'CTO',
        phone: '916456789',
    },
    {
        id: '16',
        level: '1',
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        phone: '9163456789',
    },
    {
        id: '17',
        level: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456780',
    },
    {
        id: '18',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: '19',
        level: '1',
        firstName: 'James',
        lastName: 'Jameson',
        position: 'CTO',
        phone: '916456789',
    },
    {
        id: '20',
        level: '1',
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        phone: '9163456789',
    },
    {
        id: '21',
        level: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456780',
    },
    {
        id: '22',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: '23',
        level: '1',
        firstName: 'James',
        lastName: 'Jameson',
        position: 'CTO',
        phone: '916456789',
    },
    {
        id: '24',
        level: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456780',
    },
    {
        id: '25',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: '26',
        level: '1',
        firstName: 'James',
        lastName: 'Jameson',
        position: 'CTO',
        phone: '916456789',
    },
    {
        id: '27',
        level: '1',
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        phone: '9163456789',
    },
    {
        id: '28',
        level: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456780',
    },
    {
        id: '29',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: '30',
        level: '1',
        firstName: 'James',
        lastName: 'Jameson',
        position: 'CTO',
        phone: '916456789',
    },
    {
        id: '31',
        level: '1',
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        phone: '9163456789',
    },
    {
        id: '32',
        level: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456780',
    },
    {
        id: '33',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: '34',
        level: '1',
        firstName: 'James',
        lastName: 'Jameson',
        position: 'CTO',
        phone: '916456789',
    },
    {
        id: '35',
        level: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456780',
    },
    {
        id: '36',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: '37',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: '38',
        level: '1',
        firstName: 'James',
        lastName: 'Jameson',
        position: 'CTO',
        phone: '916456789',
    },
    {
        id: '39',
        level: '1',
        firstName: 'Jane',
        lastName: 'Doe',
        position: 'PM',
        phone: '9163456780',
    },
    {
        id: '49',
        level: '1',
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
];

const TableContainer = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: flex-start;
    flex-direction: column;

    background-color: rgba(27, 31, 35, 0.05);
    padding: 32px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1000px;
    height: 500px;
`;

export const Overview: Story<PropsWithChildren> = () => {
    return (
        <CustomTable>
            <CustomTable.Head>
                <CustomTable.Row>
                    <CustomTable.Header>Name</CustomTable.Header>
                    <CustomTable.Header>Surname</CustomTable.Header>
                    <CustomTable.Header>Position</CustomTable.Header>
                    <CustomTable.Header>Phone</CustomTable.Header>
                </CustomTable.Row>
            </CustomTable.Head>
            <CustomTable.Body>
                {defaultData.map((row) => (
                    <CustomTable.Row key={row.id}>
                        {Object.keys(row)
                            .filter((d) => !['id', 'level', 'subRows'].includes(d))
                            .map((key) => (
                                <CustomTable.Data key={key}>{row[key]}</CustomTable.Data>
                            ))}
                    </CustomTable.Row>
                ))}
            </CustomTable.Body>
        </CustomTable>
    );
};

export const BasicCustomTable: Story<any> = (args) => {
    const columnHelper = createColumnHelper<Person>();
    const columns = [
        columnHelper.accessor('firstName', {
            id: 'firstName',
            cell: (info) => info.getValue(),
            header: () => <CustomTable.Header>First Name</CustomTable.Header>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor((row) => row.lastName, {
            id: 'lastName',
            header: () => <CustomTable.Header>Last Name</CustomTable.Header>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('position', {
            id: 'position',
            header: () => <CustomTable.Header>Position</CustomTable.Header>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('phone', {
            id: 'phone',
            header: () => <CustomTable.Header>Phone</CustomTable.Header>,
            footer: (info) => info.column.id,
        }),
    ];
    const [data] = React.useState(() => [...defaultData]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Container>
            <TableContainer>
                <CustomTable>
                    <CustomTable.Head>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <CustomTable.Row key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <CustomTable.Header key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </CustomTable.Header>
                                ))}
                            </CustomTable.Row>
                        ))}
                    </CustomTable.Head>

                    <CustomTable.Body>
                        {table.getRowModel().rows.map((row) => (
                            <CustomTable.Row key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <CustomTable.Data key={cell.id}>
                                        <div>
                                            <span>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>
                                        </div>
                                    </CustomTable.Data>
                                ))}
                            </CustomTable.Row>
                        ))}
                    </CustomTable.Body>
                </CustomTable>
            </TableContainer>
        </Container>
    );
};

BasicCustomTable.storyName = 'Basic custom table';

export const TableWithSelector: Story<any> = (args) => {
    const [rowSelection, setRowSelection] = React.useState({});

    const columns = React.useMemo<ColumnDef<Person, any>[]>(
        () => [
            {
                id: 'select_row',
                header: ({ table }) => (
                    <CustomTable.SelectionHeader
                        checked={table.getIsAllRowsSelected()}
                        indeterminate={table.getIsSomeRowsSelected()}
                        onChange={table.getToggleAllRowsSelectedHandler()}
                    />
                ),
                cell: ({ row }) => {
                    return (
                        <CustomTable.SelectionCell
                            checked={row.getIsSelected()}
                            onChange={row.getToggleSelectedHandler()}
                        />
                    );
                },
            },
            {
                id: 'firstName',
                accessorKey: 'firstName',
                header: () => <CustomTable.Header>First Name</CustomTable.Header>,
                cell: ({ cell }) => <CustomTable.Data>{cell.getValue()}</CustomTable.Data>,
            },
            {
                id: 'lastName',
                accessorKey: 'lastName',
                header: () => <CustomTable.Header>Last Name</CustomTable.Header>,
                cell: ({ cell }) => <CustomTable.Data>{cell.getValue()}</CustomTable.Data>,
            },
            {
                id: 'position',
                accessorKey: 'position',
                header: () => <CustomTable.Header>Position</CustomTable.Header>,
                cell: ({ cell }) => <CustomTable.Data>{cell.getValue()}</CustomTable.Data>,
            },
            {
                id: 'phone',
                accessorKey: 'phone',
                header: () => <CustomTable.Header>Phone</CustomTable.Header>,
                cell: ({ cell }) => <CustomTable.Data>{cell.getValue()}</CustomTable.Data>,
            },
        ],
        []
    );

    const [data] = React.useState(() => [...defaultData]);

    const table = useReactTable({
        data,
        columns,
        state: {
            rowSelection,
        },
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
    });

    return (
        <Container>
            <TableContainer>
                <CustomTable>
                    <CustomTable.Head>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <CustomTable.Row key={headerGroup.id}>
                                {headerGroup.headers.map((header) =>
                                    flexRender(header.column.columnDef.header, header.getContext())
                                )}
                            </CustomTable.Row>
                        ))}
                    </CustomTable.Head>
                    <CustomTable.Body>
                        {table.getRowModel().rows.map((row) => (
                            <CustomTable.Row key={row.id} selected={row.getIsSelected()}>
                                {row
                                    .getVisibleCells()
                                    .map((cell) => flexRender(cell.column.columnDef.cell, cell.getContext()))}
                            </CustomTable.Row>
                        ))}
                    </CustomTable.Body>
                </CustomTable>
            </TableContainer>
        </Container>
    );
};

TableWithSelector.storyName = 'Table with selector';

export const TableWithExpand: Story<any> = (args) => {
    const [expanded, setExpanded] = React.useState({});

    const columns = React.useMemo<ColumnDef<Person, any>[]>(
        () => [
            {
                id: 'expand_row',
                header: () => <span></span>,

                cell: ({ row }) => {
                    return row.getCanExpand() ? (
                        <CustomTable.ExpanderCell
                            isRowExpanded={row.getIsExpanded()}
                            onClick={row.getToggleExpandedHandler()}
                        />
                    ) : (
                        <CustomTable.Data />
                    );
                },
            },
            {
                id: 'firstName',
                accessorKey: 'firstName',
                header: () => <span>First Name</span>,
                cell: ({ cell }) => <CustomTable.Data>{cell.getValue()}</CustomTable.Data>,
            },
            {
                id: 'lastName',
                accessorKey: 'lastName',
                header: () => 'Last Name',
                cell: ({ cell }) => <CustomTable.Data>{cell.getValue()}</CustomTable.Data>,
            },
            {
                id: 'position',
                accessorKey: 'position',
                header: () => (
                    <div>
                        <span>Position</span>
                    </div>
                ),
                cell: ({ cell }) => <CustomTable.Data>{cell.getValue()}</CustomTable.Data>,
            },
            {
                id: 'phone',
                accessorKey: 'phone',
                header: () => (
                    <div>
                        <span>Visits</span>
                    </div>
                ),
                cell: ({ cell }) => <CustomTable.Data>{cell.getValue()}</CustomTable.Data>,
            },
        ],
        []
    );

    const [data] = React.useState(() => [...defaultData]);

    const table = useReactTable({
        data,
        columns,
        state: {
            expanded,
        },
        onExpandedChange: setExpanded,
        getSubRows: (row) => row.subRows as any,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
    });

    return (
        <Container>
            <TableContainer>
                <CustomTable>
                    <CustomTable.Head>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <CustomTable.Row key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <CustomTable.Header key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </CustomTable.Header>
                                ))}
                            </CustomTable.Row>
                        ))}
                    </CustomTable.Head>
                    <CustomTable.Body>
                        {table.getRowModel().rows.map((row) => (
                            <CustomTable.Row key={row.id}>
                                {row
                                    .getVisibleCells()
                                    .map((cell) => flexRender(cell.column.columnDef.cell, cell.getContext()))}
                            </CustomTable.Row>
                        ))}
                    </CustomTable.Body>
                </CustomTable>
            </TableContainer>
        </Container>
    );
};

TableWithExpand.storyName = 'Table with expanding rows';
