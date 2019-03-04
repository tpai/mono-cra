const path = require('path');

module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "rules": {
    "indent": ["error", 2],
    "no-console": "off",
    "sort-class-members/sort-class-members": [2, {
      "order": [
        "[static-properties]",
        "[static-methods]",
        "[properties]",
        "[conventional-private-properties]",
        "constructor",
        "[methods]",
        "[conventional-private-methods]"
      ],
      "accessorPairPositioning": "getThenSet",
    }]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules")
        ]
      }
    },
    "react": {
      "version": "detect",
    }
  },
  "parser": "babel-eslint",
  "plugins": ["react", "jest", "sort-class-members", "import"],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  }
};
