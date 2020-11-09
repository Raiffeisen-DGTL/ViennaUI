import { formatDate } from './formatDate';

test('formatDate()', () => {
    expect(formatDate(new Date('01/21/2020'))).toEqual('20.01.2020,  21:00:00');
    expect(formatDate(new Date('01/21/2020 10:00'))).toEqual('21.01.2020,  07:00:00');
    expect(formatDate('01/21/2020')).toEqual('01/21/2020, undefined');
    expect(formatDate('01/21/2020 10:00')).toEqual('01/21/2020 10:00, undefined');
    expect(formatDate('2020-01-21T07:00:00.000Z')).toEqual('21.01.2020,  07:00:00');
});
