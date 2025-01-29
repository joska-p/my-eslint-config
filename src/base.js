import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("@typescript-eslint/utils/ts-eslint").FlatConfig.ConfigArray}
 * */
export default tseslint.config(
  eslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintConfigPrettier,

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
      "no-unused-vars": "off", // handled by typescript
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
