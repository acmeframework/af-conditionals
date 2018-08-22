import { Conditional } from "./conditional";

export class IsNumber extends Conditional {

    constructor(newAssertMsg = "is not a number.") {
        super(newAssertMsg);
    }

    public test(value: any): boolean {
        return typeof value === "number";
    }
}

export let isNumber = new IsNumber();
