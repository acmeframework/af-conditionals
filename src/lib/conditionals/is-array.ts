import typeDetect from 'type-detect';

import { assert_conditional, Conditional } from './conditional';

export class IsArray extends Conditional {
    public test(value: any): boolean {
        return typeDetect(value) !== 'undefined' &&
            value !== null &&
            typeDetect(value) === 'Array';
    }
}

export let isArrayInstance = new IsArray();

export function isArray(value: any): boolean {
    return isArrayInstance.test(value);
}

export function assert_isArray(
    value: any,
    assertMsg = 'is not an array.'
): void {
    assert_conditional(value, isArrayInstance, assertMsg);
}
