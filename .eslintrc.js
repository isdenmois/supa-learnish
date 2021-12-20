module.exports = {
  root: true,
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    'linebreak-style': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/react-in-jsx-scope': 0,
    curly: 0,
    semi: 0,
    'no-unused-vars': 0,
  },
}
