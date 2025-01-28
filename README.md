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

The exported configuration includes the following rules:

- no-console: Warn when using console.log() statements
- no-unused-vars: Error when declaring unused variables

You can customize or extend this configuration by creating your own <code>.eslintrc.config.mjs</code> file in your project and overriding the rules as needed.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/joska-p/my-eslint-config).

## License

This project is licensed under the [MIT License](https://mit-license.org/).
