

module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "globals": {
    "ApiError": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  "plugins": [
    "import",
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "arrowFunctions":true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {

    "import/no-unresolved": "off",
    "import/no-named-as-default-member": "off",

    "no-empty": "off",
    // "no-undef": "off",
    "no-console": "off",
    "no-dupe-keys": "off",
    // "no-extra-semi": "off",
    "no-unused-vars": "off",
    "no-control-regex": "off",
    "no-irregular-whitespace": "off",
    "indent": ["warn", 2],

    // "no-unused-vars": [
    //   "warn", {
    //     "ignoreModules": true
    //   }
    // ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    // "quotes": "off",
    "quotes": [
      "warn",
      "single", {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }],
    // "comma-dangle": "off",
    "comma-dangle": [
      "warn", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "never",
        "functions": "ignore"
      }],

  }
};
