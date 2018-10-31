import "mocha";

import { expect } from "chai";

import { assert_eq, eq } from "../../../src/lib";

// tslint:disable:no-unused-expression

describe("Tests the Equal class", function() {
    describe("Tests the functionality of the class", function() {
        const TEST_STRING_1 = "1234";
        const TEST_STRING_2 = "2345";

        it("tests equality using the test method", function() {
            expect(eq(TEST_STRING_1, TEST_STRING_1)).to.be.true;
            expect(eq(TEST_STRING_1, TEST_STRING_2)).to.be.false;
        });

        it("uses assert_eq to test comparisons", function() {
            expect(function() {
                assert_eq(TEST_STRING_1, TEST_STRING_1);
            }).to.not.throw();

            expect(function() {
                assert_eq(TEST_STRING_1, TEST_STRING_2);
            }).to.throw(TypeError);
        });
    });
});
