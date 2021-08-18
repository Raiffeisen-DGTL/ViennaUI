import { NumberDelimiter } from '../../types';

export interface GetSplittingResultString {
    delimiter: NumberDelimiter;
    value: string;
}

/**
 * Gets integer and fractional parts of number
 * @return {Array}
 */
export const getSplittingResultString = ({ delimiter, value }: GetSplittingResultString): string[] => {
    if (!delimiter) {
        return [];
    }

    const [integerPart, fractionalPart = ''] = value.split(delimiter);
    return [integerPart, fractionalPart];
};
