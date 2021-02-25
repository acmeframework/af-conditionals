import typeDetect from 'type-detect';

import { assert_conditional, Conditional } from './conditional';

export class IsNumber extends Conditional {
  public test(value: any): boolean {
    const valueType = typeDetect(value);
    return valueType === 'number' || valueType === 'Number';
  }
}

export let isNumberInstance = new IsNumber(); // eslint-disable-line prefer-const

export function isNumber(value: any): boolean {
  return isNumberInstance.test(value);
}

export function assert_isNumber(
  value: any,
  assertMsg = 'is not a number.'
): void {
  assert_conditional(value, isNumberInstance, assertMsg);
}
