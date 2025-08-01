import { ResponsiveProp } from '../responsiveness';
import { getKeys } from '../typesafeGetters';

export const generateSizeBySize = <E, R>(
    size: ResponsiveProp<E> | undefined,
    getSize: (size?: E) => R
): ResponsiveProp<R> => {
    if (!size || typeof size !== 'object') return getSize(size);

    const result: ResponsiveProp<R> = {};

    getKeys(size).forEach((key) => {
        result[key] = getSize(size[key] as E | undefined);
    });

    return result;
};
