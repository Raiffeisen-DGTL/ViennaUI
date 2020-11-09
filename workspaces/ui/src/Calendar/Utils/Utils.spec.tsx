import { isSameDay } from 'date-fns';
import { checkIsDisabled, checkIsWeekend, getLocalDay } from './index';
import { DisabledDates } from '../types';

test('Calendar Utils checkIsDisabled w/ WEEKENDS', () => {
    const dates = DisabledDates.WEEKENDS;
    const date = new Date('2020-05-30');

    expect(checkIsDisabled({ dates, date })).toEqual(true);
});

test('Calendar Utils checkIsDisabled w/ dates', () => {
    const dates = [new Date('2020-05-30')];
    const date = new Date('2020-05-30');

    expect(checkIsDisabled({ dates, date })).toEqual(true);
});

test('Calendar Utils checkIsDisabled w/ function', () => {
    const date = new Date('2020-05-30');
    const dates = (value: Date) => isSameDay(value, date);

    expect(checkIsDisabled({ dates, date })).toEqual(true);
});

test('Calendar Utils checkIsDisabled w/ dates w/ minDate', () => {
    const date = new Date('2020-05-30');
    const minDate = new Date('2020-05-31');

    expect(checkIsDisabled({ minDate, date })).toEqual(true);
});

test('Calendar Utils checkIsDisabled w/ dates w/ maxDate', () => {
    const date = new Date('2020-05-30');
    const maxDate = new Date('2020-05-29');

    expect(checkIsDisabled({ maxDate, date })).toEqual(true);
});

test('Calendar Utils checkIsWeekend w/ WEEKENDS', () => {
    const dates = DisabledDates.WEEKENDS;
    const date = new Date('2020-05-30');

    expect(checkIsWeekend({ dates, date })).toEqual(true);
});

test('Calendar Utils checkIsWeekend w/ dates', () => {
    const dates = [new Date('2020-05-30')];
    const date = new Date('2020-05-30');

    expect(checkIsWeekend({ dates, date })).toEqual(true);
});

test('Calendar Utils checkIsWeekend w/ function', () => {
    const date = new Date('2020-05-30');
    const dates = (value: Date) => isSameDay(value, date);

    expect(checkIsWeekend({ dates, date })).toEqual(true);
});

test('Calendar Utils getLocalDay', () => {
    for (let i = 1; i < 8; i++) {
        expect(getLocalDay(new Date(`2020-06-${i}`))).toEqual(i);
    }
});
