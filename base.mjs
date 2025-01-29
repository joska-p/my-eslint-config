import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 **/
export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  eslintConfigPrettier,
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },
  {
    ignores: ["dist/**"],
  }
);
