import { Conditional } from "./conditional";
export declare class IsUsable extends Conditional {
    constructor(newAssertMsg?: string);
    test(value: any): boolean;
}
export declare let isUsable: IsUsable;
