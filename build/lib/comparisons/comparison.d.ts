export declare const COMPARE_EQUAL = 0;
export declare const COMPARE_GREATER_THAN = 1;
export declare const COMPARE_LESS_THAN = -1;
export declare class Comparison {
    protected assertMsg: string;
    constructor(assertMsg?: string);
    assert(value1: any, value2: any, expectedResult?: number): void;
    compare(value1: any, value2: any): number;
    test(value1: any, value2: any, expectedResult?: number): boolean;
    protected _compareArray(value1: Array<any>, value2: Array<any>): number;
    protected _compareBasic(value1: string | number, value2: string | number): number;
    protected _compareBoolean(value1: boolean, value2: boolean): number;
    protected _compareDifferentTypes(value1: any, value2: any): number;
    protected _compareObject(value1: object, value2: object): 0 | 1 | -1;
}
