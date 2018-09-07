import { isArray, isNumber, isObject, isString } from "../conditionals";

export const COMPARE_EQUAL = 0;
export const COMPARE_GREATER_THAN = 1;
export const COMPARE_LESS_THAN = -1;

export class Comparison {

    constructor(
        protected assertMsg = "Comparison did not meet expectations."
    ) { }

    public assert(value1: any, value2: any, expectedResult?: number): void {
        expectedResult = expectedResult || COMPARE_EQUAL;
        if (this.compare(value1, value2) !== expectedResult) {
            throw new TypeError(this.assertMsg);
        }
    }

    public compare(value1: any, value2: any): number {
        if (typeof value1 === typeof value2) {
            if (isString.test(value1) || isNumber.test(value1)) {
                return this._compareBasic(value1, value2);
            } else if (typeof value1 === "boolean") {
                return this._compareBoolean(value1, value2);
            } else if (isObject.test(value1)) {
                return this._compareObject(value1, value2);
            } else if (isArray.test(value1)) {
                return this._compareArray(value1, value2);
            }
        }
        // This does a coerced comparison so it is no better than the standard
        // Javascript == > < comparison.
        return this._compareDifferentTypes(value1, value2);
    }

    public test(value1: any, value2: any, expectedResult?: number): boolean {
        expectedResult = expectedResult || COMPARE_EQUAL;
        return this.compare(value1, value2) === expectedResult;
    }

    protected _compareArray(value1: Array<any>, value2: Array<any>): number {
        if (value1.length === value2.length) return COMPARE_EQUAL;
        if (value1.length > value2.length) return COMPARE_GREATER_THAN;
        return COMPARE_LESS_THAN;
    }

    protected _compareBasic(
        value1: string | number,
        value2: string | number
    ): number {
        if (value1 === value2) return COMPARE_EQUAL;
        if (value1 > value2) return COMPARE_GREATER_THAN;
        return COMPARE_LESS_THAN;
    }

    protected _compareBoolean(value1: boolean, value2: boolean): number {
        if (value1 === value2) return COMPARE_EQUAL;
        if (value1) return COMPARE_GREATER_THAN;
        return COMPARE_LESS_THAN;
    }

    protected _compareDifferentTypes(value1: any, value2: any): number {
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
