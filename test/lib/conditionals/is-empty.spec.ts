import { expect } from 'chai';

import { assert_isEmpty, isEmpty, isEmptyInstance } from '../../../src/lib';
import {
  TestConditional,
  testEmptyString,
  testString,
} from './conditional-tests';

const testItemsResultsMap = [
  false, // string
  true, // empty string
  false, // number
  true, // empty number
  false, // boolean
  false, // object
  false, // function
  false, // array
  true, // undefined
  true, // null
];

describe('IsEmpty class', function () {
  describe(
    'tests various values to determine if IsEmpty functions ' + 'properly...',
    function () {
      const tc = new TestConditional(
        'isEmpty',
        isEmptyInstance,
        testItemsResultsMap
      );
      tc.test();

      it('uses isEmpty (functoin) to test', function () {
        expect(isEmpty(testString)).to.be.false;
        expect(isEmpty(testEmptyString)).to.be.true;
      });

      it('uses assert_isEmpty to test', function () {
        expect(function () {
          assert_isEmpty(testEmptyString);
        }).to.not.throw();

        expect(function () {
          assert_isEmpty(testString);
        }).to.throw(TypeError);
      });
    }
  );
});
