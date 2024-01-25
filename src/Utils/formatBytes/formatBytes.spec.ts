import { formatBytes } from './formatBytes';

test('formatBytes()', () => {
    expect(formatBytes(0)).toBe('0 байт');
    expect(formatBytes(1e3)).toBe('1000 байт');

    expect(formatBytes(1024)).toBe('1 Кб');
    expect(formatBytes(102456)).toBe('100.05 Кб');
    expect(formatBytes(102456, 0)).toBe('100 Кб');

    expect(formatBytes(1e6)).toBe('976.56 Кб');
    expect(formatBytes(1e6, 0)).toBe('977 Кб');
    expect(formatBytes(Math.pow(1024, 2))).toBe('1 Мб');

    expect(formatBytes(1e9)).toBe('953.67 Мб');
    expect(formatBytes(1e9, 0)).toBe('954 Мб');
    expect(formatBytes(Math.pow(1024, 3))).toBe('1 Гб');

    expect(formatBytes(1e12)).toBe('931.32 Гб');
    expect(formatBytes(1e12, 0)).toBe('931 Гб');
    expect(formatBytes(Math.pow(1024, 4))).toBe('1 Тб');

    expect(formatBytes(1e15)).toBe('909.49 Тб');
    expect(formatBytes(1e15, 0)).toBe('909 Тб');
    expect(formatBytes(Math.pow(1024, 5))).toBe('1 Пб');

    expect(formatBytes(1e18)).toBe('888.18 Пб');
    expect(formatBytes(1e18, 0)).toBe('888 Пб');
    expect(formatBytes(Math.pow(1024, 6))).toBe('1 Эб');

    expect(formatBytes(1e21)).toBe('867.36 Эб');
    expect(formatBytes(1e21, 0)).toBe('867 Эб');
    expect(formatBytes(Math.pow(1024, 7))).toBe('1 Зб');

    expect(formatBytes(1e24)).toBe('847.03 Зб');
    expect(formatBytes(1e24, 0)).toBe('847 Зб');
    expect(formatBytes(Math.pow(1024, 8))).toBe('1 Йб');
});
