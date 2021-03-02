import { isAfter, isBefore, isEqual } from 'date-fns';
import { dateFunction, DisabledDates, StartingWeekDay } from '../types';
import { isSaturdayOrSunday } from './isSaturdayOrSunday';

interface CheckIsDisabled {
    dates?: DisabledDates.WEEKENDS | Date[] | dateFunction;
    date: Date;
    minDate?: Date;
    maxDate?: Date;
    startingWeekDay: StartingWeekDay;
}

export const checkIsDisabled = ({ dates, date, minDate, maxDate, startingWeekDay }: CheckIsDisabled): boolean => {
    const isWeekend = isSaturdayOrSunday(date, startingWeekDay);
    let isDisabled =
        (dates === DisabledDates.WEEKENDS && isWeekend) ||
        (!!minDate && isBefore(date, minDate)) ||
        (!!maxDate && isAfter(date, maxDate));

    if (Array.isArray(dates)) {
        isDisabled = isDisabled || !!dates.find((value) => isEqual(value, date));
    }

    if (typeof dates === 'function') {
        isDisabled = isDisabled || dates(date);
    }

    return isDisabled;
};
