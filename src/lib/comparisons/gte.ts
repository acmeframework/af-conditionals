import {
    assert_comparison,
    COMPARE_EQUAL,
    COMPARE_GREATER_THAN,
    Comparison,
} from "./comparison";

export class GreaterThanOrEqual extends Comparison {
    public test(value1: any, value2: any): boolean {
        return super.test(
            value1,
            value2,
            [COMPARE_GREATER_THAN, COMPARE_EQUAL]
        );
    }
}

export let gteInstance = new GreaterThanOrEqual();

export function gte(value1: any, value2: any): boolean {
    return gteInstance.test(value1, value2);
}

export function assert_gte(value1: any, value2: any, assertMsg?: string): void {
    assert_comparison(
        value1,
        value2,
        gteInstance,
        [COMPARE_GREATER_THAN, COMPARE_EQUAL],
        assertMsg
    );
}
