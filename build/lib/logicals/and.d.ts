import { Conditional } from "../conditionals";
import { Logical } from "./logical";
export declare class And extends Logical {
    constructor(newAssertMsg?: string);
    protected _test(lhsValue: any, lhs: Conditional | undefined, rhsValue: any, rhs: Conditional): boolean;
}
export declare let and: And;
