import { Operator } from './operator';

export abstract class UnaryOperator extends Operator {
    public abstract apply(value: any): any;
}
