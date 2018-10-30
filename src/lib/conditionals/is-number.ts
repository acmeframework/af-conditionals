import { assert_conditional, Conditional } from "./conditional";

export class IsNumber extends Conditional {
    public test(value: any): boolean {
        return typeof value === "number";
    }
}

export let isNumberInstance = new IsNumber();

export function isNumber(value: any): boolean {
    return isNumberInstance.test(value);
}

export function assert_isNumber(
    value: any,
    assertMsg = "is not a number."
): void {
    assert_conditional(value, isNumberInstance, assertMsg);
}
