import { convertStringToDate } from './index';

describe('Function convertStringToDate', () => {
    it('should convert string to date', () => {
        const meta = [
            {
                result: new Date('2021-1-1'),
                value: '01.01.2021',
            },
            {
                result: new Date('2021-1-1'),
                mask: 'do LLLL yyyy',
                value: '1st January 2021',
            },
        ];

        meta.forEach(({ value, mask, result }) => {
            const resultString = convertStringToDate(value, mask);
            expect(resultString.toISOString()).toBe(result.toISOString());
        });
    });
});
