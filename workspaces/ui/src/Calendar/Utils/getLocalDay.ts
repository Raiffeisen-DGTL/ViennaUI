import { SUNDAY_INDEX } from '../constants';

export const getLocalDay = (date: Date) => {
    return date.getDay() === 0 ? SUNDAY_INDEX : date.getDay();
};
