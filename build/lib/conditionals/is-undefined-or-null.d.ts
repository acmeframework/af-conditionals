import { Conditional } from "./conditional";
export declare class IsUndefinedOrNull extends Conditional {
    test(value: any): boolean;
}
export declare let isUndefinedOrNullInstance: IsUndefinedOrNull;
export declare function isUndefinedOrNull(value: any): boolean;
export declare function assert_isUndefinedOrNull(value: any, assertMsg?: string): void;
