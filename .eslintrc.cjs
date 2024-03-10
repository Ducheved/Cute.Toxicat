module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['plugin:solid/recommended', 'prettier'],
  plugins: ['solid', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
