import { assert_comparison, COMPARE_EQUAL, Comparison } from './comparison';

export class Equal extends Comparison {
    public test(value1: any, value2: any): boolean {
        return super.test(value1, value2, [COMPARE_EQUAL]);
    }
}

export let eqInstance = new Equal();

export function eq(value1: any, value2: any): boolean {
    return eqInstance.test(value1, value2);
}

export function assert_eq(value1: any, value2: any, assertMsg?: string): void {
    assert_comparison(value1, value2, eqInstance, [COMPARE_EQUAL], assertMsg);
}
