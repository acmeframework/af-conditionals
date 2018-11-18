import { Conditional } from "./conditional";
export declare class IsFalsey extends Conditional {
    test(value: any): boolean;
}
export declare let isFalseyInstance: IsFalsey;
export declare function isFalsey(value: any): boolean;
export declare function assert_isFalsey(value: any, assertMsg?: string): void;
