import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table } from '../Table';

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

describe.skip('Table', () => {
    it('should call onRowClick when click on row', () => {
        const fn = jest.fn();
        render(
            <Table data={data} onRowClick={fn}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
            </Table>
        );
        const row = screen.getAllByTestId('content.Row_0')[0];
        userEvent.click(row);
        expect(fn).toBeCalledTimes(1);
    });
    it('should call onRowDoubleClick when double click on row', () => {
        const fn = jest.fn();
        render(
            <Table data={data} onRowDoubleClick={fn}>
                <Table.Column id='id' title='#'>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
            </Table>
        );
        const row = screen.getAllByTestId('content.Row_0')[0];
        userEvent.dblClick(row);
        expect(fn).toBeCalledTimes(1);
    });
    it('should call onFilter when filter', () => {
        const fn = jest.fn();

        render(
            <Table data={data} onFilter={fn}>
                <Table.Column id='id' title='#' filter={<Table.InputFilter data-marker={'input-filter'} />}>
                    {(person) => person.id}
                </Table.Column>
                <Table.Column id='firstName' title='First Name'>
                    {(person) => person.firstName}
                </Table.Column>
            </Table>
        );
        const filter = screen.getAllByText('#')[0];
        userEvent.click(filter);
        const input = screen.getByTestId('input-filter');
        const value = '1';
        userEvent.type(input, value);
        expect(fn).toBeCalledTimes(value.length);
        expect(fn).toBeCalledWith({ id: value });
    });
    it('should call onSort when sort', () => {
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
        userEvent.click(sort);
        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(undefined, { direction: 'desc', field: 'id' });
    });

    it('should call onSelect when select', () => {
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
        const checkbox = screen.getAllByRole('checkbox')[0];
        userEvent.click(checkbox);
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

    it('should call onUpdate when table was changed', () => {
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
        userEvent.click(checkbox);
        expect(fn).toBeCalledTimes(1);
    });

    it("should supply row index to Table.Column's render callback", () => {
        render(
            <Table data={data}>
                <Table.Column id='id' title='#'>
                    {(person, index) => `${person.id}-${index}`}
                </Table.Column>
            </Table>
        );

        const rows = screen.getAllByTestId(/content\.Row/);
        rows.forEach((rowEl, index) => expect(rowEl).toHaveTextContent(`${data[index].id}-${index}`));
        expect.hasAssertions();
    });
});
