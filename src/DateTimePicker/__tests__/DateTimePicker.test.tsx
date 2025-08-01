import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DateTimePicker } from '../DateTimePicker';
import { DateTimePickerProps } from '../types';
import { Datepicker } from '../../Datepicker';
import { InputDate } from '../../InputMask';

const defaultDateObj = { time: '12:00', date: '01.01.2024' };
const defaultDate = new Date('2024-01-01T10:00');

type RequiredDtpProps = Required<DateTimePickerProps>;

const TestComponent = ({
    initialValue,
    testCb,
}: {
    initialValue?: RequiredDtpProps['value'];
    testCb?: (data: RequiredDtpProps['value']) => void;
}) => {
    const [value, setValue] = useState<RequiredDtpProps['value'] | undefined>(initialValue ?? defaultDateObj);

    const onChange: RequiredDtpProps['onChange'] = ({ value: data }) => {
        setValue(data);
        testCb?.(data);
    };

    return (
        <div>
            <button data-testid='button-clear' onClick={() => setValue(undefined)}>
                Clear
            </button>
            <DateTimePicker value={value} onChange={onChange}>
                <Datepicker data-testid='input-date' />
                <InputDate data-testid='input-time' />
            </DateTimePicker>
        </div>
    );
};

const TestComponentDateInstance = ({
    initialValue,
    testCb,
}: {
    initialValue?: RequiredDtpProps['value'];
    testCb?: (data: RequiredDtpProps['value']) => void;
}) => {
    const [value, setValue] = useState<RequiredDtpProps['value'] | undefined>(initialValue);

    const onChange: RequiredDtpProps['onChange'] = ({ value: data }) => {
        setValue(data);
        testCb?.(data);
    };

    return (
        <DateTimePicker value={value} onChange={onChange}>
            <Datepicker data-testid='input-date' />
            <InputDate data-testid='input-time' />
        </DateTimePicker>
    );
};

describe('DateTimePicker Component', () => {
    it('should show correct date and time when typing (DateObj)', async () => {
        const { getByTestId } = render(<TestComponent />);

        const dateInput = getByTestId('input-date') as HTMLInputElement;
        fireEvent.input(dateInput, { target: { value: '01.01.2021' } });
        expect(dateInput.value).toBe('01.01.2021');

        const timeInput = getByTestId('input-time') as HTMLInputElement;
        fireEvent.input(timeInput, { target: { value: '10:01' } });
        expect(timeInput).toHaveValue('10:01');
    });

    it('should show correct date and time when typing (Date)', async () => {
        const { getByTestId } = render(<TestComponentDateInstance />);

        const dateInput = getByTestId('input-date') as HTMLInputElement;
        const timeInput = getByTestId('input-time') as HTMLInputElement;

        fireEvent.input(dateInput, { target: { value: '01.01.2021' } });
        fireEvent.input(timeInput, { target: { value: '10:01' } });

        expect(dateInput).toHaveValue('01.01.2021');
        expect(timeInput).toHaveValue('10:01');
    });

    it('should call onChange when edit date (DateObj)', async () => {
        const fn = jest.fn();

        const { getByTestId } = render(<TestComponent initialValue={{ time: '', date: '' }} testCb={fn} />);

        const dateInput = getByTestId('input-date') as HTMLInputElement;
        fireEvent.input(dateInput, { target: { value: '01.01.2021' } });
        expect(fn).toHaveBeenLastCalledWith({ date: '01.01.2021', time: '' });

        const timeInput = getByTestId('input-time') as HTMLInputElement;
        fireEvent.input(timeInput, { target: { value: '10:01' } });
        expect(fn).toHaveBeenLastCalledWith({ date: '01.01.2021', time: '10:01' });
    });

    it('should call onChange when edit date (Date)', async () => {
        const fn = jest.fn();

        const { getByTestId } = render(<TestComponentDateInstance initialValue={defaultDate} testCb={fn} />);

        const dateInput = getByTestId('input-date') as HTMLInputElement;
        fireEvent.input(dateInput, { target: { value: '01.01.2021' } });

        const timeInput = getByTestId('input-time') as HTMLInputElement;
        fireEvent.input(timeInput, { target: { value: '10:01' } });

        expect(fn).toHaveBeenLastCalledWith(new Date('2021-01-01T10:01'));
    });

    it('should clear value', () => {
        const { getByTestId } = render(<TestComponent />);

        const clearButton = getByTestId('button-clear');
        const dateInput = getByTestId('input-date') as HTMLInputElement;
        const timeInput = getByTestId('input-time') as HTMLInputElement;

        expect(dateInput.value).toBe(defaultDateObj.date);
        expect(timeInput.value).toBe(defaultDateObj.time);

        fireEvent.click(clearButton);

        expect(dateInput.value).toBe('');
        expect(timeInput.value).toBe('');
    });
});
