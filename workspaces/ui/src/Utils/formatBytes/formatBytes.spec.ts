import { formatBytes } from './formatBytes';

test('formatBytes()', () => {
    expect(formatBytes(0)).toEqual('0 байт');
    expect(formatBytes(1e3)).toEqual('1000 байт');

    expect(formatBytes(1024)).toEqual('1 Кб');
    expect(formatBytes(102456)).toEqual('100.05 Кб');
    expect(formatBytes(102456, 0)).toEqual('100 Кб');

    expect(formatBytes(1e6)).toEqual('976.56 Кб');
    expect(formatBytes(1e6, 0)).toEqual('977 Кб');
    expect(formatBytes(Math.pow(1024, 2))).toEqual('1 Мб');

    expect(formatBytes(1e9)).toEqual('953.67 Мб');
    expect(formatBytes(1e9, 0)).toEqual('954 Мб');
    expect(formatBytes(Math.pow(1024, 3))).toEqual('1 Гб');

    expect(formatBytes(1e12)).toEqual('931.32 Гб');
    expect(formatBytes(1e12, 0)).toEqual('931 Гб');
    expect(formatBytes(Math.pow(1024, 4))).toEqual('1 Тб');

    expect(formatBytes(1e15)).toEqual('909.49 Тб');
    expect(formatBytes(1e15, 0)).toEqual('909 Тб');
    expect(formatBytes(Math.pow(1024, 5))).toEqual('1 Пб');

    expect(formatBytes(1e18)).toEqual('888.18 Пб');
    expect(formatBytes(1e18, 0)).toEqual('888 Пб');
    expect(formatBytes(Math.pow(1024, 6))).toEqual('1 Эб');

    expect(formatBytes(1e21)).toEqual('867.36 Эб');
    expect(formatBytes(1e21, 0)).toEqual('867 Эб');
    expect(formatBytes(Math.pow(1024, 7))).toEqual('1 Зб');

    expect(formatBytes(1e24)).toEqual('847.03 Зб');
    expect(formatBytes(1e24, 0)).toEqual('847 Зб');
    expect(formatBytes(Math.pow(1024, 8))).toEqual('1 Йб');
});
