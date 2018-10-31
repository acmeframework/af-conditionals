import { isArray, isNumber, isObject, isString } from "../conditionals";

export const COMPARE_EQUAL = 0;
export const COMPARE_GREATER_THAN = 1;
export const COMPARE_LESS_THAN = -1;

type StringOrNumber = string | number;

export class Comparison {
    public compare(value1: any, value2: any, strict = true): number {
        if (typeof value1 === typeof value2) {
            if (isString(value1) || isNumber(value1)) {
                return this._compareBasic(value1, value2, strict);
            } else if (typeof value1 === "boolean") {
                return this._compareBoolean(value1, value2);
            } else if (isObject(value1)) {
                return this._compareObject(value1, value2);
            } else if (isArray(value1)) {
                return this._compareArray(value1, value2);
            }
        }
        // This does a coerced comparison so it is no better than the standard
        // Javascript == > < comparison.
        return this._compareDifferentTypes(value1, value2);
    }

    public test(
        value1: any,
        value2: any,
        expectedResult?: number | number[],
        strict = true
    ): boolean {
        expectedResult = expectedResult || [COMPARE_EQUAL];
        if (!isArray(expectedResult)) {
            expectedResult = [(expectedResult as number)];
        }
        const result = this.compare(value1, value2, strict);
        let expected = false;
        // tslint:disable-next-line
        for (const aResult of (expectedResult as Array<number>)) {
            expected = expected || result === aResult;
            if (expected) break;
        }
        return expected;
    }

    protected _compareArray<T = any>(value1: T[], value2: T[]): number {
        if (value1.length === value2.length) return COMPARE_EQUAL;
        if (value1.length > value2.length) return COMPARE_GREATER_THAN;
        return COMPARE_LESS_THAN;
    }

    protected _compareBasic(
        value1: StringOrNumber,
        value2: StringOrNumber,
        strict: boolean
    ): number {
        let testValue1 = value1;
        let testValue2 = value2;
        if (isString(value1) && !strict) {
            testValue1 = (value1 as string).toLocaleLowerCase();
            testValue2 = (value2 as string).toLocaleLowerCase();
        }
        if (testValue1 === testValue2) return COMPARE_EQUAL;
        if (testValue1 > testValue2) return COMPARE_GREATER_THAN;
        return COMPARE_LESS_THAN;
    }

    protected _compareBoolean(value1: boolean, value2: boolean): number {
        if (value1 === value2) return COMPARE_EQUAL;
        if (value1) return COMPARE_GREATER_THAN;
        return COMPARE_LESS_THAN;
    }

    protected _compareDifferentTypes(value1: any, value2: any): number {
        // tslint:disable-next-line:triple-equals
        if (value1 == value2) return COMPARE_EQUAL;
        if (value1 > value2) return COMPARE_GREATER_THAN;
        return COMPARE_LESS_THAN;
    }

    protected _compareObject(value1: object, value2: object) {
        const _value1 = value1.valueOf();
        const _value2 = value2.valueOf();
        if (_value1 === _value2) return COMPARE_EQUAL;
        if (_value1 > _value2) return COMPARE_GREATER_THAN;
        return COMPARE_LESS_THAN;
    }
}

export let comparisonInstance = new Comparison();

export function compare(value1: any, value2: any, strict = true): number {
    return comparisonInstance.compare(value1, value2, strict);
}

export function assert_comparison(
    value1: any,
    value2: any,
    c: Comparison,
    expectedResult?: number | number[],
    assertMsg = "Comparison did not meet expectations."
): void {
    if (!c.test(value1, value2, expectedResult)) {
        throw new TypeError(assertMsg);
    }
}
