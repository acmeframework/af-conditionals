import 'mocha';

import { expect } from 'chai';

import { not } from '../../../src/lib';

describe('Tests the NOT class', function () {
  describe('Tests the functionality of the class', function () {
    it('performs a boolean not on a value', function () {
      expect(not(true)).to.be.false;
      expect(not(false)).to.be.true;
    });
  });
});
