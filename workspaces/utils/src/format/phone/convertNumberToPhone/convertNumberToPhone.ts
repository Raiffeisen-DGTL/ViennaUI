import { PhoneOptions } from '../types';

export const convertNumberToPhone = (value: number, options?: PhoneOptions): string => {
    if (String(value).length !== 11 && String(value).length !== 10) {
        return '';
    }

    const { startWith = '+7' } = options || {};
    if (String(value).length === 11) {
        const regexp = /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/;
        return String(value).replace(regexp, `${startWith} $2 $3-$4-$5`);
    }

    const regexp = /(\d{3})(\d{3})(\d{2})(\d{2})/;
    return String(value).replace(regexp, `${startWith} $1 $2-$3-$4`);
};
