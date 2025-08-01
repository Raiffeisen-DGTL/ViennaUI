import { parseNumberFromString } from './parseNumberFromString';

describe('parseNumberFromString', () => {
    test('верно обрабатывает целое значение', () => {
        expect(parseNumberFromString('123')).toBe(123);
    });

    test('верно обрабатывает отрицательное целое значение', () => {
        expect(parseNumberFromString('-123')).toBe(-123);
    });

    test('верно обрабатывает значение c буквами', () => {
        expect(parseNumberFromString('1abc23')).toBe(NaN);
    });

    test('верно обрабатывает отрицательное значение с минусом между чисел', () => {
        expect(parseNumberFromString('12-3')).toBe(NaN);
    });

    test('верно обрабатывает значение с минусом между чисел', () => {
        expect(parseNumberFromString('-12-3')).toBe(NaN);
    });

    test('верно обрабатывает дробное значение с точкой', () => {
        expect(parseNumberFromString('123.4')).toBe(123.4);
    });

    test('верно обрабатывает отрицательное дробное значение с точкой', () => {
        expect(parseNumberFromString('-123.4')).toBe(-123.4);
    });

    test('верно обрабатывает дробное значение с запятой', () => {
        expect(parseNumberFromString('123,4')).toBe(123.4);
    });

    test('верно обрабатывает отрицательное дробное значение с запятой', () => {
        expect(parseNumberFromString('-123,4')).toBe(-123.4);
    });

    test('верно обрабатывает значение с точками и запятыми', () => {
        expect(parseNumberFromString('1.2,3.4')).toBe(1.234);
    });

    test('верно обрабатывает отрицательное значение с точками и запятыми', () => {
        expect(parseNumberFromString('-1.2,3.4')).toBe(-1.234);
    });

    test('верно обрабатывает значение с последовательными точками', () => {
        expect(parseNumberFromString('1..2.3')).toBe(1.23);
    });

    test('верно обрабатывает значение с пробелами', () => {
        expect(parseNumberFromString('1 000 000')).toBe(1000000);
    });

    test('верно обрабатывает значение с пробелами и разделителем', () => {
        expect(parseNumberFromString('1. 000 000')).toBe(1);
    });

    test('верно обрабатывает значение с нулями впереди', () => {
        expect(parseNumberFromString('0001')).toBe(1);
    });

    test('верно обрабатывает значение с нулями впереди и разделителем', () => {
        expect(parseNumberFromString('000.1')).toBe(0.1);
    });
});
