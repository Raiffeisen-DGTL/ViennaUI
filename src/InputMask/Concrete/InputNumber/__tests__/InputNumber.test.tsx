/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { InputNumber } from '../InputNumber';
import userEvent from '@testing-library/user-event';

const TestComponent = () => {
    const [value, setValue] = useState<number | null>(0);

    return <InputNumber value={value} onChange={(newValue) => setValue(newValue)} />;
};

const TestSetStateComponent = () => {
    const [value, setValue] = React.useState<number | null>();

    const setManually = () => {
        setValue(null);
    };

    const setManually2 = () => {
        setValue(5);
    };
    return (
        <div>
            <button data-testid='button-null' onClick={setManually}>
                SET NULL
            </button>
            <button data-testid='button-set-5' onClick={setManually2}>
                SET 5
            </button>
            <InputNumber value={value} />
        </div>
    );
};
const TestSetStateComponent2 = () => {
    const [value, setValue] = React.useState<number | null>(22);
    const changeHandler = React.useCallback((data) => setValue(data), []);
    return (
        <div>
            <button data-testid='button-set-22' onClick={() => setValue(22)}>
                SET 22
            </button>
            <button data-testid='button-null' onClick={() => setValue(null)}>
                SET NULL
            </button>
            <InputNumber onChange={changeHandler} value={value} scale={2} delimiter='.' />
        </div>
    );
};

describe('InputNumber Component', () => {
    it('should trigger onChange and set value to 123', () => {
        const value = '123';
        const handleChange = jest.fn();
        const { getByRole } = render(<InputNumber value={null} onChange={handleChange} />);
        const input = getByRole('textbox');
        // Триггерим событие onChange
        fireEvent.input(input, { target: { value } });
        // Проверяем, что onChange был вызван с правильным значением
        expect(handleChange).toHaveBeenCalledWith({
            value: Number(value),
            event: expect.anything(),
            options: expect.anything(),
        });
        // Проверяем, что onChange был вызван один раз
        expect(handleChange).toHaveBeenCalledTimes(1);

        // Проверяем, что value в input является 123
        expect(input.value).toBe(value);
    });

    it('should handle input of 0 and then deletion', async () => {
        const { getByRole } = render(<TestComponent />);

        const input = getByRole('textbox');

        // Проверяем, что изначально в поле ввода 0
        expect(input.value).toBe('0');

        // Удаляем значение
        await act(async () => {
            await userEvent.clear(input);
        });

        // // Проверяем, что значение изменилось
        expect(input.value).toBe('');
    });

    it('should set value to 5 when SET 5 button is clicked', () => {
        const { getByTestId, getByRole } = render(<TestSetStateComponent />);

        const set5Button = getByTestId('button-set-5');
        fireEvent.click(set5Button);

        const input = getByRole('textbox');
        expect(input.value).toBe('5');
    });

    it('should set value to empty string when SET NULL button is clicked', () => {
        const { getByTestId, getByRole } = render(<TestSetStateComponent />);

        const set5Button = getByTestId('button-set-5');
        fireEvent.click(set5Button);

        const setNullButton = getByTestId('button-null');
        fireEvent.click(setNullButton);

        const input = getByRole('textbox');
        expect(input.value).toBe('');
    });

    it('should set value to 5 again when SET 5 button is clicked after SET NULL', () => {
        const { getByTestId, getByRole } = render(<TestSetStateComponent />);

        const set5Button = getByTestId('button-set-5');
        fireEvent.click(set5Button);

        const setNullButton = getByTestId('button-null');
        fireEvent.click(setNullButton);

        fireEvent.click(set5Button);

        const input = getByRole('textbox');
        expect(input.value).toBe('5');
    });

    it('should set value to 22.00 with given default value when SET 22 button is clicked after SET NULL', () => {
        const { getByTestId, getByRole } = render(<TestSetStateComponent2 />);

        const set22Button = getByTestId('button-set-22');
        const setNullButton = getByTestId('button-null');
        const input = getByRole('textbox');

        fireEvent.click(setNullButton);
        fireEvent.click(set22Button);
        fireEvent.focus(input);

        expect(input.value).toBe('22.00');
    });

    it('should render an empty string instead of undefined when value is null or undefined on first render', () => {
        const { getByRole } = render(<InputNumber value={null} />);
        const input = getByRole('textbox');
        expect(input.value).toBe('');
    });
});
