module.exports = {
  root: true,
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'linebreak-style': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/react-in-jsx-scope': 0,
    curly: 0,
    semi: 0,
  },
}
