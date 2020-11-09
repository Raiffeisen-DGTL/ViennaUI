const { getImports } = require('./files');

describe('imports', () => {
    test('get imports', () => {
        const src = {
            body: {
                imports: ['/'],
                button: {
                    values: [{ prop: 'border-radius', value: '$border.radius.s' }],
                },
            },
        };

        const token = {
            path: '/',
            body: {
                space: 'border',
                radius: {
                    s: {
                        value: '4px',
                    },
                },
            },
        };

        const result = getImports(src, 0, [src], [token]);
        expect(result.body.button.values[0].value).toBe('4px');
    });
});
