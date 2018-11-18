import { Conditional } from "./conditional";
export declare class IsTruthy extends Conditional {
    test(value: any): boolean;
}
export declare let isTruthyInstance: IsTruthy;
export declare function isTruthy(value: any): boolean;
export declare function assert_isTruthy(value: any, assertMsg?: string): void;
