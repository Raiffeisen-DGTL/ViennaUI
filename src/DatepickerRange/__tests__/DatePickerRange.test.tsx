import React, { useState, useCallback } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DatepickerRange, DatepickerRangeProps } from '../DatepickerRange';

type RequiredDrp = Required<DatepickerRangeProps>;
type DrpOnChange = RequiredDrp['onChange'];
type DrpValue = RequiredDrp['value'];

describe('DatepickerRange', () => {
    it('should open calendar droplist', () => {
        render(<DatepickerRange testId={{ calendarBox: 'DatepickerRange.CalendarBox' }} />);
        const input = screen.getByRole('textbox');
        fireEvent.focus(input);

        const calendar = screen.getByTestId('DatepickerRange.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should call onChange', () => {
        const fn = jest.fn();
        render(<DatepickerRange onChange={fn} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: '02.02.2021' } });

        expect(fn).toHaveBeenCalled();
    });

    it('should show correct date when typing', async () => {
        const Wrapper = () => {
            const [value, setValue] = useState<DrpValue>();
            const handleChange = useCallback<DrpOnChange>(({ value: data }) => {
                setValue(data);
            }, []);
            return <DatepickerRange value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: '02.07.2021' } });

        expect(input).toHaveValue('02.07.2021');
    });

    it('should open calendar droplist when input is focused', async () => {
        const Wrapper = () => {
            const [value, setValue] = useState<DrpValue>();
            const handleChange = useCallback<DrpOnChange>(({ value: data }) => {
                setValue(data);
            }, []);
            return (
                <DatepickerRange
                    value={value}
                    testId={{ calendarBox: 'DatepickerRange.CalendarBox' }}
                    onChange={handleChange}
                />
            );
        };
        render(<Wrapper />);
        await userEvent.tab();

        const calendar = screen.getByTestId('DatepickerRange.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should call onChange when click', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState<DrpValue>();
            const handleChange = useCallback<DrpOnChange>((data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return <DatepickerRange value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        await userEvent.tab();
        const day = screen.getByText('5');
        await userEvent.click(day);
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            event: null,
            value: `05.${String(month).length === 2 ? month : `0${month}`}.${year}`,
            options: {
                valueAsDate: { from: new Date(`${year}-${month}-5`), to: undefined },
                name: undefined,
            },
        });
    });

    it.skip('should call onChange when click on second day', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState<DrpValue>('01.05.2021');
            const handleChange = useCallback<DrpOnChange>((data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return <DatepickerRange value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        await userEvent.tab();
        const day = screen.getByText('5');
        await userEvent.click(day);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            event: null,
            value: '01.05.2021 - 05.05.2021',
            options: {
                valueAsDate: { from: new Date('2021-04-30T21:00:00.000Z'), to: new Date('2021-05-05T20:59:59.000Z') },
                name: undefined,
            },
        });
    });

    it('should show calendar when isCalendarOpen is passed', async () => {
        render(<DatepickerRange testId={{ calendarBox: 'DatepickerRange.CalendarBox' }} isCalendarOpen />);
        const calendar = screen.getByTestId('DatepickerRange.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should invalid date when minDate and maxDate are passed', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState<DrpValue>();
            const handleChange = useCallback<DrpOnChange>((data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return (
                <DatepickerRange
                    value={value}
                    minDate={new Date('2021-7-5')}
                    maxDate={new Date('2021-7-10')}
                    onChange={handleChange}
                />
            );
        };
        render(<Wrapper />);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, '02.07.2021');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            event: null,
            value: '02.07.202',
            options: {
                isDisabled: false,
                valueAsDate: { from: undefined, to: undefined },
                name: undefined,
            },
        });

        await userEvent.clear(input);
        await userEvent.type(input, '12.07.2021');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            event: null,
            value: '12.07.202',
            options: {
                isDisabled: false,
                valueAsDate: { from: undefined, to: undefined },
                name: undefined,
            },
        });
    });

    it('should return isDisabled as true for invalid date when disabledDates is passed', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState<DrpValue>();
            const handleChange = useCallback<DrpOnChange>((data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return (
                <DatepickerRange
                    value={value}
                    disabledDates={[new Date('2021-7-5'), new Date('2021-7-10')]}
                    onChange={handleChange}
                />
            );
        };
        render(<Wrapper />);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, '05.07.2021');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            event: null,
            value: '05.07.2021',
            options: {
                isDisabled: true,
                valueAsDate: { from: new Date('2021-7-5'), to: undefined },
                name: undefined,
            },
        });
    });

    it('should keep calendar open after clicking on a date cell when isCalendarAlwaysOpen is true', async () => {
        render(<DatepickerRange testId={{ calendarBox: 'DatepickerRange.CalendarBox' }} isCalendarAlwaysOpen />);
        const calendar = screen.getByTestId('DatepickerRange.CalendarBox');
        expect(calendar).toBeInTheDocument();

        const day = screen.getByText('5');
        await userEvent.click(day);

        expect(calendar).toBeInTheDocument();
    });
});
