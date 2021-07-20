module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "allowImportExportEverywhere": true
  },
  "rules": {
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "function-paren-newline": 0,
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "jsx-a11y/aria-role": ["warn", { ignoreNonDOM: true }],
    "max-len": ["error", { "code": 120 }],
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false, "ignoreJSX": "multi-line" }],
    "no-undef": "off",
    "object-curly-newline": 0,
    "quotes": ["error", "double"],
  }
}
