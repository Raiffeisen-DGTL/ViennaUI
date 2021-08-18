import { convertPhoneToNumber } from './convertPhoneToNumber';
import { PhoneOptions } from '../types';

describe('Function convertPhoneToNumber', () => {
    it('should convert phone to number', () => {
        const meta: { value: string; result: number; options?: PhoneOptions }[] = [
            {
                result: 1234567890,
                value: '+7 123 456-78-90',
            },
            {
                result: 1234567890,
                value: '+7 123 456-78-90',
            },
            {
                result: 1234567890,
                options: { startWith: '8' },
                value: '8 123 456-78-90',
            },
        ];

        meta.forEach(({ value, options, result }) => {
            const resultString = convertPhoneToNumber(value, options);
            expect(resultString).toEqual(result);
        });
    });
});
