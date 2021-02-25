import { Conditional, isUsable } from '../conditionals';
import { assert_logical, Logical, LogicalTuple } from './logical';

export class And extends Logical {
  protected _test(
    lhsValue: any,
    lhs: Conditional | undefined,
    rhsValue: any,
    rhs: Conditional
  ): boolean {
    return (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (isUsable(lhs) ? lhs!.test(lhsValue) : lhsValue) && rhs.test(rhsValue)
    );
  }
}

export let andInstance = new And(); // eslint-disable-line prefer-const

export function and(operands: LogicalTuple[]): boolean {
  return andInstance.test(operands);
}

export function assert_and(
  operands: LogicalTuple[],
  assertMsg = "The operands when AND'd together are not true"
): void {
  assert_logical(operands, andInstance, assertMsg);
}
