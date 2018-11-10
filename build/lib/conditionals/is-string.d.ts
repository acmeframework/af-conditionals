import { Conditional } from "./conditional";
export declare class IsString extends Conditional {
    test(value: any): boolean;
}
export declare let isStringInstance: IsString;
export declare function isString(value: any): boolean;
export declare function assert_isString(value: any, assertMsg?: string): void;
