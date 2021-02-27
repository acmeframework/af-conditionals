import typeDetect = require('type-detect');

import { assert_conditional, Conditional } from './conditional';

export class IsString extends Conditional {
  public test(value: any): boolean {
    const valueType = typeDetect(value);
    return valueType === 'string' || valueType === 'String';
  }
}

export let isStringInstance = new IsString(); // eslint-disable-line prefer-const

export function isString(value: any): boolean {
  return isStringInstance.test(value);
}

export function assert_isString(
  value: any,
  assertMsg = 'is not a string.'
): void {
  assert_conditional(value, isStringInstance, assertMsg);
}
