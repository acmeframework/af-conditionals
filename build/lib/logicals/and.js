"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionals_1 = require("../conditionals");
const logical_1 = require("./logical");
class And extends logical_1.Logical {
    _test(lhsValue, lhs, rhsValue, rhs) {
        return (conditionals_1.isUsable(lhs) ? lhs.test(lhsValue) : lhsValue)
            && rhs.test(rhsValue);
    }
}
exports.And = And;
exports.andInstance = new And();
function and(operands) {
    return exports.andInstance.test(operands);
}
exports.and = and;
function assert_and(operands, assertMsg = "The operands when AND'd together are not true") {
    logical_1.assert_logical(operands, exports.andInstance, assertMsg);
}
exports.assert_and = assert_and;
//# sourceMappingURL=and.js.map