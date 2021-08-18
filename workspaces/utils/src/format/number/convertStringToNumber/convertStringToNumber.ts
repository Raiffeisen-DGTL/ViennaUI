import { formatNumberString } from '../formatNumberString';
import { NumberOptions } from '../types';

const MAX_NUMBER = 999999999999999;
const editorialPolicyOptions: NumberOptions = {
    delimiter: '.',
    thousandsSeparator: '',
};

/**
 * Parses custom string with editorial policy options to number
 * @param {number | string} value
 * @return {number}
 */
export const convertStringToNumber = (value: string): number => {
    const result = formatNumberString(String(value), editorialPolicyOptions);

    return Number(result) > MAX_NUMBER ? MAX_NUMBER : Number(result);
};
