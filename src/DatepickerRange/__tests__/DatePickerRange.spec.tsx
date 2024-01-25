/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useCallback } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { enGB } from 'date-fns/locale';
import { DatepickerRange } from '../DatepickerRange';
import { InputDateRange } from '../../InputMask';
import { Calendar } from '../../Calendar';

describe.skip('DatepickerRange', () => {
    it('should open calendar droplist', () => {
        render(<DatepickerRange />);
        const input = screen.getByRole('textbox');
        userEvent.click(input);

        const calendar = screen.getByTestId('DatepickerRange.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should call onChange', () => {
        const fn = jest.fn();
        render(<DatepickerRange onChange={fn} />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, '02.02.2021');

        expect(fn).toHaveBeenCalled();
    });

    it('should show correct date when typing', async () => {
        const Wrapper = () => {
            const [value, setValue] = useState();
            const handleChange = useCallback((e, data) => {
                setValue(data.value);
            }, []);
            return <DatepickerRange value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, '02.07.2021');

        expect(input).toHaveValue('02.07.2021');
    });

    it('should open calendar droplist when input is focused', async () => {
        const Wrapper = () => {
            const [value, setValue] = useState();
            const handleChange = useCallback((e, data) => {
                setValue(data.value);
            }, []);
            return <DatepickerRange value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        userEvent.tab();

        const calendar = screen.getByTestId('DatepickerRange.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should call onChange when click', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState();
            const handleChange = useCallback((e, data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return <DatepickerRange value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        userEvent.tab();
        const day = screen.getByText('5');
        userEvent.click(day);
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            valueAsDate: { from: new Date(`${year}-${month}-5`), to: undefined },
            value: `05.${String(month).length === 2 ? month : `0${month}`}.${year}`,
            name: undefined,
        });
    });

    it('should call onChange when click on second day', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState('01.05.2021');
            const handleChange = useCallback((e, data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return <DatepickerRange value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        userEvent.tab();
        const day = screen.getByText('5');
        userEvent.click(day);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            valueAsDate: { from: new Date('2021-04-30T21:00:00.000Z'), to: new Date('2021-05-05T20:59:59.000Z') },
            value: '01.05.2021 - 05.05.2021',
            name: undefined,
        });
    });

    it('should show calendar when isCalendarOpen is passed', async () => {
        render(<DatepickerRange isCalendarOpen />);
        const calendar = screen.getByTestId('DatepickerRange.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it.skip('should return isDisabled as true for invalid date when minDate and maxDate are passed', async () => {
        // TODO fix month of valueAsDate
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState();
            const handleChange = useCallback((e, data) => {
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
        userEvent.type(input, '02.07.2021');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            date: { from: new Date('2021-7-2') },
            isDisabled: true,
            value: '02.07.2021',
            name: undefined,
        });

        userEvent.clear(input);
        userEvent.type(input, '12.07.2021');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            valueAsDate: new Date('2021-7-12'),
            isDisabled: true,
            value: '12.07.2021',
            name: undefined,
        });
    });

    it.skip('should return isDisabled as true for invalid date when disabledDates is passed', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState();
            const handleChange = useCallback((e, data) => {
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
        userEvent.type(input, '05.07.2021');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            valueAsDate: { from: new Date('2021-7-5') },
            isDisabled: true,
            value: '05.07.2021',
            name: undefined,
        });
    });

    it('should pass defaultLocalization', async () => {
        const datePickerRange = snapshot.shallow(<DatepickerRange isCalendarOpen />);
        const inputDateRange = datePickerRange.find(InputDateRange);
        expect(inputDateRange).toHaveLength(1);
        expect(inputDateRange.prop('localization')).toBeUndefined();
        const calendar = datePickerRange.find(Calendar);
        expect(calendar).toHaveLength(1);
        expect(calendar.prop('localization')).toBeUndefined();
        expect(calendar.prop('locale')).toBeUndefined();
    });

    it('should pass customLocalization', async () => {
        const inputDateRangeLocalization = {
            'ds.inputDateRange.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDateRange.placeholder.date.separator': 'DD.MM.YYYY - ',
            'ds.inputDateRange.placeholder.date.range': 'DD.MM.YYYY - DD.MM.YYYY',
        };
        const calendarLocalization = {
            'ds.calendar.body.today': 'Today',
            'ds.calendar.day.monday': 'MO',
            'ds.calendar.day.tuesday': 'TU',
            'ds.calendar.day.wednesday': 'WE',
            'ds.calendar.day.thursday': 'TH',
            'ds.calendar.day.friday': 'FR',
            'ds.calendar.day.saturday': 'SA',
            'ds.calendar.day.sunday': 'SU',
            'ds.calendar.month.january': 'Jan.',
            'ds.calendar.month.february': 'Feb.',
            'ds.calendar.month.march': 'Mar.',
            'ds.calendar.month.april': 'Apr.',
            'ds.calendar.month.may': 'May',
            'ds.calendar.month.june': 'Jun.',
            'ds.calendar.month.july': 'Jul',
            'ds.calendar.month.august': 'Aug.',
            'ds.calendar.month.september': 'Sep.',
            'ds.calendar.month.october': 'Oct.',
            'ds.calendar.month.november': 'Nov.',
            'ds.calendar.month.december': 'Dec.',
        };
        const customLocalization = { ...inputDateRangeLocalization, ...calendarLocalization };
        const datePickerRange = snapshot.shallow(
            <DatepickerRange isCalendarOpen localization={customLocalization} locale={enGB} />
        );
        const inputDateRange = datePickerRange.find(InputDateRange);
        expect(inputDateRange).toHaveLength(1);
        expect(inputDateRange.prop('localization')).toEqual(customLocalization);
        const calendar = datePickerRange.find(Calendar);
        expect(calendar).toHaveLength(1);
        expect(calendar.prop('localization')).toEqual(customLocalization);
        expect(calendar.prop('locale')).toEqual(enGB);
    });
});
