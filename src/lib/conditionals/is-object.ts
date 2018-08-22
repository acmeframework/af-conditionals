import { Conditional } from "./conditional";
import { isArray } from "./is-array";
import { isFunction } from "./is-function";
import { isUsable } from "./is-usable";

export class IsObject extends Conditional {
    constructor(newAssertMsg = "is not an object.") {
        super(newAssertMsg);
    }

    public test(value: any): boolean {
        return isUsable.test(value) &&
            typeof value === "object" &&
            !isFunction.test(value) &&
            !isArray.test(value);
    }
}

export let isObject = new IsObject();
