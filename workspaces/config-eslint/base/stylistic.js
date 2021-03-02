module.exports = {
    rules: {
        // Enforce line breaks after opening and before closing array brackets
        // https://eslint.org/docs/rules/array-bracket-newline
        // TODO: enable? semver-major
        'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

        // Enforce spacing inside array brackets
        // https://eslint.org/docs/rules/array-bracket-spacing
        'array-bracket-spacing': ['error', 'never'],

        // Enforce line breaks between array elements
        // https://eslint.org/docs/rules/array-element-newline
        // TODO: enable? semver-major
        'array-element-newline': ['off', { multiline: true, minItems: 3 }],

        // Enforce spacing inside single-line blocks
        // https://eslint.org/docs/rules/block-spacing
        'block-spacing': ['error', 'always'],

        // Enforce one true brace style
        // https://eslint.org/docs/rules/brace-style
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],

        // Require camel case names
        // https://eslint.org/docs/rules/camelcase
        camelcase: ['error'],

        // Enforce or disallow capitalization of the first letter of a comment
        // https://eslint.org/docs/rules/capitalized-comments
        'capitalized-comments': [
            'off',
            'never',
            {
                line: {
                    ignorePattern: '.*',
                    ignoreInlineComments: true,
                    ignoreConsecutiveComments: true,
                },
                block: {
                    ignorePattern: '.*',
                    ignoreInlineComments: true,
                    ignoreConsecutiveComments: true,
                },
            },
        ],

        // Require trailing commas in multiline object literals
        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
            },
        ],

        // Enforce spacing before and after comma
        // https://eslint.org/docs/rules/comma-spacing
        'comma-spacing': ['error', { before: false, after: true }],

        // Enforce one true comma style
        // https://eslint.org/docs/rules/comma-style
        'comma-style': [
            'error',
            'last',
            {
                exceptions: {
                    ArrayExpression: false,
                    ArrayPattern: false,
                    ArrowFunctionExpression: false,
                    CallExpression: false,
                    FunctionDeclaration: false,
                    FunctionExpression: false,
                    ImportDeclaration: false,
                    ObjectExpression: false,
                    ObjectPattern: false,
                    VariableDeclaration: false,
                    NewExpression: false,
                },
            },
        ],

        // Disallow padding inside computed properties
        // https://eslint.org/docs/rules/computed-property-spacing
        'computed-property-spacing': ['off', 'never'],

        // Enforces consistent naming when capturing the current execution context
        // https://eslint.org/docs/rules/consistent-this
        'consistent-this': 'off',

        // Enforce newline at the end of file, with no multiple empty lines
        // https://eslint.org/docs/rules/eol-last
        'eol-last': ['error', 'always'],

        // Enforce spacing between functions and their invocations
        // https://eslint.org/docs/rules/func-call-spacing
        'func-call-spacing': ['error', 'never'],

        // Requires function names to match the name of the variable or property to which they are assigned
        // https://eslint.org/docs/rules/func-name-matching
        'func-name-matching': [
            'error',
            'always',
            {
                includeCommonJSModuleExports: false,
                considerPropertyDescriptor: true,
            },
        ],

        // Require function expressions to have a name
        // https://eslint.org/docs/rules/func-names
        'func-names': 'warn',

        // Enforces use of function declarations or expressions
        // https://eslint.org/docs/rules/func-style
        // TODO: enable
        'func-style': ['off', 'expression'],

        // Enforce line breaks between arguments of a function call
        // https://eslint.org/docs/rules/function-call-argument-newline
        'function-call-argument-newline': ['off', 'consistent'],

        // Enforce consistent line breaks inside function parentheses
        // https://eslint.org/docs/rules/function-paren-newline
        'function-paren-newline': ['error', 'consistent'],

        // Blacklist certain identifiers to prevent them being used
        // https://eslint.org/docs/rules/id-blacklist
        'id-blacklist': 'off',

        // Enforces minimum and maximum identifier lengths (variable names, property names, etc.)
        // https://eslint.org/docs/rules/id-length
        'id-length': 'off',

        // Require identifiers to match the provided regular expression
        // https://eslint.org/docs/rules/id-match
        'id-match': 'off',

        // Enforce the location of arrow function bodies with implicit returns
        // https://eslint.org/docs/rules/implicit-arrow-linebreak
        'implicit-arrow-linebreak': ['warn', 'below'],

        // Enforce consistent indentation
        // https://eslint.org/docs/rules/indent
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                // MemberExpression: null,
                FunctionDeclaration: {
                    parameters: 1,
                    body: 1,
                },
                FunctionExpression: {
                    parameters: 1,
                    body: 1,
                },
                CallExpression: {
                    arguments: 1,
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                ImportDeclaration: 1,
                flatTernaryExpressions: false,
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXFragment',
                    'JSXOpeningFragment',
                    'JSXClosingFragment',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild',
                ],
                ignoreComments: false,
            },
        ],

        // Specify whether double or single quotes should be used in JSX attributes
        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': ['off', 'prefer-single'],

        // Enforces spacing between keys and values in object literal properties
        // https://eslint.org/docs/rules/key-spacing
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],

        // Require a space before & after certain keywords
        // https://eslint.org/docs/rules/keyword-spacing
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
                overrides: {
                    return: { after: true },
                    throw: { after: true },
                    case: { after: true },
                },
            },
        ],

        // Enforce position of line comments
        // https://eslint.org/docs/rules/line-comment-position
        'line-comment-position': [
            'off',
            {
                position: 'above',
                ignorePattern: '',
                applyDefaultPatterns: true,
            },
        ],

        // Enforce consistent linebreak style
        // https://eslint.org/docs/rules/linebreak-style
        'linebreak-style': ['error', 'unix'],

        // Enforces empty lines around comments
        // https://eslint.org/docs/rules/lines-around-comment
        'lines-around-comment': 'off',

        // Require or disallow an empty line between class members
        // https://eslint.org/docs/rules/lines-between-class-members
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

        // Specify the maximum depth that blocks can be nested
        // https://eslint.org/docs/rules/max-depth
        'max-depth': ['off', 4],

        // Specify the maximum length of a line in your program
        // https://eslint.org/docs/rules/max-len
        'max-len': [
            'off',
            100,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],

        // Specify the max number of lines in a file
        // https://eslint.org/docs/rules/max-lines
        'max-lines': [
            'off',
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true,
            },
        ],

        // Enforce a maximum function length
        // https://eslint.org/docs/rules/max-lines-per-function
        'max-lines-per-function': [
            'off',
            {
                max: 50,
                skipBlankLines: true,
                skipComments: true,
                IIFEs: true,
            },
        ],

        // Specify the maximum depth callbacks can be nested
        // https://eslint.org/docs/rules/max-nested-callbacks
        'max-nested-callbacks': 'off',

        // Limits the number of parameters that can be used in the function declaration
        // https://eslint.org/docs/rules/max-params
        'max-params': ['off', 3],

        // Specify the maximum number of statement allowed in a function
        // https://eslint.org/docs/rules/max-statements
        'max-statements': ['off', 10],

        // Restrict the number of statements per line
        // https://eslint.org/docs/rules/max-statements-per-line
        'max-statements-per-line': ['off', { max: 1 }],

        // Rnforce a particular style for multiline comments
        // https://eslint.org/docs/rules/multiline-comment-style
        'multiline-comment-style': ['off', 'starred-block'],

        // require multiline ternary
        // https://eslint.org/docs/rules/multiline-ternary
        'multiline-ternary': ['off', 'never'],

        // Require a capital letter for constructors
        // https://eslint.org/docs/rules/new-cap
        'new-cap': [
            'error',
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
            },
        ],

        // Disallow the omission of parentheses when invoking a constructor with no arguments
        // https://eslint.org/docs/rules/new-parens
        'new-parens': 'off',

        // Enforces new line after each method call in the chain to make it
        // more readable and easy to maintain
        // https://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': ['off', { ignoreChainWithDepth: 4 }],

        // Disallow use of the Array constructor
        // https://eslint.org/docs/rules/no-array-constructor
        'no-array-constructor': 'error',

        // Disallow use of bitwise operators
        // https://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 'error',

        // Disallow use of the continue statement
        // https://eslint.org/docs/rules/no-continue
        'no-continue': 'off',

        // Disallow comments inline after code
        // https://eslint.org/docs/rules/no-inline-comments
        'no-inline-comments': 'off',

        // Disallow if as the only statement in an else block
        // https://eslint.org/docs/rules/no-lonely-if
        'no-lonely-if': 'error',

        // Disallow un-paren'd mixes of different operators
        // https://eslint.org/docs/rules/no-mixed-operators
        'no-mixed-operators': [
            'off',
            {
                // the list of arthmetic groups disallows mixing `%` and `**`
                // with other arithmetic operators.
                groups: [
                    ['%', '**'],
                    ['%', '+'],
                    ['%', '-'],
                    ['%', '*'],
                    ['%', '/'],
                    ['/', '*'],
                    ['&', '|', '<<', '>>', '>>>'],
                    ['==', '!=', '===', '!=='],
                    ['&&', '||'],
                ],
                allowSamePrecedence: false,
            },
        ],

        // Disallow mixed spaces and tabs for indentation
        // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
        'no-mixed-spaces-and-tabs': 'error',

        // Disallow use of chained assignment expressions
        // https://eslint.org/docs/rules/no-multi-assign
        'no-multi-assign': 'off',

        // Disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
        // https://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

        // Disallow negated conditions
        // https://eslint.org/docs/rules/no-negated-condition
        'no-negated-condition': 'off',

        // Disallow nested ternary expressions
        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 'off',

        // Disallow use of the Object constructor
        // https://eslint.org/docs/rules/no-new-object
        'no-new-object': 'error',

        // Disallow use of unary operators, ++ and --
        // https://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'off',

        // Disallow certain syntax forms
        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [
            'off',
            {
                selector: 'ForInStatement',
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'ForOfStatement',
                message:
                    'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            },
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],

        // Disallow tab characters entirely
        // https://eslint.org/docs/rules/no-tabs
        'no-tabs': 'error',

        // Disallow the use of ternary operators
        // https://eslint.org/docs/rules/no-ternary
        'no-ternary': 'off',

        // Disallow trailing whitespace at the end of lines
        // https://eslint.org/docs/rules/no-trailing-spaces
        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: false,
                ignoreComments: false,
            },
        ],

        // Disallow dangling underscores in identifiers
        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': [
            'error',
            {
                allow: [],
                allowAfterThis: false,
                allowAfterSuper: false,
                enforceInMethodNames: true,
            },
        ],

        // Disallow the use of Boolean literals in conditional expressions also, prefer `a || b` over `a ? a : b`
        // https://eslint.org/docs/rules/no-unneeded-ternary
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],

        // Disallow whitespace before properties
        // https://eslint.org/docs/rules/no-whitespace-before-property
        'no-whitespace-before-property': 'error',

        // Enforce the location of single-line statements
        // https://eslint.org/docs/rules/nonblock-statement-body-position
        'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

        // Enforce line breaks between braces
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': [
            'off',
            {
                ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
                ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
                ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
                ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            },
        ],

        // Require padding inside curly braces
        // https://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': ['error', 'always'],

        // Enforce "same line" or "multiple line" on object properties.
        // https://eslint.org/docs/rules/object-property-newline
        'object-property-newline': [
            'off',
            {
                allowAllPropertiesOnSameLine: true,
            },
        ],

        // Allow just one var statement per function
        // https://eslint.org/docs/rules/one-var
        'one-var': ['error', 'never'],

        // Require a newline around variable declaration
        // https://eslint.org/docs/rules/one-var-declaration-per-line
        'one-var-declaration-per-line': ['error', 'always'],

        // Require assignment operator shorthand where possible or prohibit it entirely
        // https://eslint.org/docs/rules/operator-assignment
        'operator-assignment': ['off', 'always'],

        // Requires operator at the beginning of the line in multiline statements
        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': [
            'error',
            'after',
            { overrides: { '&&': 'ignore', '||': 'ignore', '?': 'ignore', ':': 'ignore' } },
        ],

        // Disallow padding within blocks
        // https://eslint.org/docs/rules/padded-blocks
        'padded-blocks': [
            'error',
            {
                blocks: 'never',
                classes: 'never',
                switches: 'never',
            },
            {
                allowSingleLineBlocks: true,
            },
        ],

        // Require or disallow padding lines between statements
        // https://eslint.org/docs/rules/padding-line-between-statements
        'padding-line-between-statements': [
            1,
            { blankLine: 'always', prev: 'directive', next: '*' },
            { blankLine: 'any', prev: 'directive', next: 'directive' },

            { blankLine: 'always', prev: '*', next: ['switch', 'try'] },

            { blankLine: 'always', prev: ['import', 'cjs-import'], next: '*' },
            { blankLine: 'never', prev: ['import', 'cjs-import'], next: ['import', 'cjs-import'] },

            { blankLine: 'always', prev: ['block', 'block-like', 'multiline-block-like', 'for', 'if'], next: 'return' },
        ],

        // Disallow the use of Math.pow in favor of the ** operator
        // https://eslint.org/docs/rules/prefer-exponentiation-operator
        'prefer-exponentiation-operator': 'off',

        // Prefer use of an object spread over Object.assign
        // https://eslint.org/docs/rules/prefer-object-spread
        'prefer-object-spread': 'off',

        // Require quotes around object literal property names
        // https://eslint.org/docs/rules/quote-props.html
        'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

        // Specify whether double or single quotes should be used
        // https://eslint.org/docs/rules/quotes
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

        // Require or disallow use of semicolons instead of ASI
        // https://eslint.org/docs/rules/semi
        semi: ['error', 'always'],

        // Enforce spacing before and after semicolons
        // https://eslint.org/docs/rules/semi-spacing
        'semi-spacing': ['error', { before: false, after: true }],

        // Enforce location of semicolons
        // https://eslint.org/docs/rules/semi-style
        'semi-style': ['error', 'last'],

        // Requires object keys to be sorted
        // https://eslint.org/docs/rules/sort-keys
        'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

        // Sort variables within the same declaration block
        // https://eslint.org/docs/rules/sort-vars
        'sort-vars': 'off',

        // Require or disallow space before blocks
        // https://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': 'error',

        // Require or disallow space before function opening parenthesis
        // https://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],

        // Require or disallow spaces inside parentheses
        // https://eslint.org/docs/rules/space-in-parens
        'space-in-parens': ['error', 'never'],

        // Require spaces around operators
        // https://eslint.org/docs/rules/space-infix-ops
        'space-infix-ops': 'error',

        // Require or disallow spaces before/after unary operators
        // https://eslint.org/docs/rules/space-unary-ops
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false,
                overrides: {},
            },
        ],

        // Require or disallow a space immediately following the // or /* in a comment
        // https://eslint.org/docs/rules/spaced-comment
        'spaced-comment': [
            'error',
            'always',
            {
                line: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
                },
                block: {
                    exceptions: ['-', '+'],
                    markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
                    balanced: true,
                },
            },
        ],

        // Enforce spacing around colons of switch statements
        // https://eslint.org/docs/rules/switch-colon-spacing
        'switch-colon-spacing': ['error', { after: true, before: false }],

        // Require or disallow spacing between template tags and their literals
        // https://eslint.org/docs/rules/template-tag-spacing
        'template-tag-spacing': ['error', 'never'],

        // Require or disallow the Unicode Byte Order Mark
        // https://eslint.org/docs/rules/unicode-bom
        'unicode-bom': ['off', 'never'],

        // Require regex literals to be wrapped in parentheses
        // https://eslint.org/docs/rules/wrap-regex
        'wrap-regex': 'off',
    },
};
