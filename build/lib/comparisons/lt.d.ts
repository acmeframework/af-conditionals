import { Comparison } from "./comparison";
export declare class LessThan extends Comparison {
    test(value1: any, value2: any): boolean;
}
export declare let ltInstance: LessThan;
export declare function lt(value1: any, value2: any): boolean;
export declare function assert_lt(value1: any, value2: any, assertMsg?: string): void;
