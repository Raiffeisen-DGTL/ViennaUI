import { delimiterMutator, padFractionalZerosMutator, scaleMutator, thousandsSeparatorMutator } from './index';
import { getSplittingResultString } from './getSplittingResultString';
import { NumberOptionsWithValue } from '../../types';

describe('Format of Number Mutators', () => {
    test('delimiterMutator', async () => {
        const options: NumberOptionsWithValue = {
            value: '1.2',
            delimiter: ',',
        };
        const result = delimiterMutator(options).value;
        expect(result).toEqual('1,2');
    });

    test('scaleMutator', async () => {
        const data = [
            {
                options: {
                    value: '1,22222',
                    delimiter: ',',
                    scale: 2,
                },
                result: '1,22',
            },
            {
                options: {
                    value: '1',
                    delimiter: ',',
                    scale: 2,
                },
                result: '1',
            },
            {
                options: {
                    value: '1,2',
                    delimiter: ',',
                    scale: 2,
                },
                result: '1,2',
            },
        ];

        data.forEach((it: any) => {
            const result = scaleMutator(it.options).value;
            expect(result).toEqual(it.result);
        });
    });

    test('padFractionalZerosMutator', async () => {
        const data = [
            {
                options: {
                    value: '1',
                    delimiter: ',',
                    scale: 2,
                    padFractionalZeros: true,
                },
                result: '1,00',
            },
            {
                options: {
                    value: '1,2',
                    delimiter: ',',
                    scale: 2,
                    padFractionalZeros: true,
                },
                result: '1,20',
            },
        ];

        data.forEach((it: any) => {
            const result = padFractionalZerosMutator(it.options).value;
            expect(result).toEqual(it.result);
        });
    });

    test('thousandsSeparatorMutator', async () => {
        const data = [
            {
                options: {
                    value: '111111',
                    delimiter: ',',
                    thousandsSeparator: ' ',
                },
                result: '111 111',
            },
            {
                options: {
                    value: '111111',
                    delimiter: ',',
                    thousandsSeparator: '_',
                },
                result: '111_111',
            },
            {
                options: {
                    value: '1111111,23',
                    delimiter: ',',
                    thousandsSeparator: '',
                },
                result: '1111111,23',
            },
        ];

        data.forEach((it: any) => {
            const result = thousandsSeparatorMutator(it.options).value;
            expect(result).toEqual(it.result);
        });
    });

    test('getSplittingResultString', async () => {
        const data = [
            {
                options: {
                    value: '123.456',
                    delimiter: '.',
                },
                result: ['123', '456'],
            },
            {
                options: {
                    value: '123',
                    delimiter: '.',
                },
                result: ['123', ''],
            },
            {
                options: {
                    value: '0.654',
                    delimiter: '.',
                },
                result: ['0', '654'],
            },
        ];

        data.forEach((it: any) => {
            const result = getSplittingResultString(it.options);
            expect(result).toEqual(it.result);
        });
    });
});
