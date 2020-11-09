module.exports = {
    root: true,
    extends: [
        'vienna.config-eslint',
        'vienna.config-eslint/rules/prettier',
        'vienna.config-eslint/rules/react',
        'vienna.config-eslint/rules/react-hooks',
        'vienna.config-eslint/rules/jest',
    ].map(require.resolve),
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [
                'vienna.config-eslint',
                'vienna.config-eslint/rules/prettier-typescript',
                'vienna.config-eslint/rules/react',
                'vienna.config-eslint/rules/react-hooks',
                'vienna.config-eslint/rules/typescript',
                'vienna.config-eslint/rules/jest',
            ].map(require.resolve),
            parserOptions: {
                project: './tsconfig.json',
            },
            rules: {
                '@typescript-eslint/no-explicit-any': 0,
            },
        },
    ],
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    settings: {
        react: {
            version: 'latest',
        },
    },
};
