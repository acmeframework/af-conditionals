import { assert_conditional, Conditional } from './conditional';

export class IsTruthy extends Conditional {
    public test(value: any): boolean {
        return !!value;
    }
}

export let isTruthyInstance = new IsTruthy();

export function isTruthy(value: any): boolean {
    return isTruthyInstance.test(value);
}

export function assert_isTruthy(
    value: any,
    assertMsg = 'is not truthy.'
): void {
    assert_conditional(value, isTruthyInstance, assertMsg);
}
