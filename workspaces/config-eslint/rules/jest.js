module.exports = {
    plugins: ['jest'],
    env: {
        jest: true,
    },
    globals: {
        snapshot: true,
    },
    rules: {
        'jest/no-disabled-tests': 1,
        'jest/no-focused-tests': 2,
        'jest/no-identical-title': 2,
        'jest/no-large-snapshots': [1, { maxSize: 20 }],
        'jest/prefer-to-have-length': 2,
        'jest/prefer-to-be-null': 2,
        'jest/prefer-to-be-undefined': 1,
        'jest/prefer-expect-assertions': 0,
        'jest/valid-expect': 2,
    },
};
