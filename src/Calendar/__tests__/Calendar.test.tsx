import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { enGB } from 'date-fns/locale';
import { Calendar as CalendarComponent } from '../Calendar';
import { format } from 'date-fns';

const Calendar: React.FC<React.ComponentProps<typeof CalendarComponent>> = (props) => {
    return (
        <CalendarComponent
            defaultDisplayedDate={new Date('2020-1-1')}
            testId={{
                btnYearPrev: 'calendar.header.yearPrev',
                btnYearNext: 'calendar.header.yearNext',
                btnMonthPrev: 'calendar.header.monthPrev',
                btnMonthNext: 'calendar.header.monthNext',
                btnToday: 'calendar.body.today',
                btnViewMode: 'calendar.header.viewModa',
                btnCalendarCell: (date: Date) => format(date, 'dd.MM.yyyy'),
            }}
            {...props}
        />
    );
};

describe('Calendar', () => {
    it('should call onChange when change day', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Calendar onChange={fn} />);
        const day = getByTestId('01.01.2020');
        await userEvent.click(day);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { date: new Date('2020-1-1') });
    });

    it('should show default displayed date', () => {
        render(<Calendar defaultDisplayedDate={new Date('2020-1-1')} />);
        const year = screen.getByText('2020');
        expect(year).toBeInTheDocument();
        const month = screen.getByText(/Янв/i);
        expect(month).toBeInTheDocument();
    });

    it('should show default view mode', () => {
        const { rerender } = render(<Calendar defaultViewMode='month' />);
        const day = screen.getByText('12');
        expect(day).toBeInTheDocument();

        rerender(<Calendar defaultViewMode='year_list' />);
        const year = screen.getByText('2020');
        expect(year).toBeInTheDocument();

        rerender(<Calendar defaultViewMode='month_list' />);
        const month = screen.getByText(/Янв/i);
        expect(month).toBeInTheDocument();
    });

    it('should show disabled dates', async () => {
        const fn = jest.fn();
        const { rerender, getByTestId } = render(<Calendar onChange={fn} disabledDates='weekends' />);
        const day1 = getByTestId('04.01.2020');
        await userEvent.click(day1);
        expect(fn).not.toHaveBeenCalled();

        rerender(<Calendar onChange={fn} disabledDates={[new Date('2020-1-1')]} />);
        const day2 = getByTestId('01.01.2020');
        await userEvent.click(day2);
        expect(fn).not.toHaveBeenCalled();

        rerender(<Calendar onChange={fn} disabledDates={(date) => date.getDay() === 5} />);
        const day3 = getByTestId('03.01.2020');
        await userEvent.click(day3);
        expect(fn).not.toHaveBeenCalled();
    });

    it('should show weekend dates', async () => {
        const fn = jest.fn();
        const { rerender, getByTestId } = render(<Calendar onChange={fn} weekendDates='weekends' />);
        const day1 = getByTestId('04.01.2020');
        await userEvent.click(day1);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { date: new Date('2020-1-4') });

        rerender(<Calendar onChange={fn} weekendDates={[new Date('2020-1-1')]} />);
        const day2 = getByTestId('01.01.2020');
        await userEvent.click(day2);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { date: new Date('2020-1-1') });

        rerender(<Calendar onChange={fn} weekendDates={(date) => date.getDay() === 5} />);
        const day3 = getByTestId('03.01.2020');
        await userEvent.click(day3);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { date: new Date('2020-1-3') });
    });

    it('should be ranged', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Calendar onChange={fn} ranged />);
        const day1 = getByTestId('01.01.2020');
        const day2 = getByTestId('02.01.2020');
        await userEvent.click(day1);
        await userEvent.click(day2);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), {
            dateStart: new Date('2020-1-1'),
            dateEnd: new Date('2020-1-2'),
        });
    });

    it('should be ranged with dateStart', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Calendar onChange={fn} ranged dateStart={new Date('2020-1-1')} />);
        const day2 = getByTestId('02.01.2020');
        await userEvent.click(day2);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), {
            dateStart: new Date('2020-1-1'),
            dateEnd: new Date('2020-1-2'),
        });
    });

    it('should be ranged with dateEnd', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Calendar onChange={fn} ranged dateEnd={new Date('2020-1-2')} />);
        const day1 = getByTestId('01.01.2020');
        await userEvent.click(day1);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { dateStart: new Date('2020-1-1') });
    });

    it('should be ranged when the same start and end dates', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Calendar onChange={fn} ranged />);
        const day1 = getByTestId('01.01.2020');
        await userEvent.click(day1);
        await userEvent.click(day1);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), {
            dateStart: new Date('2020-1-1'),
            dateEnd: new Date('2020-1-1'),
        });
    });

    it('should not show today button', () => {
        render(<Calendar todayButton={false} />);
        const todayBtn1 = screen.queryByText(/Сегодня/i);
        expect(todayBtn1).not.toBeInTheDocument();
    });

    it('should show today button', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Calendar onChange={fn} />);
        const todayBtn2 = getByTestId('calendar.body.today');
        expect(todayBtn2).toBeInTheDocument();
        await userEvent.click(todayBtn2);

        expect(fn).toHaveBeenCalled();
    });

    it('should has minDate and maxDate', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(
            <Calendar onChange={fn} minDate={new Date('2020-1-10')} maxDate={new Date('2020-1-15')} />
        );
        const day1 = getByTestId('04.01.2020');
        await userEvent.click(day1);
        expect(fn).not.toHaveBeenCalled();

        const day2 = getByTestId('17.01.2020');
        await userEvent.click(day2);
        expect(fn).not.toHaveBeenCalled();

        const day3 = getByTestId('13.01.2020');
        await userEvent.click(day3);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { date: new Date('2020-1-13') });
    });

    it('should be day mode', () => {
        render(<Calendar mode='day' />);
        const day = screen.queryByText('1');
        expect(day).toBeInTheDocument();
    });

    it('should call onChangeMonth mode is month', async () => {
        const fn = jest.fn();
        const fn1 = jest.fn();
        render(<Calendar onChangeMonth={fn} onChange={fn1} mode='month' />);
        const month = screen.queryByText('Янв.');
        expect(month).toBeInTheDocument();

        if (month) {
            await userEvent.click(month);
            expect(fn).toHaveBeenCalled();
            expect(fn).toHaveBeenCalledWith({ date: new Date('2020-1-1'), value: 'январь 2020' });
            expect(fn1).not.toHaveBeenCalled();
        }
    });

    it('should be with allowMultiple', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Calendar allowMultiple onChange={fn} />);

        const day1 = getByTestId('01.01.2020');
        await userEvent.click(day1);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { date: [new Date('2020-1-1')] });

        const day2 = getByTestId('02.01.2020');
        await userEvent.click(day2);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { date: [new Date('2020-1-1'), new Date('2020-1-2')] });
    });

    it('should call onChangeDisplayedDate', async () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Calendar onChangeDisplayedDate={fn} />);

        const prevYearBtn = getByTestId('calendar.header.yearPrev');
        const prevMonthBtn = getByTestId('calendar.header.monthPrev');
        const nextMonthBtn = getByTestId('calendar.header.monthNext');
        const nextYearBtn = getByTestId('calendar.header.yearNext');

        await userEvent.click(prevYearBtn);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(new Date('2019-1-1'));

        await userEvent.click(prevMonthBtn);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(new Date('2018-12-1'));

        await userEvent.click(nextMonthBtn);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(new Date('2019-1-1'));

        await userEvent.click(nextYearBtn);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(new Date('2020-1-1'));
    });

    it('should be locale', () => {
        const Wrapper = () => {
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
            return <Calendar date={new Date('2020-1-1')} locale={enGB} localization={calendarLocalization} />;
        };

        render(<Wrapper />);
        const month = screen.queryByRole('button', { name: /January/i });
        expect(month).toBeInTheDocument();

        const today = screen.queryByRole('button', { name: /Today/i });
        expect(today).toBeInTheDocument();

        const dayName = screen.queryByText('WE');
        expect(dayName).toBeInTheDocument();
    });
});
