module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  // "extends": "eslint:recommended",
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
  parser: 'babel-eslint',
  plugins: [
    'babel',
    'html',
  ],
};
