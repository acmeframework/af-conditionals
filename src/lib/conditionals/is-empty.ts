import { Conditional } from "./conditional";
import { isNumber } from "./is-number";
import { isString } from "./is-string";
import { isUsable } from "./is-usable";

export class IsEmpty extends Conditional {

    constructor(newAssertMsg = "is not empty") {
        super(newAssertMsg);
    }

    public test(value: any): boolean {
        if (!isUsable.test(value)) return true;
        if (isString.test(value)) {
            return this.isStringEmpty(value);
        } else if (isNumber.test(value)) {
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

export let isEmpty = new IsEmpty();
