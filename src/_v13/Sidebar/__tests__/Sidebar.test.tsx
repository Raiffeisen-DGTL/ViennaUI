import React from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Sidebar } from '../Sidebar';

const items = [
    { id: 0, title: 'Значение 1', defaultCollapsed: false, sub: [{ id: 11, title: 'Значение 11' }] },
    { id: 1, title: 'Значение 2' },
    { id: 2, title: 'Значение 3' },
];

describe('Sidebar', () => {
    it('item render, submenu', async () => {
        const user = userEvent.setup();

        const fn = jest.fn();

        const optionMessage1 = 'Значение 1';
        const optionMessage2 = 'Значение 11';

        const { getByText } = render(<Sidebar items={items} />);

        const option1 = getByText(optionMessage1);
        expect(option1).toBeInTheDocument();
        const option2 = getByText(optionMessage2);
        expect(option2).toBeInTheDocument();

        await act(async () => {
            await user.click(option1);
        });

        expect(option2).not.toBeInTheDocument();
    });

    it('onClick', async () => {
        const user = userEvent.setup();

        const fn = jest.fn();

        const optionMessage1 = 'Значение 11';
        const optionMessage2 = 'Значение 2';

        const { getByText } = render(
            <Sidebar
                items={[
                    {
                        id: 0,
                        title: 'Значение 1',
                        defaultCollapsed: false,
                        sub: [{ id: 11, title: 'Значение 11', onClick: fn }],
                    },
                    { id: 1, title: 'Значение 2', onClick: fn },
                    { id: 2, title: 'Значение 3' },
                ]}
            />
        );

        const option1 = getByText(optionMessage1);
        expect(option1).toBeInTheDocument();
        const option2 = getByText(optionMessage2);
        expect(option2).toBeInTheDocument();

        await act(async () => {
            await user.click(option1);
        });

        expect(fn).toHaveBeenCalledTimes(1);

        await act(async () => {
            await user.click(option2);
        });

        expect(fn).toHaveBeenCalledTimes(2);
    });
});
