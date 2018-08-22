import { Conditional } from "./conditional";
export declare class IsEmpty extends Conditional {
    constructor(newAssertMsg?: string);
    test(value: any): boolean;
    protected isNumberEmpty(value: number): boolean;
    protected isStringEmpty(value: string): boolean;
}
export declare let isEmpty: IsEmpty;
