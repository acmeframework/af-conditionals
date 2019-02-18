import 'mocha';

import { expect } from 'chai';

import { assert_gt, gt } from '../../../src/lib';

// tslint:disable:no-unused-expression

describe('Tests the GreaterThan class', function() {
    describe('Tests the functionality of the class', function() {
        const TEST_STRING_1 = '1234';
        const TEST_STRING_2 = '2345';

        it('tests equality using the test method', function() {
            expect(gt(TEST_STRING_1, TEST_STRING_1)).to.be.false;
            expect(gt(TEST_STRING_1, TEST_STRING_2)).to.be.false;
            expect(gt(TEST_STRING_2, TEST_STRING_1)).to.be.true;
        });

        it('uses assert_gt to test comparisons', function() {
            expect(function() {
                assert_gt(TEST_STRING_2, TEST_STRING_1);
            }).to.not.throw();

            expect(function() {
                assert_gt(TEST_STRING_1, TEST_STRING_2);
            }).to.throw(TypeError);
        });
    });
});
