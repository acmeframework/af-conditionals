import 'mocha';

import { expect } from 'chai';

import {
  assert_logical,
  Conditional,
  isEmptyInstance,
  isStringInstance,
  isUsable,
  isUsableInstance,
  Logical,
} from '../../../src/lib';

class TestLogical extends Logical {
  protected _test(
    lhsValue: any,
    lhs: Conditional | undefined,
    rhsValue: any,
    rhs: Conditional
  ): boolean {
    return (
      (isUsable(lhs) ? lhs!.test(lhsValue) : lhsValue) && rhs.test(rhsValue) // eslint-disable-line @typescript-eslint/no-non-null-assertion
    );
  }
}

describe('Logical Class', function () {
  describe('Tests the functionality of the class', function () {
    it('Tests the assert/test methods', function () {
      const tl = new TestLogical();

      expect(tl).to.be.an.instanceof(TestLogical);
      expect(function () {
        assert_logical(
          [
            {
              condition: isUsableInstance,
              value: 'Hello',
            },
            {
              condition: isStringInstance,
            },
          ],
          tl,
          'What???'
        );
      }).to.not.throw();

      expect(function () {
        assert_logical(
          [
            {
              condition: isUsableInstance,
              value: undefined,
            },
            {
              condition: isEmptyInstance,
            },
          ],
          tl
        );
      }).to.throw(TypeError);

      expect(function () {
        assert_logical(
          [
            {
              condition: isUsableInstance,
              value: 'Hello',
            },
            {
              condition: isEmptyInstance,
            },
          ],
          tl
        );
      }).to.throw(TypeError);

      expect(function () {
        assert_logical(
          [
            {
              condition: isUsableInstance,
              value: 'Hello',
            },
            {
              condition: isStringInstance,
            },
            {
              condition: isEmptyInstance,
            },
          ],
          tl
        );
      }).to.throw(TypeError);

      expect(function () {
        assert_logical([], tl);
      }).to.throw(TypeError);

      expect(function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        assert_logical('Nope', tl);
      }).to.throw(TypeError);
    });
  });
});
