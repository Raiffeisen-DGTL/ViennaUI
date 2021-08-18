import { convertNumberToString } from './index';

describe('Function convertNumberToString', () => {
    test('/wo custom delimiter ', async () => {
        const result = convertNumberToString(1.2);
        expect(result).toEqual('1,2');
    });

    test('/w scaleMutator', async () => {
        const result1 = convertNumberToString(1.229);
        expect(result1).toEqual('1,22');

        const result5 = convertNumberToString(1);
        expect(result5).toEqual('1');
    });

    test('/w thousandsSeparator', async () => {
        const result1 = convertNumberToString(111.2);
        expect(result1).toEqual('111,2');

        const result3 = convertNumberToString(11222333444);
        expect(result3).toEqual('11 222 333 444');
    });
});
