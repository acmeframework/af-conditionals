export declare abstract class Conditional {
    protected assertMsg: string;
    constructor(assertMsg: string);
    assert(value: any): void;
    abstract test(value: any): boolean;
}
