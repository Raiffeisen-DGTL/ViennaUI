/**
 * Helper function for parsing string like number to string
 */
import { NumberOptions } from '../types';
import { compose } from '../../../compose';
import { delimiterMutator, padFractionalZerosMutator, scaleMutator, thousandsSeparatorMutator } from './mutators';

export const formatNumberString = (value: string, options: NumberOptions) => {
    const format = compose(thousandsSeparatorMutator, padFractionalZerosMutator, scaleMutator, delimiterMutator);
    const result = format({
        ...options,
        value,
    });

    return result.value;
};
