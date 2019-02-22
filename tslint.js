const path = require('path');

module.exports = {
  rulesDirectory: [
    path.join(path.dirname(require.resolve('codelyzer')), './'),
    path.join(path.dirname(require.resolve('tslint-defocus')), 'dist'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('rxjs-tslint-rules')), 'dist/rules'),
  ],
  rules: { // based on https://github.com/airbnb/javascript/tree/74fb34f08d4f1961169e9c37c9036a5b42aa7bf1
    "only-arrow-functions": false,
    "rxjs-no-subject-value": false,
    "no-implicit-dependencies": [false, "dev"],
    "interface-name": [true, "never-prefix"],
    "rxjs-finnish": true,
    "no-output-on-prefix": false,
    "array-bracket-spacing": [true, "never"],
    "block-spacing": [
      true,
      "always"
    ],
    "brace-style": ["error", "1tbs"],
    "space-in-parens": [true, "never"],
    "ter-computed-property-spacing": [true, "never"],
    "indent": [
      true,
      "spaces",
      2
    ],
    "ter-arrow-body-style": [true, "as-needed"],
    "trailing-comma": [
      true,
      {
        "multiline": "always",
        "singleline": "never",
        "esSpecCompliant": true
      }
    ],
    "no-string-literal": false,
    "no-constant-condition": true,
    "no-duplicate-case": true,
    "no-extra-boolean-cast": true,
    "no-extra-semi": true,
    "no-unexpected-multiline": true,
    "defocus": true,
    "banana-in-box": true,
    "ter-arrow-spacing": true,
    "ter-func-call-spacing": [true, "never"],
    "ter-newline-after-var": [true, "always"],
    "ter-padded-blocks": [true, "never"],
    "no-multi-spaces": true,
    "array-type": [true, "array"],
    "match-default-export-name": true,
    "number-literal-format": true,
    "no-boolean-literal-compare": true,
    "object-literal-key-quotes": [true, "consistent-as-needed"],
    "no-duplicate-imports": true,
    "no-invalid-this": true,
    "no-conditional-assignment": true,
    "encoding": true,
    "arrow-parens": true,
    "no-sparse-arrays": true,
    "ordered-imports": [
      true,
      {
        "import-sources-order": "lowercase-last",
        "named-imports-order": "case-insensitive",
        "grouped-imports": true
      }
    ],
    "deprecation": {
      "severity": "warn"
    },
    "member-ordering": [
      true,
      {
        "order": [
          "public-static-field",
          "public-instance-field",
          "protected-static-field",
          "protected-instance-field",
          "private-static-field",
          "private-instance-field",
          "public-constructor",
          "protected-constructor",
          "private-constructor",
          "public-static-method",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method"
        ]
      }
    ],
    "newline-before-return": true,
    "no-duplicate-variable": true,
    "no-dynamic-delete": true,
    "no-attribute-parameter-decorator": true,
    "no-this-assignment": true,
    "prefer-object-spread": true,
    "object-literal-shorthand": true,
    "one-variable-per-declaration": true,
    "no-consecutive-blank-lines": true,
    "object-literal-sort-keys": false,
    "rxjs-no-unsafe-takeuntil": true,
    "rxjs-no-internal": true,
    "rxjs-no-create": true,
    "arrow-return-shorthand": true,
    "callable-types": true,
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "curly": true,
    "eofline": true,
    "forin": true,
    "import-blacklist": [
      true
    ],
    "import-spacing": true,
    "interface-over-type-literal": true,
    "label-position": true,
    "max-line-length": [
      true,
      {
        "limit": 120,
        "ignore-pattern": "^import |^export {(.*?)}"
      }
    ],
    "member-access": false,
    "no-duplicate-super": true,
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-empty": false,
    "no-empty-interface": true,
    "no-eval": true,
    "no-inferrable-types": [
      false,
      "ignore-params"
    ],
    "no-misused-new": true,
    "no-non-null-assertion": true,
    "no-shadowed-variable": true,
    "no-string-throw": true,
    "no-unnecessary-initializer": true,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-unused-expression": true,
    "no-use-before-declare": true,
    "no-var-keyword": true,
    "one-line": [
      true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-whitespace"
    ],
    "prefer-const": true,
    "quotemark": [
      true,
      "single"
    ],
    "radix": true,
    "semicolon": [
      true,
      "always"
    ],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      }
    ],
    "unified-signatures": true,
    "variable-name": false,
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ],
    "directive-selector": [
      true,
      "attribute",
      "app",
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      "app",
      "kebab-case"
    ],
    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "use-host-property-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "use-life-cycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": [true, "Component", "View", "Page"],
    "directive-class-suffix": true
  },
};
