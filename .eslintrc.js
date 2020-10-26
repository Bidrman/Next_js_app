module.exports = {
  extends: 'react-app',
  rules: {
    'react/jsx-uses-vars': 1,
    'react/react-in-jsx-scope': 1,
    'react/jsx-uses-react': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': 0,
    eqeqeq: 'warn',
    semi: ['error', 'never'],
    indent: ['error', 2],
    'default-case': [0, 'never'],
    'react-hooks/exhaustive-deps': [0],
    'jsx-quotes': ['error', 'prefer-double'],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline"
  }]
  },
}