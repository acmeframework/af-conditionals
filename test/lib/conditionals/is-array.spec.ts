import { expect } from "chai";

import { assert_isArray, isArrayInstance } from "../../../src/lib";
import { testArray, TestConditional, testString } from "./conditional-tests";

const testItemsResultsMap = [
    false, // string
    false, // empty string
    false, // number
    false, // empty number
    false, // boolean
    false, // object
    false, // function
    true,  // array
    false, // undefined
    false  // null
];

describe("IsArray class", function() {
    describe("tests various values to determine if IsArry functions "
        + "properly...",
        function() {
            const tc = new TestConditional(
                "isArray",
                isArrayInstance,
                testItemsResultsMap
            );
            tc.test();

            it("uses assert_isArray to test", function() {
                expect(function() {
                    assert_isArray(testArray);
                }).to.not.throw();

                expect(function() {
                    assert_isArray(testString);
                }).to.throw(TypeError);
            });
        }
    );
});
