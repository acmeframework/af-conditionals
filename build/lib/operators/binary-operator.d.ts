import { Operator } from "./operator";
export declare abstract class BinaryOperator extends Operator {
    abstract apply(value1: any, value2: any): any;
}
