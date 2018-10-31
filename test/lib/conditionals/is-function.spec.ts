import { expect } from "chai";

import { assert_isFunction, isFunctionInstance } from "../../../src/lib";
import {
    TestConditional,
    testFunction,
    testString,
} from "./conditional-tests";

const testItemsResultsMap = [
    false, // string
    false, // empty string
    false, // number
    false, // empty number
    false, // boolean
    false, // object
    true,  // function
    false, // array
    false, // undefined
    false  // null
];

describe("IsFunction class", function() {
    describe("tests various values to determine if IsFunction functions "
        + "properly...",
        function() {
            const tc = new TestConditional(
                "isFunction",
                isFunctionInstance,
                testItemsResultsMap
            );
            tc.test();

            it("uses assert_isFunction to test", function() {
                expect(function() {
                    assert_isFunction(testFunction);
                }).to.not.throw();

                expect(function() {
                    assert_isFunction(testString);
                }).to.throw(TypeError);
            });
        }
    );
});
