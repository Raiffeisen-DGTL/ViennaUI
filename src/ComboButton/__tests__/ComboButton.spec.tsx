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
    xit('should open list', () => {
        render(
            <>
                <ComboButton options={options}>
                    <Button>Click Me</Button>
                </ComboButton>
                <input />
            </>
        );

        const button = screen.getByRole('button');
        userEvent.click(button);

        const option = screen.getByText('Option 1');
        expect(option).toBeInTheDocument();

        userEvent.click(button);
        expect(option).not.toBeInTheDocument();

        userEvent.click(button);
        const input = screen.getByRole('textbox');
        userEvent.click(input);
    });

    xit('should hide list when blur', () => {
        render(
            <ComboButton options={options}>
                <Button>Click Me</Button>
            </ComboButton>
        );

        const button = screen.getByRole('button');
        userEvent.click(button);

        const option = screen.getByText('Option 1');
        expect(option).toBeInTheDocument();

        userEvent.tab();

        expect(option).not.toBeInTheDocument();
    });

    xit('should hide list when choose option', () => {
        render(
            <ComboButton options={options}>
                <Button>Click Me</Button>
            </ComboButton>
        );

        const button = screen.getByRole('button');
        userEvent.click(button);

        const option = screen.getByText('Option 1');
        expect(option).toBeInTheDocument();

        userEvent.click(option);

        expect(option).not.toBeInTheDocument();
    });
});
