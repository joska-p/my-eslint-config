import baseConfig from "./base.js";
import tseslint from "typescript-eslint";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default tseslint.config(baseConfig, pluginReact.configs.flat.recommended, {
    languageOptions: {
        ...pluginReact.configs.flat.recommended.languageOptions,
        globals: {
            ...globals.serviceworker,
            ...globals.browser,
        },
    },
}, {
    plugins: {
        "react-hooks": pluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
        ...pluginReactHooks.configs.recommended.rules,
        // React scope no longer necessary with new JSX transform.
        "react/react-in-jsx-scope": "off",
        "no-console": "warn",
        "no-unused-vars": "warn",
    },
}, {
    ignores: ["dist/**"],
});
