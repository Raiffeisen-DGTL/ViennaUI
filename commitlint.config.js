const fs = require('fs');

const components = fs
    .readdirSync(`./src/`, { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((d) => d.name);

module.exports = {
    extends: ['@commitlint/config-conventional'].map(require.resolve),
    rules: {
        'subject-case': [2, 'always', 'lower-case'],
        'body-empty': [2, 'never'],
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'build', 'release']],
        'scope-enum': async () => [2, 'always', ['ui', ...components]],
        'scope-case': [0],
        // 'references-empty': [2, 'never'],
    },
    parserPreset: {
        parserOpts: {
            referenceActions: [],
            issuePrefixes: ['#'],
        },
    },
};
