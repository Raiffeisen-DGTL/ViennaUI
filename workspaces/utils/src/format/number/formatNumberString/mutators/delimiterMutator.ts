import { NumberOptionsWithValue } from '../../types';

/**
 * Uses delimiter for result number string
 * @param {Object} options
 * @return {string}
 */
export const delimiterMutator = (options: NumberOptionsWithValue): NumberOptionsWithValue => {
    const { delimiter, value } = options;
    if (typeof delimiter === 'string') {
        return { ...options, value: value.replace(/\.|,/gm, delimiter) };
    }

    return { ...options, value };
};
