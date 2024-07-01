import typescriptParser from "@typescript-eslint/parser"
import typescriptPlugin from "@typescript-eslint/eslint-plugin"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import eslintCommentsPlugin from "eslint-plugin-eslint-comments"

export default [
  // global
  {
    ignores: ["dist", "eslint.config.js"],
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // @typescript-eslint/eslint-plugin
  {
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
    },
  },
  // eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh
  {
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-var": "error",
      "no-unused-vars": "warn",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "react-refresh/only-export-components": "warn",
    },
  },
  // eslint-plugin-jsx-a11y
  {
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      "eslint-comments": eslintCommentsPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "eslint-comments/no-unused-disable": "error",
      "unused-imports/no-unused-imports": "warn",
    },
  },
]
