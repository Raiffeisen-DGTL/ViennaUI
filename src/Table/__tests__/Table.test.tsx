import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table } from '../Table';
import { EmptyState } from '../../EmptyState';
import { SearchIcon } from 'vienna.icons';
import { IconContainer } from '../../IconContainer';

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

describe('Table', () => {
    beforeEach(() => {
        if (!global.structuredClone) {
            global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
        }
    });
    it('should call onRowClick when click on row', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(
            <Table
                data={data}
                testId={{
                    row: (row) => `content.Row_${row}`,
                    cell: (row, col) => `content.Cell_${row}_${col}`,
                }}
                onRowClick={fn}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
            </Table>
        );
        const row = getByTestId('content.Row_0');
        await userEvent.click(row);
        expect(fn).toBeCalledTimes(1);
    });
    it('should call onRowDoubleClick when double click on row', async () => {
        const fn = jest.fn();
        render(
            <Table
                data={data}
                testId={{
                    row: (row) => `content.Row_${row}`,
                    cell: (row, col) => `content.Cell_${row}_${col}`,
                }}
                onRowDoubleClick={fn}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
            </Table>
        );
        const row = screen.getByTestId('content.Row_0');
        await userEvent.dblClick(row);
        expect(fn).toBeCalledTimes(1);
    });
    it('should call onFilter when filter', async () => {
        const fn = jest.fn();

        render(
            <Table data={data} onFilter={fn}>
                <Table.Column id='id' title='#' filter={<Table.InputFilter data-testid={'input-filter'} />}>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
            </Table>
        );
        const filter = screen.getAllByText('#')[0];
        await userEvent.click(filter);
        const input = screen.getByTestId('input-filter');
        const value = '1';
        await userEvent.type(input, value);
        // debounce
        await act(async () => {
            await new Promise((res) => {
                setTimeout(res, 300);
            });
        });
        expect(fn).toBeCalledTimes(value.length);
        expect(fn).toBeCalledWith({ id: value });
    });
    it('should call onSort when sort', async () => {
        const fn = jest.fn();

        render(
            <Table data={data} onSort={fn}>
                <Table.Column id='id' title='#' sortable>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
            </Table>
        );
        const sort = screen.getAllByText('#')[0];
        await userEvent.click(sort);
        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith({ event: undefined, value: { direction: 'desc', field: 'id' } });
    });

    it('should call onSelect when select', async () => {
        const fn = jest.fn();

        render(
            <Table data={data} onSelect={fn}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
            </Table>
        );
        const checkbox = screen.getAllByRole('checkbox')[1];
        // because of timestamp in Selector.tsx
        await act(async () => {
            await new Promise((res) => {
                setTimeout(res, 250);
            }).then(() => {
                fireEvent.click(checkbox);
            });
        });
        expect(fn).toBeCalledTimes(1);
    });

    it('should call onInit when init table', () => {
        const fn = jest.fn();

        render(
            <Table data={data} onInit={fn}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
            </Table>
        );
        expect(fn).toBeCalledTimes(1);
    });

    it('should call onUpdate when table was changed', async () => {
        const fn = jest.fn();
        const handleSelect = jest.fn();

        render(
            <Table data={data} onUpdate={fn} onSelect={handleSelect}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
            </Table>
        );
        const checkbox = screen.getAllByRole('checkbox')[0];
        // because of timestamp in Selector.tsx
        await act(async () => {
            await new Promise((res) => {
                setTimeout(res, 250);
            }).then(() => {
                fireEvent.click(checkbox);
            });
        });
        expect(fn).toBeCalledTimes(2);
    });

    it("should supply row index to Table.Column's render callback", () => {
        render(
            <Table data={data} testId={{ row: (row) => `content.Row_${row}` }}>
                <Table.Column id='id' title='#'>
                    {(person, index) => `${person.id}-${index}`}
                </Table.Column>
            </Table>
        );

        const rows = screen.getAllByTestId(/content\.Row/);
        rows.forEach((rowEl, index) => expect(rowEl).toHaveTextContent(`${data[index].id}-${index}`));
        expect.hasAssertions();
    });

    it('should render custom empty state when it is passed as a component', () => {
        const EmptyStateComponent = () => {
            return (
                <EmptyState>
                    <IconContainer color='oslo10'>
                        <SearchIcon />
                    </IconContainer>
                    <EmptyState.Title>Кастомный заголовок экрана загрузки</EmptyState.Title>
                    <EmptyState.Description>Кастомное описание</EmptyState.Description>
                </EmptyState>
            );
        };
        render(
            <Table data={[]}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.EmptyState>
                    <EmptyStateComponent />
                </Table.EmptyState>
            </Table>
        );
        expect(screen.getByText('Кастомный заголовок экрана загрузки')).toBeInTheDocument();
    });
    it('should show contents when row is expanded', () => {
        const testString = 'TestString';
        const { container } = render(
            <Table data={data.map((item) => ({ ...item, id: +item.id }))}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.ExpandingRow>{testString}</Table.ExpandingRow>
            </Table>
        );

        const firstRow = container.querySelector('[data-row="0"]');
        const firstExpander = firstRow?.querySelector('[data-column="expander"]');
        expect(firstExpander).toBeInTheDocument();
        if (firstExpander) {
            fireEvent.click(firstExpander);
        }
        expect(firstRow?.nextElementSibling?.querySelector('td')?.innerHTML).toBe(testString);
    });
    test('searches columns by titleSettings', () => {
        render(
            <Table data={data}>
                <Table.Column id='id' title='#' titleSettings='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' titleSettings='Name' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
                <Table.Column id='lastName' titleSettings='Surname' title='Last Name'>
                    {(person) => person.lastName}
                </Table.Column>
                <Table.Column id='position' titleSettings='Favorite position' title='Position'>
                    {(person) => person.position}
                </Table.Column>
                <Table.Column id='phone' titleSettings='Phone'>
                    {(person) => person.phone}
                </Table.Column>
                <Table.Settings testId={{ button: 'table-settings-button-second' }}>
                    <Table.ColumnsSettings searchable testId={{ search: 'table-settings-columns-search' }} />
                </Table.Settings>
            </Table>
        );
        const settingsButton = screen.getByTestId('table-settings-button-second');
        fireEvent.click(settingsButton);
        const searchInput = screen.getByTestId('table-settings-columns-search');
        fireEvent.change(searchInput, { target: { value: 'Surn' } });
        expect(screen.getByText('Surname')).toBeInTheDocument();
    });
});
