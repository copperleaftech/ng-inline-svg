const tseslint = require('@typescript-eslint/eslint-plugin');
const nx = require('@nx/eslint-plugin');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/javascript'],
  ...nx.configs['flat/typescript'],

  { ignores: ['lib_commonjs/**', 'lib_esmodule/**'] },
  { plugins: { '@nx': nx, '@typescript-eslint': tseslint } },

  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'no-extra-semi': 'off',
    },
  },

  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-extra-semi': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
    languageOptions: { parserOptions: { project: './tsconfig.*?.json' } },
  },
];
