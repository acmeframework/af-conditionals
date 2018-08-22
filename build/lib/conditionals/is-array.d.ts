import { Conditional } from "./conditional";
export declare class IsArray extends Conditional {
    constructor(newAssertMsg?: string);
    test(value: any): boolean;
}
export declare let isArray: IsArray;
