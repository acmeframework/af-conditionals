import { assert_conditional, Conditional } from './conditional';
import { isUndefinedOrNull } from './is-undefined-or-null';

export class IsUsable extends Conditional {
  public test(value: any): boolean {
    return !isUndefinedOrNull(value);
  }
}

export let isUsableInstance = new IsUsable(); // eslint-disable-line prefer-const

export function isUsable(value: any): boolean {
  return isUsableInstance.test(value);
}

export function assert_isUsable(
  value: any,
  assertMsg = 'is not usable (it is undefined or null).'
): void {
  assert_conditional(value, isUsableInstance, assertMsg);
}
