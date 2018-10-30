import "mocha";

import { expect } from "chai";

import {
    assert_comparison,
    COMPARE_EQUAL,
    COMPARE_GREATER_THAN,
    COMPARE_LESS_THAN,
    Comparison,
} from "../../../src/lib";

class TestObject {
    constructor(protected aValue: string) { }

    public valueOf(): string {
        return this.aValue;
    }
}

type TestItem = any[];

// tslint:disable:no-unused-expression

describe("Tests the Comparison class", function() {
    describe("Tests the construction of the class", function() {
        it("instantiates the class", function() {
            expect(new Comparison()).to.be.an.instanceof(Comparison);
        });
    });

    describe("Tests the functionality of the class", function() {
        const TEST_STRING_1 = "abcd";
        const TEST_STRING_2 = "bcde";
        const TEST_STRING_3 = "ABCD";
        const TEST_STRING_4 = "1234";
        const TEST_STRING_5 = "5432";

        const TEST_NUMBER_1 = 1234;
        const TEST_NUMBER_2 = 2345;

        const TEST_BOOLEAN_1 = true;
        const TEST_BOOLEAN_2 = false;

        const TEST_OBJECT_1 = new TestObject(TEST_STRING_1);
        const TEST_OBJECT_2 = new TestObject(TEST_STRING_2);
        const TEST_OBJECT_3 = new TestObject(TEST_STRING_3);

        const TEST_ARRAY_1 = [TEST_OBJECT_1, TEST_OBJECT_2];
        const TEST_ARRAY_2 = [TEST_OBJECT_1, TEST_OBJECT_2, TEST_OBJECT_3];

        const TEST_FUNCTION_1 = () => { return; };
        const TEST_FUNCTION_2 = () => { return; };

        const c = new Comparison();

        const equalComparisons: TestItem[] = [
            ["strings", TEST_STRING_1, TEST_STRING_1],
            ["numbers", TEST_NUMBER_1, TEST_NUMBER_1],
            ["booleans", TEST_BOOLEAN_1, TEST_BOOLEAN_1],
            ["objects", TEST_OBJECT_1, TEST_OBJECT_1],
            ["arrays", TEST_ARRAY_1, TEST_ARRAY_1],
            ["mixed - string/numnber", TEST_STRING_4, TEST_NUMBER_1]
        ];

        equalComparisons.forEach((testItems: TestItem) => {
            it("using compare, tests " + testItems[0] + " for equality",
                function() {
                    expect(c.compare(testItems[1], testItems[2]))
                        .to.eq(COMPARE_EQUAL);
                });
        });

        const greaterThanComparisons: TestItem[] = [
            ["strings", TEST_STRING_2, TEST_STRING_1],
            ["numbers", TEST_NUMBER_2, TEST_NUMBER_1],
            ["booleans", TEST_BOOLEAN_1, TEST_BOOLEAN_2],
            ["objects", TEST_OBJECT_2, TEST_OBJECT_1],
            ["arrays", TEST_ARRAY_2, TEST_ARRAY_1],
            ["mixed - string/number", TEST_STRING_5, TEST_NUMBER_1]
        ];

        greaterThanComparisons.forEach((testItems: TestItem) => {
            it("using compare, tests " + testItems[0] + " for greater than",
                function() {
                    expect(c.compare(testItems[1], testItems[2]))
                        .to.eq(COMPARE_GREATER_THAN);
                });
        });

        const lessThanComparisons: TestItem[] = [
            ["strings", TEST_STRING_1, TEST_STRING_2],
            ["numbers", TEST_NUMBER_1, TEST_NUMBER_2],
            ["booleans", TEST_BOOLEAN_2, TEST_BOOLEAN_1],
            ["objects", TEST_OBJECT_1, TEST_OBJECT_2],
            ["arrays", TEST_ARRAY_1, TEST_ARRAY_2],
            ["mixed - number/string", TEST_STRING_4, TEST_NUMBER_2]
        ];

        lessThanComparisons.forEach((testItems: TestItem) => {
            it("using compare, tests " + testItems[0] + " for less than",
                function() {
                    expect(c.compare(testItems[1], testItems[2]))
                        .to.eq(COMPARE_LESS_THAN);
                });
        });

        it("tests outside cases", function() {
            expect(c.compare(TEST_FUNCTION_1, TEST_FUNCTION_1))
                .to.eq(COMPARE_EQUAL);

            expect(c.compare(TEST_FUNCTION_1, TEST_FUNCTION_2))
                .to.not.eq(COMPARE_EQUAL);
        });

        it("uses assert/test to test comparisons", function() {
            expect(function() {
                assert_comparison(TEST_STRING_1, TEST_STRING_1, c);
            }).to.not.throw();

            expect(function() {
                assert_comparison(
                    TEST_STRING_1,
                    TEST_STRING_2,
                    c,
                    [COMPARE_EQUAL]
                );
            }).to.throw(TypeError);

            expect(c.test(TEST_STRING_1, TEST_STRING_1))
                .to.be.true;

            expect(c.test(TEST_STRING_1, TEST_STRING_2, COMPARE_EQUAL))
                .to.be.false;
        });
    });
});
