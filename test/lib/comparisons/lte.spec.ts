import "mocha";

import { expect } from "chai";

import { lte } from "../../../src/lib";

// tslint:disable:no-unused-expression

describe("Tests the LessThanOrEqual class", function() {
    describe("Tests the functionality of the class", function() {
        it("tests equality using the test method", function() {
            const TEST_STRING_1 = "1234";
            const TEST_STRING_2 = "2345";

            expect(lte(TEST_STRING_1, TEST_STRING_1)).to.be.true;
            expect(lte(TEST_STRING_1, TEST_STRING_2)).to.be.true;
            expect(lte(TEST_STRING_2, TEST_STRING_1)).to.be.false;
        });
    });
});
