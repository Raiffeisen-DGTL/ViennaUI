import { isAfter, isBefore, startOfDay } from 'date-fns';
import { Dates, StartingWeekDay } from '../types';
import { isSaturdayOrSunday } from './isSaturdayOrSunday';
import { isEqualDatesWithoutTime } from './isEqualDatesWithoutTime';

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
        (!!minDate && isBefore(startOfDay(date), startOfDay(minDate))) ||
        (!!maxDate && isAfter(startOfDay(date), startOfDay(maxDate)));

    if (Array.isArray(dates)) {
        isDisabled =
            isDisabled ||
            !!dates.find((value) => {
                return isEqualDatesWithoutTime(value, date);
            });
    }

    if (typeof dates === 'function') {
        isDisabled = isDisabled || dates(date);
    }

    return isDisabled;
};
