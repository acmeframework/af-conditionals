import { Conditional } from "../conditionals";
import { Logical } from "./logical";
export declare class Or extends Logical {
    constructor(newAssertMsg?: string);
    protected stopTesting(result: boolean): boolean;
    protected _test(lhsValue: any, lhs: Conditional | undefined, rhsValue: any, rhs: Conditional): boolean;
}
export declare let or: Or;
