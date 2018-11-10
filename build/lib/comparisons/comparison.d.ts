export declare const COMPARE_EQUAL = 0;
export declare const COMPARE_GREATER_THAN = 1;
export declare const COMPARE_LESS_THAN = -1;
declare type StringOrNumber = string | number;
export declare class Comparison {
    compare(value1: any, value2: any, strict?: boolean): number;
    test(value1: any, value2: any, expectedResult?: number | number[], strict?: boolean): boolean;
    protected _compareArray<T = any>(value1: T[], value2: T[]): number;
    protected _compareBasic(value1: StringOrNumber, value2: StringOrNumber, strict: boolean): number;
    protected _compareBoolean(value1: boolean, value2: boolean): number;
    protected _compareDifferentTypes(value1: any, value2: any): number;
    protected _compareObject(value1: object, value2: object): 0 | 1 | -1;
}
export declare let comparisonInstance: Comparison;
export declare function compare(value1: any, value2: any, strict?: boolean): number;
export declare function assert_comparison(value1: any, value2: any, c: Comparison, expectedResult?: number | number[], assertMsg?: string): void;
export {};
