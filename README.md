Here's how to create a TypeScript + ESLint + Prettier project using Vite with `.eslintrc.cjs` for ESLint configuration:

**1. Project Setup:**

- Open your terminal and navigate to your desired project directory.
- Use the `create-vite` command to initialize a new Vite project:

  ```bash
  npx create-vite@latest my-vite-project --template typescript
  ```

  - Replace `my-vite-project` with your preferred project name.
  - The `--template typescript` flag creates a TypeScript project template.

**2. Install Dependencies:**

- Navigate into your project directory:

  ```bash
  cd my-vite-project
  ```

- Install the required developer dependencies for ESLint and Prettier:

See here: [https://www.npmjs.com/package/eslint-config-airbnb-base-typescript](https://www.npmjs.com/package/eslint-config-airbnb-base-typescript)

```bash

npm install --save-dev @typescript-eslint/eslint-plugin@7.2.0 \
      @typescript-eslint/parser@7.2.0 \
      eslint-config-airbnb-base \
      eslint-config-prettier eslint-plugin-prettier prettier \
      eslint-config-airbnb-typescript

      OR as it points on Docs it doesn't always works :

npm install --save-dev @typescript-eslint/eslint-plugin@^4.4.1 \
      @typescript-eslint/parser@7.2.0 \
      eslint-plugin-import@^2.22.0 \
      eslint-config-airbnb-base \
      eslint-config-prettier eslint-plugin-prettier prettier \
      eslint-config-airbnb-typescript
```

### If you need uninstall Eslint and Prettier use

```bash
  npm un --save-dev eslint \
      @typescript-eslint/eslint-plugin \
      @typescript-eslint/parser \
      eslint-config-prettier \
      eslint-plugin-prettier prettier \
      eslint-config-airbnb-base \
      eslint-config-airbnb-base \
      eslint-config-airbnb-typescript \
      eslint-config-prettier \
      eslint-plugin-prettier \
      prettier
```

**3. Configure ESLint:**

- Create an ESLint configuration file named `.eslintrc.cjs` in your project root.
- Add the following basic configuration to enable ESLint with TypeScript support:

  ```javascript
  // .eslintrc.cjs
  module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['prettier'],
    rules: {
      prettier: ['error', { endOfLine: 'auto' }],
    },
  };
  ```

  - **Explanation:**
    - `module.exports`: Defines the configuration object for ESLint.
    - `extends`: Inherits recommended rules from ESLint and the TypeScript ESLint plugin.
    - `parser`: Sets the parser to `@typescript-eslint/parser` for TypeScript support.
    - `plugins`: Adds the `prettier` plugin.
    - `rules.prettier`: Enables the `prettier` rule to enforce Prettier formatting and sets the `endOfLine` option to "auto" (recommended).

**4. Configure Prettier (Optional):**

- While Prettier works with defaults, you can create a `.prettierrc` file (YAML or JSON format) in your project root to customize formatting rules (refer to Prettier documentation: [https://prettier.io/docs/en/](https://prettier.io/docs/en/)).
- Create `.prettierrc.cjs` file:

```TypeScript
module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
  useTabs: false,
};
```

**5. Editor Integration (Optional):**

- Consider installing editor extensions for ESLint and Prettier to automate formatting and linting on save or keystrokes. Popular choices include:
  - ESLint extension for your editor (VS Code, Atom, etc.)
  - Prettier extension for your editor
- These extensions usually handle configuration automatically, but you might need to adjust settings based on your editor and preferences.

**6. Running Development Server:**

- Start the Vite development server to launch your project:

  ```bash
  npm run dev
  ```

**7. Linting:**

- To manually run ESLint for linting and Prettier formatting:

  ```bash
  npx eslint --ext .js,.ts .
  ```

**Additional Tips:**

- Explore pre-commit hooks or Husky to automatically run linting and formatting before committing changes.
- Consider using a linter runner script in `package.json`:

  ```json
  {
    "scripts": {
      "lint": "eslint --ext .js,.ts ."
    }
  }
  ```

  Then, run `npm run lint` to execute ESLint, which will also trigger Prettier formatting.

By following these steps, you'll have a Vite project set up with TypeScript, ESLint using `.eslintrc.cjs` for configuration, and Prettier for consistent code formatting. This ensures a clean and well-maintained codebase as you develop your project.

**Final the file `.eslintrc.cjs`:**

```TypeScript
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

```

## Installing husky lint-staged validate-branch-name

```bash
npm install --save-dev husky lint-staged validate-branch-name
```

Run command

```bash
npm run prepare
```

```json
  "scripts": {
    ...
    "lint": "eslint ./src",
    "lint:fix": "eslint --fix ./src",
    "format": "prettier --write ./src",
    "ci:format": "prettier --check ./src",
    "precommit": "lint-staged",
    "prepare": "husky .husky"
  },

  "husky": {
    "hooks": {
      "pre-commit": "npm run precommit"
    }
  },
  "lint-staged": {
    "{**/*.js,!(node_modules/**)}": ["eslint --fix"]
  }

```

### Create .validate-branch-namerc.json file

```json
{
  # "pattern": "^(docs|chore|feat|fix|refactor|style|test){1}/RSS-PZ-\\d{2}_([a-z]+[A-Z]+)+",
    "pattern": "^(docs|chore|feat|fix|refactor|style|test){1}/d{2}_[[:alpha:]]+[[:alpha:]|-|_]+",
  "errorMsg": "Branch name doesn't follow the defined repository rules"
}
```

### pre-commit

```bash
npm run ci:format
```

### pre-push

```bash
npm run lint
npx validate-branch-name
```

### It works as

        "precommit script": Runs before each commit.
        **husky configuration:**
            hooks.pre-commit: Runs the npm run precommit script before committing.
        lint-staged configuration:
            Runs eslint --fix on all staged JavaScript files (excluding node_modules) to automatically fix formatting issues.

### Explanation

    When you try to commit changes, Husky triggers the precommit script, which in turn runs lint-staged.
    lint-staged only runs ESLint on staged files, improving performance.
    The eslint --fix flag instructs ESLint to attempt to fix formatting errors automatically based on your ESLint configuration.
    If any errors or formatting issues are found, you'll be prompted to fix them or stage the changes again.
