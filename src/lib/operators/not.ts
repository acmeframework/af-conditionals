import { UnaryOperator } from "./unary-operator";

export class Not extends UnaryOperator {
    public apply(value: any): boolean {
        return !value;
    }
}

export let notInstance = new Not();

export function not(value: any): boolean {
    return notInstance.apply(value);
}
