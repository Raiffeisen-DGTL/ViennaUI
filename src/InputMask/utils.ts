// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { AllFactoryStaticOpts, FactoryOpts } from 'imask';
import { format } from 'date-fns';

export const getMaskOptionsFromProps = (props: FactoryOpts) => {
    const keys: (keyof AllFactoryStaticOpts)[] = [
        'mask',
        'parent',
        'prepare',
        'prepareChar',
        'placeholderChar',
        'validate',
        'commit',
        'format',
        'parse',
        'overwrite',
        'radix',
        'mapToRadix',
        'eager',
        'min',
        'max',
        'skipInvalid',
    ];

    const options = keys.reduce((res, key) => {
        if (props[key] !== undefined) {
            res[key] = props[key];
        }

        return res;
    }, {}) as Partial<AllFactoryStaticOpts>;

    return options;
};

const isValidDate = <T>(d: T): boolean => {
    return d instanceof Date && !Number.isNaN(d.getTime());
};

export const dateFormat = (value: string | Date) => {
    return isValidDate(value) ? format(value as Date, 'dd.MM.yyyy') : typeof value === 'string' ? value : '';
};
