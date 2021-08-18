import { convertDateToString } from '../convertDateToString';

export const convertRangeToString = (value: Date[], mask?: string): string => {
    const from = convertDateToString(value[0], mask);
    const to = convertDateToString(value[1], mask);

    return `${from} - ${to}`;
};
