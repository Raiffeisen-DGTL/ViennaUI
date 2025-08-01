module.exports = {
    root: true,
    extends: ['eslint:recommended', 'react-app', 'plugin:prettier/recommended'],
    rules: {
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'typescript-styled-plugin': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'jsx-a11y/role-supports-aria-props': 'off',
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    object: false,
                    '{}': {
                        message: 'Use object instead',
                        fixWith: 'object',
                    },
                    Object: {
                        message: 'Use object instead',
                        fixWith: 'object',
                    },
                },
            },
        ],
        'consistent-return': 'off',

        eqeqeq: 'error',
        'no-console': 'error',
        'no-return-assign': 'error',
        'no-unneeded-ternary': 'warn',
        'no-useless-computed-key': 'warn',
        'no-useless-concat': 'error',
        'no-useless-return': 'warn',
        'prefer-const': 'error',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'off',
    },
    overrides: [
        {
            files: ['src/Utils/**/*.ts', 'src/Utils/**/*.tsx'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'warn',
            },
        },
        {
            files: ['**/*.spec.tsx', '**/*.spec.ts'],
            rules: {
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/ban-types': 'off',
            },
        },
    ],
};
