import { Conditional } from "./conditional";
export declare class IsUsable extends Conditional {
    test(value: any): boolean;
}
export declare let isUsableInstance: IsUsable;
export declare function isUsable(value: any): boolean;
export declare function assert_isUsable(value: any, assertMsg?: string): void;
