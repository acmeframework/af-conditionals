import { Operator } from './operator';

export abstract class BinaryOperator extends Operator {
    public abstract apply(value1: any, value2: any): any;
}
