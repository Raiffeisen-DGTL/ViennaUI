import { isSameDay } from 'date-fns';
import { checkIsDisabled, checkIsWeekend, getLocalDay } from './index';
import { Dates } from '../types';

test('Calendar Utils checkIsDisabled w/ WEEKENDS', () => {
    const dates: Dates = 'weekends';
    const date = new Date('2020-05-30');

    expect(checkIsDisabled({ dates, date, startingWeekDay: 'monday' })).toEqual(true);
});

test('Calendar Utils checkIsDisabled w/ dates', () => {
    const date = new Date('2020-05-30T06:00:00+01:00');

    expect(
        checkIsDisabled({ dates: [new Date('2020-05-30')], date: new Date('2020-05-30'), startingWeekDay: 'monday' })
    ).toEqual(true);
    expect(
        checkIsDisabled({
            dates: [new Date('2025-05-08T05:00:00+03:00')],
            date: new Date('2025-05-08'),
            startingWeekDay: 'monday',
        })
    ).toEqual(true);
    expect(
        checkIsDisabled({ dates: [new Date('2020-05-30T01:00:00+01:00')], date, startingWeekDay: 'monday' })
    ).toEqual(true);
    expect(
        checkIsDisabled({ dates: [new Date('2020-05-30T03:30:00+02:00')], date, startingWeekDay: 'monday' })
    ).toEqual(true);
    expect(
        checkIsDisabled({ dates: [new Date('2020-05-30T12:00:00-05:00')], date, startingWeekDay: 'monday' })
    ).toEqual(true);
    expect(
        checkIsDisabled({ dates: [new Date('2020-05-30T18:45:00+08:00')], date, startingWeekDay: 'monday' })
    ).toEqual(true);
    expect(
        checkIsDisabled({ dates: [new Date('2020-05-30T23:59:59-10:00')], date, startingWeekDay: 'monday' })
    ).toEqual(false);
});

test('Calendar Utils checkIsDisabled w/ function', () => {
    const date = new Date('2020-05-30');
    const dates = (value: Date) => isSameDay(value, date);

    expect(checkIsDisabled({ dates, date, startingWeekDay: 'monday' })).toEqual(true);
});

test('Calendar Utils checkIsDisabled w/ dates w/ minDate', () => {
    const date = new Date('2020-05-30');
    const minDate = new Date('2020-05-31');

    expect(checkIsDisabled({ minDate, date, startingWeekDay: 'monday' })).toEqual(true);
});

test('Calendar Utils checkIsDisabled w/ dates w/ maxDate', () => {
    const date = new Date('2020-05-30');
    const maxDate = new Date('2020-05-29');

    expect(checkIsDisabled({ maxDate, date, startingWeekDay: 'monday' })).toEqual(true);
});

test('Calendar Utils checkIsWeekend w/ WEEKENDS', () => {
    const dates: Dates = 'weekends';
    const date = new Date('2020-05-30');

    expect(checkIsWeekend({ dates, date, startingWeekDay: 'monday' })).toEqual(true);
});

test('Calendar Utils checkIsWeekend w/ dates', () => {
    const dates = [new Date('2020-05-30')];
    const date = new Date('2020-05-30');

    expect(checkIsWeekend({ dates, date, startingWeekDay: 'monday' })).toEqual(true);
});

test('Calendar Utils checkIsWeekend w/ function', () => {
    const date = new Date('2020-05-30');
    const dates = (value: Date) => isSameDay(value, date);

    expect(checkIsWeekend({ dates, date, startingWeekDay: 'monday' })).toEqual(true);
});

test('Calendar Utils getLocalDay', () => {
    for (let i = 1; i < 8; i++) {
        expect(getLocalDay(new Date(`2020-06-${i}`), 'monday')).toEqual(i);
    }
});
