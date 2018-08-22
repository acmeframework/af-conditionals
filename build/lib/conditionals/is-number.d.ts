import { Conditional } from "./conditional";
export declare class IsNumber extends Conditional {
    constructor(newAssertMsg?: string);
    test(value: any): boolean;
}
export declare let isNumber: IsNumber;
