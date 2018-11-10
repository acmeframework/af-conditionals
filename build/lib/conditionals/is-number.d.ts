import { Conditional } from "./conditional";
export declare class IsNumber extends Conditional {
    test(value: any): boolean;
}
export declare let isNumberInstance: IsNumber;
export declare function isNumber(value: any): boolean;
export declare function assert_isNumber(value: any, assertMsg?: string): void;
