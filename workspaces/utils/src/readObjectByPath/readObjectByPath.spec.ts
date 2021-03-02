import readObjectByPath from './readObjectByPath';

const testObj = {
    key1: 'string',
    key2: {
        subkey1: 'string',
        subkey2: {
            subsubkey1: 'string',
            subsubkey2: 42,
        },
    },
};

describe('readObjectByPath', () => {
    test('read root key', () => {
        expect(readObjectByPath(testObj, 'key1')).toBe('string');
    });

    test('read nested paths', () => {
        expect(readObjectByPath(testObj, 'key2.subkey1')).toBe('string');
        expect(readObjectByPath(testObj, 'key2.subkey2.subsubkey2')).toBe(42);
    });

    test('non-existing path', () => {
        expect(() => readObjectByPath(testObj, 'key2.InvalidPath')).not.toThrow();
        expect(readObjectByPath(testObj, 'key2.InvalidPath')).toBeNull();
    });

    test('object own properties', () => {
        expect(readObjectByPath(testObj, 'constructor')).toBeNull();
        expect(readObjectByPath(testObj, 'toString')).toBeNull();
    });

    test('empty path', () => {
        expect(readObjectByPath(testObj, '')).toBeNull();
    });
});
