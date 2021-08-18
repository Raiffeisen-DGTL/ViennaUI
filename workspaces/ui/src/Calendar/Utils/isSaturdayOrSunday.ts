import { getLocalDay } from './getLocalDay';
import { SATURDAY_INDEX, SUNDAY_INDEX } from '../constants';
import { StartingWeekDay } from '../types';

export const isSaturdayOrSunday = (date, startingWeekDay) => {
    const localDay = getLocalDay(date, startingWeekDay);
    return startingWeekDay === StartingWeekDay.Monday
        ? localDay === SATURDAY_INDEX || localDay === SUNDAY_INDEX
        : localDay === SATURDAY_INDEX + 1 || localDay === 1;
};
