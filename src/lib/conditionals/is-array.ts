import typeDetect from 'type-detect';

import { assert_conditional, Conditional } from './conditional';
import { isUndefinedOrNull } from './is-undefined-or-null';

export class IsArray extends Conditional {
  public test(value: any): boolean {
    return !isUndefinedOrNull(value) && typeDetect(value) === 'Array';
  }
}

export let isArrayInstance = new IsArray(); // eslint-disable-line prefer-const

export function isArray(value: any): boolean {
  return isArrayInstance.test(value);
}

export function assert_isArray(
  value: any,
  assertMsg = 'is not an array.'
): void {
  assert_conditional(value, isArrayInstance, assertMsg);
}
