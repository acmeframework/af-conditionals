import { UnaryOperator } from "./unary-operator";
export declare class Not extends UnaryOperator {
    apply(value: any): boolean;
}
export declare let notInstance: Not;
export declare function not(value: any): boolean;
