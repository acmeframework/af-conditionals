import typeDetect from 'type-detect';

import { assert_conditional, Conditional } from './conditional';
import { isArray } from './is-array';
import { isFunction } from './is-function';
import { isUsable } from './is-usable';

export class IsObject extends Conditional {
  public test(value: any): boolean {
    return (
      isUsable(value) &&
      typeDetect(value) === 'Object' &&
      !isFunction(value) &&
      !isArray(value)
    );
  }
}

export let isObjectInstance = new IsObject(); // eslint-disable-line prefer-const

export function isObject(value: any): boolean {
  return isObjectInstance.test(value);
}

export function assert_isObject(
  value: any,
  assertMsg = 'is not an Object.'
): void {
  assert_conditional(value, isObjectInstance, assertMsg);
}
