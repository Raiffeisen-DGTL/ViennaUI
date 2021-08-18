import { formatNumberString } from './formatNumberString';
import { NumberOptions } from '../types';

describe('FormatNumberString function', () => {
    test('formatString /w custom delimiter ', async () => {
        const result = formatNumberString('1.2', { delimiter: '.' } as NumberOptions);
        expect(result).toEqual('1.2');
    });

    test('formatString /w scaleMutator', async () => {
        const result1 = formatNumberString('1.229', { scale: 2, delimiter: ',' } as NumberOptions);
        expect(result1).toEqual('1,22');

        const result2 = formatNumberString('1.2256', { scale: 2, delimiter: ',' } as NumberOptions);
        expect(result2).toEqual('1,22');

        const result4 = formatNumberString('1.9', { scale: 2, delimiter: ',' } as NumberOptions);
        expect(result4).toEqual('1,9');

        const result5 = formatNumberString('1', { scale: 2 } as NumberOptions);
        expect(result5).toEqual('1');
    });

    test('formatString /w padFractionalZeros', async () => {
        const result1 = formatNumberString('1.2', {
            scale: 2,
            delimiter: ',',
            padFractionalZeros: true,
        } as NumberOptions);
        expect(result1).toEqual('1,20');

        const result2 = formatNumberString('1', {
            scale: 2,
            delimiter: ',',
            padFractionalZeros: true,
        } as NumberOptions);
        expect(result2).toEqual('1,00');
    });

    test('formatString /w thousandsSeparator', async () => {
        const result1 = formatNumberString('111.2', { thousandsSeparator: ' ', delimiter: ',' } as NumberOptions);
        expect(result1).toEqual('111,2');

        const result2 = formatNumberString('1111', { thousandsSeparator: ' ', delimiter: ',' } as NumberOptions);
        expect(result2).toEqual('1 111');

        const result3 = formatNumberString('11222333444', { thousandsSeparator: ' ', delimiter: ',' } as NumberOptions);
        expect(result3).toEqual('11 222 333 444');

        const result4 = formatNumberString('11222333444', { thousandsSeparator: '_', delimiter: ',' } as NumberOptions);
        expect(result4).toEqual('11_222_333_444');

        const result5 = formatNumberString('11222333444', { thousandsSeparator: '', delimiter: ',' } as NumberOptions);
        expect(result5).toEqual('11222333444');
    });

    test('formatString /w value like string', async () => {
        const result = formatNumberString('1.', { delimiter: ',' } as NumberOptions);
        expect(result).toEqual('1,');
    });
});
