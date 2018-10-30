export abstract class Conditional {
    public abstract test(value: any): boolean;
}

export function assert_conditional(
    value: any,
    c: Conditional,
    assertMsg = "You condition was not met."
): void {
    if (!c.test(value)) {
        throw new TypeError(`${value} ${assertMsg}`);
    }
}
