import { getLocalDay } from './getLocalDay';
import { SATURDAY_INDEX, SUNDAY_INDEX } from '../constants';
import { StartingWeekDay } from '../types';

export const isSaturdayOrSunday = (date: Date, startingWeekDay: StartingWeekDay) => {
    const localDay = getLocalDay(date, startingWeekDay);
    return startingWeekDay === 'monday'
        ? localDay === SATURDAY_INDEX || localDay === SUNDAY_INDEX
        : localDay === SATURDAY_INDEX + 1 || localDay === 1;
};
