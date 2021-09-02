const tsConfig = require('./rules/tsConfig')
const reactConfig = require('./rules/reactConfig')
const jsxA11yConfig = require('./rules/jsxA11yConfig')

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'import/prefer-default-export': 0,
    'consistent-return': 0, // 函数 返回值和类型
    'import/no-anonymous-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 1,
    'no-empty-pattern': 0,
    'no-extra-boolean-cast': 0,
    'no-unused-vars': 0,
    'no-shadow': 0,
    'no-console': 0,
    'no-unused-expressions': 0,
    'no-return-await': 0, // 禁止 return await
    'no-plusplus': 0, // 禁止++符号
    'no-param-reassign': 0, // 禁止对函数参数仔赋值
    'no-bitwise': 0, // button type 默认值
    'no-underscore-dangle': 0, // _属性
    'no-use-before-define': 0,
    'prefer-destructuring': 0, // _属性
    ...tsConfig,
    ...reactConfig,
    ...jsxA11yConfig,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.json'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  },
}
