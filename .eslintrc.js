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
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'no-unused-vars': 1,
    'no-param-reassign': 0,
    'no-useless-catch': 0,
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off'
  }
}
