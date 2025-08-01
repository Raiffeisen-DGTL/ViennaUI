import { DateValue } from '../Calendar';

export const convertValueToDate = (date: DateValue | Date[] | Date | undefined) => {
    if (date instanceof Date) {
        return date;
    }
    if (Array.isArray(date)) {
        if (date.length === 0) return null;
        const firstDate = date[0];
        if (!(firstDate instanceof Date)) return null;
        return firstDate;
    }
    if (typeof date === 'object' && 'day' in date && 'month' in date && 'year' in date) {
        const { day, month, year } = date;
        return new Date(year, month - 1, day);
    }
    return null;
};
