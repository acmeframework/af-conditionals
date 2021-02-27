# Changelog

## v0.1.0 - Initial Release - 2018-08-21

This is the initial alpha release version. The code has been thoroughly tested with 100% coverage. However, the packaging is still under development so a NPM module has not been published.

## v0.2.0 - New Signature Format - 2018-11-10

- This release changes the calling methods from using `XXXX.test()` methods to hiding that test within an exported function from which the classes are actually used. For example:

In v0.1.0, you would write code like this:

```javascript
if (isUsable.test(someVar)) {
  console.log('It is usable');
}
```

Starting in v0.2.0, you can now simply say:

```javascript
if (isUsable(someVar)) {
  console.log('It is usable');
}
```

- The assert method was moved out of base classes and made very generic across all Comparisons, Conditionals, and Logicals.

## v0.3.0 - Intro two new functions - 2018-11-18

- Added `IsFalsey` and `IsTruthy` Conditionals.

## v0.3.1 - ???

- Updated Conditionals to use [type-detect](https://github.com/chaijs/type-detect) package.
- Updated dependent packages (dev dependencies)
- Updated tsconfig.json to be cleaner (both master src and tests), and to produce js output in dist instead of build
- Updated package.json for NPM publishing

## v1.0.0 - Release - 2019-02-18

- Official 1.0.0 release version

## v1.1.0 - Update build/tsconfig - 2019-07-20

- Updated dependencies
- Updated package.json for consistent scripts across af-XXXX libraries
- removed .vscode folder
- Updated README.md

### Fixes

- v1.1.1 - Updated dependencies / refactored code - 2020-01-04

## v1.2.0 - Optimizations / dependencies - 2020-04-22

- Optimize IsArray.test
- Update dependencies

## v1.3.0 - Build and process overhaul

- Replace TSlint with ESlint
- Introduce Prettier
- Reformat all code with Prettier
- Update app dependencies to the latest versions, update configs as needed
- Update package.json scripts to better support a consistent build process and better commits

### Fixes

- v1.3.1 - Corrected two typos in `publish.yml`
