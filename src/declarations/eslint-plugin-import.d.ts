// TODO: Remove when https://github.com/import-js/eslint-plugin-import/issues/3133 is resolved

declare module "eslint-plugin-import" {
  import type { Linter } from "eslint";

  export const flatConfigs: {
    recommended: Linter.Config;
    typescript: Linter.Config;
  };

  export const plugin: {
    flatConfigs: typeof flatConfigs;
  };

  export default plugin;
}
