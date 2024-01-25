import { formatDate } from './formatDate';

test.skip('formatDate()', () => {
    expect(formatDate(new Date('01/21/2020'))).toBe('20.01.2020,  21:00:00');
    expect(formatDate(new Date('01/21/2020 10:00'))).toBe('21.01.2020,  07:00:00');
    expect(formatDate('01/21/2020')).toBe('01/21/2020, undefined');
    expect(formatDate('01/21/2020 10:00')).toBe('01/21/2020 10:00, undefined');
    expect(formatDate('2020-01-21T07:00:00.000Z')).toBe('21.01.2020,  07:00:00');
});
