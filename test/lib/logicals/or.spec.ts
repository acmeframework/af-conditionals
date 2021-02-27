import 'mocha';

import { expect } from 'chai';

import {
  assert_or,
  isEmptyInstance,
  isFunctionInstance,
  isNumberInstance,
  isStringInstance,
  or,
} from '../../../src/lib';

describe('Tests logical Or class', function () {
  describe('Tests the functionality of the class', function () {
    it('tests the assert/test methods', function () {
      expect(function () {
        assert_or([
          {
            condition: isNumberInstance,
            value: 'Hello',
          },
          {
            condition: isStringInstance,
          },
        ]);
      }).to.not.throw();

      expect(function () {
        assert_or([
          {
            condition: isEmptyInstance,
            value: 'Hello',
          },
          {
            condition: isNumberInstance,
          },
          {
            condition: isFunctionInstance,
          },
        ]);
      }).to.throw(TypeError);
    });

    it('tests using the or function', function () {
      expect(
        or([
          {
            condition: isNumberInstance,
            value: 'Hello',
          },
          {
            condition: isStringInstance,
          },
        ])
      ).to.be.true;
    });
  });
});
