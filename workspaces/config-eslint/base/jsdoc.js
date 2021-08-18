module.exports = {
    plugins: ['jsdoc'],

    rules: {
        // Reports invalid alignment of JSDoc block asterisks
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-alignment
        'jsdoc/check-alignment': 'warn',

        // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples
        'jsdoc/check-examples': 'warn',

        // Reports invalid padding inside JSDoc blocks
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation
        'jsdoc/check-indentation': 'warn',

        // Ensures that parameter names in JSDoc match those in the function declaration
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-param-names
        'jsdoc/check-param-names': 'warn',

        // Reports against Google Closure Compiler syntax
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-syntax
        'jsdoc/check-syntax': 'warn',

        // Reports invalid block tag names
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names
        'jsdoc/check-tag-names': 'warn',

        // Reports invalid types
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types
        'jsdoc/check-types': 'warn',

        // This rule checks the values for a handful of tags
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values
        'jsdoc/check-values': 'warn',

        // Reports an issue with any non-constructor function using @implements
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-implements-on-classes
        'jsdoc/implements-on-classes': 'warn',

        // Enforces a regular expression pattern on descriptions
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description
        'jsdoc/match-description': 'warn',

        // Enforces a consistent padding of the block description
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-newline-after-description
        'jsdoc/newline-after-description': 'warn',

        // This rule reports types being used on @param or @returns
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types
        'jsdoc/no-types': 'warn',

        // Checks that types in jsdoc comments are defined
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types
        'jsdoc/no-undefined-types': 'warn',

        // Requires that all functions have a description
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description
        'jsdoc/require-description': 'warn',

        // Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence
        'jsdoc/require-description-complete-sentence': 'warn',

        // Requires that all functions have examples
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example
        'jsdoc/require-example': 'warn',

        // Checks files have a @file, @fileoverview, or @overview tag
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-file-overview
        'jsdoc/require-file-overview': 'warn',

        // Requires a hyphen before the @param description
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description
        'jsdoc/require-hyphen-before-param-description': 'warn',

        // Checks for presence of jsdoc comments, on class declarations as well as functions
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc
        'jsdoc/require-jsdoc': 'warn',

        // Requires that all function parameters are documented
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param
        'jsdoc/require-param': 'warn',

        // Requires that each @param tag has a description value
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description
        'jsdoc/require-param-description': 'warn',

        // Requires that each @param tag has a type value
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type
        'jsdoc/require-param-type': 'warn',

        // Requires that all function parameters have names
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-name
        'jsdoc/require-param-name': 'warn',

        // Requires returns are documented
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns
        'jsdoc/require-returns': 'warn',

        // Requires a return statement in function body if a @returns tag is specified in jsdoc comment
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-check
        'jsdoc/require-returns-check': 'warn',

        // Requires that the @returns tag has a description value
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description
        'jsdoc/require-returns-description': 'warn',

        // Requires that @returns tag has type value
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-type
        'jsdoc/require-returns-type': 'warn',

        // Requires all types to be valid JSDoc or Closure compiler types without syntax errors
        // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types
        'jsdoc/valid-types': 'warn',
    },
};
