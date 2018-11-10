import { Comparison } from "./comparison";
export declare class Equal extends Comparison {
    test(value1: any, value2: any): boolean;
}
export declare let eqInstance: Equal;
export declare function eq(value1: any, value2: any): boolean;
export declare function assert_eq(value1: any, value2: any, assertMsg?: string): void;
