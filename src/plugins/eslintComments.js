const defaultObject = require('../lib/defaultObject');

const rules = {
  'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  'eslint-comments/no-aggregating-enable': ['error'],
  'eslint-comments/no-duplicate-disable': ['error'],
  'eslint-comments/no-restricted-disable': 'off',
  'eslint-comments/no-unlimited-disable': ['error'],
  'eslint-comments/no-unused-disable': ['error'],
  'eslint-comments/no-unused-enable': ['error'],
  'eslint-comments/no-use': ['off'],
  'eslint-comments/require-description': ['error'],
};

module.exports = { ...defaultObject, plugins: ['eslint-comments'], rules };
