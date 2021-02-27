import { expect } from 'chai';

import { assert_isTruthy, isTruthy, isTruthyInstance } from '../../../src/lib';
import {
  TestConditional,
  testEmptyString,
  testNumber,
  testUndefined,
} from './conditional-tests';

const testItemsResultsMap = [
  true, // string
  false, // empty string
  true, // number
  false, // empty number
  true, // boolean
  true, // object
  true, // function
  true, // array
  false, // undefined
  false, // null
];

describe('IsTruthy class', function () {
  describe(
    'tests various values to determine if IsTruthy functions ' + 'properly...',
    function () {
      const tc = new TestConditional(
        'isTruthy',
        isTruthyInstance,
        testItemsResultsMap
      );
      tc.test();

      it('uses assert_isTruthy to test', function () {
        expect(function () {
          assert_isTruthy(testNumber);
        }).to.not.throw();

        expect(function () {
          assert_isTruthy(testUndefined);
        }).to.throw(TypeError);
      });
    }
  );

  describe('tests the isTruthy function', function () {
    it('uses the isTruthy function', function () {
      expect(isTruthy(testNumber)).to.be.true;
      expect(isTruthy(testEmptyString)).to.be.false;
    });
  });
});
