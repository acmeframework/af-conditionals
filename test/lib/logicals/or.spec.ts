import "mocha";

import { expect } from "chai";

import { isEmpty, isFunction, isNumber, isString, or } from "../../../src/lib";


describe("Tests logical Or class", function () {
    describe("Tests the functionality of the class", function () {
        it("tests the assert/test methods", function () {
            expect(function () {
                or.assert([
                    {
                        condition: isNumber,
                        value: "Hello"
                    },
                    {
                        condition: isString
                    }
                ])
            }).to.not.throw();

            expect(function () {
                or.assert([
                    {
                        condition: isEmpty,
                        value: "Hello"
                    },
                    {
                        condition: isNumber
                    },
                    {
                        condition: isFunction
                    }
                ]);
            }).to.throw(TypeError);
        });
    })
});
