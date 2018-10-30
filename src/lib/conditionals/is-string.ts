import { assert_conditional, Conditional } from "./conditional";

export class IsString extends Conditional {
    public test(value: any): boolean {
        return typeof value === "string";
    }
}

export let isStringInstance = new IsString();

export function isString(value: any): boolean {
    return isStringInstance.test(value);
}

export function assert_isString(
    value: any,
    assertMsg = "is not a string."
): void {
    assert_conditional(value, isStringInstance, assertMsg);
}
