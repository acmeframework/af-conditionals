import { Conditional, isUsable } from '../conditionals';
import { assert_logical, Logical, LogicalTuple } from './logical';

export class Or extends Logical {
  protected stopTesting(result: boolean): boolean {
    return result;
  }

  protected _test(
    lhsValue: any,
    lhs: Conditional | undefined,
    rhsValue: any,
    rhs: Conditional
  ): boolean {
    return (
      (isUsable(lhs) ? lhs!.test(lhsValue) : lhsValue) || rhs.test(rhsValue) // eslint-disable-line @typescript-eslint/no-non-null-assertion
    );
  }
}

export let orInstance = new Or(); // eslint-disable-line prefer-const

export function or(operands: LogicalTuple[]): boolean {
  return orInstance.test(operands);
}

export function assert_or(
  operands: LogicalTuple[],
  assertMsg = "The operands when OR'd together are not true."
): void {
  assert_logical(operands, orInstance, assertMsg);
}
