import { convertStringToRange } from './index';

describe('Function convertStringToRange', () => {
    it('should convert string to date range', () => {
        const meta = [
            {
                result: [new Date('2021-1-1'), new Date('2021-1-2')],
                value: '01.01.2021 - 02.01.2021',
            },
            {
                result: [new Date('2021-1-1'), new Date('2021-1-2')],
                mask: 'do LLLL yyyy',
                value: '1st January 2021 - 2nd January 2021',
            },
        ];

        meta.forEach(({ value, mask, result }) => {
            const resultString = convertStringToRange(value, mask);
            expect(resultString).toEqual(result);
        });
    });
});
