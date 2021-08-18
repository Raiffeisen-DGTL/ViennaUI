import { compose } from './compose';

describe('Function compose', () => {
    test('/w object', async () => {
        const fn1 = ({ value, name }) => ({ value: `${value}10`, name });
        const fn2 = ({ name, value }) => ({ value: `${name} is ${value}2b` });
        const fn3 = ({ value }) => ({ value: `${value}ff` });

        const composeFns = compose(fn3, fn2, fn1);
        expect(composeFns({ name: 'Color', value: '#' })).toEqual({ value: 'Color is #102bff' });
    });

    test('/w array', async () => {
        const fn1 = (arr) => arr.map((it) => it + 10);
        const fn2 = (arr) => arr.filter((it) => it > 10);

        const composeFns = compose(fn2, fn1);
        expect(composeFns([0, -1, 3, 29, 36])).toEqual([13, 39, 46]);
    });

    test('/w value', async () => {
        const fn1 = jest.fn((iterator) => iterator + 22);
        const fn2 = jest.fn((iterator) => iterator / 2);

        const composeFns = compose(fn2, fn1);
        composeFns(8);

        expect(fn1).toBeCalledWith(8);
        expect(fn2).toBeCalledWith(30);
    });

    test('/w multiple arguments', async () => {
        const fn1 = jest.fn((a, b) => [a, b]);
        const fn2 = jest.fn((a, b) => [a, b]);

        const composeFns = compose(fn2, fn1);
        composeFns(1, 2);

        expect(fn1).toBeCalledWith(1);
        expect(fn2).toBeCalledWith([1, undefined]);
    });
});
