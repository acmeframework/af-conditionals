"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionals_1 = require("../conditionals");
exports.COMPARE_EQUAL = 0;
exports.COMPARE_GREATER_THAN = 1;
exports.COMPARE_LESS_THAN = -1;
class Comparison {
    constructor(assertMsg = "Comparison did not meet expectations.") {
        this.assertMsg = assertMsg;
    }
    assert(value1, value2, expectedResult) {
        expectedResult = expectedResult || exports.COMPARE_EQUAL;
        if (this.compare(value1, value2) !== expectedResult) {
            throw new TypeError(this.assertMsg);
        }
    }
    compare(value1, value2) {
        if (typeof value1 === typeof value2) {
            if (conditionals_1.isString.test(value1) || conditionals_1.isNumber.test(value1)) {
                return this._compareBasic(value1, value2);
            }
            else if (typeof value1 === "boolean") {
                return this._compareBoolean(value1, value2);
            }
            else if (conditionals_1.isObject.test(value1)) {
                return this._compareObject(value1, value2);
            }
            else if (conditionals_1.isArray.test(value1)) {
                return this._compareArray(value1, value2);
            }
        }
        return this._compareDifferentTypes(value1, value2);
    }
    test(value1, value2, expectedResult) {
        expectedResult = expectedResult || exports.COMPARE_EQUAL;
        return this.compare(value1, value2) === expectedResult;
    }
    _compareArray(value1, value2) {
        if (value1.length === value2.length)
            return exports.COMPARE_EQUAL;
        if (value1.length > value2.length)
            return exports.COMPARE_GREATER_THAN;
        return exports.COMPARE_LESS_THAN;
    }
    _compareBasic(value1, value2) {
        if (value1 === value2)
            return exports.COMPARE_EQUAL;
        if (value1 > value2)
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
//# sourceMappingURL=comparison.js.map