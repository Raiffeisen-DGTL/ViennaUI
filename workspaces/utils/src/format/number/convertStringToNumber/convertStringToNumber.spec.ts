import { convertStringToNumber } from './index';

describe('Function convertStringToNumber', () => {
    test('/w padFractionalZeros', async () => {
        const result = convertStringToNumber('1,20');
        expect(result).toEqual(1.2);
    });

    test('/w thousandsSeparator', async () => {
        const result1 = convertStringToNumber('11 111,2');
        expect(result1).toEqual(11111.2);
    });

    test('/w max number', async () => {
        const result = convertStringToNumber('9999999999999991');
        expect(result).toEqual(999999999999999);
    });

    test('/w positive number', async () => {
        const result = convertStringToNumber('-1');
        expect(result).toEqual(1);
    });
});
