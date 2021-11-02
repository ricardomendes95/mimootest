module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
  },

  rules: {
    'react/jsx-filename-extension': [
        'error',
        {
            extensions: ['.tsx'],
        }
    ],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
        jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  settings: {
        'import/parser': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
  },
};
