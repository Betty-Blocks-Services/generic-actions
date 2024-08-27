import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    ...pluginJs.configs.recommended,
    languageOptions: { globals: globals.browser },
    rules: {
      ...pluginJs.configs.recommended.rules,
      //this is where we can overwrite rules like so:
      // 'no-unused-vars': 'warn',
    },
  },
];
