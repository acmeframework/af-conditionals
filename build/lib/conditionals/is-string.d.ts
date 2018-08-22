import { Conditional } from "./conditional";
export declare class IsString extends Conditional {
    constructor(newAssertMsg?: string);
    test(value: any): boolean;
}
export declare let isString: IsString;
