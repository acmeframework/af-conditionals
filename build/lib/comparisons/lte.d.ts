import { Comparison } from "./comparison";
export declare class LessThanOrEqual extends Comparison {
    test(value1: any, value2: any): boolean;
}
export declare let lteInstance: LessThanOrEqual;
export declare function lte(value1: any, value2: any): boolean;
export declare function assert_lte(value1: any, value2: any, assertMsg?: string): void;
