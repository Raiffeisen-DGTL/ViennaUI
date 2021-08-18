import { convertRangeToString } from './index';

describe('Function convertRangeToString', () => {
    it('should convert date range to string', () => {
        const meta = [
            {
                value: [new Date('2021-1-1'), new Date('2021-1-2')],
                result: '01.01.2021 - 02.01.2021',
            },
            {
                value: [new Date('2021-1-1'), new Date('2021-1-2')],
                mask: 'do LLLL yyyy',
                result: '1st January 2021 - 2nd January 2021',
            },
        ];

        meta.forEach(({ value, mask, result }) => {
            const resultString = convertRangeToString(value, mask);
            expect(resultString).toEqual(result);
        });
    });
});
