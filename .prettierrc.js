module.exports = {
    printWidth: 120,
    proseWrap: 'never',
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    bracketSpacing: true,
    jsxBracketSameLine: true,
    arrowParens: 'always',
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            options: {
                parser: 'babel',
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            options: {
                parser: 'typescript',
            },
        },
        {
            files: ['*.json', '.*rc'],
            options: {
                parser: 'json',
                tabWidth: 2,
            },
        },
        {
            files: ['*.yaml', '*.yml'],
            options: {
                parser: 'yaml',
                tabWidth: 2,
            },
        },
        {
            files: ['*.mdx', '*.md'],
            options: {
                parser: 'mdx',
            },
        },
    ],
};
