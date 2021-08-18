import { convertStringToDate } from '../convertStringToDate';

export const convertStringToRange = (value: string, mask?: string): Date[] | null => {
    const [from, to] = value.split('-');
    return [convertStringToDate(from.trim(), mask), convertStringToDate(to.trim(), mask)];
};
