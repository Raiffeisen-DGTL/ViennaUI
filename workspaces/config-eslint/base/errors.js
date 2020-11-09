module.exports = {
    rules: {
        // Enforce “for” loop update clause moving the counter in the right direction
        // https://eslint.org/docs/rules/for-direction
        'for-direction': 'error',

        // Enforces that a return statement is present in property getters
        // https://eslint.org/docs/rules/getter-return
        'getter-return': ['error', { allowImplicit: true }],

        // Disallow using an async function as a Promise executor
        // https://eslint.org/docs/rules/no-async-promise-executor
        'no-async-promise-executor': 'error',

        // Disallow await inside of loops
        // https://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 'warn',

        // Disallow comparisons to negative zero
        // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'error',

        // Disallow assignment in conditional expressions
        // https://eslint.org/docs/rules/no-cond-assign
        'no-cond-assign': ['error', 'always'],

        // Disallow use of console
        // https://eslint.org/docs/rules/no-console
        'no-console': 'error',

        // Disallow use of constant expressions in conditions
        // https://eslint.org/docs/rules/no-constant-condition
        'no-constant-condition': 'error',

        // Disallow control characters in regular expressions
        // https://eslint.org/docs/rules/no-control-regex
        'no-control-regex': 'error',

        // Disallow use of debugger
        // https://eslint.org/docs/rules/no-debugger
        'no-debugger': 'error',

        // Disallow duplicate arguments in functions
        // https://eslint.org/docs/rules/no-dupe-args
        'no-dupe-args': 'error',

        // Disallow duplicate conditions in if-else-if chains
        // https://eslint.org/docs/rules/no-dupe-else-if
        'no-dupe-else-if': 'error',

        // Disallow duplicate keys when creating object literals
        // https://eslint.org/docs/rules/no-dupe-keys
        'no-dupe-keys': 'error',

        // Disallow a duplicate case label
        // https://eslint.org/docs/rules/no-duplicate-case
        'no-duplicate-case': 'error',

        // Disallow empty statements
        // https://eslint.org/docs/rules/no-empty
        'no-empty': ['error', { allowEmptyCatch: true }],

        // Disallow the use of empty character classes in regular expressions
        // https://eslint.org/docs/rules/no-empty-character-class
        'no-empty-character-class': 'error',

        // Disallow assigning to the exception in a catch block
        // https://eslint.org/docs/rules/no-ex-assign
        'no-ex-assign': 'error',

        // Disallow double-negation boolean casts in a boolean context
        // https://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 'error',

        // Disallow unnecessary parentheses
        // https://eslint.org/docs/rules/no-extra-parens
        'no-extra-parens': [
            'off',
            'all',
            {
                conditionalAssign: true,
                nestedBinaryExpressions: false,
                returnAssign: false,
                ignoreJSX: 'all', // delegate to eslint-plugin-react
                enforceForArrowConditionals: false,
            },
        ],

        // Disallow unnecessary semicolons
        // https://eslint.org/docs/rules/no-extra-semi
        'no-extra-semi': 'error',

        // Disallow overwriting functions written as function declarations
        // https://eslint.org/docs/rules/no-func-assign
        'no-func-assign': 'error',

        // Disallow assigning to imported bindings
        // https://eslint.org/docs/rules/no-import-assign
        'no-import-assign': 'error',

        // Disallow function or variable declarations in nested blocks
        // https://eslint.org/docs/rules/no-inner-declarations
        'no-inner-declarations': ['error', 'functions'],

        // Disallow invalid regular expression strings in the RegExp constructor
        // https://eslint.org/docs/rules/no-invalid-regexp
        'no-invalid-regexp': 'error',

        // Disallow irregular whitespace outside of strings and comments
        // https://eslint.org/docs/rules/no-irregular-whitespace
        'no-irregular-whitespace': 'error',

        // Disallow characters which are made with multiple code points in character class syntax
        // https://eslint.org/docs/rules/no-misleading-character-class
        'no-misleading-character-class': 'error',

        // Disallow the use of object properties of the global object (Math and JSON) as functions
        // https://eslint.org/docs/rules/no-obj-calls
        'no-obj-calls': 'error',

        // Disallow use of Object.prototypes builtins directly
        // https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'warn',

        // Disallow multiple spaces in a regular expression literal
        // https://eslint.org/docs/rules/no-regex-spaces
        'no-regex-spaces': 'error',

        // Disallow returning values from setters
        // https://eslint.org/docs/rules/no-setter-return
        'no-setter-return': 'error',

        // Disallow sparse arrays
        // https://eslint.org/docs/rules/no-sparse-arrays
        'no-sparse-arrays': 'error',

        // Disallow template literal placeholder syntax in regular strings
        // https://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 'error',

        // Avoid code that looks like two expressions but is actually one
        // https://eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error',

        // Disallow unreachable statements after a return, throw, continue, or break statement
        // https://eslint.org/docs/rules/no-unreachable
        'no-unreachable': 'error',

        // Disallow return/throw/break/continue inside finally blocks
        // https://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-finally': 'warn',

        // Disallow negating the left operand of relational operators
        // https://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-negation': 'error',

        // Disallow assignments that can lead to race conditions due to usage of await or yield
        // https://eslint.org/docs/rules/require-atomic-updates
        'require-atomic-updates': 'error',

        // Disallow comparisons with the value NaN
        // https://eslint.org/docs/rules/use-isnan
        'use-isnan': 'error',

        // Enforce valid JSDoc comments
        // https://eslint.org/docs/rules/valid-jsdoc
        // @deprecated
        'valid-jsdoc': [
            'error',
            {
                preferType: {
                    object: 'Object',
                    function: 'Function',
                    array: 'Array',
                    Number: 'number',
                    String: 'string',
                    Boolean: 'boolean',
                    Null: 'null',
                    Symbol: 'symbol',
                    Undefined: 'undefined',
                },
                matchDescription: '.+',
                requireReturn: false,
                requireParamDescription: false,
                requireReturnDescription: false,
            },
        ],

        // Ensure that the results of typeof are compared against a valid string
        // https://eslint.org/docs/rules/valid-typeof
        'valid-typeof': ['error', { requireStringLiterals: true }],
    },
};
