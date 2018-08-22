import { Conditional } from "./conditional";
import { isUsable } from "./is-usable";

export class IsFunction extends Conditional {

    constructor(newAssertMsg = "is not a function.") {
        super(newAssertMsg);
    }

    public test(value: any): boolean {
        return isUsable.test(value) &&
            typeof value === "function";
    }
}

export let isFunction = new IsFunction();
