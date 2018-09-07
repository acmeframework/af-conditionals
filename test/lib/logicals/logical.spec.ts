import "mocha";

import { expect } from "chai";

import {
    Conditional,
    isEmpty,
    isString,
    isUsable,
    Logical,
} from "../../../src/lib";

// tslint:disable:no-unused-expression

class TestLogical extends Logical {
    constructor(newAssertMsg = "is not logical.") {
        super(newAssertMsg);
    }

    protected _test(
        lhsValue: any,
        lhs: Conditional | undefined,
        rhsValue: any,
        rhs: Conditional
    ): boolean {
        return (isUsable.test(lhs) ? lhs!.test(lhsValue) : lhsValue)
            && rhs.test(rhsValue);
    }
}

describe("Logical Class", function () {
    describe("Tests the functionality of the class", function () {
        it("Tests the assert/test methods", function () {
            const tl = new TestLogical();

            expect(tl).to.be.an.instanceof(TestLogical);
            expect(function () {
                tl.assert([
                    {
                        condition: isUsable,
                        value: "Hello"
                    },
                    {
                        condition: isString
                    }
                ]);
            }).to.not.throw();

            expect(function () {
                tl.assert([
                    {
                        condition: isUsable,
                        value: undefined
                    },
                    {
                        condition: isEmpty
                    }
                ]);
            }).to.throw(TypeError);

            expect(function () {
                tl.assert([
                    {
                        condition: isUsable,
                        value: "Hello"
                    },
                    {
                        condition: isEmpty
                    }
                ]);
            }).to.throw(TypeError);

            expect(function () {
                tl.assert([
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

            expect(function () {
                tl.assert([]);
            }).to.throw(TypeError);

            expect(function () {
                //@ts-ignore
                tl.assert("Nope");
            }).to.throw(TypeError);
        });
    });
});
