# PACKAGES

## eslint

ESLint is a tool for identifying and reporting on patterns found in JS code.

### ```.eslintrc.json```

Configuration file to specify configuration information for an entire directory and all of its subdirectories. Can be in the form of .eslintrc.* file or an **eslintConfig** field in a package.json file.

#### RULES

- **@typescript-eslint/strict-boolean-expressions**: forbids usage of non-boolean types in expressions where a boolean is expected

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
- **testMatch**: an array of strings that has glob patterns that Jest uses to detect files. By default it looks for files in *test* folder as well as any files with a suffix of ```.test``` or ```.spec```.

### FLAGS

- --passWithNoTests: allows the test suite to pass when no files are found
- --watch: watch files for changes and rerun tests related to changed files
- --silent: prevent tests from printing messages through the console
- --noStackTrace: disables stack trace in test results output
- --runInBand/-i: run all tests serially in the current process, rather than creating a worker pool of child processes that run tests. Useful for debugging
- --findRelatedTests: find and run the tests that cover a space separated list of source files that were passed in as arguments. Useful for pre-commit hook integration to run the minimal amount of tests necessary
- --coverage/--collectCoverage: indicates that test coverage information should be collected and reported in the output
- --config/-c: the path to a Jest config file specifying how to find and execute tests

---

## lint-staged

To run linters against staged files. By doing so you can ensure no errors go into the repository and enforce code style.

### ```.lintstagedrc.json```

Configuration is an object where each value is a command to run and its key is a glob pattern to use for this command.

- ***.ts**: matches all TS files. An array is passed to run multiple commands in a sequence. This config will execute the array of commands with the list of currently staged files passed as arguments.

---

## ts-jest

Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.

---

## git-commit-msg-linter

A git "commit-msg" hook for linting your git commit message against the popular Angular Commit Message Guidelines. As a hook it will run at every committing to make sure that the message to commit is valid against the conventions. If not the commit will be aborted.

---

## validator

A library of string validators and sanitizers

---

## @shelf/jest-mongodb

Jest preset to run MongoDB memory server

### ```globalConfig.json```

File created in the project root when using jest --watch flag

---

## mongodb-memory-server

This package spins up an actual/real MongoDB server programatically from within Node.js, for test or mocking during development.

---

## Sucrase

Alternative to Babel that allows super-fast development builds. 

---

## SuperTest

To provide a high-level abstraction for testing HTTP. HTTP assertions.

---

## fast-glob

Provides methods for traversing the file system and returning pathnames that matched a defined set of a specified pattern; results are returned in arbitrary order.

# FILES

## npmrc

Config files.
npm gets config settings from the command line, environment variables, and ```npmrc``` files.

## spec.ts

Unit tests for source files. See option **testMatch** for ```jest.config.js``` file for more information.

## index.ts

A barrel is a way to rollup exports from several module into a single convenience module. The barrel itself is a module file that re-exports selected exports of other modules.

# DESIGN PATTERNS

## Factory Method

Creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

The Factory Method pattern suggests that you replace direct object construction calls (using the ***new*** operator) with calls to a special factory method. Objects returned by a factory method are often referred to as *products*.
Now you can override the factory method in a subclass and change the class of products being created by the method.

# ARCHITECTURE

## DOMAIN LAYER

Collection of entity objects and related business logic that is designed to represent the enterprise business model.