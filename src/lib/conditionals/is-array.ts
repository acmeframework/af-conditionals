import { assert_conditional, Conditional } from "./conditional";

export class IsArray extends Conditional {
    public test(value: any): boolean {
        return typeof value !== "undefined" &&
            value !== null &&
            Object.prototype.toString.call(value) === "[object Array]";
    }
}

export let isArrayInstance = new IsArray();

export function isArray(value: any): boolean {
    return isArrayInstance.test(value);
}

export function assert_isArray(
    value: any,
    assertMsg = "is not an array."
): void {
    assert_conditional(value, isArrayInstance, assertMsg);
}
