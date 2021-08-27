module.exports = {
  "extends": [
    "airbnb",
    "prettier"
  ],
  "rules": {
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "max-len": ["error", { "code": 120 }],
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false, "ignoreJSX": "multi-line" }],
    "no-undef": "off",
    "quotes": ["error", "double"],
  }
}
