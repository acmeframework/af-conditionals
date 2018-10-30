import { assert_conditional, Conditional } from "./conditional";
import { isNumber } from "./is-number";
import { isString } from "./is-string";
import { isUsable } from "./is-usable";

export class IsEmpty extends Conditional {

    public test(value: any): boolean {
        if (!isUsable(value)) return true;
        if (isString(value)) {
            return this.isStringEmpty(value);
        } else if (isNumber(value)) {
            return this.isNumberEmpty(value);
        } else {
            return !Boolean(value);
        }
    }

    protected isNumberEmpty(value: number): boolean {
        return isNaN(value);
    }

    protected isStringEmpty(value: string): boolean {
        return value === "";
    }
}

export let isEmptyInstance = new IsEmpty();

export function isEmpty(value: any): boolean {
    return isEmptyInstance.test(value);
}

export function assert_isEmpty(
    value: any,
    assertMsg = "is not empty."
): void {
    assert_conditional(value, isEmptyInstance, assertMsg);
}
