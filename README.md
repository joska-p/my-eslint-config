# My ESLint Config

This is a simple NPM package that exports a ESLint configurations for my JavaScript projects.

## Installation

To use this ESLint configuration, you'll need to install the package as a development dependency in your project:

```shell
npm install --save-dev @jpotin/my-eslint-config
```

## Usage

Once the package is installed, you can use the exported configuration in your react project's <code>.eslintrc.config.mjs</code> file.

```mjs
import { config } from "@jpotin/my-eslint-config/react";

/** @type {import("eslint").Linter.Config} */
export default config;
```

Alternatively, you can specify the configuration in your <code>package.json</code> file:

```json
{
  "eslintConfig": {
    "extends": "my-eslint-config"
  }
}
```

## Configuration

The package export 2 configurations:

### Base configuration

The base configuration includes the following rules:

- <code>no-console</code>: Warn when using console.log() statements

- <code>no-unused-vars</code>: Disables this rule, as it is handled by TypeScript.

- <code>import/order</code>: Enforces a consistent ordering of imports, with built-in modules first, followed by external modules, parent modules, sibling modules, and index modules.

### React Configuration

The React configuration extends the base configuration and adds the following rules:

- <code>react</code>: Enables the React plugin.

- <code>react-hooks:</code> Enables the React hooks plugin.

- <code>jsx-a11y</code>: Enables the jsx-a11y plugin.

- <code>react-compiler</code>: Enables this rule with an error severity.

You can customize or extend this configuration by creating your own <code>.eslintrc.config.mjs</code> file in your project and overriding the rules as needed.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/joska-p/my-eslint-config).

## License

This project is licensed under the [MIT License](https://mit-license.org/).
