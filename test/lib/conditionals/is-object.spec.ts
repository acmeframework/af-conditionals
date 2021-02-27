import { expect } from 'chai';

import { assert_isObject, isObjectInstance } from '../../../src/lib';
import { TestConditional, testObject, testString } from './conditional-tests';

const testItemsResultsMap = [
  false, // string
  false, // empty string
  false, // number
  false, // empty number
  false, // boolean
  true, // object
  false, // function
  false, // array
  false, // undefined
  false, // null
];

describe('IsObject class', function () {
  describe(
    'tests various values to determine if IsObject functions ' + 'properly...',
    function () {
      const tc = new TestConditional(
        'isObject',
        isObjectInstance,
        testItemsResultsMap
      );
      tc.test();

      it('uses assert_isObject to test', function () {
        expect(function () {
          assert_isObject(testObject);
        }).to.not.throw();

        expect(function () {
          assert_isObject(testString);
        }).to.throw(TypeError);
      });
    }
  );
});
