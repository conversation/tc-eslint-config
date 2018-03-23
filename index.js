module.exports = {
  "extends": "airbnb",
  "rules": {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "max-len": ["error", { "code": 120 }],
    "no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false }],
    "no-undef": "off",
    "quotes": ["error", "double"],
  }
}
