import { assert_conditional, Conditional } from './conditional';

export class IsFalsey extends Conditional {
    public test(value: any): boolean {
        return !value;
    }
}

export let isFalseyInstance = new IsFalsey();

export function isFalsey(value: any): boolean {
    return isFalseyInstance.test(value);
}

export function assert_isFalsey(
    value: any,
    assertMsg = 'is not falsey.'
): void {
    assert_conditional(value, isFalseyInstance, assertMsg);
}
