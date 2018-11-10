import { Conditional } from "../conditionals";
export interface LogicalTuple {
    value?: any;
    condition: Conditional;
}
export declare abstract class Logical {
    test(operands: LogicalTuple[]): boolean;
    protected stopTesting(result: boolean): boolean;
    protected abstract _test(lhsValue: any, lhs: Conditional | undefined, rhsValue: any, rhs: Conditional): boolean;
}
export declare function assert_logical(operands: LogicalTuple[], l: Logical, assertMsg?: string): void;
