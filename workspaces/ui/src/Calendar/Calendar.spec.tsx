import React from 'react';
import { act } from 'react-dom/test-utils';
import { Calendar } from './Calendar';
import { Day, DayState } from './Calendar.styles';
import { MonthSingleDays } from './MonthSingleDays';
import { MonthRangeDays } from './MonthRangeDays';
import { Format, ViewMode, DisabledDates } from './types';

beforeAll(() => {
    class MockDate extends global.Date {
        // eslint-disable-next-line
        constructor(...props) {
            if (props.length === 0) {
                super('2020-1-1');
            } else {
                // @ts-ignore
                super(...props);
            }
        }
    }
    // @ts-ignore
    global.Date = MockDate;
});

test('Calendar', () => {
    const snap = snapshot.render(<Calendar />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ date like object', () => {
    const date = {
        year: 2019,
        month: 2,
        day: 1,
    };
    const snap = snapshot.render(<Calendar date={date} format={Format.OBJECT} />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ date like Date', () => {
    const date = new Date(2019, 2, 1);
    const snap = snapshot.render(<Calendar date={date} format={Format.DATE} />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ defaultViewMode month_list', () => {
    const date = new Date(2019, 2, 1);
    const snap = snapshot.render(<Calendar date={date} defaultViewMode={ViewMode.MONTH_LIST} />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ defaultViewMode year_list', () => {
    const date = new Date(2019, 2, 1);
    const snap = snapshot.render(<Calendar date={date} defaultViewMode={ViewMode.YEAR_LIST} />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ disabledDates weekends', () => {
    const date = new Date(2019, 2, 1);
    const snap = snapshot.render(<Calendar date={date} disabledDates={DisabledDates.WEEKENDS} />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ disabledDates custom', () => {
    const date = new Date(2019, 4, 1);
    const snap = snapshot.render(<Calendar date={date} disabledDates={[new Date(2019, 4, 6), new Date(2019, 4, 4)]} />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ ranged date', () => {
    const snap = snapshot.render(<Calendar dateStart={new Date(2019, 4, 6)} dateEnd={new Date(2019, 4, 12)} ranged />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ eventDates', () => {
    const snap = snapshot.render(<Calendar eventDates={[new Date()]} />);
    expect(snap).toMatchSnapshot();
});

test('Calendar wo/ todayButton', () => {
    const snap = snapshot.render(<Calendar todayButton={false} />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ minDate and maxDate', () => {
    const snap = snapshot.render(<Calendar minDate={new Date('2020-3-3')} maxDate={new Date('2020-5-5')} />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange for MonthSingleDays', () => {
    const fn = jest.fn();
    const date = new Date('2020-1-1');

    const snap = snapshot.mount(<Calendar onChange={fn} />);

    act(() => {
        snap.find(MonthSingleDays).props().onChangeDate(date);
    });

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(null, { date });
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange for MonthRangeDays', () => {
    const fn = jest.fn();
    const date = new Date('2020-1-1');

    const snap = snapshot.mount(<Calendar ranged onChange={fn} />);

    act(() => {
        snap.find(MonthRangeDays).props().onChangeDate({ start: date, end: date });
    });

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(null, { dateStart: date, dateEnd: date });
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange', () => {
    const fn = jest.fn();
    const date = new Date('2020-1-1');

    const snap = snapshot.mount(<Calendar date={date} onChange={fn} />);

    const day = snap
        .find(Day)
        .filterWhere((el) => el.find(DayState).text() === '6')
        .at(0);
    expect(day.exists()).toEqual(true);

    day.simulate('click');
    expect(fn).toHaveBeenCalledWith(null, { date: new Date('2020-1-6') });

    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange on disabled day', () => {
    const fn = jest.fn();
    const date = new Date('2020-1-1');

    const snap = snapshot.mount(<Calendar disabledDates={[new Date('2020-1-6')]} date={date} onChange={fn} />);

    const day = snap
        .find(Day)
        .filterWhere((el) => el.find(DayState).text() === '6')
        .at(0);
    expect(day.exists()).toEqual(true);

    day.simulate('click');
    expect(fn).not.toHaveBeenCalled();

    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange w/ minDate', () => {
    const fn = jest.fn();
    const date = new Date('2020-1-1');

    const snap = snapshot.mount(<Calendar minDate={new Date('2020-1-7')} date={date} onChange={fn} />);

    const day = snap
        .find(Day)
        .filterWhere((el) => el.find(DayState).text() === '6')
        .at(0);
    expect(day.exists()).toEqual(true);

    day.simulate('click');
    expect(fn).not.toHaveBeenCalled();

    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange w/ maxDate', () => {
    const fn = jest.fn();
    const date = new Date('2020-1-1');

    const snap = snapshot.mount(<Calendar maxDate={new Date('2020-1-5')} date={date} onChange={fn} />);

    const day = snap
        .find(Day)
        .filterWhere((el) => el.find(DayState).text() === '6')
        .at(0);
    expect(day.exists()).toEqual(true);

    day.simulate('click');
    expect(fn).not.toHaveBeenCalled();

    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange w/ ranged', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(<Calendar ranged onChange={fn} />);

    const dayStart = snap
        .find(DayState)
        .filterWhere((el) => el.text() === '6')
        .at(0);
    expect(dayStart.exists()).toEqual(true);
    dayStart.simulate('click');

    const dayEnd = snap
        .find(DayState)
        .filterWhere((el) => el.text() === '16')
        .at(0);
    expect(dayEnd.exists()).toEqual(true);
    dayEnd.simulate('click');

    expect(fn).toHaveBeenCalledWith(null, { dateStart: new Date('2020-1-6'), dateEnd: new Date('2020-1-16') });

    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange w/ ranged where dateStart = dateEnd', () => {
    const fn = jest.fn();
    const snap = snapshot.mount(<Calendar ranged onChange={fn} />);

    const dayStart = snap
        .find(DayState)
        .filterWhere((el) => el.text() === '6')
        .at(0);
    expect(dayStart.exists()).toEqual(true);
    dayStart.simulate('click');
    dayStart.simulate('click');

    expect(fn).toHaveBeenCalledWith(null, { dateStart: new Date('2020-1-6'), dateEnd: new Date('2020-1-6') });

    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange w/ ranged on disabled day', () => {
    const fn = jest.fn();

    const snap = snapshot.mount(<Calendar ranged disabledDates={[new Date('2020-1-6')]} onChange={fn} />);

    const day = snap
        .find(Day)
        .filterWhere((el) => el.find(DayState).text() === '6')
        .at(0);
    expect(day.exists()).toEqual(true);

    day.simulate('click');
    expect(fn).not.toHaveBeenCalled();

    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange w/ ranged w/ minDate', () => {
    const fn = jest.fn();

    const snap = snapshot.mount(<Calendar ranged minDate={new Date('2020-1-7')} onChange={fn} />);

    const day = snap
        .find(Day)
        .filterWhere((el) => el.find(DayState).text() === '6')
        .at(0);
    expect(day.exists()).toEqual(true);

    day.simulate('click');
    expect(fn).not.toHaveBeenCalled();

    expect(snap).toMatchSnapshot();
});

test('Calendar w/ onChange w/ ranged w/ maxDate', () => {
    const fn = jest.fn();

    const snap = snapshot.mount(<Calendar ranged maxDate={new Date('2020-1-5')} onChange={fn} />);

    const day = snap
        .find(Day)
        .filterWhere((el) => el.find(DayState).text() === '6')
        .at(0);
    expect(day.exists()).toEqual(true);

    day.simulate('click');
    expect(fn).not.toHaveBeenCalled();

    expect(snap).toMatchSnapshot();
});

test('Calendar w/ weekendDates weekends', () => {
    const date = new Date(2019, 2, 1);
    const snap = snapshot.render(<Calendar date={date} weekendDates={DisabledDates.WEEKENDS} />);
    expect(snap).toMatchSnapshot();
});

test('Calendar w/ weekendDates custom', () => {
    const date = new Date(2019, 4, 1);
    const snap = snapshot.render(<Calendar date={date} weekendDates={[new Date(2019, 4, 6), new Date(2019, 4, 4)]} />);
    expect(snap).toMatchSnapshot();
});
