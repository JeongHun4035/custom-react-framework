import typescriptPlugin from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"
import eslintCommentsPlugin from "eslint-plugin-eslint-comments"
import importPlugin from "eslint-plugin-import"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import unusedImportsPlugin from "eslint-plugin-unused-imports"

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
  // others
  {
    plugins: {
      import: importPlugin,
      "eslint-comments": eslintCommentsPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "eslint-comments/no-unused-disable": "error",
      "unused-imports/no-unused-imports": "warn",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"], // Node.js built-in 모듈 및 외부 라이브러리
            ["internal"], // 내부 모듈 (프로젝트 내에서 alias로 설정된 모듈 등)
            ["parent", "sibling", "index"], // 부모, 형제, 인덱스 파일
            ["type"], // 타입 관련 import
            ["unknown"], // 알 수 없는 그룹 (기타)
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
            },
            {
              pattern: "**/*.css",
              group: "unknown",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]
