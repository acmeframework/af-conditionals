import { Conditional } from "./conditional";
export declare class IsEmpty extends Conditional {
    test(value: any): boolean;
    protected isNumberEmpty(value: number): boolean;
    protected isStringEmpty(value: string): boolean;
}
export declare let isEmptyInstance: IsEmpty;
export declare function isEmpty(value: any): boolean;
export declare function assert_isEmpty(value: any, assertMsg?: string): void;
