import "mocha";

import { expect } from "chai";

import { not } from "../../../src/lib";

describe("Tests the NOT class", function () {
    describe("Tests the functionality of the class", function () {
        it("performs a boolean not on a value", function () {
            expect(not.apply(true)).to.be.false;
            expect(not.apply(false)).to.be.true;
        });
    });
});
