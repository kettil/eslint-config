const defaultObject = require('../lib/defaultObject');
const hasLibrary = require('../lib/hasLibrary');

const rules = {
  'testing-library/await-async-query': ['error'],
  'testing-library/await-async-utils': ['error'],
  'testing-library/consistent-data-testid': ['error'],
  'testing-library/no-await-sync-query': ['error'],
  'testing-library/no-container': ['error'],
  'testing-library/no-manual-cleanup': ['error'],
  'testing-library/no-node-access': ['error'],
  'testing-library/no-render-in-setup': ['error'],
  'testing-library/no-wait-for-empty-callback': ['error'],
  'testing-library/no-wait-for-multiple-assertions': ['error'],
  'testing-library/no-wait-for-side-effects': ['error'],
  'testing-library/no-wait-for-snapshot': ['error'],
};

if (hasLibrary('react')) {
  Object.assign(rules, {
    'testing-library/no-debug': ['error'],
    'testing-library/no-dom-import': ['error', 'react'],
  });
}

if (hasLibrary('@testing-library/react') || hasLibrary('@testing-library/react-hooks')) {
  module.exports = { ...defaultObject, plugins: ['testing-library'], rules };
} else {
  module.exports = defaultObject;
}
