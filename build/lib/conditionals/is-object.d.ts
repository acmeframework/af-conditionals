import { Conditional } from "./conditional";
export declare class IsObject extends Conditional {
    constructor(newAssertMsg?: string);
    test(value: any): boolean;
}
export declare let isObject: IsObject;
