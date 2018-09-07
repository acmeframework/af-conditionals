import "mocha";

import { expect } from "chai";

import { eq } from "../../../src/lib";


describe("Tests the Equal class", function () {
    describe("Tests the functionality of the class", function () {
        it("tests equality using the test method", function () {
            const TEST_STRING_1 = "1234";
            const TEST_STRING_2 = "2345";

            expect(eq.test(TEST_STRING_1, TEST_STRING_1))
                .to.be.true;
            expect(eq.test(TEST_STRING_1, TEST_STRING_2))
                .to.be.false;
        });
    });
});
