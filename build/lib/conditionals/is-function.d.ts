import { Conditional } from "./conditional";
export declare class IsFunction extends Conditional {
    constructor(newAssertMsg?: string);
    test(value: any): boolean;
}
export declare let isFunction: IsFunction;
