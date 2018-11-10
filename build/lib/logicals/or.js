"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionals_1 = require("../conditionals");
const logical_1 = require("./logical");
class Or extends logical_1.Logical {
    stopTesting(result) {
        return result;
    }
    _test(lhsValue, lhs, rhsValue, rhs) {
        return (conditionals_1.isUsable(lhs) ? lhs.test(lhsValue) : lhsValue)
            || rhs.test(rhsValue);
    }
}
exports.Or = Or;
exports.orInstance = new Or();
function or(operands) {
    return exports.orInstance.test(operands);
}
exports.or = or;
function assert_or(operands, assertMsg = "The operands when OR'd together are not true.") {
    logical_1.assert_logical(operands, exports.orInstance, assertMsg);
}
exports.assert_or = assert_or;
//# sourceMappingURL=or.js.map