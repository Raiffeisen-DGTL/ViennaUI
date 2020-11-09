import { isAfter, isBefore, isEqual } from 'date-fns';
import { dateFunction, DisabledDates } from '../types';
import { getLocalDay } from './getLocalDay';
import { SATURDAY_INDEX, SUNDAY_INDEX } from '../constants';

interface CheckIsDisabled {
    dates?: DisabledDates.WEEKENDS | Date[] | dateFunction;
    date: Date;
    minDate?: Date;
    maxDate?: Date;
}

export const checkIsDisabled = ({ dates, date, minDate, maxDate }: CheckIsDisabled): boolean => {
    let isDisabled =
        (dates === DisabledDates.WEEKENDS &&
            (getLocalDay(date) === SUNDAY_INDEX || getLocalDay(date) === SATURDAY_INDEX)) ||
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
