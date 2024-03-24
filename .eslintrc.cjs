// .eslintrc.cjs
// module.exports = {
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended"
//   ],
//   parser: "@typescript-eslint/parser",
//   plugins: ["prettier"],
//   rules: {
//     "prettier": ["error", { "endOfLine": "auto" }]
//   }
// };

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['vite.config.js'],
  // rules: {},
  rules: {
    "no-param-reassign": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/no-explicit-any": 2,
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "explicit",
          constructors: "off",
          methods: "explicit",
          properties: "explicit",
          parameterProperties: "explicit",
        },
      },
    ],
    "max-lines-per-function": ["error", 40],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unnecessary-type-assertion": ["error"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.ts", "**/*.test.js"],
      },
    ],
  },
};
