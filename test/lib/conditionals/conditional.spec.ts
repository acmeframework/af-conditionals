import 'mocha';

import { expect } from 'chai';

import { assert_conditional, Conditional } from '../../../src/lib';

// tslint:disable:no-unused-expression

class TestConditional extends Conditional {
    public test(value: any): boolean {
        return typeof value !== 'undefined';
    }
}

describe('Conditional Class', function() {
    describe('Tests the assert method', function() {
        const tc = new TestConditional();

        expect(tc).to.be.an.instanceof(TestConditional);
        expect(function() {
            assert_conditional('Hello', tc);
        }).to.not.throw();

        expect(function() {
            assert_conditional(undefined, tc);
        }).to.throw(TypeError);
    });
});
