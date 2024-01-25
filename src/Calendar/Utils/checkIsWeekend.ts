import { isEqual } from 'date-fns';
import { Dates, StartingWeekDay } from '../types';
import { isSaturdayOrSunday } from './isSaturdayOrSunday';

interface CheckIsWeekend {
    dates: Dates;
    date: Date;
    startingWeekDay: StartingWeekDay;
}

export const checkIsWeekend = ({ dates, date, startingWeekDay }: CheckIsWeekend): boolean => {
    let isDisabledOrWeekend = false;

    if (dates === 'weekends') {
        isDisabledOrWeekend = isSaturdayOrSunday(date, startingWeekDay);
    }

    if (Array.isArray(dates)) {
        isDisabledOrWeekend = !!dates.find((value) => isEqual(value, date));
    }

    if (typeof dates === 'function') {
        isDisabledOrWeekend = dates(date);
    }

    return isDisabledOrWeekend;
};
