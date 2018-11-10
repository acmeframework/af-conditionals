import { Comparison } from "./comparison";
export declare class GreaterThanOrEqual extends Comparison {
    test(value1: any, value2: any): boolean;
}
export declare let gteInstance: GreaterThanOrEqual;
export declare function gte(value1: any, value2: any): boolean;
export declare function assert_gte(value1: any, value2: any, assertMsg?: string): void;
