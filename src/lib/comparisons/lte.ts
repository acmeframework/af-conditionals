import {
    assert_comparison,
    COMPARE_EQUAL,
    COMPARE_LESS_THAN,
    Comparison,
} from './comparison';

export class LessThanOrEqual extends Comparison {
    public test(value1: any, value2: any): boolean {
        return super.test(value1, value2, [COMPARE_LESS_THAN, COMPARE_EQUAL]);
    }
}

export let lteInstance = new LessThanOrEqual();

export function lte(value1: any, value2: any): boolean {
    return lteInstance.test(value1, value2);
}

export function assert_lte(value1: any, value2: any, assertMsg?: string): void {
    assert_comparison(
        value1,
        value2,
        lteInstance,
        [COMPARE_LESS_THAN, COMPARE_EQUAL],
        assertMsg
    );
}
