"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionals_1 = require("../conditionals");
exports.COMPARE_EQUAL = 0;
exports.COMPARE_GREATER_THAN = 1;
exports.COMPARE_LESS_THAN = -1;
class Comparison {
    compare(value1, value2, strict = true) {
        if (typeof value1 === typeof value2) {
            if (conditionals_1.isString(value1) || conditionals_1.isNumber(value1)) {
                return this._compareBasic(value1, value2, strict);
            }
            else if (typeof value1 === "boolean") {
                return this._compareBoolean(value1, value2);
            }
            else if (conditionals_1.isObject(value1)) {
                return this._compareObject(value1, value2);
            }
            else if (conditionals_1.isArray(value1)) {
                return this._compareArray(value1, value2);
            }
        }
        return this._compareDifferentTypes(value1, value2);
    }
    test(value1, value2, expectedResult, strict = true) {
        expectedResult = expectedResult || [exports.COMPARE_EQUAL];
        if (!conditionals_1.isArray(expectedResult)) {
            expectedResult = [expectedResult];
        }
        const result = this.compare(value1, value2, strict);
        let expected = false;
        for (const aResult of expectedResult) {
            expected = expected || result === aResult;
            if (expected)
                break;
        }
        return expected;
    }
    _compareArray(value1, value2) {
        if (value1.length === value2.length)
            return exports.COMPARE_EQUAL;
        if (value1.length > value2.length)
            return exports.COMPARE_GREATER_THAN;
        return exports.COMPARE_LESS_THAN;
    }
    _compareBasic(value1, value2, strict) {
        let testValue1 = value1;
        let testValue2 = value2;
        if (conditionals_1.isString(value1) && !strict) {
            testValue1 = value1.toLocaleLowerCase();
            testValue2 = value2.toLocaleLowerCase();
        }
        if (testValue1 === testValue2)
            return exports.COMPARE_EQUAL;
        if (testValue1 > testValue2)
            return exports.COMPARE_GREATER_THAN;
        return exports.COMPARE_LESS_THAN;
    }
    _compareBoolean(value1, value2) {
        if (value1 === value2)
            return exports.COMPARE_EQUAL;
        if (value1)
            return exports.COMPARE_GREATER_THAN;
        return exports.COMPARE_LESS_THAN;
    }
    _compareDifferentTypes(value1, value2) {
        if (value1 == value2)
            return exports.COMPARE_EQUAL;
        if (value1 > value2)
            return exports.COMPARE_GREATER_THAN;
        return exports.COMPARE_LESS_THAN;
    }
    _compareObject(value1, value2) {
        const _value1 = value1.valueOf();
        const _value2 = value2.valueOf();
        if (_value1 === _value2)
            return exports.COMPARE_EQUAL;
        if (_value1 > _value2)
            return exports.COMPARE_GREATER_THAN;
        return exports.COMPARE_LESS_THAN;
    }
}
exports.Comparison = Comparison;
exports.comparisonInstance = new Comparison();
function compare(value1, value2, strict = true) {
    return exports.comparisonInstance.compare(value1, value2, strict);
}
exports.compare = compare;
function assert_comparison(value1, value2, c, expectedResult, assertMsg = "Comparison did not meet expectations.") {
    if (!c.test(value1, value2, expectedResult)) {
        throw new TypeError(assertMsg);
    }
}
exports.assert_comparison = assert_comparison;
//# sourceMappingURL=comparison.js.map