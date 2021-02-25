import typeDetect from 'type-detect';

import { assert_conditional, Conditional } from './conditional';
import { isUndefinedOrNull } from './is-undefined-or-null';

export class IsArray extends Conditional {
  public test(value: any): boolean {
<<<<<<< HEAD
    return !isUndefinedOrNull(value) && typeDetect(value) === 'Array';
=======
    return (
      typeDetect(value) !== 'undefined' &&
      value !== null &&
      typeDetect(value) === 'Array'
    );
>>>>>>> 8df2a3c... Migrated to eslint, reformatted w/Prettier
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
