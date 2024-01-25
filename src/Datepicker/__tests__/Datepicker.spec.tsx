/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useCallback } from 'react';
import { enGB } from 'date-fns/locale';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Datepicker } from '../Datepicker';
import { InputDate } from '../../InputMask';
import { Calendar } from '../../Calendar';

describe.skip('Datepicker', () => {
    it('should open calendar droplist', () => {
        render(<Datepicker />);
        const input = screen.getByRole('textbox');
        userEvent.click(input);

        const calendar = screen.getByTestId('Datepicker.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should call onChange', () => {
        const fn = jest.fn();
        render(<Datepicker onChange={fn} />);
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
            return <Datepicker value={value} onChange={handleChange} />;
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
            return <Datepicker value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        userEvent.tab();

        const calendar = screen.getByTestId('Datepicker.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should call onChange when click on day', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState('01.05.2021');
            const handleChange = useCallback((e, data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return <Datepicker value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        userEvent.tab();
        const day = screen.getByText('5');
        userEvent.click(day);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            date: new Date('2021-5-5'),
            value: '05.05.2021',
            name: undefined,
        });
    });

    it('should return isDisabled as true for invalid date when minDate and maxDate are passed', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState();
            const handleChange = useCallback((e, data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return (
                <Datepicker
                    value={value}
                    onChange={handleChange}
                    minDate={new Date('2021-7-5')}
                    maxDate={new Date('2021-7-10')}
                />
            );
        };
        render(<Wrapper />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, '02.07.2021');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            date: new Date('2021-7-2'),
            isDisabled: true,
            value: '02.07.2021',
            name: undefined,
        });

        userEvent.clear(input);
        userEvent.type(input, '12.07.2021');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            date: new Date('2021-7-12'),
            isDisabled: true,
            value: '12.07.2021',
            name: undefined,
        });
    });

    it('should return isDisabled as true for invalid date when disabledDates is passed', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState();
            const handleChange = useCallback((e, data) => {
                setValue(data.value);
                fn(data);
            }, []);
            return (
                <Datepicker
                    value={value}
                    onChange={handleChange}
                    disabledDates={[new Date('2021-7-5'), new Date('2021-7-10')]}
                />
            );
        };
        render(<Wrapper />);
        const input = screen.getByRole('textbox');
        userEvent.type(input, '05.07.2021');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            date: new Date('2021-7-5'),
            isDisabled: true,
            value: '05.07.2021',
            name: undefined,
        });
    });

    it('should pass defaultLocalization', async () => {
        const datePicker = snapshot.shallow(<Datepicker isCalendarOpen />);
        const inputDate = datePicker.find(InputDate);
        expect(inputDate).toHaveLength(1);
        expect(inputDate.prop('localization')).toBeUndefined();
        const calendar = datePicker.find(Calendar);
        expect(calendar).toHaveLength(1);
        expect(calendar.prop('localization')).toBeUndefined();
        expect(calendar.prop('locale')).toBeUndefined();
    });

    it('should pass customLocalization', async () => {
        const inputDateLocalization = {
            'ds.inputDate.placeholder.date': 'DD.MM.YYYY',
            'ds.inputDate.placeholder.time': 'HH:MM',
            'ds.inputDate.placeholder.datetime': 'DD.MM.YYYY HH:MM',
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
        const customLocalization = { ...inputDateLocalization, ...calendarLocalization };
        const datePicker = snapshot.shallow(
            <Datepicker isCalendarOpen localization={customLocalization} locale={enGB} />
        );
        const inputDate = datePicker.find(InputDate);
        expect(inputDate).toHaveLength(1);
        expect(inputDate.prop('localization')).toEqual(customLocalization);
        const calendar = datePicker.find(Calendar);
        expect(calendar).toHaveLength(1);
        expect(calendar.prop('localization')).toEqual(customLocalization);
        expect(calendar.prop('locale')).toEqual(enGB);
    });
});
