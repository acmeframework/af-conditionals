import { Conditional } from "./conditional";

export class IsArray extends Conditional {

    constructor(newAssertMsg = "is not an array.") {
        super(newAssertMsg);
    }

    public test(value: any): boolean {
        return typeof value !== "undefined" &&
            value !== null &&
            Object.prototype.toString.call(value) === "[object Array]";
    }
}

export let isArray = new IsArray();
