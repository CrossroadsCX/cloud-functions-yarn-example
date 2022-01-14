module.exports = {
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', /* 'prettier', 'plugin:prettier/recommended' */],
  plugins: [/*'prettier'*/],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['import', 'react', '@typescript-eslint/eslint-plugin'/*, 'prettier' */],
      rules: {
        "import/prefer-default-export": "off",
        "semi": "off",
        "@typescript-eslint/semi": ['error', 'never'],
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            "js": "never",
            "jsx": "never",
            "ts": "never",
            "tsx": "never",
          },
        ],
      },
      extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    }
  ],
  settings: {
    "import/resolver": {
      "typescript": {},
    },
  },
}
