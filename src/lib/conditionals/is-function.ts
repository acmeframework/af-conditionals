import typeDetect from 'type-detect';

import { assert_conditional, Conditional } from './conditional';
import { isUsable } from './is-usable';

export class IsFunction extends Conditional {
    public test(value: any): boolean {
        return isUsable(value) &&
            typeDetect(value) === 'function';
    }
}

export let isFunctionInstance = new IsFunction();

export function isFunction(value: any): boolean {
    return isFunctionInstance.test(value);
}

export function assert_isFunction(
    value: any,
    assertMsg = 'is not a Function.'
): void {
    assert_conditional(value, isFunctionInstance, assertMsg);
}
