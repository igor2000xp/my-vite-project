Here's how to create a new project using Vite with TypeScript, ESLint, and Prettier:

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

  ```bash
  npm install --save-dev eslint eslint-config-prettier eslint-plugin-prettier prettier
  ```

**3. Configure ESLint:**

- Create an ESLint configuration file named `.eslintrc.js` or `.eslintrc.json` in your project root.
- Add the following basic configuration to enable ESLint with TypeScript support:

  ```json
  {
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": ["prettier"],
    "rules": {
      "prettier": ["error", { "endOfLine": "auto" }]
    }
  }
  ```

  - **Explanation:**
    - `extends`: Inherits recommended rules from ESLint and the TypeScript ESLint plugin.
    - `parser`: Sets the parser to `@typescript-eslint/parser` for TypeScript support.
    - `plugins`: Adds the `prettier` plugin.
    - `rules.prettier`: Enables the `prettier` rule to enforce Prettier formatting and sets the `endOfLine` option to "auto" (recommended).

**4. Configure Prettier (Optional):**

- While Prettier works with defaults, you can create a `.prettierrc` file (YAML or JSON format) in your project root to customize formatting rules (refer to Prettier documentation: [https://prettier.io/docs/en/](https://prettier.io/docs/en/)).

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

By following these steps, you'll have a Vite project set up with TypeScript, ESLint for linting, and Prettier for consistent code formatting. This ensures a clean and well-maintained codebase as you develop your project.