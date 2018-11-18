# af-conditionals Library

## Status of Project

[![Build Status](https://travis-ci.org/acmeframework/af-conditionals.svg?branch=master)](https://travis-ci.org/acmeframework/af-conditionals)  [![Coverage Status](https://coveralls.io/repos/github/acmeframework/af-conditionals/badge.svg?branch=master)](https://coveralls.io/github/acmeframework/af-conditionals?branch=master)

## Purpose

The `af-conditionals` library was created to provide a consistent interface from which to create dynamic comparisons, conditional expressions, logical expressions, and operations. Through the interface, expressions can be defined externally to the application code and dynamically executed.

## Standard Calling Conventions

All Comparisons, Conditionals, Logicals, and Operators expose the object class and a variable named after the class with the word *Instance* appended, but starting with a lowercase letter. For example: `IsString` is exposed as is `isStringInstance`. The `isStringInstance` variable is declared with a `let` so you may subclass the object and then use your version of your class throughout your application easily. Additionally, we expose a function that implements the testing for the class, for example, `IsString` has a exposed function `isString` that calls `isStringInstance.test()`. *(This is described in the Release Notes for v0.2.0.)*

## Release Notes

### v0.1.0

This is the initial alpha release version. The code has been thoroughly tested with 100% coverage. However, the packaging is still under development so a NPM module has not been published.

### v0.2.0

This release changes the calling methods from using `XXXX.test()` methods to hiding that test within an exported function from which the classes are actually used. For example:

In v0.1.0, you would write code like this:

```javascript
if (isUsable.test(someVar)) {
    console.log("It is usable");
}
```

Starting in v0.2.0, you can now simply say:

```javascript
if (isUsable(someVar)) {
    console.log("It is usable");
}
```

The assert method was moved out of base classes and made very generic across all Comparisons, Conditionals, and Logicals.

## Comparisons

The `Comparison` class provides a `compare` and `test` public methods.

The `compare` method takes two values and compares them returning:

- -1 (negative numeral one) when the first value is less than the second value
- 0 (zero) when the first value is equal to the second value
- +1 (postive numeral one) when the first value is greater than the second value

The `test` uses the `compare` method to get the result and then compare that result to an expected result that you supply. Compare returns:

- `true` if the returned result and expected result are equal
- `false` otherwise

*When possible the `compare` method will compare the values using strict equals (`===`). When the values are not of the same type, `compare` will use coerced equality (`==`).*

Supplied Comparisons are:

- `Equal` - determines if two values are equal
- `GreaterThan` - determines if the first value is greater than the second value
- `GreaterThanOrEqual` - determines if the first value is greater than or equal to the second value
- `LessThan` - determines if the first value is less than the second value
- `LessThanOrEqual` - determines if the first value is less than or equal to the second value

*Comparisons use shorthand calling function names instead of exposed functions of `equal`, `greaterThan`, etc... `eq`, `gt`, `gte`, `lt`, `lte` are exposed.*

### `strict`

Both the `compare` and `test` methods take an optional parameter `strict` that defaults to `true`. When the comparison is between two string values the `strict` parameter is used to indicate if the comparison should be case-insensative or not. When `strict` is `true` the comparison is made taking case into account (i.e. capital letters are greater than lowercase letters).

## Conditionals

This library defines a `Conditional` class that is then subclassed to create standard conditional checks.

Supplied Conditionals are:

- `IsArray` - determines if a value is an Array (and Array only)
- `IsEmpty` - determines if a value is empty
  - A string is empty if it is equal to ""
  - A number is empty if it is NaN
  - A boolean is empty if it is false
- `IsFalsey` - loosely tests if a value is false (coerced using !)
- `IsFunction` - determines if a value is a Function
- `IsNumber` - determines if a value is a number
- `IsObject` - determines if a value is an object. This excludes Array's and Function's
- `IsString` - determines if a value is a string
- `IsTruthy` - loosely tests if a value is true (coerced using !!)
- `IsUndefinedOrNull` - determines if a value is undefined or null
- `IsUsable` - inverts IsUndefinedOrNull to determine if a value is "usable"

The majority of the conditionals use `typeof` to determine if a value is of a particular type or not and use noncoerced equality to test the type.

## Logicals

Supplied Logicals are:

- `And` - performs a boolean AND on the supplied operands (can be more than a single test)
- `Or` - performs a boolean OR on the supplied operands (can be more than a single test)

## Operators

Supplied Operators are:

- `Not` - performs a boolean NOT on the supplied value (which will be cast into truthy or falsey)

## [Support Issues](https://github.com/acmeframework/af-conditionals/issues)

## The MIT License

Copyright &copy; 2018 Acme Framework

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
