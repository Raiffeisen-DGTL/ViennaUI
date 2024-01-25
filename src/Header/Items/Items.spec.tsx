import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Items, Item } from './Items';

describe.skip('Header.Items', () => {
    describe('desktop view', () => {
        it('should switch tab', async () => {
            const handleChange = jest.fn();
            const items = (
                <Items design='primary' value='score' onChange={handleChange}>
                    <Item value='score' label='Счета' />
                    <Item value='operations' label='Операции' />
                    <Item value='requisites' label='Реквизиты' />
                </Items>
            );
            render(items);
            const operationsItem = screen.getByText(/Операции/i);
            userEvent.click(operationsItem);
            expect(handleChange).toBeCalledTimes(1);
            expect(handleChange.mock.calls[0][1]).toBe('operations');
            expect(handleChange.mock.calls[0][2]).toBe(false);
        });

        it('/w content should switch tab', async () => {
            const handleChange = jest.fn();
            const items = (
                <Items design='primary' value='score' onChange={handleChange}>
                    <Item value='score' label='Счета' />
                    <Item value='operations' label='Операции'>
                        <div>some content</div>
                    </Item>
                    <Item value='requisites' label='Реквизиты' />
                </Items>
            );
            render(items);
            const operationsItem = screen.getByText(/Операции/i);
            userEvent.click(operationsItem);
            expect(handleChange).toBeCalledTimes(1);
            expect(handleChange.mock.calls[0][1]).toBe('operations');
            expect(handleChange.mock.calls[0][2]).toBe(true);
        });
    });

    describe('mobile view', () => {
        it('should switch tab', async () => {
            const handleChange = jest.fn();
            const items = (
                <Items design='primary' value='score' isMobile onChange={handleChange}>
                    <Item value='score' label='Счета' />
                    <Item value='operations' label='Операции' />
                    <Item value='requisites' label='Реквизиты' />
                </Items>
            );
            render(items);
            const operationsItem = screen.getByText(/Операции/i);
            userEvent.click(operationsItem);
            expect(handleChange).toBeCalledTimes(1);
            expect(handleChange.mock.calls[0][1]).toBe('operations');
            expect(handleChange.mock.calls[0][2]).toBe(false);
        });

        it('/w content should switch tab', async () => {
            const handleChange = jest.fn();
            const items = (
                <Items design='primary' value='score' isMobile onChange={handleChange}>
                    <Item value='score' label='Счета' />
                    <Item value='operations' label='Операции'>
                        <div>some content</div>
                    </Item>
                    <Item value='requisites' label='Реквизиты' />
                </Items>
            );
            render(items);
            const operationsItem = screen.getByText(/Операции/i);
            userEvent.click(operationsItem);
            expect(handleChange).toBeCalledTimes(1);
            expect(handleChange.mock.calls[0][1]).toBe('operations');
            expect(handleChange.mock.calls[0][2]).toBe(true);
        });
    });
});
