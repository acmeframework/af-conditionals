import { Conditional, isUsable } from "../conditionals";
import { Logical } from "./logical";

export class Or extends Logical {

    constructor(
        newAssertMsg = "The operands when OR'd together are not true."
    ) {
        super(newAssertMsg);
    }

    protected stopTesting(result: boolean): boolean {
        return result;
    }

    protected _test(
        lhsValue: any,
        lhs: Conditional | undefined,
        rhsValue: any,
        rhs: Conditional
    ): boolean {
        return (isUsable.test(lhs) ? lhs!.test(lhsValue) : lhsValue)
            || rhs.test(rhsValue);
    }
}

export let or = new Or();
