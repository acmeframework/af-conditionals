import { Conditional, isArray, isUsable } from '../conditionals';

export interface LogicalTuple {
  value?: any;
  condition: Conditional;
}

export abstract class Logical {
  public test(operands: LogicalTuple[]): boolean {
    operands = this.validateTest(operands);

    const defaultValue = operands[0].value;
    let result = this._test(
      operands[0].value,
      operands[0].condition,
      operands[1].value || defaultValue,
      operands[1].condition
    );
    let i = 2;
    while (!this.stopTesting(result) && i < operands.length) {
      result = this._test(
        result,
        undefined,
        operands[i].value || defaultValue,
        operands[i].condition
      );
      i++;
    }
    return result;
  }

  protected validateTest(operands: LogicalTuple[]): LogicalTuple[] {
    if (!isArray(operands) || operands.length < 2) {
      throw new TypeError(
        'A logical test requires at least two operands to test.'
      );
    }
    if (!isUsable(operands[0].value)) {
      throw new TypeError(
        'You must supply at least one usable values to test.'
      );
    }
    return operands;
  }

  protected stopTesting(result: boolean): boolean {
    return !result;
  }

  protected abstract _test(
    lhsValue: any,
    lhs: Conditional | undefined,
    rhsValue: any,
    rhs: Conditional
  ): boolean;
}

export function assert_logical(
  operands: LogicalTuple[],
  l: Logical,
  assertMsg = 'Your logical assertion is not true.'
): void {
  if (!l.test(operands)) {
    throw new TypeError(assertMsg);
  }
}
