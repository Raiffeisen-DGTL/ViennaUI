import { convertNumberToPhone } from './convertNumberToPhone';
import { PhoneOptions } from '../types';

describe('Function convertNumberToPhone', () => {
    it('should convert number to phone', () => {
        const meta: { value: number; result: string; options?: PhoneOptions }[] = [
            {
                value: 71234567890,
                result: '+7 123 456-78-90',
            },
            {
                value: 1234567890,
                result: '+7 123 456-78-90',
            },
            {
                value: 1234567890,
                options: { startWith: '8' },
                result: '8 123 456-78-90',
            },
        ];

        meta.forEach(({ value, options, result }) => {
            const resultString = convertNumberToPhone(value, options);
            expect(resultString).toEqual(result);
        });
    });
});
