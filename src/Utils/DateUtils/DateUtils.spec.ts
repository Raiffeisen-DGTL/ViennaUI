import { isValid, getDateFromString, getStringFromDate } from './DateUtils';

test('isValid()', () => {
    expect(isValid(new Date('01/01/2020'))).toBe(true);
    expect(isValid(new Date('01/01/2020 10:00'))).toBe(true);
    expect(isValid(new Date('01/01/1000'))).toBe(false);
    expect(isValid(new Date('01/01/2020 111:00'))).toBe(false);
    expect(isValid(new Date(''))).toBe(false);
});

test('getDateFromString()', () => {
    expect(getDateFromString('01.01.2020')).toEqual(new Date('01/01/2020'));
    expect(getDateFromString('01.01.2020 10:00')).toBeUndefined();
    expect(getDateFromString('01/01/2020')).toBeUndefined();
    expect(getDateFromString('')).toBeUndefined();
    expect(getDateFromString('01/01/1000')).toBeUndefined();
});

test('getStringFromDate', () => {
    expect(getStringFromDate(new Date('01/21/2020'))).toBe('21.01.2020');
    expect(getStringFromDate(new Date('01/21/2020 10:00'))).toBe('21.01.2020');
});
