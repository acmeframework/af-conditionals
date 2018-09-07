import { UnaryOperator } from "./unary-operator";

export class Not extends UnaryOperator {

    public apply(value: any): boolean {
        return !value;
    }

}

export let not = new Not();
