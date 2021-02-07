module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'airbnb', 'prettier/react', 'plugin:prettier/recommended'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx']
      }
    ]
  }
}
