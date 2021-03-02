module.exports = {
    env: {
        es6: true,
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false,
        },
    },

    rules: {
        // Require or disallow strict mode directives
        // https://eslint.org/docs/rules/strict
        strict: 0,

        // Enforces no braces where they can be omitted
        // https://eslint.org/docs/rules/arrow-body-style
        // TODO: enable requireReturnForObjectLiteral?
        'arrow-body-style': [
            'off',
            'as-needed',
            {
                requireReturnForObjectLiteral: false,
            },
        ],

        // Require parens in arrow function arguments
        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': ['error', 'always'],

        // Require space before/after arrow function's arrow
        // https://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': ['error', { before: true, after: true }],

        // Verify super() callings in constructors
        // https://eslint.org/docs/rules/constructor-super
        'constructor-super': 'error',

        // Enforce the spacing around the * in generator functions
        // https://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': ['error', { before: false, after: true }],

        // Disallow modifying variables of class declarations
        // https://eslint.org/docs/rules/no-class-assign
        'no-class-assign': 'error',

        // Disallow arrow functions where they could be confused with comparisons
        // https://eslint.org/docs/rules/no-confusing-arrow
        'no-confusing-arrow': [
            'off',
            {
                allowParens: true,
            },
        ],

        // Disallow modifying variables that are declared using const
        // https://eslint.org/docs/rules/no-const-assign
        'no-const-assign': 'error',

        // Disallow duplicate class members
        // https://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'error',

        // Disallow importing from the same path more than once
        // https://eslint.org/docs/rules/no-duplicate-imports
        // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
        'no-duplicate-imports': 'off',

        // Disallow symbol constructor
        // https://eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 'error',

        // Disallow specific imports
        // https://eslint.org/docs/rules/no-restricted-imports
        'no-restricted-imports': [
            'off',
            {
                paths: [],
                patterns: [],
            },
        ],

        // Disallow to use this/super before super() calling in constructors.
        // https://eslint.org/docs/rules/no-this-before-super
        'no-this-before-super': 'error',

        // Disallow useless computed property keys
        // https://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 'off',

        // Disallow unnecessary constructor
        // https://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 'off',

        // Disallow renaming import, export, and destructured assignments to the same name
        // https://eslint.org/docs/rules/no-useless-rename
        'no-useless-rename': [
            'error',
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false,
            },
        ],

        // Require let or const instead of var
        // https://eslint.org/docs/rules/no-var
        'no-var': 'error',

        // Require method and property shorthand syntax for object literals
        // https://eslint.org/docs/rules/object-shorthand
        'object-shorthand': [
            'off',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],

        // Suggest using arrow functions as callbacks
        // https://eslint.org/docs/rules/prefer-arrow-callback
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],

        // Suggest using of const declaration for variables that are never modified after declared
        // https://eslint.org/docs/rules/prefer-const
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],

        // Prefer destructuring from arrays and objects
        // https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': [
            'off',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: true,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],

        // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
        // https://eslint.org/docs/rules/prefer-numeric-literals
        'prefer-numeric-literals': 'off',

        // Suggest using Reflect methods where applicable
        // https://eslint.org/docs/rules/prefer-reflect
        'prefer-reflect': 'off',

        // Use rest parameters instead of arguments
        // https://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 'error',

        // Suggest using the spread operator instead of .apply()
        // https://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 'error',

        // Suggest using template literals instead of string concatenation
        // https://eslint.org/docs/rules/prefer-template
        'prefer-template': 'error',

        // Disallow generator functions that do not have yield
        // https://eslint.org/docs/rules/require-yield
        'require-yield': 'error',

        // Enforce spacing between object rest-spread
        // https://eslint.org/docs/rules/rest-spread-spacing
        'rest-spread-spacing': ['error', 'never'],

        // Import sorting
        // https://eslint.org/docs/rules/sort-imports
        'sort-imports': [
            'off',
            {
                ignoreCase: false,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],

        // Require a Symbol description
        // https://eslint.org/docs/rules/symbol-description
        'symbol-description': 'warn',

        // Enforce usage of spacing in template strings
        // https://eslint.org/docs/rules/template-curly-spacing
        'template-curly-spacing': 'error',

        // Enforce spacing around the * in yield* expressions
        // https://eslint.org/docs/rules/yield-star-spacing
        'yield-star-spacing': ['error', 'after'],
    },
};
