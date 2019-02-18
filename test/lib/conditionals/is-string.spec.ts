import { expect } from 'chai';

import { assert_isString, isStringInstance } from '../../../src/lib';
import { TestConditional, testNumber, testString } from './conditional-tests';

const testItemsResultsMap = [
    true,  // string
    true,  // empty string
    false, // number
    false, // empty number
    false, // boolean
    false, // object
    false, // function
    false, // array
    false, // undefined
    false  // null
];

describe('IsString class', function() {

    describe('tests various values to determine if IsString functions '
        + 'properly...',
        function() {
            const tc = new TestConditional(
                'isString',
                isStringInstance,
                testItemsResultsMap
            );
            tc.test();

            it('uses assert_isString to test', function() {
                expect(function() {
                    assert_isString(testString);
                }).to.not.throw();

                expect(function() {
                    assert_isString(testNumber);
                }).to.throw(TypeError);
            });
        }
    );
});
