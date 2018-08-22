import { Conditional } from "./conditional";
import { isUndefinedOrNull } from "./is-undefined-or-null";

export class IsUsable extends Conditional {
    constructor(newAssertMsg = "is not usable (it is undefined or null).") {
        super(newAssertMsg);
    }

    public test(value: any): boolean {
        return !isUndefinedOrNull.test(value);
    }
}

export let isUsable = new IsUsable();
