// TODO: Remove when https://github.com/facebook/react/issues/31334 is resolved

declare module "eslint-plugin-react-compiler" {
  import type { ESLint } from "eslint";

  const plugin: ESLint.Plugin;
  export default plugin;
}
