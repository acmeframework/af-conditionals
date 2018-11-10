import { Conditional } from "./conditional";
export declare class IsFunction extends Conditional {
    test(value: any): boolean;
}
export declare let isFunctionInstance: IsFunction;
export declare function isFunction(value: any): boolean;
export declare function assert_isFunction(value: any, assertMsg?: string): void;
