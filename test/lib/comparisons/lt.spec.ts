import 'mocha';

import { expect } from 'chai';

import { assert_lt, lt } from '../../../src/lib';

describe('Tests the LessThan class', function () {
  describe('Tests the functionality of the class', function () {
    const TEST_STRING_1 = '1234';
    const TEST_STRING_2 = '2345';

    it('tests equality using the test method', function () {
      expect(lt(TEST_STRING_1, TEST_STRING_1)).to.be.false;
      expect(lt(TEST_STRING_1, TEST_STRING_2)).to.be.true;
      expect(lt(TEST_STRING_2, TEST_STRING_1)).to.be.false;
    });

    it('uses assert_lt to test comparisons', function () {
      expect(function () {
        assert_lt(TEST_STRING_1, TEST_STRING_2);
      }).to.not.throw();

      expect(function () {
        assert_lt(TEST_STRING_2, TEST_STRING_1);
      }).to.throw(TypeError);
    });
  });
});
