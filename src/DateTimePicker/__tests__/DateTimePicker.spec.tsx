import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { enGB } from 'date-fns/locale';
import { Datepicker, Select } from '../../index';
import { DateTimePicker } from '../DateTimePicker';

describe.skip('DateTimePicker', () => {
    it('should show correct date and time when typing', async () => {
        const Wrapper = () => {
            const [value, setValue] = React.useState({
                date: '',
                time: '',
            });
            const handleChange = React.useCallback((e, data) => {
                setValue(data);
            }, []);
            return <DateTimePicker onChange={handleChange} value={value} />;
        };
        render(<Wrapper />);
        const dateInput = screen.getByTestId('sanitizeChildren.Datepicker');
        userEvent.type(dateInput, '01.01.2021');
        expect(dateInput).toHaveValue('01.01.2021');

        const timeInput = screen.getByTestId('sanitizeChildren.InputDate');
        userEvent.type(timeInput, '10:01');
        // expect(timeInput).toHaveValue('10:01');
    });

    it('should call onChange when edit date', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = React.useState({
                date: '',
                time: '',
            });
            const changeHandler = React.useCallback((e, data) => {
                setValue(data);
                fn(data);
            }, []);
            return <DateTimePicker onChange={changeHandler} value={value} />;
        };
        render(<Wrapper />);
        const dateInput = screen.getByTestId('sanitizeChildren.Datepicker');
        userEvent.type(dateInput, '01.01.2021');
        expect(fn).toHaveBeenLastCalledWith({ date: '01.01.2021', time: '' });

        const timeInput = screen.getByTestId('sanitizeChildren.InputDate');
        userEvent.type(timeInput, '10:01');
        // expect(fn).toHaveBeenLastCalledWith({ date: '01.01.2021', time: '10:01' });
    });

    it('should call onChange when select time', async () => {
        const fn = jest.fn();
        const Wrapper = () => {
            const [value, setValue] = React.useState({
                date: '',
                time: '',
            });
            const changeHandler = React.useCallback((e, data) => {
                setValue(data);
                fn(data);
            }, []);
            return (
                <DateTimePicker onChange={changeHandler} value={value}>
                    <Select />
                </DateTimePicker>
            );
        };

        render(<Wrapper />);
        const select = screen.getByRole('listbox');
        userEvent.click(select);
        const option = screen.getByText('00:00');
        userEvent.click(option);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith({ date: '', time: '00:00' });
    });

    it('should pass any props', () => {
        const props = {
            className: 'className',
            id: 'id',
            title: 'title',
            onClick: () => 'Click',
        };

        const component = (
            <DateTimePicker {...props}>
                <Select />
            </DateTimePicker>
        );

        const snap = snapshot.render(component);
        expect(snap).toMatchSnapshot();

        const wrapper = snapshot.shallow(component);
        for (const [key, value] of Object.entries(props)) {
            expect(wrapper.props()[key]).toEqual(value);
        }
    });

    it('should pass defaultLocalization', async () => {
        const dateTimePicker = snapshot.shallow(<DateTimePicker />);
        const datepicker = dateTimePicker.find(Datepicker);
        expect(datepicker).toHaveLength(1);
        expect(datepicker.prop('localization')).toBeUndefined();
        expect(datepicker.prop('locale')).toBeUndefined();
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
        const dateTimePicker = snapshot.shallow(<DateTimePicker localization={customLocalization} locale={enGB} />);
        const datepicker = dateTimePicker.find(Datepicker);
        expect(datepicker).toHaveLength(1);
        expect(datepicker.prop('localization')).toEqual(customLocalization);
        expect(datepicker.prop('locale')).toEqual(enGB);
    });
});
