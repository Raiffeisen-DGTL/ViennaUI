# CustomTable

Компоненты кастомной таблицы можно использовать не прибегая к помощи сторонних библиотек. Достаточно собрать компоненты вместе.


## Импорт

```
import { CustomTable } from 'vienna-ui';
```

## Использование

```
 {() => {
        // Здесь и далее в примерах используются данные приведенного ниже формата:
        const data = [
            {
                id: 0,
                firstName: 'John',
                lastName: 'Doe',
                position: 'Software Engineer',
                phone: '9163456789',
                level: 1,
            },
            {
                id: 1,
                firstName: 'Johnnie',
                lastName: 'Walker',
                position: 'Software Engineer',
                phone: 'none',
                level: 2,
            },
            {
                id: 2,
                firstName: 'James',
                lastName: 'Jameson',
                position: 'CTO',
                phone: '916456789',
                level: 2,
            },
        ];
        return (
            <CustomTable>
                <CustomTable.Head>
                    <CustomTable.Row>
                        <CustomTable.Header>
                            Name
                        </CustomTable.Header>
                        <CustomTable.Header>
                            Surname
                        </CustomTable.Header>
                        <CustomTable.Header>
                            Position
                        </CustomTable.Header>
                        <CustomTable.Header>
                            Phone
                        </CustomTable.Header>
                    </CustomTable.Row>
                </CustomTable.Head>
                <CustomTable.Body>
                    {data.map(row => (
                        <CustomTable.Row key={row.id}>
                            <CustomTable.Data>
                                {row.firstName}
                            </CustomTable.Data>
                            <CustomTable.Data>
                                {row.lastName}
                            </CustomTable.Data>
                            <CustomTable.Data>
                                {row.position}
                            </CustomTable.Data>
                            <CustomTable.Data>
                                {row.phone}
                            </CustomTable.Data>
                        </CustomTable.Row>
                    ))}
                </CustomTable.Body>
            </CustomTable>
        );
    }}
```

## Использование c @tanstack/react-table

```
    {() => (<BasicReactTable />)}
```

```jsx
    // BasicReactTable.jsx

    import React from 'react';

    import {
        createColumnHelper,
        flexRender,
        getCoreRowModel,
        useReactTable,
    } from '@tanstack/react-table';

   import { CustomTable } from 'vienna.ui';

    const defaultData = [
        {
            firstName: 'jane',
            lastName: 'linsley',
            age: 24,
            visits: 100,
            status: 'In Relationship',
            progress: 50,
        },
        {
            firstName: 'tandy',
            lastName: 'miller',
            age: 40,
            visits: 40,
            status: 'Single',
            progress: 80,
        },
        {
            firstName: 'joe',
            lastName: 'dirte',
            age: 45,
            visits: 20,
            status: 'Complicated',
            progress: 10,
        },
    ];
    const columnHelper = createColumnHelper();
    const columns = [
        columnHelper.accessor('firstName', {
            id: 'firstName',
            cell: (info) => info.getValue(),
            header: () => <span>First Name</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor((row) => row.lastName, {
            id: 'lastName',
            cell: (info) => <i>{info.getValue()}</i>,
            header: () => (
                <div>
                    <span>Last Name</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('position', {
            header: () => (
                <div>
                    <span>Position</span>
                </div>
            ),
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('phone', {
            header: () => (
                <div>
                    <span>Phone</span>
                </div>
            ),
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
```




