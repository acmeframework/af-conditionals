import 'mocha';

import { expect } from 'chai';

import {
  and,
  assert_and,
  isEmptyInstance,
  isStringInstance,
  isUsableInstance,
} from '../../../src/lib';

describe('Tests logical And class', function () {
  describe('Tests the functionality of the class', function () {
    it('tests the assert_and method', function () {
      expect(function () {
        assert_and([
          {
            condition: isUsableInstance,
            value: 'Hello',
          },
          {
            condition: isStringInstance,
          },
        ]);
      }).to.not.throw();

      expect(function () {
        assert_and([
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
        ]);
      }).to.throw(TypeError);
    });

    it('tests the and function', function () {
      expect(
        and([
          {
            condition: isUsableInstance,
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
