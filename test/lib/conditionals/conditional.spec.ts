import { expect } from "chai";
import "mocha";

import { Conditional } from "../../../src/lib";

// tslint:disable:no-unused-expression

class TestConditional extends Conditional {
    constructor(newAssertMsg = "is not defined.") {
        super(newAssertMsg);
    }

    public test(value: any): boolean {
        // tslint:disable-next-line:no-console
        return typeof value !== "undefined";
    }
}

describe("Conditional Class", function() {
    describe("Tests the assert method", function() {
        const tc = new TestConditional();

        expect(tc).to.be.an.instanceof(TestConditional);
        expect(function() {
            tc.assert("Hello");
        }).to.not.throw();

        expect(function() {
            tc.assert(undefined);
        }).to.throw(TypeError);
    });
});
