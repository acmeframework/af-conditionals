import { Conditional } from "./conditional";
export declare class IsUndefinedOrNull extends Conditional {
    constructor(newAssertMsg?: string);
    test(value: any): boolean;
}
export declare let isUndefinedOrNull: IsUndefinedOrNull;
