module.exports = {
    extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'].map(require.resolve),
    rules: {
        'subject-case': [2, 'always', 'sentence-case'],
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'revert', 'build', 'release']],
        'references-empty': [2, 'never'],
    },
};
