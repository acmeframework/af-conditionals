import { Conditional } from "../conditionals";
import { Logical, LogicalTuple } from "./logical";
export declare class And extends Logical {
    protected _test(lhsValue: any, lhs: Conditional | undefined, rhsValue: any, rhs: Conditional): boolean;
}
export declare let andInstance: And;
export declare function and(operands: LogicalTuple[]): boolean;
export declare function assert_and(operands: LogicalTuple[], assertMsg?: string): void;
