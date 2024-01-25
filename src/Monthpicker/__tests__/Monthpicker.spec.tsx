import React, { useCallback, useState } from 'react';
import { enGB } from 'date-fns/locale';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Monthpicker } from '../Monthpicker';
import { Calendar } from '../../Calendar';

describe.skip('Monthpicker', () => {
    it('should open calendar droplist', () => {
        render(<Monthpicker />);
        const input = screen.getByRole('textbox');
        userEvent.click(input);

        const calendar = screen.getByTestId('Monthpicker.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    xit('should call onChange when click on month', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = useState(new Date('2021-5-5'));
            const handleChange = useCallback((e, data) => {
                setValue(data.date);
                fn(data);
            }, []);
            return <Monthpicker value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        userEvent.tab();
        const day = screen.getByText(/Янв/i);
        userEvent.click(day);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenLastCalledWith({
            date: new Date('2021-1-1'),
            value: 'январь 2021',
            name: undefined,
        });
    });

    it('should open calendar droplist when input is focused', async () => {
        const Wrapper = () => {
            const [value, setValue] = useState();
            const handleChange = useCallback((e, data) => {
                setValue(data.date);
            }, []);
            return <Monthpicker value={value} onChange={handleChange} />;
        };
        render(<Wrapper />);
        userEvent.tab();

        const calendar = screen.getByTestId('Monthpicker.CalendarBox');
        expect(calendar).toBeInTheDocument();
    });

    it('should hide calendar droplist when click calendar icon', async () => {
        render(<Monthpicker />);
        const icon = screen.getByTestId('Monthpicker.CalendarIcon');
        userEvent.click(icon);

        const calendar = screen.getByTestId('Monthpicker.CalendarBox');
        userEvent.click(icon);
        expect(calendar).not.toBeInTheDocument();
    });

    it('should pass defaultLocalization', async () => {
        const monthPicker = snapshot.shallow(<Monthpicker isCalendarOpen />);
        const calendar = monthPicker.find(Calendar);
        expect(calendar).toHaveLength(1);
        expect(calendar.prop('localization')).toBeUndefined();
        expect(calendar.prop('locale')).toBeUndefined();
    });

    it('should pass customLocalization', async () => {
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
        const monthpicker = snapshot.shallow(
            <Monthpicker isCalendarOpen localization={calendarLocalization} locale={enGB} />
        );
        const calendar = monthpicker.find(Calendar);
        expect(calendar).toHaveLength(1);
        expect(calendar.prop('localization')).toEqual(calendarLocalization);
        expect(calendar.prop('locale')).toEqual(enGB);
    });
});
