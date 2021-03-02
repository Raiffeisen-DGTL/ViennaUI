module.exports = {
    plugins: ['prettier'],
    extends: ['prettier', 'prettier/@typescript-eslint', 'prettier/react'],
    rules: {
        'prettier/prettier': 'error',
        'implicit-arrow-linebreak': 0,
    },
};
