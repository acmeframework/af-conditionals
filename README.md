# af-conditionals Library

## Status of Project

[![Build Status](https://travis-ci.org/acmeframework/af-conditionals.svg?branch=master)](https://travis-ci.org/acmeframework/af-conditionals)  [![Coverage Status](https://coveralls.io/repos/github/acmeframework/af-conditionals/badge.svg?branch=master)](https://coveralls.io/github/acmeframework/af-conditionals?branch=master)

## Note: v0.1.0

This is the initial release version. The code has been thoroughly tested with 100% coverage. However, the packaging is still under development so a NPM module has not been published.

## Description

This library defines a Conditional object that is then subclassed to create standard conditional checks.

Supplied Conditionals are:

- `IsArray` - determines if a value is an Array (and Array only)
- `IsEmpty` - determines if a value is empty
  - A string is empty if it is equal to ""
  - A number is empty if it is NaN
  - A boolean is empty if it is false
- `IsFunction` - determines if a value is a Function
- `IsNumber` - determines if a value is a number
- `IsObject` - determines if a value is an object. This excludes Array's and Function's
- `IsString` - determines if a value is a string
- `IsUndefinedOrNull` - determines if a value is undefined or null
- `IsUsable` - inverts IsUndefinedOrNull to determine if a value is "usable"

The majority of the conditionals use `typeof` to determine if a value is of a particular type or not and use noncoerced equality to test the type.

All conditionals expose the object class and a variable named after the class but starting with a lowercase letter. For example: `IsString` is exposed as is `isString`. The `isString` variable is declared with a `let` so you may subclass the object and then use your version of your class throughout your application easily.

## [Support Issues](https://github.com/acmeframework/af-conditionals/issues)

## The MIT License

Copyright &copy; 2018 Acme Framework

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
