import { getSplittingResultString } from './getSplittingResultString';
import { NumberOptionsWithValue } from '../../types';

/**
 * Uses thousands separator for integer part
 * @param {Object} options
 * @return {Object}
 */
export const thousandsSeparatorMutator = (options: NumberOptionsWithValue): NumberOptionsWithValue => {
    const { thousandsSeparator, value, delimiter } = options;
    if (typeof thousandsSeparator !== 'string' || !delimiter) {
        return { ...options, value };
    }

    const hasFractionalDelimiter = delimiter && value.endsWith(delimiter);
    const [integerPart, fractionalPart] = getSplittingResultString({ delimiter, value });
    const mergedIntegerPart = integerPart.replace(/\D+/g, '');
    let nextIntegerPart = '';

    for (let i = mergedIntegerPart.length - 1; i >= 0; i--) {
        const currentNumber = mergedIntegerPart[i];
        const difference = mergedIntegerPart.length - 1 - i;

        if (difference % 3 === 0 && difference !== 0) {
            nextIntegerPart = `${currentNumber}${thousandsSeparator}${nextIntegerPart}`;
        } else {
            nextIntegerPart = `${currentNumber}${nextIntegerPart}`;
        }
    }

    return {
        ...options,
        value:
            hasFractionalDelimiter || fractionalPart
                ? `${nextIntegerPart}${delimiter}${fractionalPart}`
                : nextIntegerPart,
    };
};
