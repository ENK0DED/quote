module.exports = {
  root: true,
  globals: {
    'TwitchJs': true,
  },
  env: {
    browser: true,
    es2024: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json', './libs/**/tsconfig.json', './packages/**/tsconfig.json'],
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
  ignorePatterns: [
    'node_modules/**',
    '**/dist/**',
    'types/**',
    'commitlint.config.js',
    'stylelint.config.js',
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:unicorn/all',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'deprecation',
    'prettier',
    'unicorn',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^(_)|(of)|(returns)|(type)' }],
    '@typescript-eslint/lines-between-class-members': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    'deprecation/deprecation': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true, optionalDependencies: false, peerDependencies: false, bundledDependencies: false }],
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      { selector: 'ForInStatement', message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.' },
      { selector: 'LabeledStatement', message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.' },
      { selector: 'WithStatement', message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.' },
    ],
    'no-underscore-dangle': 'off',
    'no-void': 'off',
    'prettier/prettier': 'error',
    semi: ['error', 'always'],
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': ['error', { allowList: { btn: true, BtnData: true, prop: true, props: true, ref: true, refs: true } }],
  },
};
