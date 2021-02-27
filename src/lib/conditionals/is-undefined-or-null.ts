import typeDetect from 'type-detect';

import { assert_conditional, Conditional } from './conditional';

export class IsUndefinedOrNull extends Conditional {
  public test(value: any): boolean {
    return typeDetect(value) === 'undefined' || value === null;
  }
}

export let isUndefinedOrNullInstance = new IsUndefinedOrNull(); // eslint-disable-line prefer-const

export function isUndefinedOrNull(value: any): boolean {
  return isUndefinedOrNullInstance.test(value);
}

export function assert_isUndefinedOrNull(
  value: any,
  assertMsg = 'is not undefined or null.'
): void {
  assert_conditional(value, isUndefinedOrNullInstance, assertMsg);
}
