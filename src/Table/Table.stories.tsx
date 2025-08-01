import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { parse } from 'date-fns';
import { Story, Meta } from 'storybook';
import {
    Groups,
    DropList,
    Select,
    Link,
    Checkbox,
    Tooltip,
    Button,
    Badge,
    EmptyState,
    Input,
    Switcher,
    Text,
    Hint,
    Flex,
    Pagination,
    IconContainer,
    TableService,
} from '..';
import {
    EditIcon as Edit,
    TrashDeleteIcon as TrashDelete,
    AddRingIcon as AddRing,
    CloseCancelXIcon as CloseCancelX,
    CheckmarkIcon as Checkmark,
    SearchIcon as Search,
    CatIcon as Cat,
    EditIcon,
    TrashDeleteIcon,
} from 'vienna.icons';
import { Table, TableProps } from './Table';
import { SortDirection, TableState } from './types';
import { CustomWrapperProps, SortState } from './components';

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
        firstName: 'Joseph long long long long long long long long long',
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

export const Overview: Story<TableProps<Person>> = (args) => {
    return (
        <Table
            {...args}
            data={data}
            testId={{
                row: (row) => row,
                col: (row, col) => `${row}_${col}`,
            }}>
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
        </Table>
    );
};

export const ComplexTable: Story<TableProps> = (args) => {
    return (
        <Table filterExpandingRow={(item) => item.id !== '1'} data={fullData} maxHeight='350px' noWrap pinnableColumns>
            <Table.Column id='id' title='#' width={'35px'} pinned>
                {(person) => person.id}
            </Table.Column>
            <Table.Column
                id='firstName'
                title='First Name'
                width={'340px'}
                pinned
                sortable
                resizable
                filter={<Table.InputFilter />}
                forceIconVisibility>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column
                id='lastName'
                title='Last Name'
                width={'110px'}
                forceIconVisibility
                pinned
                sortable
                resizable
                filter={<Table.InputFilter />}>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column
                id='position'
                title='Position'
                noWrap
                sortable
                filter={
                    <Table.SelectFilter>
                        <Select.Option>PM</Select.Option>
                        <Select.Option>Software Engineer</Select.Option>
                    </Table.SelectFilter>
                }
                forceIconVisibility>
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
            <Table.Column id='position3' title='Position3' draggable noWrap resizable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone3' title='Phone3' draggable resizable>
                {(person) => person.phone}
            </Table.Column>
            <Table.Column id='position4' title='Position4' resizable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone4' title='Phone4' resizable>
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
            <Table.ExpandingRow>
                {(person: Person) => (
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
            <Table.Column id='firstName' title='First Name' width='300px' noWrap resizable>
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
    const initState = useCallback((state: TableState<Person>) => {
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
        <Table {...args} data={data} minHeight='200px'>
            <Table.SelectAll fullData={data} />
            <Table.Column id='id' title='#' />
            <Table.Column id='firstName' title='First Name' sortable filter={<Table.InputFilter />} />
            <Table.Column id='lastName' title='Last Name' sortable />
            <Table.Column id='position' title='Position' sortable />
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
    const EmptyStateComponent = () => {
        return (
            <EmptyState>
                <IconContainer color='oslo10'>
                    <Search />
                </IconContainer>
                <EmptyState.Title>Кастомный заголовок экрана загрузки</EmptyState.Title>
                <EmptyState.Description>Кастомное описание</EmptyState.Description>
            </EmptyState>
        );
    };
    // state
    const [dataset, setData] = React.useState(data);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [isEmpty, setIsEmpty] = React.useState(false);
    // custom mode switcher
    const [isSwitched, setIsSwitched] = React.useState(false);
    // event handlers
    const showLoading = () => {
        setData([]);
        setIsError(false);
        setIsLoading(true);
        setIsEmpty(false);
    };
    const showError = () => {
        setData([]);
        setIsLoading(false);
        setIsError(true);
        setIsEmpty(false);
    };
    const showEmpty = () => {
        setData([]);
        setIsLoading(false);
        setIsError(false);
        setIsEmpty(true);
    };
    const showData = () => {
        setData(data);
        setIsLoading(false);
        setIsError(false);
        setIsEmpty(false);
    };

    return (
        <div>
            <Groups style={{ margin: '10px' }} justifyContent='space-between'>
                <Groups>
                    <Button onClick={showData}>Data</Button>
                    <Button design='accent' onClick={showLoading}>
                        Loading
                    </Button>
                    <Button design='primary' onClick={showEmpty}>
                        Empty
                    </Button>
                    <Button design='critical' onClick={showError}>
                        Error
                    </Button>
                </Groups>
                <Groups>
                    <Text>{`${isSwitched ? 'Кастомный' : 'Дефолтный'} вариант EmptyState`}</Text>
                    <Switcher
                        checked={isSwitched}
                        onChange={({ value }) => {
                            setIsSwitched(value);
                        }}
                    />
                </Groups>
            </Groups>
            <Table {...{ ...args, isError, isEmpty, isLoading }} data={dataset}>
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
                {!isLoading && !isError && !isEmpty && (
                    <Table.Footer id='footer'>
                        <Groups justifyContent='space-between'>
                            <Link design='accent'>
                                <AddRing /> Добавить данные
                            </Link>
                        </Groups>
                    </Table.Footer>
                )}

                {isSwitched && dataset.length === 0 && isLoading && (
                    <Table.EmptyState>
                        <EmptyStateComponent />
                    </Table.EmptyState>
                )}

                {isSwitched && isEmpty && (
                    <EmptyState>
                        <IconContainer color='seattle10'>
                            <Cat />
                        </IconContainer>
                        <EmptyState.Title>Кастомный заголовок (тут ничего нет)</EmptyState.Title>
                        <EmptyState.Description>Кастомное описание</EmptyState.Description>
                    </EmptyState>
                )}

                {isSwitched && dataset.length === 0 && isError && (
                    <EmptyState>
                        <IconContainer color='nice10'>
                            <CloseCancelX />
                        </IconContainer>
                        <EmptyState.Title>Кастомный заголовок сообщении ошибки</EmptyState.Title>
                        <EmptyState.Description>Кастомное описание</EmptyState.Description>
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
                                onChange={({ value }) => changeHandler(person.id, 'firstName', value)}
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
                                onChange={({ value }) => changeHandler(person.id, 'lastName', value)}
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
                                onSelect={({ value }) => changeHandler(id, 'position', value)}>
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
                                onSelect={({ value }) => changeHandler(id, 'level', value)}>
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

export const TableExpandingRowCustomWrapper: Story<TableProps> = () => {
    const customWrapper = ({ children, tableConfig, noHover }: CustomWrapperProps<Person>) => {
        const { size } = tableConfig.base.settings;
        return (
            <>
                {children.map((person, idx) => (
                    <Table.Row $noHover={noHover} key={idx}>
                        <Table.Td $size={size} />
                        <Table.Td $size={size}>{person.id}</Table.Td>
                        <Table.Td $size={size}>{person.firstName}</Table.Td>
                        <Table.Td $size={size}>{person.lastName}</Table.Td>
                        <Table.Td $size={size}>{person.position}</Table.Td>
                        <Table.Td $size={size}>{person.phone}</Table.Td>
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
        <Table.Column id='firstName' title='First Name' sortable resizable>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' sortable resizable>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' title='Position' sortable resizable>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone'>
            {(person) => person.phone}
        </Table.Column>
    </Table>
);

TableColumnWidth.storyName = 'Изменение ширины колонки';

export const TableDataIsNotArray: Story<TableProps> = () => (
    <Table data={'invaliddata' as any}>
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

TableDataIsNotArray.storyName = 'Передача не массива в качестве data';

export const TableExampleSort: Story<TableProps> = (args) => {
    const enableCancelSort = args.enableCancelSort;
    const [dataSet, setDataSet] = React.useState(data);
    const onSort = ({ value: { field, direction } }) => {
        if (field && direction === SortDirection.None) {
            setDataSet(data);
            return;
        }
        const dir = direction === SortDirection.Desc ? -1 : 1;
        if (field) {
            let newData = [...data].sort(function (a, b) {
                let nameA = a[field].toUpperCase();
                let nameB = b[field].toUpperCase();
                let result = nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
                return result * dir;
            });
            setDataSet(newData);
        }
    };

    return (
        <Table {...args} data={dataSet} onSort={onSort} enableCancelSort={enableCancelSort}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' resizable sortable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' resizable sortable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position' resizable sortable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );
};
TableExampleSort.storyName = 'Сортировка таблицы';

export const TableAddChildren: Story<TableProps> = (args) => {
    const [extraColumns, setExtraColumns] = React.useState<React.ReactNode[]>([]);

    const handleClick = () => {
        setExtraColumns((prev) => {
            const index = prev.length + 1;
            return [
                ...prev,
                <Table.Column id={`phone ${index}`} title={`Phone ${index}`} key={index}>
                    {(person) => person.phone}
                </Table.Column>,
            ];
        });
    };
    return (
        <>
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
                {extraColumns.map((column) => column)}
            </Table>
            <Button onClick={handleClick}>Добавить столбец</Button>
        </>
    );
};
TableAddChildren.storyName = 'Обновление таблицы при обновлении children';

export const RowServices: Story<TableProps> = (args) => {
    let tableService: TableService<Person>;
    return (
        <div>
            <Groups bottomGap>
                <Button
                    onClick={() => {
                        tableService.toggleSelectRow(data[0], { isSelect: true });
                    }}>
                    Select row 0
                </Button>
                <Button
                    onClick={() => {
                        const rows = tableService.getSelectedRows();
                        rows?.forEach((row) => {
                            tableService.deselectRow(row);
                        });
                    }}>
                    deselect all
                </Button>
                <Button
                    onClick={() => tableService.toggleSelectRow(data[1], { isSelect: false, isIndeterminate: true })}>
                    Incomplete row 1
                </Button>
                <Button
                    onClick={() =>
                        tableService.toggleSelectRow(data[2], { isSelect: false, isCheckboxDisabled: true })
                    }>
                    Disable row 2
                </Button>
                <Button
                    onClick={() =>
                        tableService.toggleSelectRow(data[2], { isSelect: false, isCheckboxDisabled: false })
                    }>
                    Enable row 2
                </Button>
                <Button onClick={() => tableService.togglePinnedColumn('firstName')}>Pin firstName</Button>
                <Button onClick={() => tableService.togglePinnedColumn('lastName')}>Pin lastName</Button>
                <Button onClick={() => tableService.setColoredRowsItem({ id: '0', color: 'geneva10' })}>
                    Set color
                </Button>
            </Groups>
            <Table
                indeterminate
                data={data}
                onInit={({ service }) => {
                    tableService = service;
                }}
                onSelect={console.log}
                disableCheckboxRow={[data[3]]}
                pinnableColumns>
                <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
                <Table.GroupBy id='pm' title='Project Managers' filter={(item) => item.position === 'PM'} />
                <Table.Column id='id' title='#' pinned>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name' noWrap>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name' noWrap>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' title='Position' noWrap>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone' noWrap>
                    {(person) => person.phone}
                </Table.Column>
                <Table.Column id='firstName1' title='First Name 1' noWrap>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName1' title='Last Name 1 ' noWrap>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position1' title='Position 1' noWrap>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone1' title='Phone 1' noWrap>
                    {(person) => person.phone}
                </Table.Column>
                <Table.ExpandingRow>
                    {(person: Person) => (
                        <span>
                            {person.lastName} {person.firstName}
                        </span>
                    )}
                </Table.ExpandingRow>
            </Table>
        </div>
    );
};
RowServices.storyName = 'Управление состоянием';

export const TableWithSelect: Story<TableProps> = () => (
    <Table data={data} onSelect={console.log}>
        <Table.Column id='id' title='#' pinned>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name' noWrap>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' noWrap>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' title='Position' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone' noWrap>
            {(person) => person.phone}
        </Table.Column>
        <Table.Column id='firstName1' title='First Name 1' noWrap>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName1' title='Last Name 1 ' noWrap>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position1' title='Position 1' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone1' title='Phone 1' noWrap>
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
TableWithSelect.storyName = 'Выбор строк без группировки';

export const SelectWithGroupBy: Story<TableProps> = () => (
    <Table data={data} onSelect={console.log} disableCheckboxRow={[data[2]]}>
        <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
        <Table.GroupBy id='pm' title='Project Managers' filter={(item) => item.position === 'PM'} />

        <Table.Column id='id' title='#' pinned>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name' noWrap>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' noWrap>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' title='Position' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone' noWrap>
            {(person) => person.phone}
        </Table.Column>
        <Table.Column id='firstName1' title='First Name 1' noWrap>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName1' title='Last Name 1 ' noWrap>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position1' title='Position 1' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone1' title='Phone 1' noWrap>
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
SelectWithGroupBy.storyName = 'Выбор строк с группировкой';

export const SelectWithoutGroupBy: Story<TableProps> = () => (
    <Table data={data} onSelect={console.log} disableCheckboxRow={[data[2]]}>
        <Table.GroupBy id='sde' title='SDE' selectable={false} expandable filter={(item) => item.position === 'Software Engineer'} />
        <Table.GroupBy id='pm' title='Project Managers' selectable={false} expandable filter={(item) => item.position === 'PM'} />

        <Table.Column id='id' title='#' pinned>
            {(person) => person.id}
        </Table.Column>
        <Table.Column id='firstName' title='First Name' noWrap>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName' title='Last Name' noWrap>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position' title='Position' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone' title='Phone' noWrap>
            {(person) => person.phone}
        </Table.Column>
        <Table.Column id='firstName1' title='First Name 1' noWrap>
            {(person) => person.firstName}
        </Table.Column>
        <Table.Column id='lastName1' title='Last Name 1 ' noWrap>
            {(person) => person.lastName}
        </Table.Column>
        <Table.Column id='position1' title='Position 1' noWrap>
            {(person) => person.position}
        </Table.Column>
        <Table.Column id='phone1' title='Phone 1' noWrap>
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
SelectWithoutGroupBy.storyName = 'Выбор строк с группировкой без выбора группы';

export const TableActionIconColoredRow: Story<TableProps> = (args) => {
    const coloredRows = [
        {
            id: '0',
            color: 'geneva10',
        },
        {
            id: '1',
            color: 'moscow10',
        },
        {
            id: '2',
            color: 'osaka10',
        },
        {
            id: '3',
            color: 'seattle05',
        },
        {
            id: '4',
            color: 'seattle10',
        },
    ];
    let tableService;

    React.useEffect(() => {
        tableService.setColoredRows(coloredRows);
    }, []);
    return (
        <div>
            <Groups bottomGap>
                <Button onClick={() => tableService.removeAllColoredRows()}>Удалить цвет со все строк</Button>
                <Button onClick={() => tableService.removeColoredRowsItem('0')}>Удалить цвет с первой строки</Button>
                <Button onClick={() => tableService.setColoredRows(coloredRows)}>Покрасить все строки</Button>
            </Groups>
            <Table
                data={data}
                pinnableColumns
                onInit={({ service }) => {
                    tableService = service;
                }}
                onRowClick={({ value }) => {
                    tableService.toggleColoredRow({
                        id: value.id,
                        color: '#FFE9DC',
                    });
                }}>
                <Table.Column id='id' title='#' pinned />
                <Table.Column id='firstName' title='First Name' pinned />
                <Table.Column id='lastName' title='Last Name' pinned />
                <Table.Column id='position' title='Position'>
                    {(person) => (
                        <Badge color='miami30' size='s'>
                            {person.position}
                        </Badge>
                    )}
                </Table.Column>
                <Table.Column id='phone' title='Phone' />
                <Table.ActionsColumn id='actions' width='110px'>
                    {() => (
                        <Groups size='xs'>
                            <Table.ActionIcon title='Edit' disabled tooltipTextForDisabled='Редактирование невозможно'>
                                <Edit size='xs' />
                            </Table.ActionIcon>
                            <Table.ActionIcon title='Delete' isAlwaysVisible color='nice10'>
                                <TrashDelete size='xs' />
                            </Table.ActionIcon>
                            <Table.ActionsListIcon title='More' isAlwaysVisible>
                                <DropList float='end'>
                                    <DropList.Item>Edit</DropList.Item>
                                    <DropList.Item>Move</DropList.Item>
                                    <DropList.Item>Delete</DropList.Item>
                                </DropList>
                            </Table.ActionsListIcon>
                        </Groups>
                    )}
                </Table.ActionsColumn>
            </Table>
        </div>
    );
};
TableActionIconColoredRow.storyName = 'TableActionIconColoredRow';

export const TableWithHints: Story<TableProps> = (args) => {
    const titleWithHint = (
        <Flex gap='s2'>
            Phone
            <Hint
                header='This is header'
                content='Ut ut dui non ipsum pharetra aliquam id in libero. Aenean placerat leo nec ex pharetra finibus. Nunc id turpis eu risus rhoncus cursus quis efficitur sapien. Donec vitae arcu at lectus placerat fringilla.'
            />
        </Flex>
    );
    return (
        <Table filterExpandingRow={(item) => item.id !== '1'} data={fullData} maxHeight='350px' pinnableColumns>
            <Table.Column id='id' title='#' pinned>
                {(person) => person.id}
            </Table.Column>
            <Table.Column
                id='firstName'
                title='First Name'
                pinned
                noWrap
                sortable
                filter={<Table.InputFilter />}
                forceIconVisibility>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column
                id='lastName'
                title='Last Name'
                forceIconVisibility
                pinned
                sortable
                filter={<Table.InputFilter />}>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column
                id='position'
                title='Position'
                noWrap
                sortable
                filter={
                    <Table.SelectFilter>
                        <Select.Option>PM</Select.Option>
                        <Select.Option>Software Engineer</Select.Option>
                    </Table.SelectFilter>
                }
                forceIconVisibility>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title={titleWithHint} titleHint='Phone' titleSettings='Phone' noWrap draggable>
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
TableWithHints.storyName = 'Таблица с подсказками в заголовках';

export const TableExpandingRow: Story<TableProps> = () => {
    let tableService;

    return (
        <>
            <Groups bottomGap>
                <Button onClick={() => tableService.toggleExpandingAllRows()}>Expand all</Button>
            </Groups>
            <Table
                data={data}
                onInit={({ service }) => {
                    tableService = service;
                }}>
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
                <Table.ExpandingRow allowMultiple>
                    {(person) => (
                        <span>
                            {person.lastName} {person.firstName}
                        </span>
                    )}
                </Table.ExpandingRow>
            </Table>
        </>
    );
};

TableExpandingRow.storyName = 'Раскрытие/скрытие строки';

export const Grouping: Story<TableProps> = (args) => {
    let tableService;

    return (
        <>
            <Groups bottomGap>
                <Button onClick={() => tableService.toggleExpandingAllGroups()}>Expand all</Button>
            </Groups>
            <Table
                data={data}
                onInit={({ service }) => {
                    tableService = service;
                }}
                dataKey={(item) => `${item.id}-${item.groupId ?? 'title'}`}>
                <Table.GroupBy
                    id='sde'
                    title='SDE'
                    filter={(item) => item.position === 'Software Engineer'}
                    expandable
                    onExpand={console.log}
                />
                <Table.GroupBy
                    id='pm'
                    title='Project Managers'
                    filter={(item) => item.position === 'PM'}
                    expandable
                    onExpand={console.log}
                />
                <Table.GroupBy
                    id='doe'
                    title='Names Doe'
                    filter={(item) => item.lastName === 'Doe'}
                    expandable
                    expandedDefault={false}
                    onExpand={console.log}
                />
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
        </>
    );
};

Grouping.storyName = 'Раскрытие/скрытие групп строк';

export const ExpandingRowsAndGroups: Story<TableProps> = (args) => {
    let tableService;

    return (
        <>
            <Groups bottomGap>
                <Button onClick={() => tableService.toggleExpandingAllRows()}>Expand all rows</Button>
                <Button onClick={() => tableService.toggleExpandingAllGroups()}>Expand all groups</Button>
            </Groups>
            <Table
                data={data}
                onInit={({ service }) => {
                    tableService = service;
                }}
                dataKey={(item) => `${item.id}-${item.groupId ?? 'title'}`}>
                <Table.GroupBy
                    id='sde'
                    title='SDE'
                    filter={(item) => item.position === 'Software Engineer'}
                    expandable
                    onExpand={console.log}
                />
                <Table.GroupBy
                    id='pm'
                    title='Project Managers'
                    filter={(item) => item.position === 'PM'}
                    expandable
                    onExpand={console.log}
                />
                <Table.GroupBy
                    id='doe'
                    title='Names Doe'
                    filter={(item) => item.lastName === 'Doe'}
                    expandable
                    expandedDefault={false}
                    onExpand={console.log}
                />
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
                <Table.ExpandingRow allowMultiple>
                    {(person) => (
                        <span>
                            {person.lastName} {person.firstName}
                        </span>
                    )}
                </Table.ExpandingRow>
            </Table>
        </>
    );
};

ExpandingRowsAndGroups.storyName = 'Раскрытие/скрытие групп раскрывающихся строк';

export const ColumnsAsProps: Story<TableProps> = (args) => {
    const columns = useMemo(() => {
        return [
            {
                id: 'id',
                title: 'id',
            },
            {
                id: 'level',
                title: 'Уровень',
            },
            {
                id: 'firstName',
                title: 'Имя',
            },
            {
                id: 'lastName',
                title: 'Фамилия Имя',
                children: (record) => (
                    <div>
                        {record.lastName}
                        {record.firstName}
                    </div>
                ),
            },
        ];
    }, []);
    return <Table {...args} data={fullData} columns={columns} />;
};

ColumnsAsProps.storyName = 'Колонки как проп';

export const Filtering: Story<TableProps> = (args) => {
    const dataWithDates = data.map((item, index) => {
        return { ...item, date: `22.07.202${index}`, dateRange: `1${index}.07.2024` };
    });

    const [filter, setFilter] = React.useState<{
        date?: string;
        dateRange?: string;
        firstName?: string;
        position?: string;
    }>();

    const onFilter = (data) => {
        setFilter(Object.assign({}, data));
    };

    const filteredData = (() => {
        if (filter) {
            return dataWithDates.filter((i) => {
                let filtered = true;
                if (filtered && filter.date) {
                    const re = new RegExp(filter.date, 'i');
                    filtered = filtered && i.date.search(re) !== -1;
                }
                if (filtered && filter.dateRange) {
                    const getDate = (arg: string) => parse(arg, 'dd.MM.yyyy', new Date());

                    const range = filter.dateRange.split(' - ');
                    const rangeStart = getDate(range[0]).getTime();
                    const rangeEnd = getDate(range[1]).getTime();
                    const value = getDate(i.dateRange).getTime();

                    filtered = value > rangeStart && value < rangeEnd;
                }
                if (filtered && filter.firstName) {
                    const re = new RegExp(filter.firstName, 'i');
                    filtered = filtered && i.firstName.search(re) !== -1;
                }
                if (filtered && filter.position) {
                    filtered = filtered && i.position === filter.position;
                }

                return filtered;
            });
        }
        return dataWithDates;
    })();

    return (
        <Table {...args} data={filteredData} onFilter={onFilter}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='date' title='Date' sortable filter={<Table.DatePickerFilter />} forceIconVisibility>
                {(person) => person.date}
            </Table.Column>
            <Table.Column
                id='dateRange'
                title='Date range'
                sortable
                filter={<Table.DatePickerRangeFilter />}
                forceIconVisibility>
                {(person) => person.dateRange}
            </Table.Column>
            <Table.Column
                id='firstName'
                title='Name'
                forceIconVisibility
                sortable
                align='right'
                filter={<Table.InputFilter />}>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column
                id='position'
                title='Position'
                forceIconVisibility
                sortable
                align='center'
                filter={
                    <Table.SelectFilter>
                        <Select.Option>PM</Select.Option>
                        <Select.Option>Software Engineer</Select.Option>
                    </Table.SelectFilter>
                }>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );
};

Filtering.storyName = 'Фильтрация строк';

export const ActionColumnsOverflow: Story<TableProps> = (args) => {
    // copying global data
    const smallData = data;
    const bigData = fullData;
    // pagination
    const pageSize = 10;
    const paginate = (page, pageSize) => {
        return bigData.slice(page * pageSize, (page + 1) * pageSize);
    };
    const initData = () => {
        return paginate(0, pageSize);
    };
    // state
    const [dataset, setData] = React.useState(initData());
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
        setData(initData());
        setLoading(false);
        setError(false);
    };
    const handlePageChange = ({ pageIndex, pageSize }, event) => {
        const data = paginate(pageIndex, pageSize);
        setData(data);
    };
    // markup
    return (
        <div>
            <Groups bottomGap>
                <Button onClick={showData}>Data</Button>
                <Button design='accent' onClick={showLoading}>
                    Loading
                </Button>
                <Button design='critical' onClick={showError}>
                    Error
                </Button>
            </Groups>
            <Table data={dataset} onSelect={console.log}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name'>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
                <Table.Column id='position' title='Position'>
                    {(person) => (
                        <Badge color='miami30' size='s'>
                            {person.position}
                        </Badge>
                    )}
                </Table.Column>
                <Table.ActionsColumn id='actions' width='110px'>
                    {(person) => (
                        <Groups size='xs'>
                            <Table.ActionIcon title='Edit'>
                                <Edit size='xs' />
                            </Table.ActionIcon>
                            <Table.ActionIcon title='TrashDelete'>
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
                            <Pagination
                                size='s'
                                pageSize={pageSize}
                                totalItemsCount={bigData.length}
                                onChange={handlePageChange}
                            />
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
                        <IconContainer color='nice10'>
                            <CloseCancelX />
                        </IconContainer>
                        <EmptyState.Title>Ошибка загрузки данных</EmptyState.Title>
                        <EmptyState.Description>Что-то пошло не так и мы уже работаем над этим.</EmptyState.Description>
                    </EmptyState>
                )}
            </Table>
        </div>
    );
};

export const WithColumnGroup: Story<TableProps> = (args) => {
    return (
        <Table {...args} data={data} maxHeight={'200px'}>
            <Table.ColumnGroup title='Group 1' id='g1'>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name' width='300px' resizable>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name' width='300px' resizable>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' title='Position' truncate resizable>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
            </Table.ColumnGroup>
        </Table>
    );
};

export const WithPropLeftBorder: Story<TableProps> = (args) => {
    return (
        <Table
            {...args}
            data={data}
            testId={{
                row: (row) => row,
                col: (row, col) => `${row}_${col}`,
            }}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' width='300px' resizable leftBorder>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' width='300px' resizable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position' leftBorder>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );
};
export const TableWithPagination: Story<TableProps> = (args) => {
    const pageSize = 10;
    const paginate = (page, pageSize) => {
        return fullData.slice(page * pageSize, (page + 1) * pageSize);
    };
    const initData = () => {
        return paginate(0, pageSize);
    };
    const [dataset, setData] = React.useState(initData());
    const handlePageChange = ({ pageIndex, pageSize }, event) => {
        const data = paginate(pageIndex, pageSize);
        setData(data);
    };
    return (
        <Table
            {...args}
            data={dataset}
            minHeight='200px'
            onSelect={(e) => {
                console.log(e);
            }}>
            <Table.SelectAll fullData={fullData} />
            <Table.Column id='id' title='#' />
            <Table.Column id='firstName' title='First Name' sortable />
            <Table.Column id='lastName' title='Last Name' sortable />
            <Table.Column id='position' title='Position' sortable />
            <Table.Column id='phone' title='Phone' />
            <Table.Footer id='footer'>
                <Pagination
                    size='s'
                    pageSize={pageSize}
                    totalItemsCount={fullData.length}
                    onChange={handlePageChange}
                />
            </Table.Footer>
        </Table>
    );
};

export const ShrinkActionsColumn: Story<TableProps> = (args) => {
    return (
        <Table
            {...args}
            filterExpandingRow={(item) => item.id !== '1'}
            data={data}
            maxHeight='350px'
            noWrap
            pinnableColumns>
            <Table.Column id='id' title='#' width={'35px'} pinned>
                {(person) => person.id}
            </Table.Column>
            <Table.Column
                id='firstName'
                title='First Name'
                width={'340px'}
                pinned
                sortable
                resizable
                filter={<Table.InputFilter />}
                forceIconVisibility>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column
                id='lastName'
                title='Last Name'
                width={'110px'}
                forceIconVisibility
                pinned
                sortable
                resizable
                filter={<Table.InputFilter />}>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column
                id='position'
                title='Position'
                noWrap
                sortable
                filter={
                    <Table.SelectFilter>
                        <Select.Option>PM</Select.Option>
                        <Select.Option>Software Engineer</Select.Option>
                    </Table.SelectFilter>
                }
                forceIconVisibility>
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
            <Table.Column id='position3' title='Position3' draggable noWrap resizable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone3' title='Phone3' draggable resizable>
                {(person) => person.phone}
            </Table.Column>
            <Table.Column id='position4' title='Position4' resizable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone4' title='Phone4' resizable>
                {(person) => person.phone}
            </Table.Column>
            <Table.ActionsColumn id='actions' shrinkActionsColumn>
                {() => (
                    <SGroups size='xs'>
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
                    </SGroups>
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

const SGroups = styled(Groups)`
    width: max-content;
`;

ShrinkActionsColumn.storyName = 'Отключение резервации места для ActionsColumn';
ShrinkActionsColumn.parameters = {
    docs: {
        source: {
            type: 'code',
        },
    },
};

export const TableHideRows: Story<TableProps> = (args) => {
    let tableService;

    return (
        <Groups design={'vertical'}>
            <Groups>
                <Button onClick={() => tableService?.hideRow('0')}>Hide first row</Button>
                <Button onClick={() => tableService?.showRow('0')}>Show first row</Button>
                <Button onClick={() => tableService?.hideAllRows()}>Hide all rows</Button>
                <Button onClick={() => tableService?.showAllRows()}>Show all rows</Button>
            </Groups>
            <Table
                {...args}
                data={data}
                testId={{
                    row: (row) => row,
                    col: (row, col) => `${row}_${col}`,
                }}
                onInit={({ service }) => (tableService = service)}>
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
        </Groups>
    );
};
export const WithBuggedActionsBorder: Story<TableProps<Person>> = (args) => {
    const data = [
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
    ];

    return (
        <Table data={data} onSelect={console.log}>
            <Table.Column id='id' title='#' width={'35px'}>
                {(person) => person.id}
            </Table.Column>
            <Table.Column width={'110px'} id='firstName' title='First Name' draggable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column width={'110px'} id='lastName' title='Last Name' draggable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column width={'110px'} id='position' title='Position' draggable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column width={'110px'} id='phone' title='Phone' draggable>
                {(person) => person.phone}
            </Table.Column>
            <Table.Settings>
                <Table.ColumnsSettings />
            </Table.Settings>
            <Table.ActionsColumn width={'110px'} id='actions'>
                <Table.ActionIcon title='Edit'>
                    <Edit size='xs' />
                </Table.ActionIcon>
            </Table.ActionsColumn>
            <Table.ExpandingRow allowMultiple>{(person) => <span>{person.lastName}</span>}</Table.ExpandingRow>
        </Table>
    );
};
WithBuggedActionsBorder.storyName = 'Обрезается бордер у строки в таблице при наличии ActionColumn в таблице';

export const WithOverflowHidden: Story<TableProps> = (args) => {
    return (
        <Table {...args} data={data}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' width='50px' cropText>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' width='100px' resizable cropText>
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

export const TableWithEmptyFilter: Story<TableProps> = (args) => {
    return (
        <div style={{ height: '100%' }}>
            <Table {...args} isEmpty={true}>
                <Table.Column id='id' title='#' />
                <Table.Column id='firstName' title='First Name' filter={<Table.InputFilter />} />
                <Table.Column id='lastName' title='Last Name' />
                <Table.Column id='position' title='Position' />
                <Table.Column id='phone' title='Phone' />
            </Table>
        </div>
    );
};

export const TableSettingsWithTitle: Story<TableProps> = (args) => {
    return (
        <Table {...args} data={data}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name'>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' resizable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position'>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
            <Table.Settings settingsTitle='Настройка таблицы'>
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
        </Table>
    );
};

export const TableFixShrinkActionColumns: Story<TableProps> = (args) => {
    return (
        <Table indeterminate data={data} onSelect={console.log} disableCheckboxRow={[data[3]]} pinnableColumns>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name'>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name'>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
            <Table.Column id='position' title='Position'>
                {(person) => (
                    <Badge color='miami30' size='s'>
                        {person.position}
                    </Badge>
                )}
            </Table.Column>
            <Table.ActionsColumn id='actions' shrinkActionsColumn>
                {() => (
                    <SGroups size='xs'>
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
                    </SGroups>
                )}
            </Table.ActionsColumn>
            <Table.ExpandingRow>
                {(person) => (
                    <span>
                        {person.lastName} {person.firstName}
                    </span>
                )}
            </Table.ExpandingRow>
        </Table>
    );
};

export const WithSearchInTitleSettings: Story<TableProps<Person>> = (args) => {
    return (
        <Table {...args} data={data} onSelect={console.log}>
            <Table.Column id='id' title='#' titleSettings='#' width={'35px'}>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' titleSettings='Name' title='First Name' draggable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' titleSettings='Surname' title='Last Name' draggable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Middle name' draggable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' titleSettings='Phone' draggable>
                {(person) => person.phone}
            </Table.Column>
            <Table.Settings>
                <Table.ColumnsSettings searchable />
            </Table.Settings>
            <Table.ExpandingRow allowMultiple>{(person) => <span>{person.lastName}</span>}</Table.ExpandingRow>
        </Table>
    );
};
WithSearchInTitleSettings.storyName = 'Поиск по titleSettings';

export const ResetSort = () => {
    let tableService: TableService<Person>;
    const [tableData, setData] = React.useState(data);
    const [sort, setSort] = React.useState<SortState | undefined>(undefined);
    const onSort: Table.OnSort = ({ value }) => {
        const { direction } = value;
        const field = value.field as keyof Person;
        if (direction !== 'none') {
            const dir = direction === 'desc' ? -1 : 1;
            const newData = [...tableData].sort(function (a, b) {
                const valueA = a[field];
                const prettyValueA = typeof valueA === 'string' ? valueA.toUpperCase() : valueA;
                const valueB = b[field];
                const prettyValueB = typeof valueB === 'string' ? valueB.toUpperCase() : valueB;
                const result = prettyValueA < prettyValueB ? -1 : prettyValueA > prettyValueB ? 1 : 0;
                return result * dir;
            });
            setData(newData);
            setSort({ field, direction });
        } else {
            setData(data);
            setSort(undefined);
        }
    };

    return (
        <>
            <Button
                onClick={() => {
                    tableService.resetSort();
                }}>
                Clear sort
            </Button>
            <Table
                data={tableData}
                onSort={onSort}
                sort={sort}
                onInit={({ service }) => {
                    tableService = service;
                }}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name' sortable>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' title='Last Name' sortable>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' title='Position' sortable>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' title='Phone'>
                    {(person) => person.phone}
                </Table.Column>
            </Table>
        </>
    );
};
export const ActionsListIcon: Story<TableProps<Person>> = (args) => {
    return (
        <Table
            {...args}
            data={data}
            testId={{
                row: (row) => row,
                col: (row, col) => `${row}_${col}`,
            }}>
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
            <Table.ActionsColumn id="actions" width="110px">
    {() => (
      <Groups size="xs">
        <Table.ActionIcon
          title="Edit"
          disabled
          tooltipTextForDisabled="Редактирование невозможно"
        >
          <EditIcon size="xs" />
        </Table.ActionIcon>
        <Table.ActionIcon title="Delete" isAlwaysVisible color="nice10">
          <TrashDeleteIcon size="xs" />
        </Table.ActionIcon>
        <Table.ActionsListIcon title="More">
          <DropList float="end">
            <DropList.Item>Edit</DropList.Item>
            <DropList.Item>Move</DropList.Item>
            <DropList.Item>Delete</DropList.Item>
          </DropList>
        </Table.ActionsListIcon>
      </Groups>
    )}
  </Table.ActionsColumn>
        </Table>
    );
};

export const ExternalState = () => {
    const data = React.useMemo(
        () => [
            {
                id: 'id',
                filter: false,
                title: '#',
            },
            {
                id: 'firstName',
                filter: false,
                title: 'First Name',
                sortable: true,
                draggable: true,
            },
            {
                id: 'lastName',
                filter: false,
                title: 'Last Name',
                sortable: true,
                draggable: true,
            },
            {
                id: 'position',
                filter: false,
                title: 'Position',
                sortable: true,
                draggable: true,
            },
            {
                id: 'phone',
                filter: false,
                title: 'Phone',
                draggable: true,
            },
        ],
        []
    );

    const [tableState, setTableState] = React.useState<TableState<(typeof data)[0]>>();

    return (
        <Table
            data={data}
            sort={{ field: 'firstName', direction: SortDirection.Desc }}
            state={tableState}
            onUpdate={setTableState}
            onSelect={console.log}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' sortable draggable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' sortable draggable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position' sortable draggable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone' draggable>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );
};

export const TableWithPaginationAndSort: Story<TableProps> = (args) => {
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(0);
  
    const handlePageChange = ({ pageIndex }) => {
        setCurrentPage(pageIndex);
    };

    return (
        <Table
            {...args}
            currentPage={currentPage}
            pageSize={pageSize}
            data={fullData}         
          >
            <Table.SelectAll fullData={fullData} />
            <Table.Column id='id' title='#' sortable>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' sortable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' sortable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position' sortable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
            <Table.Footer id='footer'>
                <Pagination
                    size='s'
                    pageSize={pageSize}
                    totalItemsCount={fullData.length}
                    currentPage={currentPage}
                    onChange={handlePageChange}
                />
            </Table.Footer>
        </Table>
    );
};


