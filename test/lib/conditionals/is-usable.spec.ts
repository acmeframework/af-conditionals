import { expect } from "chai";

import { assert_isUsable, isUsableInstance } from "../../../src/lib";
import {
    TestConditional,
    testNull,
    testString,
    testUndefined,
} from "./conditional-tests";

const testItemsResultsMap = [
    true,  // string
    true,  // empty string
    true,  // number
    true,  // empty number
    true,  // boolean
    true,  // object
    true,  // function
    true,  // array
    false, // undefined
    false  // null
];

describe("IsUsable class", function() {

    describe("tests various values to determine if IsUsable functions "
        + "properly...",
        function() {
            const tc = new TestConditional(
                "isUsable",
                isUsableInstance,
                testItemsResultsMap
            );
            tc.test();

            it("uses assert_isUsable to test", function() {
                expect(function() {
                    assert_isUsable(testString);
                }).to.not.throw();

                expect(function() {
                    assert_isUsable(testUndefined);
                }).to.throw(TypeError);

                expect(function() {
                    assert_isUsable(testNull);
                }).to.throw(TypeError);
            });
        }
    );
});
