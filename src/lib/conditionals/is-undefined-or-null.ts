import { Conditional } from "./conditional";

export class IsUndefinedOrNull extends Conditional {

    constructor(newAssertMsg = "is not undefined or null.") {
        super(newAssertMsg);
    }

    public test(value: any): boolean {
        return typeof value === "undefined" || value === null;
    }
}

export let isUndefinedOrNull = new IsUndefinedOrNull();
