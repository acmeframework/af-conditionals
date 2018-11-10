import { Comparison } from "./comparison";
export declare class GreaterThan extends Comparison {
    test(value1: any, value2: any): boolean;
}
export declare let gtInstance: GreaterThan;
export declare function gt(value1: any, value2: any): boolean;
export declare function assert_gt(value1: any, value2: any, assertMsg?: string): void;
