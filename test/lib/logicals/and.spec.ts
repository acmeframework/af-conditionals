import "mocha";

import { expect } from "chai";

import {
    assert_and,
    isEmptyInstance,
    isStringInstance,
    isUsableInstance,
} from "../../../src/lib";

describe("Tests logical And class", function() {
    describe("Tests the functionality of the class", function() {
        it("tests the assert/test methods", function() {
            expect(function() {
                assert_and([
                    {
                        condition: isUsableInstance,
                        value: "Hello"
                    },
                    {
                        condition: isStringInstance
                    }
                ]);
            }).to.not.throw();

            expect(function() {
                assert_and([
                    {
                        condition: isUsableInstance,
                        value: "Hello"
                    },
                    {
                        condition: isStringInstance
                    },
                    {
                        condition: isEmptyInstance
                    }
                ]);
            }).to.throw(TypeError);
        });
    });
});