#### Row Selection
Подробнее о API Row Selection на странице [официальной документации](https://tanstack.com/table/v8/docs/api/features/row-selection)


```
    {() => (<TableWithSelector />)}
```

```tsx
// TableWithSelector.tsx
import React from 'react';

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';

import { Checkbox, CustomTable } from 'vienna.ui';

const TableWithSelector = (args) => {
    const [rowSelection, setRowSelection] = React.useState({});

    const defaultData = [
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
    ];

    const columns = React.useMemo<ColumnDef<Person>[]>(
        () => [
            {
                id: 'select_row',
                header: ({ table }) =>  <Checkbox
                    checked={table.getIsAllRowsSelected()}
                    indeterminate={table.getIsSomeRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                />,
                cell: ({ row }) => {
                    return <Checkbox
                        checked={row.getIsSelected()}
                        onChange={row.getToggleSelectedHandler()}
                    />;
                },
            },
            {
                id: 'firstName',
                accessorKey: 'firstName',
                header: () => <span>First Name</span>,
                footer: (info) => info.column.id,
            },
            {
                id: 'lastName',
                accessorKey: 'lastName',
                header: () => (
                    <div>
                        <span>Last Name</span>
                    </div>
                ),
                footer: (info) => info.column.id,
            },
            {
                id: 'position',
                header: () => (
                    <div>
                        <span>Position</span>
                    </div>
                ),
                accessorKey: 'position',
                footer: (info) => info.column.id,
            },
            {
                id: 'phone',
                accessorKey: 'phone',
                header: () => (
                    <div>
                        <span>Phone</span>
                    </div>
                ),
                footer: (info) => info.column.id,
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
```


#### Row Expanding

Подробнее о API Row Expanding на странице [официальной документации](https://tanstack.com/table/v8/docs/api/features/expanding)

```
    {() => (<TableWithExpand />)}
```

```tsx
import React from 'react';

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    useReactTable,
} from '@tanstack/react-table';

import { CustomTable, SelectHide, SelectOpenDown} from 'vienna.ui';

const TableWithExpand = (args) => {
    const [expanded, setExpanded] = React.useState({});

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
        }
    ]

    const columns = React.useMemo<ColumnDef<Person>[]>(
        () => [
            {
                id: 'expand_row',
                header: () => <span></span>,

                cell: ({ row }) => {
                    return row.getCanExpand() ? (
                        <td
                            onClick={row.getToggleExpandedHandler()}
                        >
                            {row.getIsExpanded() ? <SelectHide /> : <SelectOpenDown />}
                        </td>
                    ) : ('');
                },
            },
            {
                id: 'firstName',
                accessorKey: 'firstName',
                header: () => <span>First Name</span>,
                footer: (info) => info.column.id,
            },
            {
                id: 'lastName',
                accessorKey: 'lastName',
                header: () => (
                    <div>
                        <span>Last Name</span>
                    </div>
                ),
                footer: (info) => info.column.id,
            },
            {
                id: 'position',
                header: () => (
                    <div>
                        <span>Position</span>
                    </div>
                ),
                accessorKey: 'position',
                footer: (info) => info.column.id,
            },
            {
                id: 'phone',
                accessorKey: 'phone',
                header: () => (
                    <div>
                        <span>Visits</span>
                    </div>
                ),
                footer: (info) => info.column.id,
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
        getSubRows: row => row.subRows,
        getCoreRowModel: getCoreRowModel(),
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
```

#### Header - иконка с тултипом.

Вы можете передавать любой JSX для кастомизации компонентов

```
    {() => <TableWithHeaderIcon />}
```

```tsx

import React from 'react';

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';

import { CustomTable, HintRing } from 'vienna.ui';

() => {
    const defaultData = [
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
    ];
    const columnHelper = createColumnHelper<Person>();
    const columns = [
        columnHelper.accessor('firstName', {
            id: 'firstName',
            cell: (info) => info.getValue(),
            header: () => <span>First Name</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor((row) => row.lastName, {
            id: 'lastName',
            cell: (info) => <i>{info.getValue()}</i>,
            header: () => (
                <div>
                    <span>Last Name</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('position', {
            header: () => (
                <div>
                    <span>Position</span>
                </div>
            ),
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('phone', {
            header: () => (
                <div>
                    <span>Phone</span>
                </div>
            ),
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
                                        <Tooltip content="И тут стало всё понятно">
                                            <HintRing />
                                        </Tooltip>
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

```
#### Сохранение настроек таблицы

Сохраненить настройки таблицы можно, если прокинуть в неё начальное состояние и реагироваь на его изменения.


```
    {() => <TableWithSettings />}
```

```tsx
import React from 'react';
import { CustomTable } from 'vienna.ui';

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';

    const defaultData = [
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
    ];
    const columnHelper = createColumnHelper<Person>();
    const columns = [
        columnHelper.accessor('firstName', {
            id: 'firstName',
            cell: (info) => info.getValue(),
            header: () => <span>First Name</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor((row) => row.lastName, {
            id: 'lastName',
            cell: (info) => <i>{info.getValue()}</i>,
            header: () => (
                <div>
                    <span>Last Name</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('position', {
            header: () => (
                <div>
                    <span>Position</span>

                    </div>
            ),
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('phone', {
            header: () => (
                <div>
                    <span>Phone</span>
                        <Settings />
                </div>
            ),
            footer: (info) => info.column.id,
        }),
    ];
    const [data] = React.useState(() => [...defaultData]);

    const [settings, onChange] = React.useState();

    const table = useReactTable({
        data,
        columns,
        settings,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Container>
            <TableContainer>
                <CustomTable onChange={onChange}>
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
```

#### Видимость колонок

```
    {() => <TableWithColumnVisibility />}
```

```tsx
import React from 'react';
import { CustomTable } from 'vienna.ui';

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';

 const defaultData = [
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
    ];
    const columnHelper = createColumnHelper<Person>();
    const columns = [
        columnHelper.accessor('firstName', {
            id: 'firstName',
            cell: (info) => info.getValue(),
            header: () => <span>First Name</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor((row) => row.lastName, {
            id: 'lastName',
            cell: (info) => <i>{info.getValue()}</i>,
            header: () => (
                <div>
                    <span>Last Name</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('position', {
            header: () => (
                <div>
                    <span>Position</span>
                </div>
            ),
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('phone', {
            header: () => (
                <div>
                    <span>Phone</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
    ];
    const [data] = React.useState(() => [...defaultData]);
    const [columnVisibility, setColumnVisibility] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        state: {
            columnVisibility,
        },
        onColumnVisibilityChange: setColumnVisibility,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div>
                <div className="px-1 border-b border-black">
                    <label>
                        <input
                            {...{
                                type: 'checkbox',
                                checked: table.getIsAllColumnsVisible(),
                                onChange: table.getToggleAllColumnsVisibilityHandler(),
                            }}
                        />{' '}
                        Toggle All
                    </label>
                </div>
            {table.getAllLeafColumns().map(column => {
                return (
                    <div key={column.id} className="px-1">
                        <label>
                            <input
                                {...{
                                    type: 'checkbox',
                                    checked: column.getIsVisible(),
                                    onChange: column.getToggleVisibilityHandler(),
                                }}
                            />{' '}
                            {column.id}
                        </label>
                    </div>
                )
            })}
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
    </div>
    );
```


#### Группировка колонок

```
    {() => <TableWithColumnGroup />}
```


```tsx

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { CustomTable } from 'vienna.ui';

 type Person = {
        firstName: string
        lastName: string
        age: number
        visits: number
        status: string
        progress: number
    }

    const defaultData: Person[] = [
        {
            firstName: 'tanner',
            lastName: 'linsley',
            age: 24,
            visits: 100,
            status: 'In Relationship',
            progress: 50,
        },
        {
            firstName: 'tandy',
            lastName: 'miller',
            age: 40,
            visits: 40,
            status: 'Single',
            progress: 80,
        },
        {
            firstName: 'joe',
            lastName: 'dirte',
            age: 45,
            visits: 20,
            status: 'Complicated',
            progress: 10,
        },
    ]
    const columnHelper = createColumnHelper<Person>();
    const columns = [
        columnHelper.group({
            id: 'hello',
            header: () => <span>Hello</span>,
            // footer: props => props.column.id,
            columns: [
                columnHelper.accessor('firstName', {
                    cell: info => info.getValue(),
                    footer: props => props.column.id,
                }),
                columnHelper.accessor(row => row.lastName, {
                    id: 'lastName',
                    cell: info => info.getValue(),
                    header: () => <span>Last Name</span>,
                    footer: props => props.column.id,
                }),
            ],
        }),
        columnHelper.group({
            header: 'Info',
            footer: props => props.column.id,
            columns: [
                columnHelper.accessor('age', {
                    header: () => 'Age',
                    footer: props => props.column.id,
                }),
                columnHelper.group({
                    header: 'More Info',
                    columns: [
                        columnHelper.accessor('visits', {
                            header: () => <span>Visits</span>,
                            footer: props => props.column.id,
                        }),
                        columnHelper.accessor('status', {
                            header: 'Status',
                            footer: props => props.column.id,
                        }),
                        columnHelper.accessor('progress', {
                            header: 'Profile Progress',
                            footer: props => props.column.id,
                        }),
                    ],
                }),
            ],
        }),
    ]
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
                        {table.getHeaderGroups().map(headerGroup => (
                            <CustomTable.Row key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <CustomTable.Header hasBottomDivider hasRightDivider key={header.id} colSpan={header.colSpan}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
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
```


#### Пагинация
```
    {() => <TableWithPagination />}
```


```tsx
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    PaginationState,
} from '@tanstack/react-table';

import { CustomTable } from 'vienna.ui';

    const defaultData = [
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
            firstName: 'Johny',
            lastName: 'Silverhand',
            position: 'PM',
            phone: '9169996767',
        },
    ];
    const columnHelper = createColumnHelper<Person>();
    const columns = [
        columnHelper.accessor('firstName', {
            id: 'firstName',
            cell: (info) => info.getValue(),
            header: () => <span>First Name</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor((row) => row.lastName, {
            id: 'lastName',
            cell: (info) => <i>{info.getValue()}</i>,
            header: () => (
                <div>
                    <span>Last Name</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('position', {
            header: () => (
                <div>
                    <span>Position</span>
                </div>
            ),
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('phone', {
            header: () => (
                <div>
                    <span>Phone</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
    ];
    const [data] = React.useState(() => [...defaultData]);
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 4,
    })
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
        },
    });

    return (
        <div className="p-2">
            <div className="h-2" />
            <CustomTable>
                <CustomTable.Head>
                {table.getHeaderGroups().map(headerGroup => (
                    <CustomTable.Row key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (
                                <CustomTable.Header key={header.id} colSpan={header.colSpan}>
                                    <div
                                        {...{
                                            className: header.column.getCanSort()
                                                ? 'cursor-pointer select-none'
                                                : '',
                                            onClick: header.column.getToggleSortingHandler(),
                                        }}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {{
                                            asc: ' 🔼',
                                            desc: ' 🔽',
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </div>
                                </CustomTable.Header>
                            )
                        })}
                    </CustomTable.Row>
                ))}
                </CustomTable.Head>
                <CustomTable.Body>
                {table.getRowModel().rows.map(row => {
                    return (
                        <CustomTable.Row key={row.id}>
                            {row.getVisibleCells().map(cell => {
                                return (
                                    <CustomTable.Data key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </CustomTable.Data>
                                )
                            })}
                        </CustomTable.Row>
                    )
                })}
                </CustomTable.Body>
            </CustomTable>
            <div className="h-2" />
            <div className="flex items-center gap-2">
                <button
                    className="border rounded p-1"
                    onClick={() => table.firstPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {'<'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>'}
                </button>
                <button
                    className="border rounded p-1"
                    onClick={() => table.lastPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {'>>'}
                </button>
                <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount().toLocaleString()}
          </strong>
        </span>
                <span className="flex items-center gap-1">
          | Go to page:
          <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  table.setPageIndex(page)
              }}
              className="border p-1 rounded w-16"
          />
        </span>
                <select
                    value={table.getState().pagination.pageSize}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
```


#### Сортировка значений в колонке
```
    {() => <TableWithColumnsSorting />}
```


```tsx
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
} from '@tanstack/react-table';


import {CustomTable } from 'vienna.ui';
import { SelectHide, SelectOpenDown } from 'vienna.icons';
 const defaultData = [
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
    ];
    const columnHelper = createColumnHelper<Person>();
    const columns = [
        columnHelper.accessor('firstName', {
            id: 'firstName',
            cell: (info) => info.getValue(),
            header: () => <span>First Name</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor((row) => row.lastName, {
            id: 'lastName',
            cell: (info) => <i>{info.getValue()}</i>,
            header: () => (
                <div>
                    <span>Last Name</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('position', {
            header: () => (
                <div>
                    <span>Position</span>
                </div>
            ),
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('phone', {
            header: () => (
                <div>
                    <span>Phone</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
    ];
    const [data] = React.useState(() => [...defaultData]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <div className="p-2">
            <div className="h-2" />
            <CustomTable>
                <CustomTable.Head>
                {table.getHeaderGroups().map(headerGroup => (
                    <CustomTable.Row key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (
                                <CustomTable.Header key={header.id} colSpan={header.colSpan}>
                                    <div
                                        {...{
                                            className: header.column.getCanSort()
                                                ? 'cursor-pointer select-none'
                                                : '',
                                            onClick: header.column.getToggleSortingHandler(),
                                        }}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                        {{
                                            asc: <SelectOpenDown/>,
                                            desc: <SelectHide/>,
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </div>
                                </CustomTable.Header>
                            )
                        })}
                    </CustomTable.Row>
                ))}
                </CustomTable.Head>
                <CustomTable.Body>
                {table.getRowModel().rows.map(row => {
                    return (
                        <CustomTable.Row key={row.id}>
                            {row.getVisibleCells().map(cell => {
                                return (
                                    <CustomTable.Data key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </CustomTable.Data>
                                )
                            })}
                        </CustomTable.Row>
                    )
                })}
                </CustomTable.Body>
            </CustomTable>
        </div>
    );
```


#### Фильтрация значений в колонке

```
    {() => <TableWithColumnsFilter />}
```


```tsx
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getFilteredRowModel,
    Column,
    Table as ReactTable,
} from '@tanstack/react-table';


import {  CustomTable } from 'vienna.ui';

 type Person = {
        firstName: string
        lastName: string
        age: number
        visits: number
        status: string
        progress: number
    }

    const defaultData: Person[] = [
        {
            firstName: 'tanner',
            lastName: 'linsley',
            age: 24,
            visits: 100,
            status: 'In Relationship',
            progress: 50,
        },
        {
            firstName: 'tandy',
            lastName: 'miller',
            age: 40,
            visits: 40,
            status: 'Single',
            progress: 80,
        },
        {
            firstName: 'joe',
            lastName: 'dirte',
            age: 45,
            visits: 20,
            status: 'Complicated',
            progress: 10,
        },
    ]
    const columnHelper = createColumnHelper<Person>();
    const columns = [
        columnHelper.accessor('firstName', {
            id: 'firstName',
            cell: (info) => info.getValue(),
            header: () => <span>First Name</span>,
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor((row) => row.lastName, {
            id: 'lastName',
            cell: (info) => <i>{info.getValue()}</i>,
            header: () => (
                <div>
                    <span>Last Name</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('age', {
            header: () => (
                <div>
                    <span>Age</span>
                </div>
            ),
            cell: (info) => info.renderValue(),
            footer: (info) => info.column.id,
        }),
        columnHelper.accessor('visits', {
            header: () => (
                <div>
                    <span>Visits</span>
                </div>
            ),
            footer: (info) => info.column.id,
        }),
    ];
    const [data] = React.useState(() => [...defaultData]);
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
    });

    function Filter({
                        column,
                        table,
                    }: {
        column: Column<any, any>
        table: ReactTable<any>
    }) {
        const firstValue = table
            .getPreFilteredRowModel()
            .flatRows[0]?.getValue(column.id)

        const columnFilterValue = column.getFilterValue()

        return typeof firstValue === 'number' ? (
            <div className="flex space-x-2">
                <input
                    type="number"
                    value={(columnFilterValue as [number, number])?.[0] ?? ''}
                    onChange={e =>
                        column.setFilterValue((old: [number, number]) => [
                            e.target.value,
                            old?.[1],
                        ])
                    }
                    placeholder={`Min`}
                    className="w-24 border shadow rounded"
                />
                <input
                    type="number"
                    value={(columnFilterValue as [number, number])?.[1] ?? ''}
                    onChange={e =>
                        column.setFilterValue((old: [number, number]) => [
                            old?.[0],
                            e.target.value,
                        ])
                    }
                    placeholder={`Max`}
                    className="w-24 border shadow rounded"
                />
            </div>
        ) : (
            <input
                type="text"
                value={(columnFilterValue ?? '') as string}
                onChange={e => column.setFilterValue(e.target.value)}
                placeholder={`Search...`}
                className="w-36 border shadow rounded"
            />
        )
    }

    return (
        <div className="p-2">
            <div className="h-2" />
            <CustomTable>
                <CustomTable.Head>
                    {table.getHeaderGroups().map(headerGroup => (
                        <CustomTable.Row key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <CustomTable.Header key={header.id} colSpan={header.colSpan}>
                                        <div
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {header.column.getCanFilter() ? (
                                                <div>
                                                    <Filter column={header.column} table={table} />
                                                </div>
                                            ) : null}
                                        </div>
                                    </CustomTable.Header>
                                )
                            })}
                        </CustomTable.Row>
                    ))}
                </CustomTable.Head>
                <CustomTable.Body>
                    {table.getRowModel().rows.map(row => {
                        return (
                            <CustomTable.Row key={row.id}>
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <CustomTable.Data key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </CustomTable.Data>
                                    )
                                })}
                            </CustomTable.Row>
                        )
                    })}
                </CustomTable.Body>
            </CustomTable>
        </div>
    );
```

