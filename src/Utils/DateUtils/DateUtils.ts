import isValidDate from 'date-fns/isValid';
import isAfter from 'date-fns/isAfter';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

export function isValid(date) {
    return isValidDate(date) && isAfter(date, new Date('1/1/1970'));
}

export function getDateFromString(dateString: string | Date): Date | undefined {
    if (dateString instanceof Date) {
        return dateString;
    }
    const date = parse(dateString, 'dd.MM.yyyy', new Date());
    if (isValid(date)) {
        return date;
    }

    return undefined;
}

export function getStringFromDate(date: Date): string {
    return date ? format(date, 'dd.MM.yyyy') : '';
}
