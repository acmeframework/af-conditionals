import { Conditional } from "./conditional";
export declare class IsArray extends Conditional {
    test(value: any): boolean;
}
export declare let isArrayInstance: IsArray;
export declare function isArray(value: any): boolean;
export declare function assert_isArray(value: any, assertMsg?: string): void;
