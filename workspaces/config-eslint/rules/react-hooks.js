module.exports = {
    plugins: ['react-hooks'],

    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    rules: {
        // Enforce Rules of Hooks
        'react-hooks/rules-of-hooks': 2,

        // Verify the list of the dependencies for Hooks like useEffect and similar
        'react-hooks/exhaustive-deps': 1,
    },
};
