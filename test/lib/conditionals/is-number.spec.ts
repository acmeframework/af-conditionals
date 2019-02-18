import { expect } from 'chai';

import { assert_isNumber, isNumberInstance } from '../../../src/lib';
import { TestConditional, testNumber, testString } from './conditional-tests';

const testItemsResultsMap = [
    false, // string
    false, // empty string
    true,  // number
    true,  // empty number
    false, // boolean
    false, // object
    false, // function
    false, // array
    false, // undefined
    false  // null
];

describe('IsNumber class', function() {

    describe('tests various values to determine if IsNumber functions '
        + 'properly...',
        function() {
            const tc = new TestConditional(
                'isNumber',
                isNumberInstance,
                testItemsResultsMap
            );
            tc.test();

            it('uses assert_isNumber to test', function() {
                expect(function() {
                    assert_isNumber(testNumber);
                }).to.not.throw();

                expect(function() {
                    assert_isNumber(testString);
                }).to.throw(TypeError);
            });
        }
    );
});
