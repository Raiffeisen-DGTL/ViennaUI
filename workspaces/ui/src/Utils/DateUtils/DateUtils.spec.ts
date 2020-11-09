import { isValid, getDateFromString, getStringFromDate } from './DateUtils';

test('isValid()', () => {
    expect(isValid(new Date('01/01/2020'))).toEqual(true);
    expect(isValid(new Date('01/01/2020 10:00'))).toEqual(true);
    expect(isValid(new Date('01/01/1000'))).toEqual(false);
    expect(isValid(new Date('01/01/2020 111:00'))).toEqual(false);
    expect(isValid(new Date(''))).toEqual(false);
});

test('getDateFromString()', () => {
    expect(getDateFromString('01.01.2020')).toEqual(new Date('01/01/2020'));
    expect(getDateFromString('01.01.2020 10:00')).toBeUndefined();
    expect(getDateFromString('01/01/2020')).toBeUndefined();
    expect(getDateFromString('')).toBeUndefined();
    expect(getDateFromString('01/01/1000')).toBeUndefined();
});

test('getStringFromDate', () => {
    expect(getStringFromDate(new Date('01/21/2020'))).toEqual('21.01.2020');
    expect(getStringFromDate(new Date('01/21/2020 10:00'))).toEqual('21.01.2020');
});
