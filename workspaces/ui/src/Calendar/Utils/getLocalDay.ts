import { SUNDAY_INDEX } from '../constants';
import { StartingWeekDay } from '../types';

export const getLocalDay = (date: Date, startingWeekDay: StartingWeekDay) => {
    if (startingWeekDay === StartingWeekDay.Sunday) {
        return date.getDay() + 1;
    }

    return date.getDay() === 0 ? SUNDAY_INDEX : date.getDay();
};
