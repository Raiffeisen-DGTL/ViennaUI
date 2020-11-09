import { isEqual } from 'date-fns';
import { dateFunction, DisabledDates } from '../types';
import { getLocalDay } from './getLocalDay';
import { SATURDAY_INDEX, SUNDAY_INDEX } from '../constants';

interface CheckIsWeekend {
    dates: DisabledDates.WEEKENDS | Date[] | dateFunction;
    date: Date;
}

export const checkIsWeekend = ({ dates, date }: CheckIsWeekend): boolean => {
    let isDisabledOrWeekend = false;

    if (dates === DisabledDates.WEEKENDS) {
        isDisabledOrWeekend = getLocalDay(date) === SUNDAY_INDEX || getLocalDay(date) === SATURDAY_INDEX;
    }

    if (Array.isArray(dates)) {
        isDisabledOrWeekend = !!dates.find((value) => isEqual(value, date));
    }

    if (typeof dates === 'function') {
        isDisabledOrWeekend = dates(date);
    }

    return isDisabledOrWeekend;
};
