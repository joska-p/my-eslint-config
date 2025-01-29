import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default tseslint.config(
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
  },
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "parent", "sibling", "index"],
          alphabetize: {
            order: "asc",
          },
        },
      ],
      "import/no-named-as-default-member": "off",
    },
  },
  {
    ignores: ["dist/**"],
  }
);
