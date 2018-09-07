import "mocha";

import { expect } from "chai";

import { and, isEmpty, isString, isUsable } from "../../../src/lib";


describe("Tests logical And class", function () {
    describe("Tests the functionality of the class", function () {
        it("tests the assert/test methods", function () {
            expect(function () {
                and.assert([
                    {
                        condition: isUsable,
                        value: "Hello"
                    },
                    {
                        condition: isString
                    }
                ])
            }).to.not.throw();

            expect(function () {
                and.assert([
                    {
                        condition: isUsable,
                        value: "Hello"
                    },
                    {
                        condition: isString
                    },
                    {
                        condition: isEmpty
                    }
                ]);
            }).to.throw(TypeError);
        });
    })
});
