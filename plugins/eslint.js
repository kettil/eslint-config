/* eslint-disable id-blacklist */

const defaultObject = require('../lib/defaultObject');

const rules = {
  'accessor-pairs': ['off'],
  'array-bracket-newline': ['off', 'consistent'],
  'array-bracket-spacing': ['error', 'never'],
  'array-callback-return': ['error', { allowImplicit: true }],
  'array-element-newline': ['off', { multiline: true, minItems: 3 }],
  'arrow-body-style': ['error', 'as-needed'],
  'arrow-parens': ['error', 'always'],
  'arrow-spacing': ['error', { before: true, after: true }],
  'block-scoped-var': ['error'],
  'block-spacing': ['error', 'always'],
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],
  camelcase: ['error', { properties: 'never', ignoreDestructuring: false, ignoreImports: false }],
  'capitalized-comments': [
    'off',
    'never',
    {
      line: { ignorePattern: '.*', ignoreInlineComments: true, ignoreConsecutiveComments: true },
      block: { ignorePattern: '.*', ignoreInlineComments: true, ignoreConsecutiveComments: true },
    },
  ],
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'UNSAFE_componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'UNSAFE_componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'UNSAFE_componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'componentDidCatch',
        'getSnapshotBeforeUpdate',
      ],
    },
  ],
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': ['error', { before: false, after: true }],
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
  complexity: ['error', 15],
  'computed-property-spacing': ['error', 'never'],
  'consistent-return': ['error'],
  'consistent-this': ['off'],
  'constructor-super': ['error'],
  curly: ['error'],
  'default-case': ['error', { commentPattern: '^no default$' }],
  'default-param-last': ['off'],
  'dot-location': ['error', 'property'],
  'dot-notation': ['error', { allowKeywords: true, allowPattern: '' }],
  'eol-last': ['error', 'always'],
  eqeqeq: ['error', 'always'],
  'for-direction': ['error'],
  'func-call-spacing': ['error', 'never'],
  'func-name-matching': ['off', 'always', { includeCommonJSModuleExports: false, considerPropertyDescriptor: true }],
  'func-names': ['warn'],
  'func-style': ['off', 'expression'],
  'function-call-argument-newline': ['off', 'consistent'],
  'function-paren-newline': ['off', 'consistent'],
  'generator-star-spacing': ['error', { before: false, after: true }],
  'getter-return': ['error', { allowImplicit: true }],
  'grouped-accessor-pairs': ['off'],
  'guard-for-in': ['error'],
  'id-blacklist': ['error', 'any', 'number', 'string', 'boolean', 'Undefined'],
  'id-length': ['off'],
  'id-match': ['error'],
  'implicit-arrow-linebreak': ['off', 'beside'],
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: { parameters: 1, body: 1 },
      FunctionExpression: { parameters: 1, body: 1 },
      CallExpression: { arguments: 1 },
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
  'init-declarations': ['off'],

  'jsx-quotes': ['error', 'prefer-double'],
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  'keyword-spacing': [
    'error',
    {
      before: true,
      after: true,
      overrides: { return: { after: true }, throw: { after: true }, case: { after: true } },
    },
  ],
  'line-comment-position': ['off', { position: 'above', ignorePattern: '', applyDefaultPatterns: true }],
  'linebreak-style': ['error', 'unix'],
  'lines-around-comment': ['off'],
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
  'max-classes-per-file': ['error', 1],
  'max-depth': ['off', 4],
  'max-len': ['error', { code: 120, ignoreStrings: true }],
  'max-lines': ['off', { max: 300, skipBlankLines: true, skipComments: true }],
  'max-lines-per-function': ['off', { max: 50, skipBlankLines: true, skipComments: true, IIFEs: true }],
  'max-nested-callbacks': ['off'],
  'max-params': ['off', 3],
  'max-statements': ['off', 10],
  'max-statements-per-line': ['off', { max: 1 }],
  'multiline-comment-style': ['off', 'starred-block'],
  'multiline-ternary': ['off', 'never'],
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      properties: true,
    },
  ],
  'new-parens': ['error'],
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
  'no-alert': ['warn'],
  'no-array-constructor': ['error'],
  'no-async-promise-executor': ['error'],
  'no-await-in-loop': ['error'],
  'no-bitwise': ['error'],
  'no-caller': ['error'],
  'no-case-declarations': ['error'],
  'no-class-assign': ['error'],
  'no-compare-neg-zero': ['error'],
  'no-cond-assign': ['error', 'always'],
  'no-confusing-arrow': ['error', { allowParens: true }],
  'no-console': ['error'],
  'no-const-assign': ['error'],
  'no-constant-condition': ['error'],
  'no-constructor-return': ['off'],
  'no-continue': ['error'],
  'no-control-regex': ['error'],
  'no-debugger': ['error'],
  'no-delete-var': ['error'],
  'no-div-regex': ['off'],
  'no-dupe-args': ['error'],
  'no-dupe-class-members': ['error'],
  'no-dupe-else-if': ['error'],
  'no-dupe-keys': ['error'],
  'no-duplicate-case': ['error'],
  'no-duplicate-imports': ['off'],
  'no-else-return': ['error', { allowElseIf: false }],
  'no-empty': ['error'],
  'no-empty-character-class': ['error'],
  'no-empty-function': ['error', { allow: ['arrowFunctions', 'functions', 'methods'] }],
  'no-empty-pattern': ['error'],
  'no-eq-null': ['off'],
  'no-eval': ['error'],
  'no-ex-assign': ['error'],
  'no-extend-native': ['error'],
  'no-extra-bind': ['error'],
  'no-extra-boolean-cast': ['error'],
  'no-extra-label': ['error'],
  'no-extra-parens': [
    'off',
    'all',
    {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all',
      enforceForArrowConditionals: false,
    },
  ],
  'no-extra-semi': ['error'],
  'no-fallthrough': ['off'],
  'no-floating-decimal': ['error'],
  'no-func-assign': ['error'],
  'no-global-assign': ['error', { exceptions: [] }],
  'no-implicit-coercion': ['off', { boolean: false, number: true, string: true, allow: [] }],
  'no-implicit-globals': ['off'],
  'no-implied-eval': ['error'],
  'no-import-assign': ['error'],
  'no-inline-comments': ['off'],
  'no-inner-declarations': ['error'],
  'no-invalid-regexp': ['error'],
  'no-invalid-this': ['off'],
  'no-irregular-whitespace': ['error'],
  'no-iterator': ['error'],
  'no-label-var': ['error'],
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
  'no-lone-blocks': ['error'],
  'no-lonely-if': ['error'],
  'no-loop-func': ['error'],
  'no-magic-numbers': ['off', { ignore: [], ignoreArrayIndexes: true, enforceConst: true, detectObjects: false }],
  'no-misleading-character-class': ['error'],
  'no-mixed-operators': [
    'error',
    {
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
  'no-mixed-spaces-and-tabs': ['error'],
  'no-multi-assign': ['error'],
  'no-multi-spaces': ['error', { ignoreEOLComments: false }],
  'no-multi-str': ['error'],
  'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 0 }],
  'no-negated-condition': ['off'],
  'no-nested-ternary': ['off'],
  'no-new': ['error'],
  'no-new-func': ['error'],
  'no-new-object': ['error'],
  'no-new-symbol': ['error'],
  'no-new-wrappers': ['error'],
  'no-obj-calls': ['error'],
  'no-octal': ['error'],
  'no-octal-escape': ['error'],
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'accumulator',
        'e',
        'ctx',
        'req',
        'request',
        'res',
        'response',
        '$scope',
        'staticContext',
      ],
    },
  ],
  'no-plusplus': ['error'],
  'no-proto': ['error'],
  'no-prototype-builtins': ['error'],
  'no-redeclare': ['error'],
  'no-regex-spaces': ['error'],
  'no-restricted-globals': [
    'error',
    'isFinite',
    'isNaN',
    'addEventListener',
    'blur',
    'close',
    'closed',
    'confirm',
    'defaultStatus',
    'defaultstatus',
    'event',
    'external',
    'find',
    'focus',
    'frameElement',
    'frames',
    'history',
    'innerHeight',
    'innerWidth',
    'length',
    'location',
    'locationbar',
    'menubar',
    'moveBy',
    'moveTo',
    'name',
    'onblur',
    'onerror',
    'onfocus',
    'onload',
    'onresize',
    'onunload',
    'open',
    'opener',
    'opera',
    'outerHeight',
    'outerWidth',
    'pageXOffset',
    'pageYOffset',
    'parent',
    'print',
    'removeEventListener',
    'resizeBy',
    'resizeTo',
    'screen',
    'screenLeft',
    'screenTop',
    'screenX',
    'screenY',
    'scroll',
    'scrollbars',
    'scrollBy',
    'scrollTo',
    'scrollX',
    'scrollY',
    'self',
    'status',
    'statusbar',
    'stop',
    'toolbar',
    'top',
  ],
  'no-restricted-imports': ['off', { paths: [], patterns: [] }],
  'no-restricted-properties': [
    'error',
    { object: 'arguments', property: 'callee', message: 'arguments.callee is deprecated' },
    { object: 'global', property: 'isFinite', message: 'Please use Number.isFinite instead' },
    { object: 'self', property: 'isFinite', message: 'Please use Number.isFinite instead' },
    { object: 'window', property: 'isFinite', message: 'Please use Number.isFinite instead' },
    { object: 'global', property: 'isNaN', message: 'Please use Number.isNaN instead' },
    { object: 'self', property: 'isNaN', message: 'Please use Number.isNaN instead' },
    { object: 'window', property: 'isNaN', message: 'Please use Number.isNaN instead' },
    { property: '__defineGetter__', message: 'Please use Object.defineProperty instead.' },
    { property: '__defineSetter__', message: 'Please use Object.defineProperty instead.' },
    { object: 'Math', property: 'pow', message: 'Use the exponentiation operator (**) instead.' },
  ],
  'no-restricted-syntax': [
    'error',
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
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
    {
      selector: "BinaryExpression[operator='in']",
      message: "Please use the following notation: 'foo in bar;' => 'foo instanceof bar;'",
    },
  ],
  'no-return-assign': ['error', 'always'],
  'no-return-await': ['error'],
  'no-script-url': ['error'],
  'no-self-assign': ['error', { props: true }],
  'no-self-compare': ['error'],
  'no-sequences': ['error'],
  'no-setter-return': ['error'],
  'no-shadow': ['error'],
  'no-shadow-restricted-names': ['error'],
  'no-sparse-arrays': ['error'],
  'no-tabs': ['error'],
  'no-template-curly-in-string': ['error'],
  'no-ternary': ['off'],
  'no-this-before-super': ['error'],
  'no-throw-literal': ['error'],
  'no-trailing-spaces': ['error', { skipBlankLines: false, ignoreComments: false }],
  'no-undef': ['error'],
  'no-undef-init': ['error'],
  'no-undefined': ['off'],
  'no-underscore-dangle': [
    'error',
    {
      allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
      allowAfterThisConstructor: false,
    },
  ],
  'no-unexpected-multiline': ['error'],
  'no-unmodified-loop-condition': ['off'],
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],
  'no-unreachable': ['error'],
  'no-unsafe-finally': ['error'],
  'no-unsafe-negation': ['error'],
  'no-unused-expressions': ['error', { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false }],
  'no-unused-labels': ['error'],
  'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
  'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  'no-useless-call': ['off'],
  'no-useless-catch': ['error'],
  'no-useless-computed-key': ['error'],
  'no-useless-concat': ['error'],
  'no-useless-constructor': ['error'],
  'no-useless-escape': ['error'],
  'no-useless-rename': ['error', { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }],
  'no-useless-return': ['error'],
  'no-var': ['error'],
  'no-void': ['error'],
  'no-warning-comments': ['warn', { terms: ['todo', 'fixme'], location: 'anywhere' }],
  'no-whitespace-before-property': ['error'],
  'no-with': ['error'],
  'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],
  'object-curly-newline': ['error', { multiline: true, consistent: true }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true, allowMultiplePropertiesPerLine: false }],
  'object-shorthand': ['error', 'always', { ignoreConstructors: false, avoidQuotes: true }],
  'one-var': ['error', 'never'],
  'one-var-declaration-per-line': ['error', 'always'],
  'operator-assignment': ['error', 'always'],
  'operator-linebreak': ['error', 'after', { overrides: { '|': 'before', '?': 'before', ':': 'before' } }],
  'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }, { allowSingleLineBlocks: true }],
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: '*',
      next: [
        'return',
        'case',
        'const',
        'let',
        'block',
        'block-like',
        'function',
        'multiline-block-like',
        'multiline-expression',
      ],
    },
    {
      blankLine: 'always',
      prev: ['const', 'let', 'block', 'block-like', 'function', 'multiline-block-like', 'multiline-expression'],
      next: '*',
    },
    { blankLine: 'never', prev: 'import', next: 'import' },
    { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
  ],
  'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
  'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: { array: false, object: true },
      AssignmentExpression: { array: true, object: false },
    },
    { enforceForRenamedProperties: false },
  ],
  'prefer-exponentiation-operator': ['off'],
  'prefer-named-capture-group': ['off'],
  'prefer-numeric-literals': ['error'],
  'prefer-object-spread': ['error'],
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
  'prefer-regex-literals': ['off'],
  'prefer-rest-params': ['error'],
  'prefer-spread': ['error'],
  'prefer-template': ['error'],
  'quote-props': ['error', 'as-needed'],
  quotes: ['error', 'single', { avoidEscape: true }],
  radix: ['error'],
  'require-atomic-updates': ['off'],
  'require-await': ['error'],
  'require-unicode-regexp': ['off'],
  'require-yield': ['error'],
  'rest-spread-spacing': ['error', 'never'],
  semi: ['error', 'always'],
  'semi-spacing': ['error', { before: false, after: true }],
  'semi-style': ['error', 'last'],
  'sort-imports': [
    'off',
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],
  'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
  'sort-vars': ['off'],
  'space-before-blocks': ['error'],
  'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
  'space-in-parens': ['error', 'never'],
  'space-infix-ops': ['error'],
  'space-unary-ops': ['error', { words: true, nonwords: false, overrides: {} }],
  'spaced-comment': [
    'error',
    'always',
    {
      line: { exceptions: ['-', '+'], markers: ['=', '!'] },
      block: { exceptions: ['-', '+'], markers: ['=', '!', ':', '::'], balanced: true },
    },
  ],
  strict: ['error', 'never'],
  'switch-colon-spacing': ['error', { after: true, before: false }],
  'symbol-description': ['error'],
  'template-curly-spacing': ['error'],
  'template-tag-spacing': ['error', 'never'],
  'unicode-bom': ['error', 'never'],
  'use-isnan': ['error'],
  'valid-typeof': ['error', { requireStringLiterals: true }],
  'vars-on-top': ['error'],
  'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
  'wrap-regex': ['off'],
  'yield-star-spacing': ['error', 'after'],
  yoda: ['error', 'never', { exceptRange: true, onlyEquality: true }],
};

module.exports = {
  ...defaultObject,
  env: { es6: true, node: true },
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: { globalReturn: false, impliedStrict: false },
  },
  settings: { 'import/extensions': ['.js'], 'import/resolver': { node: { extensions: ['.js'] } } },
  rules,
};
