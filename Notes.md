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

## jest

### ```jest.config.js```

- **roots**: list of paths to directories that Jest should use to search for files in.
- **collectCoverageFrom**: array of glob patterns indicating a set of files for which coverage information should be collected.
- **coverageDirectory**: the directory where Jest should output its coverage files.
- **testEnvironment**: test environment that will be used for testing.
- **transform**: a map from regular expressions to paths to transformers. A transformer is a module that provides a synchronous function for transforming source files. Jest runs the code in your project as JS, but if you use some syntax not supported by Node.js out of the box (like TS) then you'll need to transform that code into plain JS. *{filePattern: ['path-to-transformer´]}*

---

## lint-staged

To run linters against staged files. By doing so you can ensure no errors go into the repository and enforce code style.

### ```.lintstagedrc.json```

Configuration is an object where each value is a command to run and its key is a glob pattern to use for this command.

- ***.ts**: matches all TS files. An array is passed to run multiple commands in a sequence. This config will execute the array of commands with the list of currently staged files passed as arguments.

---

## ts-jest

Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.

# FILES

## npmrc

Config files.
npm gets config settings from the command line, environment variables, and ```npmrc``` files.