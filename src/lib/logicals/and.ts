import { Conditional, isUsable } from "../conditionals";
import { Logical } from "./logical";

export class And extends Logical {

    constructor(
        newAssertMsg = "The operands when AND'd together are not true"
    ) {
        super(newAssertMsg);
    }

    protected _test(
        lhsValue: any,
        lhs: Conditional | undefined,
        rhsValue: any,
        rhs: Conditional
    ): boolean {
        return (isUsable.test(lhs) ? lhs!.test(lhsValue) : lhsValue)
            && rhs.test(rhsValue);
    }
}

export let and = new And();
