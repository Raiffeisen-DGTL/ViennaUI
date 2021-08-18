import { NumberOptionsWithValue } from '../../types';
import { getSplittingResultString } from './getSplittingResultString';

/**
 * Uses scaleMutator for fractional number part
 * @param {Object} options
 * @return {Object}
 */
export const scaleMutator = (options: NumberOptionsWithValue): NumberOptionsWithValue => {
    const { scale, delimiter, value } = options;
    if (typeof scale !== 'number' || !scale || !delimiter) {
        return { ...options, value };
    }

    const [integerPart, fractionalPart] = getSplittingResultString({ delimiter, value });
    let nextFractionalPart: number | string = fractionalPart;
    let nextResultString = value;

    if (fractionalPart.length > scale) {
        nextFractionalPart = fractionalPart.slice(0, scale);
        nextResultString = `${integerPart}${delimiter}${nextFractionalPart}`;
    }

    return { ...options, value: nextResultString };
};
