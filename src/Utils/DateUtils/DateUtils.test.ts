import { getStringFromDate } from './DateUtils';

test('getStringFromDate', () => {
    expect(getStringFromDate(new Date('01/21/2020'))).toBe('21.01.2020');
    expect(getStringFromDate(new Date('01/21/2020 10:00'))).toBe('21.01.2020');
});
