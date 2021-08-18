import { getSplittingResultString } from './getSplittingResultString';
import { NumberOptionsWithValue } from '../../types';

/**
 * Uses state, that pads zeros at end to the length of scaleMutator
 * @param {Object} options
 * @return {Object}
 */
export const padFractionalZerosMutator = (options: NumberOptionsWithValue): NumberOptionsWithValue => {
    const { scale, padFractionalZeros, value, delimiter } = options;
    if (typeof padFractionalZeros !== 'boolean' || !padFractionalZeros || !scale || !delimiter) {
        return { ...options, value };
    }

    const [integerPart, fractionalPart] = getSplittingResultString({ delimiter, value });
    let nextFractionalPart: number | string = fractionalPart;
    let nextResultString = value;

    if (fractionalPart.length < scale) {
        let difference = scale - fractionalPart.length;
        while (difference) {
            nextFractionalPart = `${nextFractionalPart}0`;
            difference--;
        }
        nextResultString = `${integerPart}${delimiter}${nextFractionalPart}`;
    }

    return { ...options, value: nextResultString };
};
