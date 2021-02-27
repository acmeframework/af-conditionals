import {
  assert_comparison,
  COMPARE_GREATER_THAN,
  Comparison,
} from './comparison';

export class GreaterThan extends Comparison {
  public test(value1: any, value2: any): boolean {
    return super.test(value1, value2, COMPARE_GREATER_THAN);
  }
}

export let gtInstance = new GreaterThan(); // eslint-disable-line prefer-const

export function gt(value1: any, value2: any): boolean {
  return gtInstance.test(value1, value2);
}

export function assert_gt(value1: any, value2: any, assertMsg?: string): void {
  assert_comparison(
    value1,
    value2,
    gtInstance,
    [COMPARE_GREATER_THAN],
    assertMsg
  );
}
