import jsxA11y from "eslint-plugin-jsx-a11y";
import pluginReact from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tseslint from "typescript-eslint";
import baseConfig from "./baseConfig.js";
const jsxA11yConfig = tseslint.config({
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [jsxA11y.flatConfigs.recommended],
    languageOptions: {
        ...jsxA11y.flatConfigs.recommended.languageOptions,
        globals: {
            ...globals.serviceworker,
            ...globals.browser,
        },
    },
});
const reactConfig = tseslint.config({
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [pluginReact.configs.flat.recommended],
    languageOptions: {
        ...pluginReact.configs.flat.recommended.languageOptions,
        globals: {
            ...globals.serviceworker,
            ...globals.browser,
        },
    },
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
});
/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("@typescript-eslint/utils/ts-eslint").FlatConfig.ConfigArray}
 * */
export default tseslint.config(baseConfig, jsxA11yConfig, reactConfig);
