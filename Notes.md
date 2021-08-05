# PACKAGES

## eslint

ESLint is a tool for identifying and reporting on patterns found in JS code.

### ```.eslintrc.json```

Configuration file to specify configuration information for an entire directory and all of its subdirectories. Can be in the form of .eslintrc.* file or an **eslintConfig** field in a package.json file.

### ```.eslintignore```

To tell ESLint to ignore specific files and directories. Each line in the file is a glob pattern indicating which paths should be omitted from linting.

## eslint-config-standard-with-typescript

An ESLint shareable config for TypeScript that is based on eslint-config-standard and has TypeScript specific rules from @typescript-eslint/eslint-plugin.

A shareable config is simply npm packages that export a configuration object.

---

## husky

Tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages.

### Git hooks

Scripts that you can set up to run at certain events in the Git lifecycle.

---

## lint-staged

To run linters against staged files. By doing so you can ensure no errors go into the repository and enforce code style.

### ```.lintstagedrc.json```

- ***.ts**: matches all TS files. An array is passed to run multiple commands in a sequence.

# FILES

## npmrc

Config files.
npm gets config settings from the command line, environment variables, and ```npmrc``` files.