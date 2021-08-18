import { formatNumberString } from '../formatNumberString';
import { NumberOptions } from '../types';

const editorialPolicyOptions: NumberOptions = {
    delimiter: ',',
    scale: 2,
    thousandsSeparator: ' ',
    padFractionalZeros: false,
};

/**
 * Parses number and string like number (for example '1.') to formatting string by editorial policy options
 * @param {number | string} value
 * @return {string}
 */
export const convertNumberToString = (value: number): string => {
    return formatNumberString(String(value), editorialPolicyOptions);
};
