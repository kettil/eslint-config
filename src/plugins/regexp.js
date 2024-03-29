const defaultObject = require('../lib/defaultObject');

const rules = {
  'regexp/confusing-quantifier': ['error'],
  'regexp/control-character-escape': ['error'],
  'regexp/letter-case': [
    'error',
    {
      caseInsensitive: 'lowercase',
      unicodeEscape: 'uppercase',
      hexadecimalEscape: 'uppercase',
      controlEscape: 'uppercase',
    },
  ],
  'regexp/match-any': ['error'],
  'regexp/negation': ['error'],
  'regexp/no-contradiction-with-assertion': ['error'],
  'regexp/no-control-character': ['error'],
  'regexp/no-dupe-characters-character-class': ['error'],
  'regexp/no-dupe-disjunctions': ['error'],
  'regexp/no-empty-alternative': ['error'],
  'regexp/no-empty-capturing-group': ['error'],
  'regexp/no-empty-character-class': ['error'],
  'regexp/no-empty-group': ['error'],
  'regexp/no-empty-lookarounds-assertion': ['error'],
  'regexp/no-escape-backspace': ['error'],
  'regexp/no-invalid-regexp': ['error'],
  'regexp/no-invisible-character': ['error'],
  'regexp/no-lazy-ends': ['error'],
  'regexp/no-legacy-features': ['error'],
  'regexp/no-misleading-unicode-character': ['error'],
  'regexp/no-non-standard-flag': ['error'],
  'regexp/no-obscure-range': ['error'],
  'regexp/no-octal': ['error'],
  'regexp/no-optional-assertion': ['error'],
  'regexp/no-potentially-useless-backreference': ['error'],
  'regexp/no-super-linear-backtracking': ['error'],
  'regexp/no-trivially-nested-assertion': ['error'],
  'regexp/no-trivially-nested-quantifier': ['error'],
  'regexp/no-unused-capturing-group': ['error'],
  'regexp/no-useless-assertions': ['error'],
  'regexp/no-useless-backreference': ['error'],
  'regexp/no-useless-character-class': ['error'],
  'regexp/no-useless-dollar-replacements': ['error'],
  'regexp/no-useless-escape': ['error'],
  'regexp/no-useless-flag': ['error'],
  'regexp/no-useless-lazy': ['error'],
  'regexp/no-useless-non-capturing-group': ['error'],
  'regexp/no-useless-range': ['error'],
  'regexp/no-useless-two-nums-quantifier': ['error'],
  'regexp/no-zero-quantifier': ['error'],
  'regexp/optimal-lookaround-quantifier': ['error'],
  'regexp/optimal-quantifier-concatenation': ['error'],
  'regexp/prefer-character-class': ['error'],
  'regexp/prefer-d': ['error'],
  'regexp/prefer-lookaround': ['error'],
  'regexp/prefer-named-capture-group': ['off'],
  'regexp/prefer-named-replacement': ['off'],
  'regexp/prefer-plus-quantifier': ['error'],
  'regexp/prefer-predefined-assertion': ['error'],
  'regexp/prefer-quantifier': ['error'],
  'regexp/prefer-question-quantifier': ['error'],
  'regexp/prefer-range': ['error'],
  'regexp/prefer-regexp-test': ['error'],
  'regexp/prefer-result-array-groups': ['error'],
  'regexp/prefer-star-quantifier': ['error'],
  'regexp/prefer-unicode-codepoint-escapes': ['error'],
  'regexp/prefer-w': ['error'],
  'regexp/require-unicode-regexp': ['error'],
  'regexp/sort-alternatives': ['error'],
  'regexp/sort-character-class-elements': ['error'],
  'regexp/sort-flags': ['error'],
  'regexp/strict': ['error'],
  'regexp/unicode-escape': ['error'],
  'regexp/use-ignore-case': ['error'],
};

module.exports = { ...defaultObject, plugins: ['regexp'], rules };
