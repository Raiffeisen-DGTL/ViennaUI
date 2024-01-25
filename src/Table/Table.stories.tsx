import React, { useCallback } from 'react';
import { Story, Meta } from 'storybook';
import { Groups, DropList, Select, Link, Checkbox, Tooltip, Button, Badge, EmptyState, RoundIcon, Input } from '..';
import { Edit, TrashDelete, AddRing, CloseCancelX, Checkmark } from '@fcc/icons';
import { Table, TableProps } from './Table';
import { TableState } from './types';
import { CustomWrapperProps } from './components';

interface Person {
    id: number | string;
    level: string;
    firstName: string;
    lastName: string;
    position: string;
    phone: string;
}

const fullData: Person[] = [
    {
        id: '0',
        level: '1',
        firstName: 'Joseph',
        lastName: 'Doe',
        position: 'Software Engineer',
        phone: '9163456789',
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

const data = fullData.slice(0, 5);

export default {
    title: 'Development/Table',
    component: Table,
    argTypes: {
        value: {
            control: false,
        },
    },
} as Meta;

export const Overview: Story<TableProps> = (args) => {
    return (
        <Table {...args} data={data}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' width='300px' resizable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' width='300px' resizable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position'>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );
};

export const ComplexTable: Story<TableProps> = (args) => {
    return (
        <Table {...args} data={fullData} maxHeight='350px' pinnableColumns>
            <Table.Column id='id' title='#' pinned>
                {(person) => person.id}
            </Table.Column>
            <Table.Column
                id='firstName'
                title='First Name'
                pinned
                sortable
                filter={<Table.InputFilter />}
                forceIconVisibility>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' forceIconVisibility={true} pinned sortable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column
                id='position'
                title='Position'
                noWrap
                filter={
                    <Table.SelectFilter>
                        <Select.Option>PM</Select.Option>
                        <Select.Option>Software Engineer</Select.Option>
                    </Table.SelectFilter>
                }>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone' noWrap draggable>
                {(person) => person.phone}
            </Table.Column>
            <Table.Column id='position2' title='Position2' noWrap draggable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone2' title='Phone2' noWrap draggable>
                {(person) => person.phone}
            </Table.Column>
            <Table.Column id='position3' title='Position3' noWrap draggable resizable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone3' title='Phone3' noWrap draggable resizable>
                {(person) => person.phone}
            </Table.Column>
            <Table.Column id='position4' title='Position4' noWrap resizable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone4' title='Phone4' noWrap resizable>
                {(person) => person.phone}
            </Table.Column>
            <Table.ActionsColumn id='actions' width='110px'>
                {() => (
                    <Groups size='xs'>
                        <Table.ActionIcon title='Edit'>
                            <Edit size='xs' />
                        </Table.ActionIcon>
                        <Table.ActionIcon title='Delete'>
                            <TrashDelete size='xs' />
                        </Table.ActionIcon>
                        <Table.ActionsListIcon title='More'>
                            <DropList float='end'>
                                <DropList.Item>Edit</DropList.Item>
                                <DropList.Item>Move</DropList.Item>
                                <DropList.Item>Delete</DropList.Item>
                            </DropList>
                        </Table.ActionsListIcon>
                    </Groups>
                )}
            </Table.ActionsColumn>
            <Table.ExpandingRow>
                {(person) => (
                    <span>
                        {person.lastName} {person.firstName}
                    </span>
                )}
            </Table.ExpandingRow>
            <Table.Settings>
                <Table.ColumnsSettings />
                <Table.GroupingSettings>
                    <Table.GroupingSettings.Item id='none' name='None' />
                    <Table.GroupingSettings.Item id='position' name='By position'>
                        <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
                        <Table.GroupBy id='pm' title='PM' filter={(item) => item.position === 'PM'} />
                    </Table.GroupingSettings.Item>
                    <Table.GroupingSettings.Item id='name' name='By name'>
                        <Table.GroupBy id='g1' title='Jane' filter={(item) => item.firstName === 'Jane'} />
                        <Table.GroupBy id='g2' title='Johnnie' filter={(item) => item.firstName === 'Johnnie'} />
                        <Table.GroupBy
                            id='g3'
                            title='Other'
                            filter={(item) => item.firstName !== 'Johnnie' && item.firstName !== 'Jane'}
                        />
                    </Table.GroupingSettings.Item>
                </Table.GroupingSettings>
            </Table.Settings>
            <Table.Footer id='footer'>
                <Link design='accent'>
                    <AddRing /> Добавить данные
                </Link>
            </Table.Footer>
        </Table>
    );
};
ComplexTable.storyName = 'Таблица с фичами';
ComplexTable.parameters = {
    docs: {
        source: {
            type: 'code',
        },
    },
};

export const Selection: Story<TableProps> = (args) => {
    return (
        <Table {...args} data={data} noHeader>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' width='300px' resizable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' width='300px' resizable>
                {(person) => person.lastName}
            </Table.Column>

            <Table.Selection>
                {({ data, isSelected, ...rest }: { data: any; isSelected: boolean }) => {
                    if (['1', '3'].includes(data.id)) {
                        return <Checkbox {...rest} checked={isSelected} disabled />;
                    }

                    if (['0', '2'].includes(data.id)) {
                        return (
                            <Tooltip content={data.position} anchor={'right'}>
                                <Checkbox {...rest} checked={isSelected} />
                            </Tooltip>
                        );
                    }

                    return <Checkbox {...rest} checked={isSelected} />;
                }}
            </Table.Selection>
        </Table>
    );
};

Selection.storyName = 'Selection';

export const TableWithFunctionInitState: Story<TableProps> = (args) => {
    const initState = useCallback((state: TableState) => {
        // псевдо сортировка для примера
        state.columns?.list.sort((a) => (a.id === 'phone' ? -1 : 1));

        return state;
    }, []);

    return (
        <Table {...args} initState={initState} data={data} noHeader>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' width='300px' resizable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' width='300px' resizable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position'>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );
};

TableWithFunctionInitState.storyName = 'Таблица с initState в виде функции';

export const TableWithLocalization: Story<TableProps> = (args) => {
    const enUS = {
        'ds.table.filter.sortUp': 'Sort ASC',
        'ds.table.filter.sortDown': 'Sort Desc',
        'ds.table.settings': 'Settings',
        'ds.table.settings.groupBy': 'Group by',
        'ds.table.settings.columnSearch': 'Search...',
        'ds.table.settings.hideAllColumns': 'Hide all',
        'ds.table.settings.showAllColumns': 'Show all',
        'ds.table.settings.selectAll.fullData': [
            'Select all rows',
            'in the table',
            'All rows',
            'on the page are selected',
        ],
        'ds.table.settings.selectAll.onPage': [
            'Select all rows',
            'on the page',
            'All rows',
            'in the table are selected',
        ],
    };

    return (
        <Table {...args} data={data} minHeight='200px' localization={enUS}>
            <Table.SelectAll fullData={data} />
            <Table.Column id='id' title='#' />
            <Table.Column id='firstName' title='First Name' sortable filter={<Table.InputFilter />} />
            <Table.Column id='lastName' title='Last Name' />
            <Table.Column id='position' title='Position' />
            <Table.Column id='phone' title='Phone' />
            <Table.Settings>
                <Table.ColumnsSettings searchable hideShowAll />
                <Table.GroupingSettings>
                    <Table.GroupingSettings.Item id='none' name='None' />
                    <Table.GroupingSettings.Item id='position' name='By position'>
                        <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
                        <Table.GroupBy id='pm' title='PM' filter={(item) => item.position === 'PM'} />
                    </Table.GroupingSettings.Item>
                    <Table.GroupingSettings.Item id='name' name='By name'>
                        <Table.GroupBy id='g1' title='Jane' filter={(item) => item.firstName === 'Jane'} />
                        <Table.GroupBy id='g2' title='Johnnie' filter={(item) => item.firstName === 'Johnnie'} />
                        <Table.GroupBy
                            id='g3'
                            title='Other'
                            filter={(item) => item.firstName !== 'Johnnie' && item.firstName !== 'Jane'}
                        />
                    </Table.GroupingSettings.Item>
                </Table.GroupingSettings>
            </Table.Settings>
        </Table>
    );
};

TableWithLocalization.storyName = 'Таблица с локализацией';

export const TableInteractive: Story<TableProps> = (args) => {
    // state
    const [dataset, setData] = React.useState(data);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    // event handlers
    const showLoading = () => {
        setData([]);
        setError(false);
        setLoading(true);
    };
    const showError = () => {
        setData([]);
        setLoading(false);
        setError(true);
    };
    const showData = () => {
        setData(data);
        setLoading(false);
        setError(false);
    };

    return (
        <div>
            <Groups style={{ margin: '10px' }}>
                <Button onClick={showData}>Data</Button>
                <Button design='accent' onClick={showLoading}>
                    Loading
                </Button>
                <Button design='critical' onClick={showError}>
                    Error
                </Button>
            </Groups>
            <Table {...args} data={dataset}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name'>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' title='Position'>
                    {(person) => (
                        <Badge color='miami30' size='s'>
                            {person.position}
                        </Badge>
                    )}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
                <Table.ActionsColumn id='actions' width='110px'>
                    {(person) => (
                        <Groups size='xs'>
                            <Table.ActionIcon title='Edit'>
                                <Edit size='xs' />
                            </Table.ActionIcon>
                            <Table.ActionIcon title='Trash'>
                                <TrashDelete size='xs' />
                            </Table.ActionIcon>
                            <Table.ActionsListIcon title='More'>
                                <DropList float='end'>
                                    <DropList.Item>Edit</DropList.Item>
                                    <DropList.Item>Move</DropList.Item>
                                    <DropList.Item>Delete</DropList.Item>
                                </DropList>
                            </Table.ActionsListIcon>
                        </Groups>
                    )}
                </Table.ActionsColumn>
                {!loading && !error && (
                    <Table.Footer id='footer'>
                        <Groups justifyContent='space-between'>
                            <Link design='accent'>
                                <AddRing /> Добавить данные
                            </Link>
                        </Groups>
                    </Table.Footer>
                )}
                {dataset.length === 0 && loading && (
                    <EmptyState loading>
                        <EmptyState.Title>Загружаем данные</EmptyState.Title>
                        <EmptyState.Description>
                            Мы загружаем данные таблицы, очень скоро они будут готовы.
                        </EmptyState.Description>
                    </EmptyState>
                )}
                {dataset.length === 0 && error && (
                    <EmptyState>
                        <RoundIcon color='nice10'>
                            <CloseCancelX />
                        </RoundIcon>
                        <EmptyState.Title>Ошибка загрузки данных</EmptyState.Title>
                        <EmptyState.Description>Что-то пошло не так и мы уже работаем над этим.</EmptyState.Description>
                    </EmptyState>
                )}
            </Table>
        </div>
    );
};

TableInteractive.storyName = 'Interactive';

export const TableEditRow: Story<TableProps> = (args) => {
    const [editRecord, setEditRecord] = React.useState<any>(undefined);
    const edit = (id) => setEditRecord(data[id]);
    const isEditMode = (id) => editRecord && editRecord.id === id;
    const changeHandler = (id, key, value) => {
        const obj = { ...editRecord, [key]: value.value };
        setEditRecord(obj);
    };
    const save = (id) => {
        data[id] = editRecord;
        setEditRecord(undefined);
    };
    const cancel = () => {
        setEditRecord(undefined);
    };
    return (
        <Table {...args} data={data} size='m'>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name'>
                {(person) => (
                    <>
                        {isEditMode(person.id) && (
                            <Input
                                size='s'
                                value={editRecord.firstName}
                                onChange={(e, value) => changeHandler(person.id, 'firstName', value)}
                            />
                        )}
                        {!isEditMode(person.id) && person.firstName}
                    </>
                )}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name'>
                {(person) => (
                    <>
                        {isEditMode(person.id) && (
                            <Input
                                size='s'
                                value={editRecord.lastName}
                                onChange={(e, value) => changeHandler(person.id, 'lastName', value)}
                            />
                        )}
                        {!isEditMode(person.id) && person.lastName}
                    </>
                )}
            </Table.Column>
            <Table.Column id='position' title='Position'>
                {({ id, position }) => (
                    <>
                        {isEditMode(id) && (
                            <Select
                                size='s'
                                value={editRecord.position}
                                onSelect={(e, value) => changeHandler(id, 'position', value)}>
                                <Select.Option>Software Engineer</Select.Option>
                                <Select.Option>PM</Select.Option>
                                <Select.Option>CTO</Select.Option>
                            </Select>
                        )}
                        {!isEditMode(id) && position}
                    </>
                )}
            </Table.Column>
            <Table.Column id='level' title='Level'>
                {({ id, level }) => (
                    <>
                        {isEditMode(id) && (
                            <Select
                                size='s'
                                value={editRecord.level}
                                onSelect={(e, value) => changeHandler(id, 'level', value)}>
                                <Select.Option>1</Select.Option>
                                <Select.Option>2</Select.Option>
                                <Select.Option>3</Select.Option>
                            </Select>
                        )}
                        {!isEditMode(id) && (
                            <Badge color='miami30' size='s'>
                                {level}
                            </Badge>
                        )}
                    </>
                )}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
            <Table.ActionsColumn id='actions' width='90px' align='right'>
                {({ id }) => (
                    <>
                        {isEditMode(id) && (
                            <Groups size='xs'>
                                <Table.ActionIcon title='Save' onClick={() => save(id)}>
                                    <Checkmark size='xs' />
                                </Table.ActionIcon>
                                <Table.ActionIcon title='Cancel' onClick={() => cancel()}>
                                    <CloseCancelX size='xs' />
                                </Table.ActionIcon>
                            </Groups>
                        )}
                        {!isEditMode(id) && (
                            <Table.ActionIcon onClick={() => edit(id)}>
                                <Edit size='xs' />
                            </Table.ActionIcon>
                        )}
                    </>
                )}
            </Table.ActionsColumn>
        </Table>
    );
};

TableEditRow.storyName = 'Редактирование строки';

export const TableExpandingRow: Story<TableProps> = () => (
    <Table data={data}>
        <Table.Column id='id' title='#'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name'>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name'>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' title='Position'>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone'>
            {(person) => person.phone}
        </Table.Column>
        <Table.ExpandingRow>
            {(person) => (
                <span>
                    {person.lastName} {person.firstName}
                </span>
            )}
        </Table.ExpandingRow>
    </Table>
);

TableExpandingRow.storyName = 'Раскрывающиеся строки';

export const TableExpandingRowCustomWrapper: Story<TableProps> = () => {
    const customWrapper = ({ children, tableConfig, noHover }: CustomWrapperProps) => {
        const { size } = tableConfig.base.settings;
        return (
            <>
                {children.map((person, idx) => (
                    <Table.Row noHover={noHover} key={idx}>
                        <Table.Td size={size} />
                        <Table.Td size={size}>{person.id}</Table.Td>
                        <Table.Td size={size}>{person.firstName}</Table.Td>
                        <Table.Td size={size}>{person.lastName}</Table.Td>
                        <Table.Td size={size}>{person.position}</Table.Td>
                        <Table.Td size={size}>{person.phone}</Table.Td>
                    </Table.Row>
                ))}
            </>
        );
    };

    return (
        <Table data={data}>
            <Table.Column id='id' title='#' resizable>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name'>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name'>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position'>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
            <Table.ExpandingRow allowMultiple customWrapper={customWrapper}>
                {(person) => [person, person]}
            </Table.ExpandingRow>
        </Table>
    );
};

TableExpandingRowCustomWrapper.storyName = 'Раскрывающиеся строки с кастомизируемой оберткой содержимого';

export const TableColumnWidth: Story<TableProps> = () => (
    <Table data={data}>
        <Table.Column id='id' title='#'>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name' resizable>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' resizable>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' title='Position' resizable>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone'>
            {(person) => person.phone}
        </Table.Column>
    </Table>
);

TableColumnWidth.storyName = 'Изменение ширины колонки';
