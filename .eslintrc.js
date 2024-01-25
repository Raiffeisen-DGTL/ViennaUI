module.exports = {
    root: true,
    extends: [
        '@fcc/config-eslint',
        '@fcc/config-eslint/rules/react',
        '@fcc/config-eslint/rules/react-hooks',
        '@fcc/config-eslint/rules/jest',
        '@fcc/config-eslint/rules/prettier',
        '@fcc/config-eslint/rules/typescript',
    ].map(require.resolve),
    overrides: [
        {
            parserOptions: {
                project: './tsconfig.json',
            },
            files: ['**/*.ts', '**/*.tsx'],
            rules: {
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/naming-convention': 0,
                'no-undef': 'off',
                '@typescript-eslint/ban-types': 0,
                'prefer-arrow-callback': 0,
                'no-redeclare': 0,
                'react/no-deprecated': 0,
                'no-underscore-dangle': 0,
            },
        },
        {
            files: ['**/Table/**/*.tsx', '**/Stepper/**/*.tsx'],
            rules: {
                'react/no-unused-prop-types': 0,
            },
        },
    ],
};
