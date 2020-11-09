import autocapitalize from './autocapitalize';

describe('autocapitalize', () => {
    test('autocapitalize without rule', () => {
        expect(autocapitalize('hellow world')).toBe('hellow world');
    });

    test('autocapitalize - off, none', () => {
        expect(autocapitalize('hello world', 'off')).toBe('hello world');
        expect(autocapitalize('hello world', 'none')).toBe('hello world');
    });

    test('autocapitalize - on, sentences', () => {
        const rawString = 'hello world. who are you? i am jesus!';
        const expectedString = 'Hello world. Who are you? I am jesus!';
        expect(autocapitalize(rawString, 'on')).toBe(expectedString);
        expect(autocapitalize(rawString, 'sentences')).toBe(expectedString);
    });

    test('autocapitalize - on, sentences w/o symbols', () => {
        const rawString = 'hello world who are you i am jesus';
        const expectedString = 'Hello world who are you i am jesus';
        expect(autocapitalize(rawString, 'on')).toBe(expectedString);
        expect(autocapitalize(rawString, 'sentences')).toBe(expectedString);
    });

    test('autocapitalize - words', () => {
        const rawString = 'hello world. who are you? i am jesus! you - homeless';
        const expectedString = 'Hello World. Who Are You? I Am Jesus! You - Homeless';
        expect(autocapitalize(rawString, 'words')).toBe(expectedString);
    });

    test('autocapitalize - characters', () => {
        expect(autocapitalize('hello world', 'characters')).toBe('HELLO WORLD');
    });

    test('autocapitalize - original value', () => {
        const rule: any = 'xxx';
        expect(autocapitalize('hello world', rule)).toBe('hello world');
    });
});
