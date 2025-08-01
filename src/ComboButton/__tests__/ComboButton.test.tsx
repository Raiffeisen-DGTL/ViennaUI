import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../Button';
import { ComboButton } from '../ComboButton';

const options = [
    <ComboButton.Option key={1}>Option 1</ComboButton.Option>,
    <ComboButton.Option key={2}>Option 2</ComboButton.Option>,
    <ComboButton.Option key={3}>Option 3</ComboButton.Option>,
    <ComboButton.Option key={4}>Option 4</ComboButton.Option>,
    <ComboButton.Option key={5}>Option 5</ComboButton.Option>,
];

describe('ComboButton', () => {
    it('should open list', async () => {
        render(
            <>
                <ComboButton options={options}>
                    <Button>Click Me</Button>
                </ComboButton>
                <input />
            </>
        );

        const button = screen.getByRole('button');
        await userEvent.click(button);

        const option = screen.getByText('Option 1');
        expect(option).toBeInTheDocument();

        await userEvent.click(button);
        expect(option).not.toBeInTheDocument();

        await userEvent.click(button);
        const input = screen.getByRole('textbox');
        await userEvent.click(input);
    });

    it('should hide list when blur', async () => {
        const { container } = render(
            <ComboButton options={options}>
                <Button>Click Me</Button>
            </ComboButton>
        );

        const button = screen.getByRole('button');
        await userEvent.click(button);

        const option = screen.getByText('Option 1');
        expect(option).toBeInTheDocument();

        await userEvent.click(container);

        expect(option).not.toBeInTheDocument();
    });

    it('should hide list when choose option', async () => {
        render(
            <ComboButton options={options}>
                <Button>Click Me</Button>
            </ComboButton>
        );

        const button = screen.getByRole('button');
        await userEvent.click(button);

        const option = screen.getByText('Option 1');
        expect(option).toBeInTheDocument();

        await userEvent.click(option);

        expect(option).not.toBeInTheDocument();
    });
});
