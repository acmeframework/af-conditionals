import { Operator } from "./operator";
export declare abstract class UnaryOperator extends Operator {
    abstract apply(value: any): any;
}
