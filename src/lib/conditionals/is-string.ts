import { Conditional } from "./conditional";

export class IsString extends Conditional {

    constructor(newAssertMsg = "is not a string.") {
        super(newAssertMsg);
    }

    public test(value: any): boolean {
        return typeof value === "string";
    }
}

export let isString = new IsString();
