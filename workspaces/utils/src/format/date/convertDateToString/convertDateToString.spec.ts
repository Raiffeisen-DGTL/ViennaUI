import { convertDateToString } from './index';

describe('Function convertDateToString', () => {
    it('should convert date to string', () => {
        const meta = [
            {
                value: new Date('2021-1-1'),
                result: '01.01.2021',
            },
            {
                value: new Date('2021-1-1'),
                mask: 'do LLLL yyyy',
                result: '1st January 2021',
            },
        ];

        meta.forEach(({ value, mask, result }) => {
            const resultString = convertDateToString(value, mask);
            expect(resultString).toEqual(result);
        });
    });
});
