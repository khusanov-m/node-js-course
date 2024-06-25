const pluginJs = require('@eslint/js');
const globals = require('globals');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
module.exports = [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      'prettier/prettier': 'error',
      'spaced-comment': 'off',
      'no-console': 'warn',
      'consistent-return': 'off',
      'func-names': 'off',
      'object-shorthand': 'off',
      'no-process-exit': 'off',
      'no-param-reassign': 'off',
      'no-return-await': 'off',
      'no-underscore-dangle': 'off',
      'class-methods-use-this': 'off',
      'prefer-destructuring': [
        'error',
        {
          object: true,
          array: false,
        },
      ],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: 'req|res|next|val',
        },
      ],
    },
  },
];
