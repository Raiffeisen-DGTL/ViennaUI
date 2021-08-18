import { format, isValid } from 'date-fns';

export const convertDateToString = (value: Date, mask?: string): string => {
    if (!isValid(value)) {
        return '';
    }

    return format(value, mask || 'dd.MM.yyyy');
};
