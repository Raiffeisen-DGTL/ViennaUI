import { isValid, parse, format } from 'date-fns';

const DATE_FORMAT = 'dd.MM.yyyy';

export function getDateFromString(dateString?: string | Date): Date | undefined {
    if (!dateString) {
        return undefined;
    }

    if (dateString instanceof Date) {
        return dateString;
    }

    if (dateString.length !== DATE_FORMAT.length) {
        return undefined;
    }

    const date = parse(dateString, DATE_FORMAT, new Date());
    if (isValid(date)) {
        return date;
    }

    return undefined;
}

export function getStringFromDate(date: Date): string {
    return date ? format(date, DATE_FORMAT) : '';
}
