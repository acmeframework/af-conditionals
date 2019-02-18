import { expect } from 'chai';

import { assert_isFalsey, isFalsey, isFalseyInstance } from '../../../src/lib';
import {
    TestConditional,
    testEmptyString,
    testNumber,
    testUndefined,
} from './conditional-tests';

const testItemsResultsMap = [
    false, // string
    true,  // empty string
    false, // number
    true,  // empty number
    false, // boolean
    false, // object
    false, // function
    false, // array
    true,  // undefined
    true   // null
];

// tslint:disable:no-unused-expression

describe('IsFalsey class', function() {

    describe('tests various values to determine if IsFalsey functions '
        + 'properly...',
        function() {
            const tc = new TestConditional(
                'IsFalsey',
                isFalseyInstance,
                testItemsResultsMap
            );
            tc.test();

            it('uses assert_isFalsey to test', function() {
                expect(function() {
                    assert_isFalsey(testUndefined);
                }).to.not.throw();

                expect(function() {
                    assert_isFalsey(testNumber);
                }).to.throw(TypeError);
            });
        }
    );

    describe('tests the isFalsey function', function() {
        it('uses the isFalsey function', function() {
            expect(isFalsey(testEmptyString)).to.be.true;
            expect(isFalsey(testNumber)).to.be.false;
        });
    });
});
