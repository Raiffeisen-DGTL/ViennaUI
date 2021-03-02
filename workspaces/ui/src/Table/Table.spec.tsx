import React from 'react';
import { Edit, Trash } from 'vienna.icons';
import { EmptyState, Groups, DropList, Select } from '..';
import { Table, TableProps } from './Table';

const data = [
    {
        id: 0,
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        phone: '9163456789',
    },
    {
        id: 1,
        firstName: 'Johnnie',
        lastName: 'Walker',
        position: 'Software Engineer',
        phone: 'none',
    },
    {
        id: 2,
        firstName: 'James',
        lastName: 'Jameson',
        position: 'CTO',
        phone: '916456789',
    },
];

test('Table', () => {
    const snap = snapshot.render(
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
        </Table>
    );
    expect(snap).toMatchSnapshot();
});

test('Table without render-functions', () => {
    const snap = snapshot.render(
        <Table data={data} size='s'>
            <Table.Column id='id' title='#' />
            <Table.Column id='firstName' title='First Name' />
            <Table.Column id='lastName' title='Last Name' />
            <Table.Column id='position' title='Position' />
            <Table.Column id='phone' title='Phone' />
        </Table>
    );
    expect(snap).toMatchSnapshot();
});

test('Table w/ size', () => {
    const sizes: TableProps['size'][] = ['s', 'm', 'l'];

    sizes.forEach((size) => {
        const snap = snapshot.render(
            <Table data={data} size={size}>
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

        expect(snap).toMatchSnapshot();
    });
});

test('Table w maxHeight', () => {
    const snap = snapshot.render(
        <Table data={data} maxHeight='330px'>
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
    expect(snap).toMatchSnapshot();
});

test('Table w noHeader', () => {
    const snap = snapshot.render(
        <Table data={data} noHeader>
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
    expect(snap).toMatchSnapshot();
});

test('Table w/ noRowDivider', () => {
    const snap = snapshot.render(
        <Table data={data} noRowDivider>
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
    expect(snap).toMatchSnapshot();
});

test('Table w/ column width', () => {
    const snap = snapshot.render(
        <Table data={data}>
            <Table.Column id='id' title='#' width='10px'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='name' title='Name' width='100%'>
                {(person) => `${person.firstName} ${person.lastName}`}
            </Table.Column>
            <Table.Column id='position' title='Position' noWrap>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone' width='110px'>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );

    expect(snap).toMatchSnapshot();
});

test('Table w/ column align', () => {
    const snap = snapshot.render(
        <Table data={data}>
            <Table.Column id='id' title='#' width='10px'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='name' title='Name' width='100%' align='center'>
                {(person) => `${person.firstName} ${person.lastName}`}
            </Table.Column>
            <Table.Column id='position' title='Position' noWrap>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone' align='right' width='150px'>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );
    expect(snap).toMatchSnapshot();
});

test('Table w/ column truncate', () => {
    const snap = snapshot.render(
        <Table data={data}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' width='160px' truncate>
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
    expect(snap).toMatchSnapshot();
});

test('Table w/ Footer', () => {
    const snap = snapshot.render(
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
            <Table.Footer id='footer'>Table footer</Table.Footer>
        </Table>
    );
    expect(snap).toMatchSnapshot();
});

test('Table w/ ActionIcon & ActionsListIcon', () => {
    const snap = snapshot.render(
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
            <Table.ActionsColumn id='actions' width='90px'>
                {() => (
                    <Groups size='xs'>
                        <Table.ActionIcon>
                            <Edit size='xs' />
                        </Table.ActionIcon>
                        <Table.ActionIcon>
                            <Trash size='xs' />
                        </Table.ActionIcon>
                        <Table.ActionsListIcon>
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
    );
    expect(snap).toMatchSnapshot();
});

test('Table w/ empty state', () => {
    const snap = snapshot.render(
        <Table>
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
            <EmptyState loading>
                <EmptyState.Title>Загружаем данные</EmptyState.Title>
                <EmptyState.Description>
                    Мы загружаем данные таблицы, очень скоро они будут готовы.
                </EmptyState.Description>
            </EmptyState>
        </Table>
    );

    expect(snap).toMatchSnapshot();
});

test('Table w/ expanding row', () => {
    const snap = snapshot.render(
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
            <Table.ExpandingRow expandedRow={0} data-test='text'>
                {(person) => (
                    <span>
                        {person.lastName} {person.firstName}
                    </span>
                )}
            </Table.ExpandingRow>
        </Table>
    );

    expect(snap).toMatchSnapshot();
});

test('Table w/ multiple expanding rows', () => {
    const snap = snapshot.render(
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
            <Table.ExpandingRow allowMultiple expandedRow={[0, 1]} data-test='text'>
                {(person) => (
                    <span>
                        {person.lastName} {person.firstName}
                    </span>
                )}
            </Table.ExpandingRow>
        </Table>
    );

    expect(snap).toMatchSnapshot();
});

test('Table w/ resizable columns', () => {
    const snap = snapshot.render(
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

    expect(snap).toMatchSnapshot();
});

test('Table w/ sortable columns', () => {
    const snap = snapshot.render(
        <Table data={data}>
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
    );

    expect(snap).toMatchSnapshot();
});

test('Table w/ hidden columns', () => {
    const snap = snapshot.render(
        <Table data={data}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' hidden>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' hidden>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position' hidden>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );

    expect(snap).toMatchSnapshot();
});

test('Table w/ select rows', () => {
    const onSelect = jest.fn();

    const snap = snapshot.render(
        <Table data={data} onSelect={onSelect} selected={['1']}>
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

    expect(snap).toMatchSnapshot();
});

test('Table w/ select all', () => {
    const onSelect = jest.fn();

    const snap = snapshot.render(
        <Table data={data} onSelect={onSelect} selected={['1']}>
            <Table.SelectAll fullData={data} />
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

    expect(snap).toMatchSnapshot();
});

test('Table w/ draggable column', () => {
    const snap = snapshot.render(
        <Table data={data}>
            <Table.Column id='id' title='#'>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' draggable>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' draggable>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position' draggable>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone' draggable>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );

    expect(snap).toMatchSnapshot();
});

test('Table w/ group by', () => {
    const snap = snapshot.render(
        <Table data={data}>
            <Table.GroupBy id='cto' title='CTO' filter={(item) => item.position === 'CTO'} />
            <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
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

    expect(snap).toMatchSnapshot();
});

test('Table w/ pinned columns', () => {
    const onSelect = jest.fn();

    const snap = snapshot.render(
        <Table data={data} onSelect={onSelect} pinnableColumns>
            <Table.Column id='id' title='#' pinned>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' pinned>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' pinned>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position'>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone'>
                {(person) => person.phone}
            </Table.Column>
            <Table.ExpandingRow expandedRow={0} data-test='text'>
                {(person) => (
                    <span>
                        {person.lastName} {person.firstName}
                    </span>
                )}
            </Table.ExpandingRow>
        </Table>
    );

    expect(snap).toMatchSnapshot();
});

test('Table w/ settings', () => {
    const onSelect = jest.fn();

    const snap = snapshot.render(
        <Table data={data} onSelect={onSelect}>
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
            <Table.Settings>
                <Table.ColumnsSettings searchable hideShowAll />
                <Table.GroupingSettings>
                    <Table.GroupingSettings.Item id='none' name='None' />
                    <Table.GroupingSettings.Item id='position' name='By position'>
                        <Table.GroupBy id='pm' title='CTO' filter={(item) => item.position === 'CTO'} />
                        <Table.GroupBy id='sde' title='SDE' filter={(item) => item.position === 'Software Engineer'} />
                        <Table.GroupBy id='doc' title='Doctor' filter={(item) => item.position === 'Doctor'} />
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

    expect(snap).toMatchSnapshot();
});

test('Table w/o visible columns', () => {
    const snap = snapshot.render(
        <Table data={data}>
            <Table.Column id='id' title='#' hidden>
                {(person) => person.id}
            </Table.Column>
            <Table.Column id='firstName' title='First Name' hidden>
                {(person) => person.firstName}
            </Table.Column>
            <Table.Column id='lastName' title='Last Name' hidden>
                {(person) => person.lastName}
            </Table.Column>
            <Table.Column id='position' title='Position' hidden>
                {(person) => person.position}
            </Table.Column>
            <Table.Column id='phone' title='Phone' hidden>
                {(person) => person.phone}
            </Table.Column>
        </Table>
    );
    expect(snap).toMatchSnapshot();
});

test('Table with filter', () => {
    const snap = snapshot.render(
        <Table data={data}>
            <Table.Column id='id' title='#' />
            <Table.Column id='lastName' title='Last Name' sortable filter={() => <div>123</div>} />
            <Table.Column
                id='position'
                title='Position'
                filter={
                    <Table.SelectFilter>
                        <Select.Option>PM</Select.Option>
                        <Select.Option>Software Engineer</Select.Option>
                        <Select.Option>CTO</Select.Option>
                    </Table.SelectFilter>
                }
            />
            <Table.Column id='phone' title='Phone' filter={Table.InputFilter} />
        </Table>
    );
    expect(snap).toMatchSnapshot();
});
