module.exports = {
    env: {
        node: true,
    },

    rules: {
        // Enforce return after a callback
        // https://eslint.org/docs/rules/callback-return
        'callback-return': 'off',

        // Require all requires be top-level
        // https://eslint.org/docs/rules/global-require
        'global-require': 'error',

        // Enforces error handling in callbacks (node environment)
        // https://eslint.org/docs/rules/handle-callback-err
        'handle-callback-err': 'off',

        // Disallow use of the Buffer() constructor
        // https://eslint.org/docs/rules/no-buffer-constructor
        'no-buffer-constructor': 'error',

        // Disallow mixing regular variable and require declarations
        // https://eslint.org/docs/rules/no-mixed-requires
        'no-mixed-requires': ['off', false],

        // Disallow use of new operator with the require function
        // https://eslint.org/docs/rules/no-new-require
        'no-new-require': 'error',

        // Disallow string concatenation with __dirname and __filename
        // https://eslint.org/docs/rules/no-path-concat
        'no-path-concat': 'warn',

        // Disallow use of process.env
        // https://eslint.org/docs/rules/no-process-env
        'no-process-env': 'off',

        // Disallow process.exit()
        // https://eslint.org/docs/rules/no-process-exit
        'no-process-exit': 'off',

        // Restrict usage of specified node modules
        // https://eslint.org/docs/rules/no-restricted-modules
        'no-restricted-modules': 'off',

        // Disallow use of synchronous methods (off by default)
        // https://eslint.org/docs/rules/no-sync
        'no-sync': 'off',
    },
};
