import { Conditional } from "../conditionals";
import { Logical, LogicalTuple } from "./logical";
export declare class Or extends Logical {
    protected stopTesting(result: boolean): boolean;
    protected _test(lhsValue: any, lhs: Conditional | undefined, rhsValue: any, rhs: Conditional): boolean;
}
export declare let orInstance: Or;
export declare function or(operands: LogicalTuple[]): boolean;
export declare function assert_or(operands: LogicalTuple[], assertMsg?: string): void;
