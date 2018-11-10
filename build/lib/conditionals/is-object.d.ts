import { Conditional } from "./conditional";
export declare class IsObject extends Conditional {
    test(value: any): boolean;
}
export declare let isObjectInstance: IsObject;
export declare function isObject(value: any): boolean;
export declare function assert_isObject(value: any, assertMsg?: string): void;
