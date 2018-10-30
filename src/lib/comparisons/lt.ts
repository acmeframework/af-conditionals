import {
    assert_comparison,
    COMPARE_LESS_THAN,
    Comparison,
} from "./comparison";

export class LessThan extends Comparison {
    public test(value1: any, value2: any): boolean {
        return super.test(value1, value2, [COMPARE_LESS_THAN]);
    }
}

export let ltInstance = new LessThan();

export function lt(value1: any, value2: any): boolean {
    return ltInstance.test(value1, value2);
}

export function assert_lt(value1: any, value2: any, assertMsg?: string): void {
    assert_comparison(
        value1,
        value2,
        ltInstance,
        [COMPARE_LESS_THAN],
        assertMsg
    );
}
