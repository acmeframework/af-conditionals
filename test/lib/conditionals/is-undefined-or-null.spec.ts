import { expect } from 'chai';

import {
    assert_isUndefinedOrNull,
    isUndefinedOrNullInstance,
} from '../../../src/lib';
import {
    TestConditional,
    testNull,
    testString,
    testUndefined,
} from './conditional-tests';

const testItemsResultsMap = [
    false, // string
    false, // empty string
    false, // number
    false, // empty number
    false, // boolean
    false, // object
    false, // function
    false, // array
    true,  // undefined
    true   // null
];

describe('IsUndefinedOrNull class', function() {

    describe('tests various values to determine if IsUndefinedOrNull functions '
        + 'properly...',
        function() {
            const tc = new TestConditional(
                'isUndefinedOrNull',
                isUndefinedOrNullInstance,
                testItemsResultsMap
            );
            tc.test();

            it('uses assert_isUndefinedOrNull to test', function() {
                expect(function() {
                    assert_isUndefinedOrNull(testUndefined);
                }).to.not.throw();

                expect(function() {
                    assert_isUndefinedOrNull(testNull);
                }).to.not.throw();

                expect(function() {
                    assert_isUndefinedOrNull(testString);
                }).to.throw(TypeError);
            });
        }
    );
});
