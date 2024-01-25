import { isAfter, isBefore, isEqual } from 'date-fns';
import { Dates, StartingWeekDay } from '../types';
import { isSaturdayOrSunday } from './isSaturdayOrSunday';

interface CheckIsDisabled {
    dates?: Dates;
    date: Date;
    minDate?: Date;
    maxDate?: Date;
    startingWeekDay: StartingWeekDay;
}

export const checkIsDisabled = ({ dates, date, minDate, maxDate, startingWeekDay }: CheckIsDisabled): boolean => {
    const isWeekend = isSaturdayOrSunday(date, startingWeekDay);
    let isDisabled =
        (dates === 'weekends' && isWeekend) ||
        (!!minDate && isBefore(date.setHours(0, 0, 0, 0), minDate.setHours(0, 0, 0, 0))) ||
        (!!maxDate && isAfter(date.setHours(0, 0, 0, 0), maxDate.setHours(0, 0, 0, 0)));

    if (Array.isArray(dates)) {
        isDisabled = isDisabled || !!dates.find((value) => isEqual(value, date));
    }

    if (typeof dates === 'function') {
        isDisabled = isDisabled || dates(date);
    }

    return isDisabled;
};
