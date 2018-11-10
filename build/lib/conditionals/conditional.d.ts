export declare abstract class Conditional {
    abstract test(value: any): boolean;
}
export declare function assert_conditional(value: any, c: Conditional, assertMsg?: string): void;
