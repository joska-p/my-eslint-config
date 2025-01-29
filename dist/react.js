import baseConfig from "./base.js";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactCompiler from "eslint-plugin-react-compiler";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default tseslint.config(baseConfig, pluginReact.configs.flat.recommended, jsxA11y.flatConfigs.recommended, {
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
        "react-compiler": reactCompiler,
    },
    settings: { react: { version: "detect" } },
    rules: {
        ...pluginReactHooks.configs.recommended.rules,
        // React scope no longer necessary with new JSX transform.
        "react/react-in-jsx-scope": "off",
        "react-compiler/react-compiler": "error",
    },
}, {
    ignores: ["dist/**"],
});
