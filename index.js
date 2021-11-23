// ref https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v15.1.0/packages/eslint-config-airbnb-base/rules/variables.js
// const restrictedGlobals = require('eslint-restricted-globals');

module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  rules: {
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "ignore",
      },
    ],
    "function-paren-newline": 0,
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "jsx-a11y/aria-role": ["warn", { ignoreNonDOM: true }],
    "max-len": ["error", { code: 120 }],
    "no-extra-parens": [
      "error",
      "all",
      { nestedBinaryExpressions: false, ignoreJSX: "multi-line" },
    ],
    "no-undef": "off",
    "no-restricted-globals": ["off"], //.concat(restrictedGlobals),
    "object-curly-newline": 0,
    quotes: ["error", "double"],
  },
};
