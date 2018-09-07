import { Conditional } from "../conditionals";
export interface LogicalTuple {
    value?: any;
    condition: Conditional;
}
export declare abstract class Logical {
    protected assertMsg: string;
    constructor(assertMsg: string);
    assert(operands: LogicalTuple[]): void;
    test(operands: LogicalTuple[]): boolean;
    protected stopTesting(result: boolean): boolean;
    protected abstract _test(lhsValue: any, lhs: Conditional | undefined, rhsValue: any, rhs: Conditional): boolean;
}
