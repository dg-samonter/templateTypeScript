module.exports = {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    "react-app",
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js",".tsx", ".jsx"] }],
    '@typescript-eslint/explicit-function-return-type': ['warn', { 
      allowExpressions: true, 
      "allowTypedFunctionExpressions":true
    }],
    "import/no-extraneous-dependencies": [ "error", { "packageDir": "./" } ]
    },
  settings: {
    'import/resolver': {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "moduleDirectory": ["node_modules", "src/"]
      }
    }
  }
};
