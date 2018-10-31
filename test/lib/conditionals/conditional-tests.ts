import "mocha";

import { expect } from "chai";

import { Conditional } from "../../../src/lib";

export const testString = "This is a string";
export const testEmptyString = "";
export const testNumber = 102696;
export const testEmptyNumber = NaN;
export const testBoolean = true;

export const testObject = {
    field1: "Hello",
    field2: 1234
};

export const testFunction = (arg1: number, arg2: number): number => {
    return arg1 + arg2;
};

export const testArray = ["1", "2", "3", "4"];

export const testUndefined: any = undefined;

// tslint:disable-next-line:no-null-keyword
export const testNull: any = null;

const testNames = [
    "string",
    "empty string",
    "number",
    "empty number",
    "boolean",
    "object",
    "function",
    "array",
    "undefined",
    "null"
];

export const testItems = [
    testString,
    testEmptyString,
    testNumber,
    testEmptyNumber,
    testBoolean,
    testObject,
    testFunction,
    testArray,
    testUndefined,
    testNull
];

export class TestConditional {

    constructor(
        protected conditionalName: string,
        protected testObj: Conditional,
        protected testMap: boolean[]
    ) { }

    public test(): void {
        const self = this;

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < testItems.length; i++) {
            it("tests that " + this.conditionalName +
                " tests " + testNames[i] +
                " and resolves as " + this.testMap[i],
                function() {
                    expect(self.testObj.test(testItems[i]))
                        .to.equal(self.testMap[i]);
                });
        }
    }
}
