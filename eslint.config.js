import tseslint from "typescript-eslint";
import baseConfig from "./src/baseConfig.js";
import reactConfig from "./src/reactConfig.js";

/**
 * @type {import("@typescript-eslint/utils/ts-eslint").FlatConfig.ConfigArray}
 * */
export default tseslint.config(baseConfig, reactConfig);
